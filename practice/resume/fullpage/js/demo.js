$(document).ready(function() {
    //fullpage设置
    $('#fullpage').fullpage({
        //定义锚链接
        'anchors': ['menus1', 'menus2', 'menus3', 'menus4', 'menus5'],
        //绑定菜单
        'menu': '#menu',
        // 是否显示项目导航
        'navigation': true,
        //内容是否垂直居中
        'verticalCentered': true,
        //  是否循环滚动，与 loopTop 及 loopBottom 不兼容
        // 'continuousVertical':true,
        //滚动速度，单位为毫秒
        'scrollingSpeed': 300,
        //项目导航的颜色
        // 'navigationColor':'#fff',
        //左右滑块的箭头的背景颜色
        // 'controlArrowColor':'#f7eb2d',
        //滚动到最底部后是否滚回顶部
        'loopBottom': true,
    });

    //擅长技术-鼠标经过增加padding
    $('.page2 span').hover(function() {
        $(this).animate({
            'padding-left': '50px',
            'padding-right': '50px',
            'padding-top': '20px',
            'padding-bottom': '20px'
        }, 300, 'easeInOutCubic');
    }, function() {
        $(this).animate({
            'padding-left': '30px',
            'padding-right': '30px',
            'padding-top': '10px',
            'padding-bottom': '10px'
        }, 300, 'easeInOutCubic')
    });

    /*动画-教育经历*/
    // $('.page3>h2:even').addClass('animated infinite zoomInLeft');
    // $('.page3>h2:odd').addClass('animated infinite zoomInRight');
    // $('.page3>h2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    //     function() {
    //         $(this).removeClass('animated infinite zoomInLeft');
    //         $(this).removeClass('animated infinite zoomInRight');
    //     });
});
