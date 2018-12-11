/*
 * 提示信息
 */
var tipMsgService = window.tipMsgService = {};

tipMsgService = {
    // 定时器，5秒清除提示信息
    tipTimer: 0,
    // 错误提示
    showError: function (msg) {
        this.createTip(msg);
    },
    // 成功提示
    showSucc: function (msg) {
        this.createTip(msg, true);
    },
    /*
     * 输入告警提示
     *     msg: 告警提示
     *     dom: 当前元素（通过当前元素计算提示位置）
     */
    inputTip: function (msg, dom) {
        var $preDiv = $('#tipInputModel');
        if ($preDiv && $preDiv.length) {
            if (!msg) {
                // 校验通过，清除提示
                $preDiv.remove();
            } else {
                // 校验不通过，更改提示信息
                $preDiv.text(msg);
            }
            return;
        }
        var $div = $('<div id="tipInputModel">' + msg + '</div>');
        $div.addClass('tip-valid tip-valid-left')
        // 当前元素高度
        var h = dom.height();
        // 当前元素宽度
        var w = dom.width();
        // 当前元素左绝对定位
        var aL = dom.offset().left;
        // 当前元素上绝对定位
        var aT = dom.offset().top;
        // 计算tip提示的绝对定位
        var tipLeft = aL + w + 15;
        $div.offset({
            left: tipLeft,
            top: aT
        });
        // 将提示模块添加到页面
        $div.appendTo('body');
    },
    /*
     * 创建任务提示
     * @params 
     *      msg:  提示信息
     *      flag: true--成功提示   false--失败提示
     */
    createTip: function (msg, flag) {
        var _this = this;
        // 检查提示信息是否存在，若存在，则删除上一个提示
        var $preDiv = $('#tipModel');
        if ($preDiv && $preDiv.length) {
            $preDiv.remove();
            // 取消上一个定时器
            _this.tipTimer && clearTimeout(_this.tipTimer);
        }
        // 创建提示模块
        var $div = $('<div id="tipModel" class="tip-div">' + msg + '</div>');
        // 添加提示样式
        if (flag) {
            $div.addClass('tip-succ');
        } else {
            $div.addClass('tip-err');
        }
        // 将提示模块添加到页面
        $div.appendTo('body');

        // 5秒后清除提示信息
        _this.tipTimer = setTimeout(function () {
            $('#tipModel').remove();
            clearTimeout(_this.tipTimer);
        }, 5 * 1000);
    }
};

