define(['angular',
	'src/controllers/mainCtrl'
], function (angular, mainCtrl) {
    var app = angular.module('cola', ['ui.router']);

    app.controller('mainCtrl', mainCtrl);
    
    return app;
});