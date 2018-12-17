/**
 * @author: jiex
 * @version: 1.0
 * @description: a summary of commonly used functions
 */

/**
 * @DateTime 2018-09-03T20:51:15+0800
 * @param
 *      arr: 需要排序的数组
 *      a: 第一个参数
 *      b: 第二个参数
 * @return   [] 排序后的数组
 * @description  字符串排序：123aAbBcC
 *      1：比较字符串长度，循环长度较小的参数
 *      2：比较字符转小写是否相等
 *              相等：比较自身是否相等
 *                      自身相等：循环下一位字符转小写是否相等
 *                      自身不等：按照ASCII码反向比较（ASCII码大写字母在小写字母前面）
 *              不相等：非转小写相同字母，按照转小写 ASCII码比较
 *      3：循环到最后，都没区别，即a包含b或者b包含a，长度小的排在前面
 */
function sortArrIn_aToA(arr) {
    arr.sort(function (a, b) {
        // 循环长度较小的参数
        var temp = a.length < b.length ? a : b;
        for (var i = 0; i < temp.length; i++) {
            // 比较字母转小写是否相等
            var charA = a[i].toLowerCase();
            var charB = b[i].toLowerCase();
            if (charA === charB) {
                // 比较字符本身是否相等
                if (a[i] !== b[i]) {
                    return a[i] < b[i];
                }
            } else {
                return charA > charB;
            }
        }
        // 包含关系时，比较长度
        return a.length > b.length;
    });
    return arr;
}

/**
 * 冒泡排序算法
 * @DateTime 2018-12-17T20:23:30+0800
 * @param                 
 *      arr： 需要排序的数组
 *      num： 第几轮排序
 * @return   {[type]}   排序后的数组
 */
function bubbleSort(arr, num) {
    // 默认循环至最后一轮
    var loopNum = num ? num : arr.length;
    var i = arr.length;
    var loop = 0;
    var temp;
    while (i > 0 && loop < loopNum) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i--;
        loop++;
    }
    return arr;
}

