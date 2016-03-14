// ROUTES
SequenceGenerator.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/settings', {
            templateUrl: 'views/settings.html',
            controller: 'SettingCtrl'
        })
        .when('/sequence', {
            templateUrl: 'views/sequence.html',
            controller: 'SequenceCtrl'
        })
});