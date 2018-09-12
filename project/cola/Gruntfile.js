// 每个Gruntfile文件都遵循以下格式
module.export = function (grunt) {
	// 初始化配置
	grunt.initConfig({
		uglify: {

		}
	});

	// 代码压缩插件grunt-contrib-uglify
	// 已经在package.json中依赖的插件，可以在Gruntfile文件中直接使用
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 自定义执行任务
	grunt.registerTask('default', ['uglify']);
};