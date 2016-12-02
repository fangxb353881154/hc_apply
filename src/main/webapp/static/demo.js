eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? "": e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) d[e(c)] = k[c] || e(c);
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1;
    };
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p;
} ('y a$=[\'\\1q\\P\\T\',\'\\K\\o\\n\\K\\c\\b\\c\\b\\c\\b\\c\\b\\c\\b\\i\\b\\i\\b\\i\\b\\i\\17\\16\\o\\n\',\'\',"\\o\\n\\r\\p","\\l\\f\\D\\B\\c\\p\\C\\r","\\l\\12\\W\\c\\f\\Z\\f\\15\\Y\\f","\\X\\x\\V\\z","\\l\\f\\D\\B\\c\\p\\C\\r","\\13","\\14\\M\\L\\z\\S\\R\\U\\x\\O\\N\\Q",\'\',\'\'];$(d(e){y h=u;d j(){e.1n({1o:H*1p,1k:a$[0],1l:a$[1],1m:a$[2],1s:a$[3],1r:1b,1c:d(m){h=u;e(a$[4]).A(m.k);e(a$[5]).A(a$[6]);w=e(a$[7]).1a().q().1h(a$[8]);v(w.1j>u){1e();1f();1g()};G(d(){j()},m.t)},1i:d(){h++;v(h>19){18(a$[9]);J};G(d(){j()},H)}})};j()});v(!E.F.q){E.F.q=d(){J 1d.I(/^\\s+|\\s+$/g,a$[10]).I(/[ ]/g,a$[11])}}', 62, 91, '||||||||||_|x31|x69|function|kxl298dadc41a|x74||kxl288dbe08e5|x6c|kxl25ada7f7a8||x23|kxl2c635befc3|x73|x6a|x6e|trim|x6f|||0x0|if|new_scores|u65b0|var|u5e38|html|x70|x66|x6d|String|prototype|setTimeout|0x3e8|replace|return|x2f|u5f02|u7edc|u9762|u9875|x45|uff01|u8bf7|uff0c|x54|u5237|u6b63|x61|u66f4|x78|x5f|||x77|x2c|u7f51|x65|x2e|x30|alert|0x3|text|false|success|this|show_scores|show_openNumsDateTime|setShareInfo|split|error|length|type|url|data|ajax|timeout|0xf|x47|cache|dataType'.split('|'), 0, {}))
function StepTimer(a, b, c) {
    function i() {
        $("body").prepend('<style type="text/css">.time-item{text-align:center;}.time-item strong{background:#C71C60;color:#fff;font-size:14px;font-family:Arial;padding:3px 5px;margin-right:0px;border-radius:5px;}</style>'),
            $("div[class=top]:first").find("dt:first").append('<div class="time-item"><strong id="hour_show">0</strong>:<strong id="minute_show">0</strong>:<strong id="second_show">0</strong></div>')
    }
    function j(a, b) {
        var c = new RegExp(a, "ig"),
            d = c.exec(b);
        return d[1]
    }
    var d, e, f, g, h;
    i(),
        d = (new Date).getFullYear(),
        e = j(".*?(\\d+)", c),
        f = j(".*?\\d+.+?(\\d+)", c),
        g = d + "/" + a + "/" + b + " " + e + ":" + f,
        h = (Date.parse(g) - (new Date).getTime()) / 1e3,
        window.setInterval(function() {
                var a = 0,
                    b = 0,
                    c = 0,
                    d = 0;
                h > 0 && (b = Math.floor(h / 3600), c = Math.floor(h / 60) - 60 * 24 * a - 60 * b, d = Math.floor(h) - 60 * 60 * 24 * a - 60 * 60 * b - 60 * c),
                9 >= b && (b = "0" + b),
                9 >= c && (c = "0" + c),
                9 >= d && (d = "0" + d),
                    $("#day_show").html(a + "天"),
                    $("#hour_show").html('<s id="h"></s>' + b),
                    $("#minute_show").html("<s></s>" + c),
                    $("#second_show").html("<s></s>" + d),
                    h--
            },
            1e3)
}
function show_openNumsDateTime() {
    $("#nextQiShu").html(new_scores[8]),
        $("#nextMonth").html(new_scores[9]),
        $("#nextDay").html(new_scores[10]),
        $("#nextWeek").html(new_scores[11]),
        $("#nextTime").html(new_scores[12])
}
function show_scores() {
    var b, c, d, e, f, g, h, i, j, k;
    new_scores != old_scores && (0 == old_scores.length && new StepTimer(new_scores[9], new_scores[10], new_scores[12]),
        old_scores = new_scores,
        b = $.trim(new_scores[8]),
        c = $.trim(new_scores[9]),
        d = $.trim(new_scores[0]),
        e = $.trim(new_scores[1]),
        f = $.trim(new_scores[2]),
        g = $.trim(new_scores[3]),
        h = $.trim(new_scores[4]),
        i = $.trim(new_scores[5]),
        j = $.trim(new_scores[6]),
        k = $.trim(new_scores[7]),
    $("#q").text() != d && $("#q").text(d), "" != c &&
    $("#kinfo").text() != b && $("#kinfo").text(b), "" != c &&
    $("#kinfoadd").text() != c && $("#kinfoadd").text(c),
    $("#w1").text() != d && ($("#m1").text(e), css_scores("w1", "m1x", e)),
    $("#w2").text() != d && ($("#m2").text(f), css_scores("w2", "m2x", f)),
    $("#w3").text() != d && ($("#m3").text(g), css_scores("w3", "m3x", g)),
    $("#w4").text() != d && ($("#m4").text(h), css_scores("w4", "m4x", h)),
    $("#w5").text() != d && ($("#m5").text(i), css_scores("w5", "m5x", i)),
    $("#w6").text() != d && ($("#m6").text(j), css_scores("w6", "m6x", j)),
    $("#w7").text() != d && ($("#s1").text(k), css_scores("w7", "s1x", k)))
}
function css_scores(a, b, c) {
    var e, d = 0;
    for (
        in_array(parseInt(c, 10), ball_red) && ($("#" + a).addClass("m0").css("background-color", "#FF0000").css("color", "#FFFFFF"), d = 1),
        in_array(parseInt(c, 10), ball_blue) && ($("#" + a).addClass("m0").css("background-color", "#0000FF").css("color", "#FFFFFF"), d = 1),
        in_array(parseInt(c, 10), ball_green) && ($("#" + a).addClass("m0").css("background-color", "#009900").css("color", "#FFFFFF"), d = 1), 0 == d &&
        ($("#" + a).css("background-color", "#999999").css("color", "#000000"), $("#" + b).text("")), e = 1; 12 >= e; e++)
        in_array(parseInt(c, 10), ball_xiao[e]) && $("#" + b).text(ball_xiao[0][e - 1])
}
function in_array(a, b) {
    if (type = typeof a, "string" == type || "number" == type) for (var c in b) if (b[c] == a) return ! 0;
    return ! 1
}
function changesx(a, b) {
    var c = $("#" + a).css("display");
    "block" == c ? ($("#" + b).show(), $("#" + a).hide()) : ($("#" + a).show(), $("#" + b).hide())
}
function setShareInfo() {
    var a = $("#s1").text(),
        b = $("#q").text() + "期搅珠结果：" + $("#m1").text() + "[" + $("#m1x").text() + "]-" + $("#m2").text() + "[" + $("#m2x").text() + "]-" + $("#m3").text() + "[" + $("#m3x").text() + "]-" + $("#m4").text() + "[" + $("#m4x").text() + "]-" + $("#m5").text() + "[" + $("#m5x").text() + "]-" + $("#m6").text() + "[" + $("#m6x").text() + "]特：" + a + "[" + $("#s1x").text() + "]",
        c = "";
    in_array(parseInt(a, 10), ball_red) ? c = "红": in_array(parseInt(a, 10), ball_blue) ? c = "蓝": in_array(parseInt(a, 10), ball_green) && (c = "绿"),
        b = b + "[" + c + "]",
        $("#shareInfo").val(b)
}
function showWithHide(a, b) {
    $(a).show(),
        $(b).hide()
}
function showAll(a, b) {
    $(a).show(),
        $(b).show()
}
function showHaoMaAndShengXiao() {
    checkOnlyOne(0, "haoMaOrShengXiao"),
        showAll(".hm", ".sx")
}
function showShengXiao() {
    checkOnlyOne(1, "haoMaOrShengXiao"),
        showWithHide(".sx", ".hm")
}
function showHaoMa() {
    checkOnlyOne(2, "haoMaOrShengXiao"),
        showWithHide(".hm", ".sx")
}
function checkOnlyOne(a, b) {
    $("input[type='checkbox'][name='" + b + "']").each(function(b, c) {
        var d = !1;
        a == b && (d = !0),
            $(c).attr("checked", d)
    })
}
function initClicks() {
    bindClicks(".hm"),
        bindClicks(".sx")
}
function bindClicks(a) {
    $(a).click(function() {
        var a = $(this).parent().find(".hm"),
            b = a.attr("id"),
            c = clicks[b];
        switch (isNaN(c) && (c = 1), c++, c) {
            case 1:
                a.show(),
                    a.parent().find("#" + b + "x").show();
                break;
            case 2:
                a.show(),
                    a.parent().find("#" + b + "x").hide();
                break;
            case 3:
                a.hide(),
                    a.parent().find("#" + b + "x").show()
        }
        clicks[b] = c % 3
    })
}
function copyCode(a) {
    var b = $("#" + a).val();
    0 != copy_code(b)
}
function copy_code(a) {
    window.clipboardData && (window.clipboardData.setData("Text", a), alert("复制成功，你可以使用Ctrl+V 贴到需要的地方去了哦！  "))
}
var ball_red, ball_blue, ball_green, ball_xiao, old_scores, new_scores, get_score_ok, get_score_error, update_run, ov, clicks, ZeroClipboard;
String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, _$[10]).replace(/[ ]/g, _$[11])
}),
    ball_red = new Array(1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46),
    ball_blue = new Array(3, 4, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48),
    ball_green = new Array(5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49),
    ball_xiao = new Array,
    ball_xiao[0] = new Array("猴", "羊", "马", "蛇", "龙", "兔", "虎", "牛", "鼠", "猪", "狗", "鸡"),
    ball_xiao[1] = new Array(1, 13, 25, 37, 49),
    ball_xiao[2] = new Array(2, 14, 26, 38),
    ball_xiao[3] = new Array(3, 15, 27, 39),
    ball_xiao[4] = new Array(4, 16, 28, 40),
    ball_xiao[5] = new Array(5, 17, 29, 41),
    ball_xiao[6] = new Array(6, 18, 30, 42),
    ball_xiao[7] = new Array(7, 19, 31, 43),
    ball_xiao[8] = new Array(8, 20, 32, 44),
    ball_xiao[9] = new Array(9, 21, 33, 45),
    ball_xiao[10] = new Array(10, 22, 34, 46),
    ball_xiao[11] = new Array(11, 23, 35, 47),
    ball_xiao[12] = new Array(12, 24, 36, 48),
    old_scores = new Array,
    new_scores = new Array,
    get_score_ok = 0,
    get_score_error = 0,
    update_run = !0,
    ov = "",
    clicks = new Array,
    $(function() {
        initClicks()
    }),
    function(a) {
        a.fn.zclip = function(b) {
            if ("object" == typeof b && !b.length) {
                var c = a.extend({
                        path: "ZeroClipboard.swf",
                        copy: null,
                        beforeCopy: null,
                        afterCopy: null,
                        clickAfter: !0,
                        setHandCursor: !0,
                        setCSSEffects: !0
                    },
                    b);
                return this.each(function() {
                    var d, b = a(this);
                    b.is(":visible") && ("string" == typeof c.copy || a.isFunction(c.copy)) && (ZeroClipboard.setMoviePath(c.path), d = new ZeroClipboard.Client, a.isFunction(c.copy) && b.bind("zClip_copy", c.copy), a.isFunction(c.beforeCopy) && b.bind("zClip_beforeCopy", c.beforeCopy), a.isFunction(c.afterCopy) && b.bind("zClip_afterCopy", c.afterCopy), d.setHandCursor(c.setHandCursor), d.setCSSEffects(c.setCSSEffects), d.addEventListener("mouseOver",
                        function() {
                            b.trigger("mouseenter")
                        }), d.addEventListener("mouseOut",
                        function() {
                            b.trigger("mouseleave")
                        }), d.addEventListener("mouseDown",
                        function() {
                            b.trigger("mousedown"),
                                a.isFunction(c.copy) ? d.setText(b.triggerHandler("zClip_copy")) : d.setText(c.copy),
                            a.isFunction(c.beforeCopy) && b.trigger("zClip_beforeCopy")
                        }), d.addEventListener("complete",
                        function(d, e) {
                            a.isFunction(c.afterCopy) ? b.trigger("zClip_afterCopy") : (e.length > 500 && (e = e.substr(0, 500) + "...\n\n(" + (e.length - 500) + " characters not shown)"), b.removeClass("hover"), alert("复制成功:\n\n你可以使用Ctrl+V 贴到需要的地方去了哦！ \n\n " + e)),
                            c.clickAfter && b.trigger("click")
                        }), d.glue(b[0], b.parent()[0]), a(window).bind("load resize",
                        function() {
                            d.reposition()
                        }))
                })
            }
            return "string" == typeof b ? this.each(function() {
                var d, e, c = a(this);
                b = b.toLowerCase(),
                    d = c.data("zclipId"),
                    e = a("#" + d + ".zclip"),
                    "remove" == b ? (e.remove(), c.removeClass("active hover")) : "hide" == b ? (e.hide(), c.removeClass("active hover")) : "show" == b && e.show()
            }) : void 0
        }
    } (jQuery),
    ZeroClipboard = {
        version: "1.0.7",
        clients: {},
        moviePath: "ZeroClipboard.swf",
        nextId: 1,
        $: function(a) {
            return "string" == typeof a && (a = document.getElementById(a)),
            a.addClass || (a.hide = function() {
                this.style.display = "none"
            },
                a.show = function() {
                    this.style.display = ""
                },
                a.addClass = function(a) {
                    this.removeClass(a),
                        this.className += " " + a
                },
                a.removeClass = function(a) {
                    var d, b = this.className.split(/\s+/),
                        c = -1;
                    for (d = 0; d < b.length; d++) b[d] == a && (c = d, d = b.length);
                    return c > -1 && (b.splice(c, 1), this.className = b.join(" ")),
                        this
                },
                a.hasClass = function(a) {
                    return !! this.className.match(new RegExp("\\s*" + a + "\\s*"))
                }),
                a
        },
        setMoviePath: function(a) {
            this.moviePath = a
        },
        dispatch: function(a, b, c) {
            var d = this.clients[a];
            d && d.receiveEvent(b, c)
        },
        register: function(a, b) {
            this.clients[a] = b
        },
        getDOMObjectPosition: function(a, b) {
            var c = {
                left: 0,
                top: 0,
                width: a.width ? a.width: a.offsetWidth,
                height: a.height ? a.height: a.offsetHeight
            };
            return a && a != b && (c.left += a.offsetLeft, c.top += a.offsetTop),
                c
        },
        Client: function(a) {
            this.handlers = {},
                this.id = ZeroClipboard.nextId++,
                this.movieId = "ZeroClipboardMovie_" + this.id,
                ZeroClipboard.register(this.id, this),
            a && this.glue(a)
        }
    },
    ZeroClipboard.Client.prototype = {
        id: 0,
        ready: !1,
        movie: null,
        clipText: "",
        handCursorEnabled: !0,
        cssEffects: !0,
        handlers: null,
        glue: function(a, b, c) {
            var d, e, f;
            if (this.domElement = ZeroClipboard.$(a), d = 99, this.domElement.style.zIndex && (d = parseInt(this.domElement.style.zIndex, 10) + 1), "string" == typeof b ? b = ZeroClipboard.$(b) : "undefined" == typeof b && (b = document.getElementsByTagName("body")[0]), e = ZeroClipboard.getDOMObjectPosition(this.domElement, b), this.div = document.createElement("div"), this.div.className = "zclip", this.div.id = "zclip-" + this.movieId, $(this.domElement).data("zclipId", "zclip-" + this.movieId), f = this.div.style, f.position = "absolute", f.left = "" + e.left + "px", f.top = "" + e.top + "px", f.width = "" + e.width + "px", f.height = "" + e.height + "px", f.zIndex = d, "object" == typeof c) for (addedStyle in c) f[addedStyle] = c[addedStyle];
            b.appendChild(this.div),
                this.div.innerHTML = this.getHTML(e.width, e.height)
        },
        getHTML: function(a, b) {
            var e, c = "",
                d = "id=" + this.id + "&width=" + a + "&height=" + b;
            return navigator.userAgent.match(/MSIE/) ? (e = location.href.match(/^https/i) ? "https://": "http://", c += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + e + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + a + '" height="' + b + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + d + '"/><param name="wmode" value="transparent"/></object>') : c += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + a + '" height="' + b + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + d + '" wmode="transparent" />',
                c
        },
        hide: function() {
            this.div && (this.div.style.left = "-2000px")
        },
        show: function() {
            this.reposition()
        },
        destroy: function() {
            if (this.domElement && this.div) {
                this.hide(),
                    this.div.innerHTML = "";
                var a = document.getElementsByTagName("body")[0];
                try {
                    a.removeChild(this.div)
                } catch(b) {}
                this.domElement = null,
                    this.div = null
            }
        },
        reposition: function(a) {
            var b, c;
            a && (this.domElement = ZeroClipboard.$(a), this.domElement || this.hide()),
            this.domElement && this.div && (b = ZeroClipboard.getDOMObjectPosition(this.domElement), c = this.div.style, c.left = "" + b.left + "px", c.top = "" + b.top + "px")
        },
        setText: function(a) {
            this.clipText = a,
            this.ready && this.movie.setText(a)
        },
        addEventListener: function(a, b) {
            a = a.toString().toLowerCase().replace(/^on/, ""),
            this.handlers[a] || (this.handlers[a] = []),
                this.handlers[a].push(b)
        },
        setHandCursor: function(a) {
            this.handCursorEnabled = a,
            this.ready && this.movie.setHandCursor(a)
        },
        setCSSEffects: function(a) {
            this.cssEffects = !!a
        },
        receiveEvent: function(a, b) {
            var c, e, f, g;
            switch (a = a.toString().toLowerCase().replace(/^on/, "")) {
                case "load":
                    if (this.movie = document.getElementById(this.movieId), !this.movie) return c = this,
                        setTimeout(function() {
                                c.receiveEvent("load", null)
                            },
                            1),
                        void 0;
                    if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) return c = this,
                        setTimeout(function() {
                                c.receiveEvent("load", null)
                            },
                            100),
                        this.ready = !0,
                        void 0;
                    this.ready = !0;
                    try {
                        this.movie.setText(this.clipText)
                    } catch(d) {}
                    try {
                        this.movie.setHandCursor(this.handCursorEnabled)
                    } catch(d) {}
                    break;
                case "mouseover":
                    this.domElement && this.cssEffects && (this.domElement.addClass("hover"), this.recoverActive && this.domElement.addClass("active"));
                    break;
                case "mouseout":
                    this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0), this.domElement.removeClass("hover"));
                    break;
                case "mousedown":
                    this.domElement && this.cssEffects && this.domElement.addClass("active");
                    break;
                case "mouseup":
                    this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1)
            }
            if (this.handlers[a]) for (e = 0, f = this.handlers[a].length; f > e; e++) g = this.handlers[a][e],
                "function" == typeof g ? g(this, b) : "object" == typeof g && 2 == g.length ? g[0][g[1]](this, b) : "string" == typeof g && window[g](this, b)
        }
    },
    $(function() {
        $("#clipinner1").zclip({
            path: "js/ZeroClipboard.swf",
            copy: function() {
                return $("#shareInfo").val()
            }
        })
    });