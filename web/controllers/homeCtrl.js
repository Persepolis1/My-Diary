/**
Controller for the homepage or 'home.html' 
This controller manages buttons and passes the data (user preferences) to the 'SelectedCourses' service 
Once submitted , the controller will route to the next view 'Setting.html' controlled by the SettingCtrl
**/
SequenceGenerator.controller('HomeCtrl', ['$scope', '$location', 'SelectedCourses', function ($scope, $location, SelectedCourses) {
    //Initial values of text boxes
    $scope.radioModel = 'Select your path';
    $scope.radioModel1 = 'What kind of student are you?';
    $scope.radioModel2 = 'My next semester will start in...';
    $scope.radioModel3 = 'How fast?';

    /**
    What happens when user submits?
    Makes sure the user selected a starting semester (fall,winter,summer) or else alert them
    Also, makes sure a speed is chosen (fast, relaxed).
    
    The data is then sent and processed to a service (kinda like a global object) called "SelectedCourses" (see services/sequenceServices.js)
    **/
    $scope.submit = function () {
        if ($scope.radioModel2.indexOf('start') > 0) {

            alert('Please select a term!')
            return false;
        }
        SelectedCourses.selectedSemester($scope.radioModel2)
        SelectedCourses.speed($scope.radioModel3);
        $location.path("/settings");
    }


}]);