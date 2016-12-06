//rem设置
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 40 * (clientWidth / 1080) + 'px';
            console.log(40 * (clientWidth / 1080))
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

function blink(ob) {
    var className = ob.attr("class");
    if (className == "transparent") {
        ob.attr("class", "normal");
    } else {
        ob.attr("class", "transparent");
    }
    setTimeout(blink(ob), 1000);
}