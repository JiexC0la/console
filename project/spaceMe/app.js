
var url = require('url');
// 引用文件读取模块
var fs = require('fs');
var path = require('path');
// 引入mime模块，定义文档类型
var mime=require('mime');
var express = require('express');
// var connect = require('connect');

var app = express();

var http = require('http').Server(app);
app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '\/' + 'index.html');
});
// var autoresponse = require('autoresponse')({
// 	watch: true,
// 	loglevel: 'info'
// });
// app.use(autoresponse)me
// app.use(connect.static('./src'));

// 创建服务器
// var httpServer = http.createServer(function (request, response) {
// 	var pathname = url.parse(request.url).pathname;
// 	pathname = decodeURI(pathname);
// 	var ext = path.extname(pathname);
// 	ext = ext ? ext.slice(1) : 'unknow';

// 	fs.readFile(pathname.substr(1), function (err, file) {
// 		if (err) {
// 			console.log(err);
// 			response.writeHead(404, {
//                 'Content-Type': 'text/plain'
//             });
// 		} else {
//             response.writeHead(200, {
//                 'Content-Type': mime.lookup(pathname)
//             });
//             //解释图片时，格式必须为 binary 二进制，否则会出错
//             var content = fs.readFileSync(pathname.substr(1), 'binary');
//             response.write(content, 'binary');
// 		}
// 		response.end();
// 	});
// });
var port = 1234;

http.listen(port, function () {

	console.log('Http server started on port: %d ...', port);
});