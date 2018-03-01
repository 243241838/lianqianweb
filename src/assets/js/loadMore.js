function getTranslateY (dom) {
    var transform = prefix().dom + 'Transform';
    var translateY = 0;
    if (dom.style[transform]) {
        var regex = new RegExp('translateY((.*px))', 'g');
        translateY = parseInt(dom.style[transform].match(regex)[0].substring(11));
    }
    return translateY;
}
function prefix () {
    var div = document.createElement('div');
    var cssText = '-webkit-transition:all .1s;-moz-transition:all .1s; -Khtml-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';
    div.style.cssText = cssText;
    var style = div.style;
    var dom = '';
    if (style.webkitTransition) {
        dom = 'webkit'
    } else {
        if (style.MozTransition) {
            dom = 'moz'
        } else {
            if (style.khtmlTransition) {
                dom = 'Khtml'
            } else {
                if (style.oTransition) {
                    dom = 'o'
                } else {
                    if (style.msTransition) {
                        dom = 'ms'
                    }
                }
            }
        }
    }
    div = null;
    if (dom) {
        return {
            dom: dom,
            css: '-' + dom + '-'
        }
    } else {
        return false
    }
}
// 获取滚动条当前的位置
function getScrollTop () {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
// 获取当前可视范围的高度
function getClientHeight () {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
}
var imgBase = require('../images/arrow.png');
var imgBase2 = require('../images/load.gif');
var Load = {
    loadImg: '',
    loadText: '',
    loadEle: '',
    mydistanceY: '',
    prefix: (function () {
        var div = document.createElement('div');
        var cssText = '-webkit-transition:all .1s;-moz-transition:all .1s; -Khtml-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';
        div.style.cssText = cssText;
        var style = div.style;
        var dom = '';
        if (style.webkitTransition) {
            dom = 'webkit'
        } else {
            if (style.MozTransition) {
                dom = 'moz'
            } else {
                if (style.khtmlTransition) {
                    dom = 'Khtml'
                } else {
                    if (style.oTransition) {
                        dom = 'o'
                    } else {
                        if (style.msTransition) {
                            dom = 'ms'
                        }
                    }
                }
            }
        }
        div = null;
        if (dom) {
            return {
                dom: dom,
                css: '-' + dom + '-'
            }
        } else {
            return false
        }
    }()),
    setElementStyle: function (txtobj) {
        Load.loadEle = txtobj;
        txtobj.style.height = '32px';
        txtobj.style.lineHeight = '32px'
        Load.loadText = createSpan();
        var nowTransform = Load.prefix.dom + 'Transform';
        Load.loadImg = loadImage('../images/arraw.png', function (img) {
            img.style.width = '18px';
            txtobj.appendChild(img);
            txtobj.appendChild(Load.loadText);
            Load.loadText.innerText = '上拉加载';
        });
    },
    loadMore: function (session, element, txtobj, fn, elementClientHeight) {
        session = document.querySelector(session);
        element = document.querySelector(element);
        txtobj = document.querySelector(txtobj);
        Load.setElementStyle(txtobj);
        var startPos = {};
        var maxs2 = 0;
        var isScrolling;
        var isMove = false;
        var distance = 40;
        Load.mydistanceY = -(session.scrollHeight - session.clientHeight)// 最底部
        var nowTransition = Load.prefix.dom + 'Transition';
        var nowTransform = Load.prefix.dom + 'Transform';
        var vendors = Load.prefix.css;
        if (!Load.prefix.dom) {
            nowTransition = 'transition';
            nowTransform = 'transform';
            vendors = ''
        }
        element.addEventListener('touchstart', function (e) {
            e = e || window.event;
            var touchs = e.touches[0];
            startPos = {
                x: touchs.pageX,
                y: touchs.pageY,
                startTime: +new Date()
            };
            element.style[nowTransition + 'Duration'] = '0s';
            document.addEventListener('touchmove', moveLoad, false);
            document.addEventListener('touchend', endLoad, false);
        }, false);
        function moveLoad (e) {
            e = e || window.event;
            var touchs = e.changedTouches[0];
            var movPos = {
                x: touchs.pageX,
                y: touchs.pageY
            };
            if (e.touches.length > 1 || e.scale && e.scale !== 1) {
                return;
            }
            if (typeof isScrolling === 'undefined') {
                isScrolling = !!(isScrolling || Math.abs(movPos.x - startPos.x) < Math.abs(movPos.y - startPos.y))
            }
            if (!isScrolling) {
                isMove = false;
                return
            }
            var movedistance = parseInt(movPos.y - startPos.y);
            if (movedistance < 0) {
                if (getTranslateY(element) === Load.mydistanceY) {
                    maxs2 = (movedistance * 0.2).toFixed(1);
                    isMove = true;
                    element.style.webkitBackfaceVisibility = 'hidden';
                    var d = parseInt(Load.mydistanceY) + parseInt(maxs2);
                    element.style[nowTransform] = 'translateY(' + d + 'px)';
                    txtobj.style[nowTransform] = 'translateY(' + d + 'px)';
                    if (Math.abs(maxs2) > distance) {
                        Load.loadImg.style[nowTransform] = 'rotate(180deg)';
                    } else {
                        Load.loadImg.style[nowTransform] = 'rotate(0deg)';
                    }
                }
            }
        }
        function endLoad (e) {
            e = e || window.event;
            var touchs = e.changedTouches[0];
            if (isScrolling && isMove) {
                if (Math.abs(maxs2) > distance) {
                    // Load.loadImg.src = imgBase2;
                    element.style[nowTransition] = vendors + 'transform .55s cubic-bezier(0.65, 0.5, 0.12, 1)';
                    element.style.webkitBackfaceVisibility = '';
                    element.style[nowTransform] = 'translateY(' + Load.mydistanceY + 'px)';
                    txtobj.style[nowTransition] = vendors + 'transform .55s cubic-bezier(0.65, 0.5, 0.12, 1)';
                    txtobj.style[nowTransform] = 'translateY(' + Load.mydistanceY + 'px)';
                } else {
                }
                if (fn) {
                    fn()
                }
            }
            document.removeEventListener('touchmove', moveLoad);
            document.removeEventListener('touchmove', endLoad)
        }
    },
    reset: function () {
        Load.loadImg.src = imgBase;
    },
    resetHeight: function (height) {
        Load.mydistanceY = height;
    }
}
function getStyle (dom, styleName) {
    if (dom.currentStyle) {
        return dom.currentStyle[styleName];
    } else {
        return window.getComputedStyle(dom, false)[styleName];
    }
}
function loadImage (url, callback) {
    var img = new window.Image(); // 创建一个Image对象，实现图片的预下载
    img.id = 'load_img';
    img.src = imgBase;
    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
        callback(img);
        return img; // 直接返回，不用再处理onload事件
    }
    img.onload = function () { // 图片下载完毕时异步调用callback函数。
        callback(img);// 将回调函数的this替换为Image对象
    };
    return img;
};
function createSpan () {
    var span = document.createElement('span');
    span.id = 'load_text';
    span.style.marginLeft = '4px';
    span.style.color = '#666';
    span.innerText = '';
    return span;
}

export default Load;