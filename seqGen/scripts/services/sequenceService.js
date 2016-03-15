
/**
    Commenting in progress
**/
SequenceGenerator.service('sequenceAlgorithms', function () {
    this.isEligible = function (courseID, course, semester, completedCredits) {
        if (course.OPTION !== null && completedCredits < 60)
            return false;
        if (course.ID == 'ENCS 282' && completedCredits < 12) {
            return false;
        }
        if (course.ID == "SOEN 490" && completedCredits < 85)
            return false;
        var currentSemester = semester;
        if (course.AVAILABLE.indexOf(currentSemester) < 0)
            return false;
        if (course.PREREQ.length !== 0) {
            var preReqs = course.PREREQ.split(",");

            for (var i = 0; i < preReqs.length; i++) {
                if (courseID.indexOf(preReqs[i]) < 0) {
                    return false;
                }
            }
        }
        if (course.COREQ.length !== 0) {
            var coReqs = course.COREQ.split(",");
            var counter = 0;
            for (var i = 0; i < coReqs.length; i++) {
                if (courseID.indexOf(coReqs[i].substring(1, coReqs[i].length)) >= 0) {
                    counter++;
                    continue;

                } else if (coReqs[i].substring(0, 1) === "0") {
                    continue
                }
                if (coReqs[i].substring(0, 1) != currentSemester) {
                    return false;
                }

            }
            if (counter === coReqs.length) {
                return true;
            }
        }
        if (course.PRECOREQ) {
            var preCoReqs = course.PRECOREQ.split(",");
            for (var j = 0; j < preCoReqs.length; j++) {
                if (courseID.indexOf(preCoReqs[j]) < 0) {
                    return false;
                }
            }
        }
        return true;
    }

    this.updateSequence = function (completedCourses, webSequence) {
        for (var i = 0; i < completedCourses.length; i++) {
            for (var j = 0; j < webSequence.length; j++) {
                if (completedCourses[i] === webSequence[j].ID)
                    webSequence.splice(j, 1);
            };
        };
    }

    this.optimizeSequence = function (webSequence) {
        if ((webSequence % 2 == 0 || webSequence % 3 == 0 || isPrime(webSequence)) && webSequence % 5 !== 0 && webSequence < 30)
            return 4;
        return 5;
    }

    function isPrime(number) {
        var start = 2;
        while (start <= Math.sqrt(number)) {
            if (number % start++ < 1) return false;
        }
        return number > 1;
    }



});
