/**
    This controller is responsible for the views/settings.html where the user can add/remove courses
    The controller interacts with two services, CourseList and SelectedCourses
    CourseList will pass ALL the courses (from services/allCourses.js) to this controller for manipulation
    SelectedCourses will provide the current semester (from previous view)
    SelectedCourses will also receive the completed courses that the user selected, which is used later on in the code (sequenceCtrl)
**/
//injecting services (CourseList and SelectedCourses) and dependencies ($scope, $location) a.k.a dependency injection
SequenceGenerator.controller('SettingCtrl', ['$scope', '$location', 'CourseList', 'userPreferences', function ($scope, $location, CourseList, userPreferences) {
    //NOTE! Everything with $scope is treated as normal variable, except it interacts with the view! 
    //Everything with $scope should be visible in the view (kinda like a bridge)
    //controller <---> $scope <---> view , it goes both ways

    //*******************ANGULAR UI*******************
    //How the table should initially be sorted, in this case by ID 
    $scope.sortType = 'ID';

    //We want the sorting to be in alphabetic order , so we set the reverse to false
    //Used by first table
    $scope.sortReverse = false;
    //Used by second table (student completed courses)
    $scope.sortReverse2 = false;

    //Holds the search input by the user for table 1 and 2
    $scope.searchCourse = "";
    $scope.searchCourse2 = "";
    //*******************END OF ANGULAR UI*******************

    //$scope.courses contains the list in an array of all courses to be displayed in the view , provided by the CourseList service 
    $scope.courses = CourseList.allCourses;

    //$scope.semester holds the current semester, to be displayed next to generate button in the view.
    // The semester is provided by the SelectedCourses service
    $scope.semester;
    if (userPreferences.semester == 1)
        $scope.semester = 'Fall';
    else if (userPreferences.semester == 2)
        $scope.semester = "Winter";
    else
        $scope.semester = "Summer";

    //STUDENT COMPLETED COURSES, initially empty until manually added in view
    $scope.courseList = [];

    //Stores and displays total credits based on completed courses
    $scope.totalCredits = 0;

    //This array contains the ID of completed courses
    var courseID = ['ENCS 272'];

    /**
        Executes when the user clicks the 'add' button in the view.
        A course (from the $scope.courses array) parameter is passed to the function.
        Once the user adds, the course is added to the $scope.courseList array,
        the array contains the completed courses of the student.
        Furthermore, the number of credits are incremented and stored in $scope.totalCredits
        Finally, the course is removed from the original $scope.courses array
    **/
    $scope.addCourse = function (course) {
        //add to student course array
        $scope.courseList.push(course)
            //add to completed course array (only the ID)
        courseID.push(course.ID)
            //increment total credits
        $scope.totalCredits += course.CREDIT;
        //remove from $scope.courses
        $scope.courses.splice($scope.courses.indexOf(course), 1);
    };
    /**
        Executes when the user clicks the 'remove' button in the view.
        A course (from the $scope.courseList array) parameter is passed to the function.
        Once the user removes, the course is added to the $scope.courses array,
        the array contains the available courses.
        Furthermore, the number of credits are decremented and stored in $scope.totalCredits
        Finally, the course is removed from the original $scope.courseList array
    **/
    $scope.deleteCourse = function (course) {
        //add to available courses
        $scope.courses.push(course)
            //decrement credits
        $scope.totalCredits -= course.CREDIT;
        //remove from array
        courseID.splice(courseID.indexOf(course.ID), 1);
        //remove from array
        $scope.courseList.splice($scope.courseList.indexOf(course), 1);
    };
    //Boolean that controls the submit button , false = can not go to next page
    //True = can go to next page
    var ready = false;

    //This function verifies if all pre-reqs are met and warns the user if not by setting ready to false
    $scope.verify = function () {
            //First , we loop every element in the $scope.courseList array (completed courses)
            for (var i = 0; i < $scope.courseList.length; i++) {
                //we check if the course has a preReq present
                if ($scope.courseList[i].PREREQ !== "") {
                    //we create a new array , and insert the pre-reqs of the course as elements
                    var preReqArray = $scope.courseList[i].PREREQ.split(",");
                    //We loop through the pre-req array , and check if pre-reqs are completed.
                    //Pre-reqs are completed if they are contained in courseID array
                    for (var j = 0; j < preReqArray.length; j++) {
                        //if they are not found, then a message is returned to the view and ready is set to false
                        if (courseID.indexOf(preReqArray[j]) < 0) {
                            ready = false;
                            return ("You are missing " + preReqArray[j] + " as a Pre Req for " + $scope.courseList[i].ID);
                        }
                    }
                }
            }
            //If the function did not return previously, it means the pre-reqs are validated and the user may proceed
            ready = true;
            return "Ready to Generate Sequence starting from " + $scope.semester
        }
        /**
        This function executes once the user clicks on the 'generate' button in the view.
        The user may only proceed if ready is = true (no pre-req errors).
        Finally, the completed courses are saved to SelectedCourses as well as the total number of credits
        **/
    $scope.generate = function () {
        //only if all pre-reqs are met
        if (ready) {
            $scope.$watch('courseID', function () {
                //save completed courses to the service ( will be retrieved later)
                userPreferences.courseID = courseID;
                //save total credits also
                userPreferences.credits = $scope.totalCredits;
            });
            $location.path("/sequence");
        }
    }
}]);