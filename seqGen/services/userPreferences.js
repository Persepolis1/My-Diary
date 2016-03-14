/**
    The SelectedCourses service.
    Data passed between controllers go through this service
**/
SequenceGenerator.service('userPreferences', function () {
    //Completed courses, by ID. Modified by 'settingCtrl' and read by 'SequenceCtrl'
    this.courseID = [];
    //Completed credits. Modified by 'settingCtrl' and read by 'SequenceCtrl'
    this.credits = 0;
    //The current semester , modified by 'homeCtrl' and read by 'settingCtrl' and 'sequenceCtrl'
    this.semester = '';
    //Assigns correct semester based on user input
    this.selectedSemester = function (semester) {
            if (semester.indexOf('Fall') > 0)
                this.semester = 1;
            else if (semester.indexOf('Winter') > 0)
                this.semester = 2;
            else
                this.semester = 3;
        }
        //determines the speed attribute based on user input
    this.pace = 0;
    this.speed = function (input) {
        if (input.charAt(0) == 'E')
            this.pace = 1; //fast
        else
            this.pace = 0; //slow

    }

});