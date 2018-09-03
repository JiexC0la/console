define(['app'], function (app) {
    app.config(function($controllerProvider, $compileProvider, $filterProvider, $provide,
        $stateProvider, $urlRouterProvider) {
        app.register = {
            //得到$controllerProvider的引用
            controller : $controllerProvider.register,
            //同样的。这里也可以保存directive / filter /service 的引用
            directive : $compileProvider.register,
            filter : $filterProvider.register,
            service : $provide.service,
            factory : $provide.factory
        };

        // 重定向路由
        $urlRouterProvider.otherwise('/login');

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: './src/views/Login.html',
            controller: 'loginCtrl',
            resolve: {
                delay: ctrlRegister('loginCtrl', ['./src/controllers/loginCtrl.js'])
            }
        }).state('manage', {
            url: '/manage/photo',
            views: {
                '': {
                    templateUrl: './src/views/Manage.html'
                },
                'leftNav@manage': {
                    templateUrl: './src/views/LeftNav.html'
                },
                'mainContent@manage': {
                    templateUrl: './src/views/MainPhoto.html'
                }
            }
        });

        function ctrlRegister (ctrlName, ctrlModule) {
            return function ($q) {
                var defer = $q.defer();
                require(ctrlModule, function (controller) {
                    $controllerProvider.register(ctrlName, controller);
                    defer.resolve();
                });
                return defer.promise;
            }
        }

    });
});