$(document).ready(function() {

    // $('#add-btn').click(function(){     //不能删除
    //  $('.res-list').append('<li>一条数据<button class="remove-btn">删除按钮</button></li>');
    // });
    // $('.remove-btn').click(function(){
    //  $(this).closest('li').remove();
    // });


    $('#add-btn').on('click', function() {
        $('.res-list').append('<li>一条数据<button class="remove-btn">删除按钮</button></li>');
    });

    $('.res-list').on('click', '.remove-btn', function() {
        $(this).closest('li').remove();
    });


    $('.res-list').on('mouseenter','li',function(){
    		$(this).addClass('addli');
    }).on('mouseleave','li',function(){
    		$(this).removeClass('addli');

    // $('li').on('hover', function() {
    //     if (event.type == 'mouseenter') {
    //         $(this).addClass('addli');
    //     };
    //     if (event.type == 'mouseleave') {
    //         $(this).removeClass('addli');
    //     }
    // });

    $('.res-list').on('mouseenter', 'li', function(event) {
        $(this).addClass('addli');
    }).on('mouseleave', 'li', function(event) {
        $(this).removeClass('addli');

    });

    // $('li').hover(function() {        //有问题，不能用
    //     $(this).addClass('addli');
    // }, function() {
    //     $(this).removeClass('addli');
    // });

    // $('.a').on('click', function() {
    //     // body...
    // });
    // $('.a').click(function(argument) {
    //     console.log($(this).html());
    // });

    // $('.a').eq(0).width(200);
    // console.log($('.a').width());
    // $('.a').width(400);


});
