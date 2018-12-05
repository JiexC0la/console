$(document).ready(function() {
	var initParams = {};
	// 用户信息校验
	$('#login_submit').click(function() {
		// 用户名
		initParams.name = $('#login_name').val();
		// 密码
		initParams.pwd = $('#login_pwd').val();
		$.ajax({
		    url: '/v1/login/checkName',
		    type: 'get',
		    dataType: 'json'
		}).done(function(data, status, xhr) {
		    console.log(JSON.stringify(data, null, 4));
		});
	});
});