$(document).ready(function(){
	$("#a");
	$("input[type='text']");
	$("div.b");
	$(".b:not(.c)");
	$('.b').filter(function(){
		return !$(this).hasClass('c');
	});
	
	$('.a:not(:empty)');
	$('.a').filter(function(){
		return !$(this).is(':empty');
	});
	

	$("input[type='text']");
	$('input').filter(function(){
		return $(this).is("[type='text']");
	});

	$("div.b");
	$('.b').filter('div');

	$('.b').filter(function(){
		return $(this).text() > 20;
	});

	// 3,6
	function addRange (a,b) {
		var sum = 0;
		if(a>b){
			var temp = a;
			a = b;
			b = temp;
		}
		for(;a<=b;){
			sum = sum + a;
			a++;
		}
		return sum;
	}
	console.log(addRange(2,4));
	console.log(addRange(4,2));

	function a (argument) {
		
		console.log('a')
		b();
	}

	function b (argument) {
		console.log('b')
		c();
	}

	function c (argument) {
		// debugger;
		console.log('c')
	}

	a();
});