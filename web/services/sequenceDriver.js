SequenceGenerator.service('sequenceDriver', ['WebSequence', 'SelectedCourses', 'sequenceAlgorithms', function (WebSequence, SelectedCourses, sequenceAlgorithms) {
    //UI stuff
    var sortType = 'SEMESTER';

    //Getting the entire sequence of the web & app using the 'WebSequence' service , stored in an array of objects.
    var webSequence = WebSequence.sequence;
    //Getting the completed courses selected by the user using the 'SelectedCourses' service. Stored in an array of strings
    var completedCourses = SelectedCourses.courseID;

    //uncomment below for hardcoded completed courses , for testing purposes (Make sure pre-reqs make sense)!
    //    var completedCourses = ["ENCS 272"];

    //eligibleCourses is an array that will hold a list of course objects that are eligible based on the semester and pre-reqs.
    //The array will be populated in findEligibleCourses() function below
    var eligibleCourses = [];

    //final sequence to be printed
    var finalSequence = [];

    //total credits
    var currentCredits = SelectedCourses.credits;

    //uncomment for testing purposes
    //    currentCredits = 0;

    //The semester counter is used for UI purposes
    //EX: Semester 1 , Semester 2 , Semester 'semesterCounter'
    var semesterCounter = 1;

    /**
        Stores the current semester, for logic purposes
        1 = fall
        2 = winter
        3 = summer first
        4 = summer second
    **/
    var semester = SelectedCourses.semester;
    var pace = SelectedCourses.pace;

    //testing purposes
    //    var semester = 2;
    //    console.log(semester);

    /** First, we update the web sequence by removing completed courses for performance.
        Ex: If user completed SOEN 228,then SOEN 228 will be removed/sliced from the sequence since it is completed.
        More detail on updateSequence function in sequenceAlgorithm service.
        Input -> completedCourses X webSequence 
        Output -> Spliced webSequence
        Note: Parameters are passed by reference
    **/
    sequenceAlgorithms.updateSequence(completedCourses, webSequence);


    /**
        ***IMPROVEMENT REQUIRED***
        BalanceCourses determines the maximum number of courses in a semester.
        By Default, it is 5, however under some conditions, it can be 4.
        More detail can be found in the optimizeSequence function in 'sequenceAlgorithms' service.
        Input -> length of the webSequence
        Ouput -> number of courses per semester (maximum)

    **/
    var balanceCourses = sequenceAlgorithms.optimizeSequence(webSequence.length);
    // console.log(balanceCourses);

    //Start executing the function right away to fill in the eligible courses
    findEligibleCourses();

    /**
       ***CAN BE IMPROVED***
       The main purpose of this function is to populate the eligibleCourses array defined above with eligible courses.
       Courses are eligible based on many conditions.
       This function covers the following conditions (in order):
            1. Check if course has NO pre-reqs/Co-Reqs AND if it is available in current semester
                1.1. If passed, the course is eligible
            2. If the course has pre/co reqs, we apply more strict conditions via 'isEligible' in 'sequenceAlgorithms' service.
                2.2. Function isEligible:
                     More detail for isEligible function is found in sequenceAlgo service.
                     Input -> array of completed courses X course to verify X current semester X curent credits
                     Output -> True or false
            3. If the function returned true:
                3.1. The course has higher priority if it is offered only in one semester.
                3.2. The course is pushed in the eligibleCourses array.
                3.3. The eligibleCourses array is sorted by priority for later use.
            4. Repeat for every course in the sequence           
    **/
    function findEligibleCourses() {
        eligibleCourses = [];
        //See point 1 above
        for (var i = 0; i < webSequence.length; i++) {
            if (webSequence[i].PREREQ.length === 0 && webSequence[i].COREQ.length === 0 && webSequence[i].AVAILABLE.indexOf(semester) > 0) {
                eligibleCourses.push(webSequence[i]);
                //continue the loop since no point in going to next if statement.  
                continue;
            }
            //See point 2
            if (sequenceAlgorithms.isEligible(completedCourses, webSequence[i], semester, currentCredits)) {
                //If the course is only offered in one semester ,priority is higher
                if (webSequence[i].AVAILABLE.length == 1)
                    webSequence[i].PRIORITY = webSequence[i].PRIORITY + 0.1;
                //push to array
                eligibleCourses.push(webSequence[i]);
            }
        };
        //sort the array based on priority using javascript built-in sorting
        eligibleCourses.sort(function (a, b) {
            return b.PRIORITY - a.PRIORITY;
        });
    };

    //currentSemester is used for UI purposes. To be displayed in view.
    var currentSemester = "SEMESTER 1";

    /**
        The following while loop will run constantly until there are no more courses to fill.
        Courses are filled in the final sequence via the fillSemester() function (more detail below).
        Depending on certain conditions, the semester is incremented or reset:
            1. If the semester is not 3 (summer first half)
                1.1 Increment the semesterCounter and change the current semester to be displayed
            2. If the semester is 4 (summer 2nd half) or the semester is 2 (winter AND the pace is == 0 (relaxed))
                2.1 Reset the semester back to 1 (fall)
                2.2 OR else, increment the semester
            3. Update the sequence
            4. findEligibleCourses() for new semester
        It will keep calling findEligibleCourses() for the given semester.

    **/
    while (fillSemester() === true) {
        //-------UI FOR DISPLAYED SEMESTER------
        if (semester !== 3) {
            semesterCounter++;
            if (semesterCounter < 10)
                currentSemester = (currentSemester.slice(0, -1) + semesterCounter);
            else
                currentSemester = (currentSemester.slice(0, -1) + "x" + semesterCounter);
        }
        //------END UI-----
        //See point 2 above
        if (semester == 4 || (semester == 2 && pace == 0))
            semester = 1;
        else
            semester++
            //Point 3 above
            sequenceAlgorithms.updateSequence(completedCourses, webSequence);
        //Point 4 above
        findEligibleCourses();
    }


    /**
        Commenting in progress! 
    **/

    function fillSemester() {
        var nbCourseSemester = balanceCourses;
        var semesterCredits = 0;
        if (semester == 3) {
            if (eligibleCourses.length < 3) {
                console.log(nbCourseSemester + " before")
                nbCourseSemester = eligibleCourses.length;
                console.log(nbCourseSemester + " after")
            } else
                nbCourseSemester = 3;
        } else if (semester == 4) {
            if (eligibleCourses.length < 2)
                nbCourseSemester = eligibleCourses.length;
            else
                nbCourseSemester = 2;
        } else if (eligibleCourses.length < 5) {
            nbCourseSemester = eligibleCourses.length;
            if (nbCourseSemester === 0)
                return false;
        }
        if (nbCourseSemester != 0) {
            for (var i = 0; i < nbCourseSemester; i++) {
                eligibleCourses[i].SEMESTER = currentSemester;
                finalSequence.push(eligibleCourses[i]);
                completedCourses.push(eligibleCourses[i].ID);
                semesterCredits += eligibleCourses[i].CREDIT;
            }
        }
        currentCredits += semesterCredits;
        for (var i = nbCourseSemester; i < eligibleCourses.length; i++) {
            eligibleCourses[i].PRIORITY = eligibleCourses[i].PRIORITY + 0.1;

        }

        return true;
    }

    this.getFinalSequence = function () {
        console.log(finalSequence);
        return finalSequence;
    }
    this.getCredits = function () {
        return currentCredits;
    }

}]);