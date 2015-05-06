$(document).ready(function(){

	var addliHtml=$('ul').html();
	$('ul').html(addliHtml+addliHtml);

	var timeclear = null;
	var speed = 2;

	function slider(){
		if(speed>0){
			if($('.content ul').css('left')=='0px'){
			$('.content ul').css('left','-800px');
			}
			$('.content ul').css('left','+='+speed+'px');
		}
		if(speed<0){
			if($('.content ul').css('left')=='-800px'){
			$('.content ul').css('left','0');
			}
			$('.content ul').css('left','+=-2px');
		}
	}

	//setInterval()函数作用是:每隔一段时间执行该函数里面的代码
	timeclear=setInterval(slider,30);

	$('.content').mouseover(function(){
		//clearInterval()作用是：清除定时器
		clearInterval(timeclear);
	});

	$('.content').mouseout(function(){
		timeclear=setInterval(slider,30);
	});

	$('.left_btn').click(function(){
		speed=-2;
	});
	$('.right_btn').click(function(){
		speed=2;
	});

});