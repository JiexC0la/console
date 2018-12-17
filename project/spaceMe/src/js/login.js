$(document).ready(function() {
    // 使用vm代替window，避免污染全局变量
    var vm = window.vm = {};

    // 登录
    vm.submit = function () {
        var $dom = $('#confirm_pwd').parent();
        // 根据是否含有none样式，判断是注册页面还是登录页面
        var hasNone = $dom.hasClass('none');
        // 用户登录
        if (hasNone) {
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
                    window.location.href = './src/html/main/manage.html';
                } else {
                    tipMsgService.showError('用户名或密码不正确，请重新输入。');
                }
            }, function () {
                tipMsgService.showError('系统繁忙，请稍后重试！');
            });
        } else {
            // 用户注册
            // 请求前终止上一次请求
            if (vm.registerPromise) {
                vm.registerPromise.abort();
            }
            // 登录认证
            vm.registerPromise = ajaxService.userRegister({
                name: vm.nameModel.value,
                pwd: vm.pwdModel.value,
                confirmPwd: vm.pwdRepeatModel.value
            });
            vm.registerPromise.then(function () {
                // 注册成功，跳转下一页
            }, function () {
                tipMsgService.showError('系统繁忙，请稍后重试！');
            });
        }
    };

    // 注册
    vm.register = function () {
        vm.reset();
        var $dom = $('#confirm_pwd').parent();
        // 根据是否含有none样式，判断是注册页面还是登录页面
        var hasNone = $dom.hasClass('none');
        if (hasNone) {
            // 显示确认密码
            $dom.removeClass('none');
            // 更改按钮提示为确认、取消
            $('#login_submit').val('确认');
            $('#login_register').val('取消');
        } else {
            // 隐藏确认密码
            $dom.addClass('none');
            // 更改按钮提示为登录、注册
            $('#login_submit').val('登录');
            $('#login_register').val('注册');
        }
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
            var reg = /^[A-Za-z0-9\-\_]+$/;
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
            var $dom = $('#login_pwd');
            var msg = '';
            var reg = /^[^\.\/\<\>\=\#\$]*$/;
            var value = $dom.val();
            if (!value) {
                msg = '输入不能为空。'
            } else if (!reg.test(value)) {
                msg = '不能包含特殊字符 . / < > = # $'
            } else if (value.length < 4) {
                msg = '长度不能小于4位。'
            } else if (value.length > 12) {
                msg = '长度不能大于12位。'
            }
            tipMsgService.inputTip(msg, $dom);
        },
        blur: function () {
            vm.pwdModel.value = $('#login_pwd').val();
        }
    }

    /*
     * 确认密码输入校验
     *     1、是否和原密码相同
     */
    vm.pwdRepeatModel = {
        value: '',
        oninput: function () {
            var $dom = $('#confirm_pwd');
            var value = $dom.val();
            var pwd = $('#login_pwd').val();
            var msg = '';
            if (value !== pwd) {
                msg = '确认密码和原密码不匹配。'
            }
            tipMsgService.inputTip(msg, $dom);
        },
        blur: function () {
            vm.pwdRepeatModel.value = $('#confirm_pwd').val();
        }
    }

    // 清空输入框和提示
    vm.reset = function () {
        $('#login_name').val('');
        vm.nameModel.value = '';
        $('#login_pwd').val('');
        vm.pwdModel.value = '';
        $('#confirm_pwd').val('');
        vm.pwdRepeatModel.value = '';
        if ($('#tipInputModel').length) {
            $('#tipInputModel').remove();
        }
    }
});