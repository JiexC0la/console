var FeArr = function () {
    this.description = '数组函数总结';
}

/**
 * 检测是否为数组对象
 */
FeArr.prototype.isArr = function (val) {
    // 支持isArray方法
    if (Array.isArray(val)) {
        return true;
    } else {
        // 兼容低版本浏览器
        return Object.prototype.toString.apply(val) === '[object Array]'
    }
}

/**
 * 字符型数组去重
 */
FeArr.prototype.rmArrRepeatStr = function (arr) {
    // 判断顺数和倒数的下标index是否相等
    return arr.filter(function (item, index) {
        return index === arr.lastIndexOf(item);
    });
}

/**
 * 对象型数组去重
 * @param 
 *      arr 传入的数组
 *      id 对象的标识
 */
FeArr.prototype.rmArrRepeatObj = (arr, id) {
    var newArr = [];
    // 利用对象访问属性的方式，判断键值对是否存在
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        // 如果重复，则obj[arr[i][id]]已被赋值为true
        if (!obj[arr[i][id]]) {
            newArr.push(arr[i]);
            obj[arr[i][id]] = true;
        }
    }
    return newArr;
}