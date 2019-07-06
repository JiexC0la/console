var FeFrame = function () {
    this.version = '1.0.0';
    this.author = 'JiexC0la';
    this.description = '日常函数总结';

    // 排序汇总
    this.FeSort = new FeSort();
    // 数组汇总
    this.FeArr = new FeArr();
}

// 初始化将FeFrame挂载到window对象
window.FeFrame = new FeFrame();
