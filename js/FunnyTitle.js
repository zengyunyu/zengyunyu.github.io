// 浏览器搞笑标题（纯 JS 版，无需 jQuery）
var OriginTitle = document.title;
var titleTime;

document.addEventListener('visibilitychange', function () {
    // 获取 favicon 元素
    var favicon = document.querySelector('link[rel="icon"]');
    
    if (document.hidden) {
        // 页面隐藏：切换恶搞图标 + 恶搞标题
        if (favicon) favicon.href = '/funny.ico';
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    } else {
        // 页面显示：恢复原图标 + 临时欢迎标题
        if (favicon) favicon.href = '/favicon.ico';
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
        // 2秒后自动恢复原标题
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});