$(document).ready(function() {
    $('#fullpage').fullpage({
        //定义锚链接
        'anchors': ['menus1', 'menus2', 'menus3', 'menus4', 'menus5'],
        //绑定菜单
        'menu': '#menu',
        // 是否显示项目导航
        'navigation': true,
        //内容是否垂直居中
        'verticalCentered':true,
        //  是否循环滚动，与 loopTop 及 loopBottom 不兼容
        // 'continuousVertical':true,
        //滚动速度，单位为毫秒
        'scrollingSpeed':300,
        //项目导航的颜色
        // 'navigationColor':'#fff',
        //左右滑块的箭头的背景颜色
        // 'controlArrowColor':'#f7eb2d',
        //滚动到最底部后是否滚回顶部
        'loopBottom':true,


    });
});
