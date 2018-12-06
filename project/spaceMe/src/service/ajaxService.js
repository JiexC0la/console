/*
 * ajax请求汇总
 */
var ajaxService = window.ajaxService = {};

ajaxService = {
    // 请求封装
    myAjax: function (config) {
        var ajax = $.ajax({
            url: config.url,
            type: config.type,
            data: config.data || '',
        });
        return ajax;
    },
    // 登录用户信息认证
    authLogin: function (params) {
        var config = {
            type: 'post',
            url: '/v1/login/checkName',
            data: params
        };
        var promise = this.myAjax(config);
        return promise;
    }
};
