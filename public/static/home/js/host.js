!function e(t, n, o) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var h = "function" == typeof require && require;
                if (!a && h) return h(s, !0);
                if (r) return r(s, !0);
                throw new Error("Cannot find module '" + s + "'")
            }
            var c = n[s] = {exports: {}};
            t[s][0].call(c.exports, function (e) {
                var n = t[s][1][e];
                return i(n ? n : e)
            }, c, c.exports, e, t, n, o)
        }
        return n[s].exports
    }

    for (var r = "function" == typeof require && require, s = 0; s < o.length; s++) i(o[s]);
    return i
}({
    1: [function (e, t, n) {
        var o = function (e) {
            for (var t, n, o = 1, i = arguments.length; i > o; o++) {
                t = arguments[o];
                for (n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }
            return e
        };
        t.exports = o
    }, {}], 2: [function (e, t, n) {
        var o = e("./toDashed"), i = e("./ie8/forEach"), r = function (e, t) {
            var n, r;
            if (!e) throw new Error("Missing elm");
            return t = t || [], n = "data-", r = {}, i(t, function (t) {
                var i, s;
                i = n + o(t), s = e.getAttribute(i), /^(true|false)$/.test(s) && (s = "true" === s), /^\d+$/.test(s) && (s = parseInt(s, 10)), null !== s && (r[t] = s)
            }), r
        };
        t.exports = r
    }, {"./ie8/forEach": 5, "./toDashed": 8}], 3: [function (e, t, n) {
        var o = function (e, t, n) {
            var o;
            for (o in e) e.hasOwnProperty(o) && t.call(n, o, e[o])
        };
        t.exports = o
    }, {}], 4: [function (e, t, n) {
        var o = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
        t.exports = o
    }, {}], 5: [function (e, t, n) {
        var o = function (e, t, n) {
            var o, i;
            for (i = 0, o = e.length; o > i; i++) t.call(n, e[i])
        };
        t.exports = o
    }, {}], 6: [function (e, t, n) {
        var o = function (e, t, n) {
            var o = "on" + t;
            window.addEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent(o, n)
        };
        t.exports = o
    }, {}], 7: [function (e, t, n) {
        var o = function (e, t, n) {
            var o = "on" + t;
            window.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent(o, n)
        };
        t.exports = o
    }, {}], 8: [function (e, t, n) {
        var o = function (e) {
            var t;
            return e = e || "", t = /([A-Z])/g, e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            })
        };
        t.exports = o
    }, {}], 9: [function (e, t, n) {
        var o = function (e) {
            var t;
            return e = e || "", t = /([A-Z])/g, e.replace(/([A-Z])/g, function (e) {
                return "_" + e.toLowerCase()
            })
        };
        t.exports = o
    }, {}], 10: [function (e, t, n) {
        var o = {
            onload: 1,
            onunload: 1,
            onblur: 1,
            onchange: 1,
            onfocus: 1,
            onreset: 1,
            onselect: 1,
            onsubmit: 1,
            onabort: 1,
            onkeydown: 1,
            onkeypress: 1,
            onkeyup: 1,
            onclick: 1,
            ondblclick: 1,
            onmousedown: 1,
            onmousemove: 1,
            onmouseout: 1,
            onmouseover: 1,
            onmouseup: 1
        }, i = function (e) {
            var t, n;
            t = document, document.createEvent ? (n = document.createEvent("Events"), n.initEvent(e, !0, !0)) : document.createEventObject && (n = document.createEventObject(), n.eventType = e), n.eventName = e, t.dispatchEvent ? t.dispatchEvent(n) : t.fireEvent && o["on" + e] ? t.fireEvent("on" + n.eventType, n) : t[e] ? t[e]() : t["on" + e] && t["on" + e]()
        };
        t.exports = i
    }, {}], 11: [function (e, t, n) {
        function o() {
            if (this.KEYS = ["returnTo", "role", "theme", "token", "locale", "brandId", "authOrigin", "authDomain", "showMobileDeeplink", "mobileDeeplinkParams", "action"], this.elm = document.currentScript || document.querySelector('[src*="/auth/v2"]'), !this.elm) throw new Error("Could not find script tag for zendesk_auth");
            if (this.declarativeOptions = a(this.elm, this.KEYS), !this.declarativeOptions.authDomain) {
                var e;
                e = this.elm.getAttribute("src") || "", this.declarativeOptions.authDomain = e.replace(/\/auth\/v2.*/, "")
            }
            this.open = function (e) {
                var t, n;
                return e = e || {}, n || (t = s({}, this.declarativeOptions, e), n = new r(t), n.onDestroyed(function () {
                    n = void 0
                })), {
                    close: function () {
                        n.close()
                    }
                }
            }, this.declarativeOptions.action && this.open()
        }

        var i, r = e("./lib/Host"), s = e("./helpers/extend"), a = e("./helpers/fetchDeclarativeAttrs");
        i = new o, window.Zendesk = window.Zendesk || {}, window.Zendesk.Auth = function (e) {
            return i.open(e)
        }
    }, {"./helpers/extend": 1, "./helpers/fetchDeclarativeAttrs": 2, "./lib/Host": 14}], 12: [function (e, t, n) {
        var o = e("../helpers/forIn"), i = function () {
            this.element = document.createElement("div"), this.styles = {
                "-webkit-overflow-scrolling": "touch",
                overflow: "auto",
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                "z-index": 99999
            }, this.style()
        };
        i.prototype = {
            style: function () {
                var e = "";
                o(this.styles, function (t, n) {
                    e += [t, ":", n, "!important;"].join("")
                }), this.element.setAttribute("style", e)
            }, changeStyles: function (e) {
                e = e || {}, o(e, function (e, t) {
                    this.styles[e] = t
                }, this), this.style()
            }, destroy: function () {
                this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null
            }
        }, t.exports = i
    }, {"../helpers/forIn": 3}], 13: [function (e, t, n) {
        var o = function (e) {
            "string" == typeof e && (e = this.deserialize(e)), e = e || {}, this.type = e.type || "", this.data = e.data || {}
        };
        o.prototype = {
            serialize: function () {
                return JSON.stringify(this)
            }, deserialize: function (e) {
                return JSON.parse(e)
            }
        }, t.exports = o
    }, {}], 14: [function (e, t, n) {
        var o = e("./Iframe"), i = e("./Receiver"), r = e("../helpers/extend"), s = e("../helpers/triggerEvent"),
            a = e("../helpers/toUnderscore"), h = e("../helpers/ie8/forEach"), c = function (e) {
                e = e || {}, this.validParams = ["role", "returnTo", "theme", "token", "locale", "brandId", "authOrigin", "showMobileDeeplink", "mobileDeeplinkParams"], this.options = r({
                    action: "signin",
                    authDomain: "",
                    returnTo: window.location.href
                }, e), this.load()
            };
        c.prototype = {
            load: function () {
                this.frame || (this.frame = new o([this.options.authDomain, "/auth/v2/login/", this.options.action, "?", this.getParams()].join("")), this.receiver = new i(window, {acceptFromSource: this.frame.getWindow()}), this.receiver.on("auth:load_url", this.onLoadUrl, this), this.receiver.on("auth:goto_return_to", this.gotoReturnTo, this), this.receiver.on("auth:loaded", this.onLoaded, this), this.receiver.on("auth:close", this.close, this), this.receiver.on("auth:resize", this.onResize, this), s("auth:load"))
            }, close: function () {
                s("auth:close"), this.destroy.apply(this, arguments)
            }, getParams: function () {
                var e = [], t = decodeURIComponent(this.options.returnTo), n = t.match(/\/agent|oauth\//);
                return h(this.validParams, function (t) {
                    if (this.options.hasOwnProperty(t)) {
                        var n = a(t);
                        e.push(n + "=" + encodeURIComponent(this.options[t]))
                    }
                }, this), n && e.push("role=agent"), e.join("&")
            }, destroy: function () {
                this.frame.destroy(), this.receiver.destroy(), this.frame = void 0, this.receiver = void 0, this.onDestroyed.call(this)
            }, onDestroyed: function () {
            }, onResize: function (e) {
                var t = e.height, n = window.innerHeight || document.documentElement.clientHeight;
                t > 0 && this.frame.changeStyles({height: t + "px", "min-height": n + "px"})
            }, onLoadUrl: function (e) {
                this.close(), window.location.href = e.url
            }, gotoReturnTo: function () {
                window.location.href = this.options.returnTo
            }, onLoaded: function () {
                s("auth:loaded"), document.querySelector("body").scrollTop = 1
            }
        }, t.exports = c
    }, {
        "../helpers/extend": 1,
        "../helpers/ie8/forEach": 5,
        "../helpers/toUnderscore": 9,
        "../helpers/triggerEvent": 10,
        "./Iframe": 15,
        "./Receiver": 17
    }], 15: [function (e, t, n) {
        var o = e("./Container"), i = e("../helpers/extend"), r = e("../helpers/forIn"), s = function (e, t) {
            if (!e) throw new Error("src not provided");
            this.settings = i({
                src: e,
                autoLoad: !0,
                attachTo: "body"
            }, t), this.element = document.createElement("iframe"), this.element.setAttribute("scrolling", "no"), this.element.setAttribute("allowTransparency", !0), this.element.setAttribute("border", 0), this.element.setAttribute("frameborder", 0), this.container = (new o).element, this.styles = {
                "z-index": "99999",
                display: "block",
                "background-color": "transparent",
                border: "none",
                overflow: "hidden",
                visibility: "visible",
                margin: "0",
                padding: "0",
                "-webkit-tap-highlight-color": "transparent",
                width: "100%",
                height: "100%"
            }, this.settings.autoLoad && this.load()
        };
        s.prototype = {
            style: function () {
                var e = "";
                r(this.styles, function (t, n) {
                    e += [t, ":", n, "!important;"].join("")
                }), this.element.setAttribute("style", e)
            }, changeStyles: function (e) {
                e = e || {}, r(e, function (e, t) {
                    this.styles[e] = t
                }, this), this.style()
            }, attach: function () {
                var e = document.querySelector(this.settings.attachTo);
                e && (this.container.appendChild(this.element), e.appendChild(this.container))
            }, src: function () {
                this.element.src = this.settings.src
            }, load: function () {
                this.style(), this.attach(), this.src()
            }, getWindow: function () {
                return this.element.contentWindow
            }, destroy: function () {
                this.container.parentNode && this.container.parentNode.removeChild(this.container), this.container = null, this.element = null
            }
        }, t.exports = s
    }, {"../helpers/extend": 1, "../helpers/forIn": 3, "./Container": 12}], 16: [function (e, t, n) {
        function o() {
            this.events = {}
        }

        var i = e("../helpers/ie8/forEach");
        o.prototype = {
            on: function (e, t, n) {
                this.events[e] || (this.events[e] = []), this.events[e].push({callback: t, thisArg: n})
            }, emit: function (e, t) {
                var n = this.events[e] || [], o = this.events["*"] || [], r = o.concat(n);
                i(r, function (n) {
                    n.callback.call(n.thisArg, t, e)
                })
            }, destroy: function () {
                this.events = void 0
            }
        }, t.exports = o
    }, {"../helpers/ie8/forEach": 5}], 17: [function (e, t, n) {
        var o = e("./Evt"), i = e("./Mediator"), r = e("../helpers/extend"), s = e("../helpers/ie8/bind"),
            a = e("../helpers/ie8/on"), h = e("../helpers/ie8/off"), c = function (e, t) {
                if (!e) throw new Error("missing target");
                this.events = {}, this.target = e, this.settings = r({acceptFromSource: null}, t || {}), this.onMessage = s(this.onMessage, this), a(this.target, "message", this.onMessage), this.mediator = new i
            };
        c.prototype = {
            onMessage: function (e) {
                if (e.source === this.settings.acceptFromSource) {
                    var t = new o(e.data);
                    this.mediator.emit(t.type, t.data)
                }
            }, on: function () {
                this.mediator.on.apply(this.mediator, arguments)
            }, destroy: function () {
                h(this.target, "message", this.onMessage), this.mediator.destroy(), this.mediator = void 0, this.settings = void 0, this.target = void 0, this.events = void 0
            }
        }, t.exports = c
    }, {
        "../helpers/extend": 1,
        "../helpers/ie8/bind": 4,
        "../helpers/ie8/off": 6,
        "../helpers/ie8/on": 7,
        "./Evt": 13,
        "./Mediator": 16
    }]
}, {}, [11]);