/*
* 项目入口文件
*/
require.config({
    // 基础路径
    baseUrl: './',

    // 其他依赖模块
    paths: {
        'ui.route': 'lib/angular-ui-router',
        'angular': 'lib/angular',
        'jquery': 'lib/jquery-3.1.1',
        'bootstrap': 'lib/bootstrap',
        'app': 'src/app',
        'route': 'src/route/route',
        'language': 'src/i18n/zh'
    },

    shim: {
        // 需要导出一个名称为 angular 的全局变量， 否则无法使用
        'angular' : { exports: 'angular' },
        // ui.route模块依赖angular
        'ui.route': {
            deps: ['angular']
        },
        // bootstrap模块依赖jquery
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery', 'ui.route', 'route', 'bootstrap'], function (app) {
    $(function () {
        angular.bootstrap(document, [app.name]);
    });
});