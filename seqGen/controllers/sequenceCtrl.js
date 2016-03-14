/**
    The most important controller that controls the sequence.html view.
    Commenting in progress


**/
SequenceGenerator.controller('SequenceCtrl', ['$scope', 'sequenceDriver', function ($scope, sequenceDriver) {

    $scope.finalSequence = sequenceDriver.getFinalSequence();
    $scope.currentCredits = sequenceDriver.getCredits();

}]);