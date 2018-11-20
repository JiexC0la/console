import _ from 'lodash';
import './theme/style.css';
import Icon from './theme/img/demo.svg';

import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');


  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // 添加图片
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());