// 引入fs
const fs = require('fs');
const path = require('path');

// 打包文件绝对路径
const distPath = path.join(__dirname, 'dist');
const srcPath = path.join(__dirname, 'src');

// 判断dist目录是否存在
fs.exists(distPath, exist => {
    // 如果存在，则删除dist目录
    if (exist) {
        deleteFolderRecursive(distPath);
        buildDist();
    } else {
        buildDist();
    }
});

// 生成目标文件
function buildDist() {
    // 新建一个dist目录
    fs.mkdir('dist', err => {
        if (err) {
            console.log('创建目录dist失败：' + e);
            return;
        }
        // 读取src目录
        fs.readdir(srcPath, (e, files) => {
            if (e) {
                console.log('读取目录' + srcPath + '失败：' + e);
            } else {
                // 存储文件内容
                let contents = '';
                // 变量src目录文件
                files.forEach(file => {
                    let filePath = path.join(srcPath, file);
                    let content = fs.readFileSync(filePath);
                    contents += content.toString() + '\n';
                });
                // 读取根目录index.js
                let feFrameContent = fs.readFileSync('./index.js');
                // 将内容包含在匿名函数中，避免污染全局window对象
                fs.writeFileSync('./dist/FeFrame.js',
                    '(function () {\n\n'
                    + contents
                    + feFrameContent
                    + '\n})()');
            }
        });
    });
}

// 同步删除文件夹
function deleteFolderRecursive(path) {
    // 判断文件夹是否存在
    if(fs.existsSync(path)) {
        // 遍历子层目录
        fs.readdirSync(path).forEach(file => {
            // 当前子层文件路径
            let curPath = path + '/' + file;
            // 如果是否文件夹，继续循环
            if(fs.statSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                // 删除文件
                fs.unlinkSync(curPath);
            }
        });
        // 删除空文件夹
        fs.rmdirSync(path);
    }
}