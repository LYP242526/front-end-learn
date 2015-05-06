$(document).ready(function(){
	$('.wrap ol li').click(function(){
		var index = $(this).index;
		$(this).addClass('current').siblings().removeClass();
		$('.wrap ul').animate({'left':-500 * index + 'px'},500);
	});
});