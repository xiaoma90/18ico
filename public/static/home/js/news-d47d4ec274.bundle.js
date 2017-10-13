webpackJsonp([4], {
    124: function (A, e, t) {
        t(52), t(39), A.exports = t(28)
    }, 28: function (A, e) {
        !function () {
            function A(A) {
                var e = $("#discussion_input"), a = $.trim(e.val()), s = $(".empty-discuss");
                return a.length ? ($.post("/api/addReply", {id: A, content: a}).then(function (A) {
                    if (A.success) {
                        e.val("");
                        var n = '<div class="discuss-item" data-id="' + A.data.id + '"><div class="discuss-avatar"><img src="' + A.data.avatar + '" alt=""></div><div class="discuss-content"><div class="discussant"><a href="#">' + A.data.account + "</a><span>" + t[i].moment + '</span></div><div class="discuss-text"><p>' + a + "</p></div></div></div>"
                    } else layer.msg(A.error || t[i].error);
                    s.length && s.remove(), $("#discussion_body").prepend(n)
                }).fail(function (A) {
                    for (var e = A.responseJSON, a = 0; a < e.data.length; a++) layer.msg(e.data[a].errorCase || t[i].error)
                }), !1) : (layer.tips(t[i].comments, e, {tips: [1, "#da2e2b"]}), e.focus(), !1)
            }

            function e() {
                var A = $("#add_discussion").data("id"), e = $(".discuss-item:last-child").data("id"), a = $(".more");
                $.get("/api/scanMoreComment", {news_id: A, id: e}).then(function (A) {
                    if (a.removeClass("loading").html(t[i].more), A.success) {
                        for (var e = "", s = A.reply_list.length, n = 0; n < s; n++) e += '<div class="discuss-item" data-id="' + A.reply_list[n].id + '"><div class="discuss-avatar"><img src="' + A.reply_list[n].avatar + '" alt=""></div><div class="discuss-content"><div class="discussant"><a href="#">' + A.reply_list[n].account + "</a><span>" + A.reply_list[n].createtime + '</span></div><div class="discuss-text"><p>' + A.reply_list[n].content + "</p></div></div></div>";
                        s || (e = '<p class="text-center empty-discuss">' + t[i].no_comment + "</p>"), $(".discuss-body").append(e), A.more_reply ? $(".ans-list-state").removeClass("hide") : a.replaceWith(t[i].end)
                    } else layer.msg(A.error || t[i].error)
                })
            }

            var t = {
                en: {
                    error: "Sorry, there was an unexpected error. Please try again.", loading: "Loading...",
                    comments: "Please enter the comments", moment: "a moment ago", more: "View more",
                    no_comment: "There is no comment!", end: "Fully loaded~"
                }, "zh-CN": {
                    error: "抱歉，出现意外错误，请重试", loading: "正在加载中...", comments: "请输入讨论内容", moment: "刚刚", more: "显示更多",
                    no_comment: "暂时没有评论，赶紧抢沙发吧！", end: "已经加载完啦~"
                }
            }, i = "";
            $(function () {
                return !!$("#article_content").length && void(i = $("html").attr("lang") || "zh-CN")
            }).on("focus", "#discussion_input", function () {
                var A = $(this).parents("#discuss_form");
                A.hasClass("input-focus") || A.addClass("input-focus")
            }).on("blur", "#discussion_input", function () {
                var A = $(this).parents("#discuss_form");
                A.hasClass("input-focus") && A.removeClass("input-focus")
            }).on("click", ".article-agreement", function () {
                var A = $(this), e = A.data("id");
                $.post("/api/addAgree", {news_id: e}).then(function (e) {
                    if (e.success) {
                        var a = $("#agreement-count");
                        e.is_del ? (A.removeClass("agree"), a.html(parseInt(a.text()) - 1)) : (A.addClass("agree"), a.html(parseInt(a.text()) + 1))
                    } else layer.tips(e.error || t[i].error, A, {tips: [1, "#da2e2b"]})
                })
            }).on("click", "#add_discussion", function () {
                var e = $(this).data("id");
                A(e)
            }).on("click", ".more", function () {
                $(this).hasClass("loading") || ($(this).addClass("loading").html(t[i].loading), e())
            })
        }()
    }, 39: function (A, e) {
        !function () {
            function A(A) {
                for (var i = "", a = "", s = 0; s < A.length; s++) a = "", A[s].is_top && (a = '<div class="symbol-top"><svg width="94px" height="88px" class="svg-top"><use xlink:href="#icon-top"></use></svg><span>' + e[t].top + "</span></div>"), i += '<div class="article-item clearfix">' + a + '<div class="news-thumbnail"><a href="/article/' + A[s].id + '"><img data-original="' + A[s].cover + '" alt="" class="lazy" src="' + A[s].cover + '"></a></div><div class="news-content"><div class="news-title"><h3><a href="/article/' + A[s].id + '">' + A[s].title + '</a></h3></div><div class="news-description"><p>' + A[s].describe + '</p></div><div class="news-info"><span class="news-published-time">' + A[s].createtime + '</span><span class="views"><svg width="16px" height="16px"><use xlink:href="#icon-views"></use></svg>' + A[s].viewcount + '</span><div class="share"><svg width="15px" height="15px"><use xlink:href="#icon-share"></use></svg><div class="share-box"><span>' + e[t].share + '：</span><ul class="bdsharebuttonbox"><li><a href="http://connect.qq.com/widget/shareqq/index.html?url=http://www.ico365.com/article/' + A[s].id + "&title=" + A[s].title + "&site=ico365&summary=" + A[s].describe + "&pics=" + A[s].cover + '" target="_blank" class="icon-share qq-share-btn" data-cmd="" data-title="' + A[s].title + '" data-describe="' + A[s].describe + '" data-pic="' + A[s].cover + '" data-id="' + A[s].id + '"></a><svg width="18px" height="18px"><use xlink:href="#icon-share-qq"></use></svg></li><li><a class="icon-share" data-cmd="weixin" data-title="' + A[s].title + '" data-describe="' + A[s].describe + '" data-pic="' + A[s].cover + '" data-id="' + A[s].id + '"></a><svg width="18px" height="18px"><use xlink:href="#icon-share-weixin"></use></svg></li><li><a class="icon-share" data-cmd="tsina" data-title="' + A[s].title + '" data-describe="' + A[s].describe + '"data-pic="' + A[s].cover + '" data-id="' + A[s].id + '"></a><svg width="18px" height="18px"><use xlink:href="#icon-share-weibo"></use></svg></li><li><a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.ico365.com/article/' + A[s].id + "&title=" + A[s].title + "&site=ico365&summary=" + A[s].describe + "&pics=" + A[s].cover + '" target="_blank" class="icon-share qzone-share-btn" data-cmd="" data-title="' + A[s].title + '" data-describe="' + A[s].describe + '" data-pic="' + A[s].cover + '" data-id="' + A[s].id + '"></a><svg width="18px" height="18px"><use xlink:href="#icon-share-qzone"></use></svg></li><li><a class="icon-share" data-cmd="tqq" data-title="' + A[s].title + '" data-describe="' + A[s].describe + '" data-pic="' + A[s].cover + '" data-id="' + A[s].id + '"></a><svg width="18px" height="18px"><use xlink:href="#icon-share-tqq"></use></svg></li></ul></div></div></div></div></div>';
                return i
            }

            var e = {
                en: {
                    error: "Sorry, there was an unexpected error. Please try again.", bottom: "Already at the bottom~",
                    top: "TOP", share: " share"
                }, "zh-CN": {error: "抱歉，出现未知错误，请重试", bottom: "已经到底部啦~", top: "置顶", share: "分享到"}
            }, t = "";
            $(function () {
                t = $("html").attr("lang") || "zh-CN";
                var A = $(document);
                if ($("img.lazy", A).lazyload({
                        effect: "fadeIn",
                        placeholder: "data:image/png;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRDNDI1QjJFQjU2ODExRTZBMkVFODkxRkREOTg2NUI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRDNDI1QjJGQjU2ODExRTZBMkVFODkxRkREOTg2NUI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTg2M0M1N0ZCNTUyMTFFNkEyRUU4OTFGREQ5ODY1QjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTg2M0M1ODBCNTUyMTFFNkEyRUU4OTFGREQ5ODY1QjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAYbAAAGtwAA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"
                    }), $("img.lazy-avatar", A).lazyload({
                        effect: "fadeIn",
                        placeholder: "data:image/png;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRDNDI1QjMyQjU2ODExRTZBMkVFODkxRkREOTg2NUI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRDNDI1QjMzQjU2ODExRTZBMkVFODkxRkREOTg2NUI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEM0MjVCMzBCNTY4MTFFNkEyRUU4OTFGREQ5ODY1QjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEM0MjVCMzFCNTY4MTFFNkEyRUU4OTFGREQ5ODY1QjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAVzAAAF+gAABsoAAAfh/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCABGAFoDAREAAhEBAxEB/8QAoQABAAMBAQEAAAAAAAAAAAAAAAECAwQFCAEBAAAAAAAAAAAAAAAAAAAAABAAAgIBBAIDAAAAAAAAAAAAAQIAAxNQYBESECAiMgQRAAEDAwQDAQEAAAAAAAAAAAEAEQIhMRJBUSIDIFATcTISAQAAAAAAAAAAAAAAAAAAAGATAQACAgIBAwUBAQAAAAAAAAEAETFRIaFBIGBhQHGBkbEwUP/aAAwDAQACEQMRAAAB+sgAAAAAAAAAAAAAAAAADoMiSSpcoAUAPQJMDcGpJBznCAdRJJcqXIBkcoAAAAAAAAAAAAAAAAAAP//aAAgBAQABBQLRawpIBaFWWBGadTzjeAEwKWhVl9PzffnpTkYi52VnJKc5KwEStetUtHK+anFbJYAGsXrkRobflkrUCxCMqsXcEaN//9oACAECAAEFAt2f/9oACAEDAAEFAt2f/9oACAECAgY/Aln/2gAIAQMCBj8CWf/aAAgBAQEGPwL0vOzJgHXIMqRdYtXZfyVQO11QOqhvA/iBjQzNSsDUHUrGJxEbMuvstOzrESOQqX1QhIsey6mJSroyjMSMonfwc7LCYyiseuLPclD6RcjUIceEbRR+cWlJRzi5jZS+kXBsyEYhoj0//9oACAEBAwE/If8AO36pqW8FXn8R60viZ1ti4dbDc8s7oiKkGWW9mSLoamalZfbF+jtf6S3LAmWfdNhLDBFOE3nKJznhiMD5yILcEmypYCFBmPocEo04iGytlZIFMPyUr2+Fulq1wLqNxQUr4lsY6R5+8yBPLImf/wDnK/8AG/M//9oACAECAwE/Ifdn/9oACAEDAwE/Ifdn/9oADAMBAAIRAxEAABCSSSSSQAAAAAAAAAAAAQACAQAQCQAQAASAQQAAAAAAAAAAAACSSSSST//aAAgBAQMBPxC3bLdst2y3bLdst2y3bLdst2y3bLds+R+qK1lIKeQGCz4S0L4+Y8HkQcP2cRsa+Bx+4LRz64vLOIKYrQoA8w1mCwMG2LJosC6nmV+KrrP99Ni+qKDICgD4xK4jXI8+Rv8AsHGaRysu2s6lxGxOJQsvruU4fDuaZBvguAIEJ5BwLTx4/cLLEXBksTWZcdRi/KPzXoQSglLtR8/aJYphUuyJVK2W/jLX7luC+RVDfJDPpUoS2XkzFFcN8BzXLKW+J8AxkTjiA0KwAB4vG46ZKBWjy52/V0bO5Rs7lGzuUbO5Rs7lGzuUbO5Rs7lGzuUbO5Rs7lGnc//aAAgBAgMBPxD3Z//aAAgBAwMBPxD3Z//Z"
                    }), !$("#news_content").length) return !1
            }).on("click", ".load-more", function () {
                var i = this, a = $(i).data("id"), s = $(i).data("top"), n = $(i).find("svg");
                return !n.hasClass("loading") && "" != a && (n.addClass("loading"), void $.get("/api/scanMoreNews", {
                    news_id: a, is_top: s
                }).then(function (a) {
                    a.success ? ($("#news_list").append(A(a.data)), a.more_state ? ($(i).data("id", a.data[a.data.length - 1].id).data("top", a.data[a.data.length - 1].is_top), n.removeClass("loading")) : ($(i).html(e[t].bottom), $(i).data("id", "").data("top", ""))) : layer.msg(a.error || e[t].error)
                }).fail(function () {
                    layer.msg(e[t].error)
                }))
            }).on("mouseover", ".icon-weixin", function () {
                var A = $(this).data("id"), e = $(this).data("url");
                $(".qrcode" + A).qrcode({text: e, width: 105, height: 105})
            }).on("mouseout", ".icon-weixin", function () {
                var A = $(this).data("id");
                $(".qrcode" + A).html("")
            })
        }()
    }, 52: function (A, e) {
        !function (A, e, t, i) {
            var a = A(e);
            A.fn.lazyload = function (s) {
                function n() {
                    var e = 0;
                    r.each(function () {
                        var t = A(this);
                        if (!c.skip_invisible || t.is(":visible")) if (A.abovethetop(this, c) || A.leftofbegin(this, c)) ; else if (A.belowthefold(this, c) || A.rightoffold(this, c)) {
                            if (++e > c.failure_limit) return !1
                        } else t.trigger("appear"), e = 0
                    })
                }

                var o, r = this, c = {
                    threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: e,
                    data_attribute: "original", skip_invisible: !1, appear: null, load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
                return s && (i !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), i !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), A.extend(c, s)), o = c.container === i || c.container === e ? a : A(c.container), 0 === c.event.indexOf("scroll") && o.bind(c.event, function () {
                    return n()
                }), this.each(function () {
                    var e = this, t = A(e);
                    e.loaded = !1, t.attr("src") !== i && t.attr("src") !== !1 || t.is("img") && t.attr("src", c.placeholder), t.one("appear", function () {
                        if (!this.loaded) {
                            if (c.appear) {
                                var i = r.length;
                                c.appear.call(e, i, c)
                            }
                            A("<img />").bind("load", function () {
                                var i = t.attr("data-" + c.data_attribute);
                                t.hide(), t.is("img") ? t.attr("src", i) : t.css("background-image", "url('" + i + "')"), t[c.effect](c.effect_speed), e.loaded = !0;
                                var a = A.grep(r, function (A) {
                                    return !A.loaded
                                });
                                if (r = A(a), c.load) {
                                    var s = r.length;
                                    c.load.call(e, s, c)
                                }
                            }).attr("src", t.attr("data-" + c.data_attribute))
                        }
                    }), 0 !== c.event.indexOf("scroll") && t.bind(c.event, function () {
                        e.loaded || t.trigger("appear")
                    })
                }), a.bind("resize", function () {
                    n()
                }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && a.bind("pageshow", function (e) {
                    e.originalEvent && e.originalEvent.persisted && r.each(function () {
                        A(this).trigger("appear")
                    })
                }), A(t).ready(function () {
                    n()
                }), this
            }, A.belowthefold = function (t, s) {
                var n;
                return n = s.container === i || s.container === e ? (e.innerHeight ? e.innerHeight : a.height()) + a.scrollTop() : A(s.container).offset().top + A(s.container).height(), n <= A(t).offset().top - s.threshold
            }, A.rightoffold = function (t, s) {
                var n;
                return n = s.container === i || s.container === e ? a.width() + a.scrollLeft() : A(s.container).offset().left + A(s.container).width(), n <= A(t).offset().left - s.threshold
            }, A.abovethetop = function (t, s) {
                var n;
                return n = s.container === i || s.container === e ? a.scrollTop() : A(s.container).offset().top, n >= A(t).offset().top + s.threshold + A(t).height()
            }, A.leftofbegin = function (t, s) {
                var n;
                return n = s.container === i || s.container === e ? a.scrollLeft() : A(s.container).offset().left, n >= A(t).offset().left + s.threshold + A(t).width()
            }, A.inviewport = function (e, t) {
                return !(A.rightoffold(e, t) || A.leftofbegin(e, t) || A.belowthefold(e, t) || A.abovethetop(e, t))
            }, A.extend(A.expr[":"], {
                "below-the-fold": function (e) {
                    return A.belowthefold(e, {threshold: 0})
                }, "above-the-top": function (e) {
                    return !A.belowthefold(e, {threshold: 0})
                }, "right-of-screen": function (e) {
                    return A.rightoffold(e, {threshold: 0})
                }, "left-of-screen": function (e) {
                    return !A.rightoffold(e, {threshold: 0})
                }, "in-viewport": function (e) {
                    return A.inviewport(e, {threshold: 0})
                }, "above-the-fold": function (e) {
                    return !A.belowthefold(e, {threshold: 0})
                }, "right-of-fold": function (e) {
                    return A.rightoffold(e, {threshold: 0})
                }, "left-of-fold": function (e) {
                    return !A.rightoffold(e, {threshold: 0})
                }
            })
        }(jQuery, window, document)
    }
}, [124]);