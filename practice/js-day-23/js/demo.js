$(document).ready(function() {
    // 	$("span.b").after("<div></div>");
    // 	$("span").next().addClass("aaa").text("谢天谢地你来啦");


    // 	$(".a").toggleClass("b");

    // 	$(".a").remove(".c");

    // 	$("#b").after($("#a"));

    var $content = $("<div>谢天谢地你来啦</div>");
    $content.addClass("aaa");
    $("span.b").after($content);

    // $("span.b").hasClass('a')-> true
    // $("span.b").eq(0).hasClass('a')
    // width()
    // height()
    var arr = [1, 'a', 3];
    arr.forEach(function(each, i) {
        console.log(i + ':' + each);
    });
    $('.a').each(function() {
        var $this = $(this);
        if ($this.hasClass("b")) {
            $this.removeClass('b');
        } else {
            $this.addClass('b');
        }
    });

    $(".a").toggleClass("b");

    var arr=['1','44','23'];
    function forEach () {
    	for(var i = 0; i < arr.length; i++){
    		console.log(i+arr[i]);
    	}
    }
    	forEach();


    function test (fn) {
    	fn('joel');
    	// body...
    }

    function sayHei (name) {
    	console.log('hi,' + name);
    }

    test(sayHei);

});
