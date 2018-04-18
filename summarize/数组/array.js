/*
* 数组的创建
*/
var arr1 = new Array();
var arr2 = new Array(3);
var arr3 = new Array(1, 2, 3);

/*
* Array() 和 new Array() 有什么区别？
* 当数组作为函数调用而不是构造函数调用时，它会创建并初始化一个新的数组对象，此时Array()和new Array()是相同的。
* *** 什么是构造函数调用？
* *** 通过new运算符调用构造函数Function来创建函数
*/

function Me(name, age) {
	console.log(this);
	this.name = name;
	this.age = age;
}

// this指向当前创建的实例Me
var fn1 = new Me('jiex', 24);
fn1 = Me {
	age: 24,
	name: 'jiex'
}

// this指向全局对象window
var fn2 = Me('jiex', 24);
fn2 = undefined

/*
* 数组对象的属性
*/
// constructor: 返回对创建此对象的数组函数的引用
object.constructor 用来区分数组、对象、日期、函数、布尔值、字符串等

// length: 设置或返回数组中元素的数目。设置length属性可改变数组的大小。
length < array.length  数组将被截断，尾部元素丢失；
length > array.length  数组增大，尾部新增元素为undefined

// prototype: 为对象添加属性
var a = [];
a.__proto__.demo = function (ele) {
	this.push(ele);
}
a.demo(1);

/*
* __proto__和prototype
*
* ******__proto__: 隐式原型   prototype: 显式原型
*
* 每个函数function都有一个prototype
* 每个对象都有一个__proto__属性
* 对象的__proto__指向创建它函数的prototype
* 
*/

/*
* 数组的方法
*/

Array.pop()	/*删除并返回数组的最后一个元素，若数组为空则返回undefined，不改变数组*/

Array.sort(sortby)	/*sortby可选，排序函数，无参数按照字符编码排序*/

Array.join(sepatator)	/*sepatator可选，无参数则使用逗号作分隔符*/

Array.splice(index, len, item1, ... ,itemX)	/*从数组中添加/删除项目，然后返回被删除的项目*/
// 截取index到index + len位置元素，并在index位置添加item元素

Array.slice(start, end) /*该方法不会修改数组，而是返回一个子数组*/
// 截取start到end的元素，一个参数，表示从start位置截取到最后

Array.every(function(ele, index, arr) {}, thisVal)
/*检测数组所有元素是否都符合指定条件，只要有一个不满足，返回false。所有都满足返回true
* thisVal可不传，every()不会改变原数组的值
*/
var a = [1, 2, 3, 4];
var b = [5, 6];
var result = a.every(function (num, index, arr) {
	console.log(this); /*this指向传递的对象b，若不传参数b，则this指向window*/
	return num < 3; /*存在大于3的值，result为false*/
}, b);

Array.filter(function (ele, index, arr) {}, thisVal)
/*创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
* thisVal可不传，filter()不会改变原数组的值
*/
var a = [1, 2, 3, 4];
var b = [5, 6];
var result = a.every(function (num, index, arr) {
	console.log(this); /*this指向传递的对象b，若不传参数b，则this指向window*/
	return num < 3; /*返回结果result=[1, 2]*/
}, b);

Array.forEach(function (ele, index, arr) {}, thisVal)
/*调用数组的每个元素，并将元素传递给回调函数
* thisVal可不传
* forEach无返回值，result结果为undefined
*/
var a = [1, 2, 3, 4];
var b = [5, 6];
var result = a.forEach(function (num, index, arr) {
	console.log(this); /*this指向传递的对象b，若不传参数b，则this指向window*/
}, b);

Array.map(function (ele, index, arr) {}, thisVal)
/*返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
* thisVal可不传
*/
var a = [1, 2, 3, 4];
var b = [5, 6];
var result = a.map(function (num, index, arr) {
	console.log(this); /*this指向传递的对象b，若不传参数b，则this指向window*/
	return num > 3; /*返回值result=[false, false, false, true]*/
}, b);

Array.some(function (ele, index, arr) {}, thisVal)
/*检测数组中的元素是否满足指定条件，只要有一个满足，返回true，没有满足的返回false
* thisVal可不传
*/
var a = [1, 2, 3, 4];
var b = [5, 6];
var result = a.some(function (num, index, arr) {
	console.log(this); /*this指向传递的对象b，若不传参数b，则this指向window*/
	return num > 3; /*返回值result=true*/
}, b);

Array.reduce(function (total, ele, index, arr) {}, initVal)
/*接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
* total不传initVal，默认值是数组第一个值, initVal为total的默认值
*/
var a = [2, 3, 4, 'a'];
var result = a.reduce(function (total, num, index, arr) {
	console.log(total);
	return total + num; /*result='9a'*/
});

Array.reduceRight(function (total, ele, index, arr) {}, initVal)
/*接收一个函数作为累加器，数组中的每个值（从右到左）开始缩减，最终计算为一个值
* total不传initVal，默认值是数组最后一个值, initVal为total的默认值
*/
var a = [2, 3, 4, 'a'];
var result = a.reduceRight(function (total, num, index, arr) {
	console.log(total);
	return total + num; /*result='a432'*/
}, 10);

Array.copyWithin(target, start, end) /*不推荐使用，浏览器版本要求较高*/
/*
* 从数组的指定位置拷贝元素到数组的另一个指定位置中
* target: 从该位置开始替换数据
* start: 复制的起始位置
* end: 复制的结束位置end-1
*/
var a = [2, 3, 4, 'a', 'b', 'c', 'd'];
a.copyWithin(2); /*从位置2开始覆盖，覆盖内容为0到数组长度-1*/
/*a=[2, 3, 2, 3, 4, "a", "b"]*/
a.copyWithin(2, 1); /*从位置2开始覆盖，覆盖内容为1到数组长度-1*/
/*a=[2, 3, 3, 2, 3, 4, "a"]*/
a.copyWithin(2, 1, 3); /*从位置2开始覆盖，覆盖内容为位置1到2，即3,4从位置2后开始覆盖4，'a'*/
/*a=[2, 3, 3, 4, 'b', 'c', 'd']*/

Array.fill() /*使用固定值填充数组，不推荐使用，浏览器版本要求较高*/
var a = [1, 2, 3, 4];
a.fill('a');
/*a=['a', 'a', 'a', 'a']*/

Array.find(function (ele, index, arr) {}, thisVal)
/*返回通过测试（函数内判断）的数组的第一个元素的值（不建议，浏览器版本要求较高）
* thisVal可不传
*/
var a = [1, 2, 3, 4];
var b = a.find(function (ele, index, arr) {
	return ele > 2; /*返回b为3*/
});

Array.valueOf() /*返回数组对象的原始值*/
var a = [1, 2, 3, 4];
var b = a.valueOf();


/**************************************************************************************************
* 常见数组应用场景
*/

/*数组去重*/
var arr = [1, 2, 3, 3, 1, 4];
