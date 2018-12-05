$(document).ready(function() {
	/*
	 * 背景音乐模块
	 */
	var musicModel = {
		init: function () {
			// 音乐循环列表
			var curIndex = 0;
			var musicArr = ['/src/theme/music/1.mp3', '/src/theme/music/2.mp3'];
			var myAudio = new Audio();
			myAudio.autoplay = true;
			myAudio.controls = true;
			myAudio.loop = false;
			myAudio.src = window.location.origin + musicArr[curIndex];
			myAudio.addEventListener('ended', playEndedHandler, false);
			$('.head-music').append(myAudio);
			
			// 监听音乐是否播放完毕
			function playEndedHandler() {
				curIndex++;
				// 尾曲播放完毕，跳转至首曲
				curIndex = curIndex < musicArr.length ? curIndex : 0;
				myAudio.src = window.location.origin + musicArr[curIndex];
				myAudio.play();
			}
		}
	};

	function init() {
		musicModel.init();
	}

	init();
});