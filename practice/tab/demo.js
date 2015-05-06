$(document).ready(function() {

    var timeclear = null;

    $('.tab_title ul li').hover(function() {

    var This=$(this);

    	//setTimeout();作用是延迟某一段代码的执行
        timeclear = setTimeout(function() {

            This.addClass(function() {
                return 'title' + This.index();
            }).siblings().removeClass();

            $('.tab_content div').eq(This.index()).show()
            .siblings().hide();

        },300);

    },function(){
    	//clearTimeout();作用是清除定时器
    	clearTimeout(timeclear);
    });

});
