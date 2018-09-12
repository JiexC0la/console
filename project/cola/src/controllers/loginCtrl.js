define(['language'], function(i18n) {
    var loginCtrl = ['$scope', '$state',
        function($scope, $state) {
            $scope.i18n = i18n;

            $scope.userInfo = {
                name: '',
                password: '',
                autoLogin: false,
                loginFn: function() {
                    /*
                    * 表单校验，认证通过后跳转首页
                    */
                    $state.go('manage');
                },
                registerFn: function() {
                    // 注册事件
                }
            };

            // 待续。。。
        }
    ];
    return loginCtrl;
});