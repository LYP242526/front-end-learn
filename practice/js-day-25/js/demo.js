
$(document).ready(function(){
	$.ajax({
	url:'/aaa',
	type:'get',
	data:'a=b&c=d',
	});

	$('div').animate({width:'200',height:'200'},2000);
});