/* 
一款让唱片平滑旋转的播放器插件
writer:zhangyun
*/
// var song = document.getElementById('song');
var song = document.getElementsByTagName("audio")[0];
// var img = document.getElementById('img');
var img = document.getElementsByTagName("img")[0];

var counter = 0;
var flag = false;//不播放
var rotate;
var dispear;
var strong;
 
//旋转画面
function goRotate(){
    counter = counter+0.1;  
    img.style.transform="rotate("+counter+"deg)";
}
//监听播完了没
function golisten(){
	if(song.ended){
	 	window.clearInterval(rotate);
	 	flag = false;
	}
}
//暂停时，声音渐渐变小至消失的效果
function godispear(){
	song.volume = song.volume * 0.85;
	if(song.volume < 0.1){
		song.volume = 0;
		window.clearInterval(dispear);
		song.pause();
	}
	console.log(song.volume)
}
//播放时，声音渐渐变大的效果
function gostrong(){
	if(song.volume < 0.9){
	    song.volume = song.volume * 1.1;
	}else{
	    song.volume = 1;
		window.clearInterval(strong);
	}
	console.log(song.volume)
}

img.onclick = function(){  
	flag = !flag;
	if(flag){ //开始播放
		rotate = setInterval("goRotate()",10);
		song.volume = 0.2;
		song.play(); 
		strong = setInterval("gostrong()",50);
		//监听 音乐播完了吗
		setInterval("golisten()",1000);
	}else{ //暂停
	 	window.clearInterval(rotate);
		//song.pause();
		dispear = setInterval("godispear()",40);
	}
} 