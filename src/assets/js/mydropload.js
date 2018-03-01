import Dropload from 'dropload';
var mydropload = function (ele, upFn, loadFn) {
    var config = {
        scrollArea: window,
        domUp: {
            domClass: 'dropload-up',
            domRefresh: '<div class="dropload-refresh"></div>',
            domUpdate: '<div class="dropload-update"></div>',
            domLoad: '<div class="dropload-load"><span class="loading"></span></div>'
        },
        domDown: {
            domClass: 'dropload-down',
            domRefresh: '<div class="dropload-refresh" id="upmore" style="color:rgb(168, 175, 172);">↑上拉加载更多</div>',
            domLoad: '<div class="dropload-load" style="color:rgb(168, 175, 172);"><span class="loading"></span>加载中...</div>',
            domNoData: '<div class="dropload-noData" id="nodata" style="color:rgb(168, 175, 172);">暂无数据</div>'
        },
        threshold: '200'
    }
    if (typeof upFn === 'function') {
        config.loadUpFn = upFn;
    }
    if (typeof loadFn === 'function') {
        config.loadDownFn = loadFn;
    }
    var d = new Dropload(ele, config);
    return d;
}
export default mydropload;