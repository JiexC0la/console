
var url = require('url');
// 引用文件读取模块
var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();

var http = require('http').Server(app);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '\/' + 'index.html');
});

// 自动生成mock数据
var autoresponse = require('autoresponse')({
	watch: true,
	loglevel: 'info',
	get: true,
	put: true,
	post: true,
	delete: true
});
app.use(autoresponse);

var port = 8080;

http.listen(port, function () {
	console.log('Http server started on port: %d ...', port);
});