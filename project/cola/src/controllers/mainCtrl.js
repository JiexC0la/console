/**
 * 顶部和底部公共部分控制文件
 */
define([], function () {
	var ctrl = function ($scope) {

		// 顶部公共模板
		$scope.header = {
			url: 'src/views/Header.html'
		};

		// 底部公共模板
		$scope.footer = {
			url: 'src/views/Footer.html'
		};
	};

	ctrl.$inject = ['$scope'];

	return ctrl;
});