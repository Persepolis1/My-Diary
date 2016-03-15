/**
Controller for the homepage or 'home.html' 
This controller manages buttons and passes the data (user preferences) to the 'SelectedCourses' service 
Once submitted , the controller will route to the next view 'Setting.html' controlled by the SettingCtrl
**/
SequenceGenerator.controller('HomeCtrl', ['$scope', '$location', 'userPreferences', function ($scope, $location, userPreferences) {
    //Initial values of text boxes
    $scope.option = 'Select your path';
    $scope.studentStatus = 'What kind of student are you?';
    $scope.startingSemester = 'My next semester will start in...';
    $scope.pace = 'How fast?';

    /**
    What happens when user submits?
    Makes sure the user selected a starting semester (fall,winter,summer) or else alert them
    Also, makes sure a speed is chosen (fast, relaxed).
    
    The data is then sent and processed to a service (kinda like a global object) called "SelectedCourses" (see services/sequenceServices.js)
    **/
    $scope.submit = function () {
        if ($scope.startingSemester.indexOf('start') > 0) {

            alert('Please select a term!')
            return false;
        }
        userPreferences.selectedSemester($scope.startingSemester)
        userPreferences.speed($scope.pace);
        $location.path("/settings");
    }


}]);