function detectmob() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}

var transitionHeight = function(e1, e2, time) { // time, 数值，可缺省
    if (typeof window.getComputedStyle == "undefined") return;
    
    var height = window.getComputedStyle(e1).height;

    // e2.style.transition = "none";    // 本行2015-05-20新增，mac Safari下，貌似auto也会触发transition, 故要none下~
    
    e2.style.height = height;
    if (time) e2.style.transition = "height "+ time +"ms";
};

export {
    detectmob,
    transitionHeight,
};