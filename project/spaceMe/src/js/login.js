$(document).ready(function() {
    // 使用vm代替window，避免污染全局变量
    var vm = window.vm = {};

    // 登录
    vm.submit = function () {
        // 请求前终止上一次请求
        if (vm.loginPromise) {
            vm.loginPromise.abort();
        }
        // 登录认证
        vm.loginPromise = ajaxService.authLogin({
            name: vm.nameModel.value,
            pwd: vm.pwdModel.value
        });
        vm.loginPromise.then(function (data) {
            if (data && data.isValid) {
                // 认证成功，跳转主页面
            } else {
                tipMsgService.showError('用户名或密码不正确，请重新输入。');
            }
        }, function () {
            tipMsgService.showError('系统繁忙，请稍后重试！');
        });
    };

    // 注册
    vm.register = function () {

    };

    /*
     * 用户名输入校验
     *     1、不能为空
     *     2、只能包含大小写字母、数字、中横线、下划线
     *     3、4-12位
     */
    vm.nameModel = {
        value: '',
        // 输入值改变时触发
        oninput: function () {
            var $dom = $('#login_name')
            var msg = '';
            var reg = /^[A-Za-z0-9-_]$/;
            var value = $dom.val();
            if (!value) {
                msg = '输入不能为空。'
            } else if (!reg.test(value)) {
                msg = '只能包含字母、数字、中横线或下划线。'
            } else if (value.length < 4) {
                msg = '长度不能小于4位。'
            } else if (value.length > 12) {
                msg = '长度不能大于12位。'
            }
            tipMsgService.inputTip(msg, $dom);
        },
        blur: function () {
            vm.nameModel.value = $('#login_name').val();
        }
    };

    /*
     * 密码输入校验
     *     1、不能为空
     *     2、不能包含特殊字符 . / < > = # $
     *     3、4-12位
     */
    vm.pwdModel = {
        value: '',
        oninput: function () {

        },
        blur: function () {
            vm.pwdModel.value = $('#login_name').val();
        }
    }

    /*
     * 确认密码输入校验
     *     1、是否和原密码相同
     */
    vm.pwdRepeatModel = {
        value: '',
        blur: function () {

        }
    }

});