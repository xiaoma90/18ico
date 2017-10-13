webpackJsonp([8], {
    11: function(e, t) {
        function a(e, t) {
            var a, i = document.createElement(e || "div");
            for (a in t) i[a] = t[a];
            return i
        }

        function i(e) {
            for (var t = 1, a = arguments.length; t < a; t++) e.appendChild(arguments[t]);
            return e
        }

        function s(e, t, a, i) {
            var s = ["opacity", t, ~~(100 * e), a, i].join("-"),
                n = .01 + a / i * 100,
                r = Math.max(1 - (1 - e) / t * (100 - n), e),
                o = c.substring(0, c.indexOf("Animation")).toLowerCase(),
                l = o && "-" + o + "-" || "";
            return p[s] || (u.insertRule("@" + l + "keyframes " + s + "{0%{opacity:" + r + "}" + n + "%{opacity:" + e + "}" + (n + .01) + "%{opacity:1}" + (n + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + r + "}}", 0), p[s] = 1), s
        }

        function n(e, t) {
            var a, i, s = e.style;
            if (void 0 !== s[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < d.length; i++)
                if (a = d[i] + t, void 0 !== s[a]) return a
        }

        function r(e, t) {
            for (var a in t) e.style[n(e, a) || a] = t[a];
            return e
        }

        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a) void 0 === e[i] && (e[i] = a[i])
            }
            return e
        }

        function l(e) {
            for (var t = {
                    x: e.offsetLeft,
                    y: e.offsetTop
                }; e = e.offsetParent;) t.x += e.offsetLeft, t.y += e.offsetTop;
            return t
        }
        var c, d = ["webkit", "Moz", "ms", "O"],
            p = {},
            u = function() {
                var e = a("style");
                return i(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
            }(),
            m = {
                lines: 12,
                length: 7,
                width: 5,
                radius: 10,
                rotate: 0,
                color: "#000",
                speed: 1,
                trail: 100,
                opacity: .25,
                fps: 20,
                zIndex: 2e9,
                className: "spinner",
                top: "auto",
                left: "auto"
            },
            v = function f(e) {
                return this.spin ? void(this.opts = o(e || {}, f.defaults, m)) : new f(e)
            };
        v.defaults = {}, o(v.prototype, {
            spin: function(e) {
                this.stop();
                var t, i, s = this,
                    n = s.opts,
                    o = s.el = r(a(0, {
                        className: n.className
                    }), {
                        position: "relative",
                        zIndex: n.zIndex
                    }),
                    d = n.radius + n.length + n.width;
                if (e && (e.insertBefore(o, e.firstChild || null), i = l(e), t = l(o), r(o, {
                        left: ("auto" == n.left ? i.x - t.x + (e.offsetWidth >> 1) : n.left + d) + "px",
                        top: ("auto" == n.top ? i.y - t.y + (e.offsetHeight >> 1) : n.top + d) + "px"
                    })), o.setAttribute("aria-role", "progressbar"), s.lines(o, s.opts), !c) {
                    var p = 0,
                        u = n.fps,
                        m = u / n.speed,
                        v = (1 - n.opacity) / (m * n.trail / 100),
                        f = m / n.lines;
                    ! function h() {
                        p++;
                        for (var e = n.lines; e; e--) {
                            var t = Math.max(1 - (p + e * f) % m * v, n.opacity);
                            s.opacity(o, n.lines - e, t, n)
                        }
                        s.timeout = s.el && setTimeout(h, ~~(1e3 / u))
                    }()
                }
                return s
            },
            stop: function() {
                var e = this.el;
                return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
            },
            lines: function(e, t) {
                function n(e, i) {
                    return r(a(), {
                        position: "absolute",
                        width: t.length + t.width + "px",
                        height: t.width + "px",
                        background: e,
                        boxShadow: i,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / t.lines * l + t.rotate) + "deg) translate(" + t.radius + "px,0)",
                        borderRadius: (t.width >> 1) + "px"
                    })
                }
                for (var o, l = 0; l < t.lines; l++) o = r(a(), {
                    position: "absolute",
                    top: 1 + ~(t.width / 2) + "px",
                    transform: t.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: t.opacity,
                    animation: c && s(t.opacity, t.trail, l, t.lines) + " " + 1 / t.speed + "s linear infinite"
                }), t.shadow && i(o, r(n("#000", "0 0 4px #000"), {
                    top: "2px"
                })), i(e, i(o, n(t.color, "0 0 1px rgba(0,0,0,.1)")));
                return e
            },
            opacity: function(e, t, a) {
                t < e.childNodes.length && (e.childNodes[t].style.opacity = a)
            }
        }), ! function() {
            function e(e, t) {
                return a("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
            }
            var t = r(a("group"), {
                behavior: "url(#default#VML)"
            });
            !n(t, "transform") && t.adj ? (u.addRule(".spin-vml", "behavior:url(#default#VML)"), v.prototype.lines = function(t, a) {
                function s() {
                    return r(e("group", {
                        coordsize: c + " " + c,
                        coordorigin: -l + " " + -l
                    }), {
                        width: c,
                        height: c
                    })
                }

                function n(t, n, o) {
                    i(p, i(r(s(), {
                        rotation: 360 / a.lines * t + "deg",
                        left: ~~n
                    }), i(r(e("roundrect", {
                        arcsize: 1
                    }), {
                        width: l,
                        height: a.width,
                        left: a.radius,
                        top: -a.width >> 1,
                        filter: o
                    }), e("fill", {
                        color: a.color,
                        opacity: a.opacity
                    }), e("stroke", {
                        opacity: 0
                    }))))
                }
                var o, l = a.length + a.width,
                    c = 2 * l,
                    d = 2 * -(a.width + a.length) + "px",
                    p = r(s(), {
                        position: "absolute",
                        top: d,
                        left: d
                    });
                if (a.shadow)
                    for (o = 1; o <= a.lines; o++) n(o, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (o = 1; o <= a.lines; o++) n(o);
                return i(t, p)
            }, v.prototype.opacity = function(e, t, a, i) {
                var s = e.firstChild;
                i = i.shadow && i.lines || 0, s && t + i < s.childNodes.length && (s = s.childNodes[t + i], s = s && s.firstChild, s = s && s.firstChild, s && (s.opacity = a))
            }) : c = n(t, "animation")
        }(), e.exports = v
    },
    118: function(e, t, a) {
        ! function() {
            function e() {
                $.get("/api/getPersonMsg").then(function(e) {
                    if (e.success) {
                        e.data.user_type ? d() : layer.confirm(z[L].no_auth, {
                            btn: [z[L].ok]
                        }, function() {
                            window.location.href = "/user/identity"
                        });
                        var t = $("#email");
                        $("#username").html(e.data.account), 0 == e.data.lg_email_state ? t.parent().append('<a href="/user/home" class="goto-auth">' + z[L].unauth + "</a>") : 2 == e.data.lg_email_state && t.parent().append('<a href="/user/home" class="goto-auth">' + z[L].wait_auth + "</a>"), e.data.verify_state && ($(".identify-name").html(e.data.identify_name), $(".identify-code").html(e.data.identify_code)), e.data.country_name && ($(".person-country-txt").html(e.data.country_name + "(" + e.data.country_name_en + ")"), $('input[name="person_id"]').val(e.data.person_id)), "" != e.data.phone && ($("#phone").replaceWith('<span id="phone">' + e.data.phone + "</span>"), $(".is-show-phone-verify").remove()), 2 == e.data.user_type ? $(".is-show-gender").remove() : ($(".gender").find("span").removeClass("active"), 1 == e.data.gender ? $(".gender-male").addClass("active") : $(".gender-female").addClass("active")), t.html(e.data.email), $("#address").val(e.data.address)
                    } else alert(e.error || z[L].error)
                })
            }

            function t() {
                $.get("/api/getCountry").then(function(e) {
                    if (e.success) {
                        for (var t = '<li data-val="">' + z[L].select_country + "</li>", a = 0; a < e.data.length; a++) t += '<li data-val="' + e.data[a].id + '">' + e.data[a].name + "(" + e.data[a].name_en + ")</li>";
                        $(".country-list ul").html(t)
                    } else alert(e.error || z[L].error)
                })
            }

            function i(e) {
                $.get("/api/getItemBaseMsg", {
                    item_id: e,
                    language: E
                }).then(function(e) {
                    $("#name").val(e.data.name), $(".pro-stage-txt").html(e.data.progess_name), $('input[name="progess_id"]').val(e.data.progess_id), $("#company_name").val(e.data.company_name), $("#person_name").val(e.data.person_name), $(".pro-country-txt").html(e.data.country_name), $('input[name="country_id"]').val(e.data.country_id), $("#office_address").val(e.data.office_address), $("#employees_count").val(e.data.employees_count), $("#join_count").val(e.data.join_count), $(".finance-stage-txt").html(e.data.financing_name), $('input[name="financing_id"]').val(e.data.financing_id), $("#introduction").val(e.data.introduction), $("#video_address").val(e.data.video_address);
                    for (var t = "", a = 0; a < e.data.pic_address.length; a++) t += '<span class="preview-span" data-id="' + e.data.pic_address[a].id + '" data-url="' + e.data.pic_address[a].path + '"><a href="javascript:" title="delete" class="img-delete"><svg><use xlink:href="#icon-delete"></use></svg></a><img src="' + e.data.pic_address[a].path + '" alt="" class="preview-img"></span>';
                    $(".img-preview").append(t);
                    var i = '<span class="mask-bg"><a href="javascript:" class="svg-left"><input type="file" name="file" class="file-upload"><svg height="27" width="27"><use xlink:href="#icon-replace"></use></svg></a><a href="javascript:" class="svg-right attachment-clear"><svg height="27" width="27"><use xlink:href="#icon-clear"></use></svg></a></span>';
                    if ("" != e.data.white_paper) {
                        var s = w(e.data.white_paper.file_type);
                        $(".upload-white_paper").html(i).addClass(s + " already").data("id", e.data.white_paper.id).data("url", e.data.white_paper.path).data("name", e.data.white_paper.name).parents(".upload-file-item").addClass("border-line").find(".file-upload").attr("title", e.data.white_paper.name)
                    }
                    if ("" != e.data.item_plan) {
                        var n = w(e.data.item_plan.file_type);
                        $(".upload-item_plan").html(i).addClass(n + " already").data("id", e.data.item_plan.id).data("url", e.data.item_plan.path).data("name", e.data.item_plan.name).parents(".upload-file-item").addClass("border-line").find(".file-upload").attr("title", e.data.item_plan.name)
                    }
                    if ("" != e.data.item_others) {
                        var r = w(e.data.item_others.file_type);
                        $(".upload-item_others").html(i).addClass(r + " already").data("id", e.data.item_others.id).data("url", e.data.item_others.path).data("name", e.data.item_others.name).parents(".upload-file-item").addClass("border-line").find(".file-upload").attr("title", e.data.item_others.name)
                    }
                })
            }

            function s(e, t, a, i) {
                $.get("/api/getItemDetailMsg", {
                    item_id: e,
                    language: E
                }).then(function(e) {
                    e.success && (t.setContent(e.data.details), a.setContent(e.data.ico_rules), i.setContent(e.data.team_info))
                })
            }

            function n(e) {
                $.get("/api/getItemPrograms", {
                    item_id: e,
                    language: E
                }).then(function(e) {
                    if (e.success) {
                        var t = "";
                        e.data.length < 1 ? t = '<li class="pro-plan-item active"><a href="javascript:" class="plan-list-a">' + z[L].payback1 + "</a></li>" : $("#plan_id").val(e.data[0].id);
                        for (var a = 0; a < e.data.length; a++) t += '<li class="pro-plan-item  ' + (0 == a ? "active" : "") + '"><a href="javascript:" class="plan-list-a" data-id="' + e.data[a].id + '">' + z[L].payback + U[L][a] + "</a></li>";
                        $(".launch-plan-left-list").html(t), $("#describe").val(e.data[0].describe), $(".money-type").text(e.data[0].limit_curtype_state), "BTC" == e.data[0].limit_curtype_state ? ($(".curtype-btc").addClass("active"), $(".curtype-eth, .curtype-etc").removeClass("active")) : "ETH" == e.data[0].limit_curtype_state ? ($(".curtype-eth").addClass("active"), $(".curtype-btc, .curtype-etc").removeClass("active")) : ($(".curtype-etc").addClass("active"), $(".curtype-btc, .curtype-eth").removeClass("active")), e.data[0].limit_money_state ? ($(".is-show-money").removeClass("hide"), $(".money-astrict").addClass("active"), $(".money-custom").removeClass("active"), $("#limit_money").val(e.data[0].limit_money)) : ($(".is-show-money").addClass("hide"), $(".money-astrict").removeClass("active"), $(".money-custom").addClass("active")), e.data[0].target_money_state ? ($(".is-show-money").removeClass("hide"), $("#target_money").val(e.data[0].target_money)) : $(".is-show-money").addClass("hide"), e.data[0].limit_persons_state && ($(".is-show-quota").removeClass("hide"), $(".quota-no").removeClass("active"), $(".quota-yes").addClass("active"), $("#limit_persons").val(e.data[0].limit_persons)), e.data[0].limit_support_state && ($(".is-show-buy").removeClass("hide"), $(".buy-no").removeClass("active"), $(".buy-yes").addClass("active"), $("#limit_support").val(e.data[0].limit_support)), e.data[0].post_state && ($(".post-no").removeClass("active"), $(".post-yes").addClass("active")), $("#report_day").val(e.data[0].report_day)
                    }
                })
            }

            function r(e) {
                $.get("/api/getProgramById", {
                    program_id: e,
                    language: E
                }).then(function(e) {
                    e.success && ($("#describe").val(e.data.describe), $("#report_day").val(e.data.report_day), $(".money-type").text(e.data.limit_curtype_state), "BTC" == e.data.limit_curtype_state ? ($(".curtype-btc").addClass("active"), $(".curtype-eth, .curtype-etc").removeClass("active")) : "ETH" == e.data.limit_curtype_state ? ($(".curtype-eth").addClass("active"), $(".curtype-btc, .curtype-etc").removeClass("active")) : ($(".curtype-etc").addClass("active"), $(".curtype-btc, .curtype-eth").removeClass("active")), 0 == e.data.limit_money_state ? ($(".money-custom").addClass("active"), $(".money-astrict").removeClass("active"), $(".is-show-money").addClass("hide")) : ($(".is-show-money").removeClass("hide"), $(".money-astrict").addClass("active"), $(".money-custom").removeClass("active"), $("#limit_money").val(e.data.limit_money)), 0 == e.data.limit_persons_state ? ($(".quota-no").addClass("active"), $(".quota-yes").removeClass("active")) : ($(".quota-no").removeClass("active"), $(".quota-yes").addClass("active"), $(".is-show-quota").removeClass("hide"), $("#limit_persons").val(e.data.limit_persons)), 0 == e.data.limit_support_state ? ($(".buy-no").addClass("active"), $(".buy-yes").removeClass("active")) : ($(".buy-no").removeClass("active"), $(".buy-yes").addClass("active"), $(".is-show-buy").removeClass("hide"), $("#limit_support").val(e.data.limit_support)), 0 == e.data.post_state ? ($(".post-no").addClass("active"), $(".post-yes").removeClass("active")) : ($(".post-no").removeClass("active"), $(".post-yes").addClass("active")))
                })
            }

            function o(e) {
                $.get("/api/getItemContactsMsg", {
                    item_id: e,
                    language: E
                }).then(function(e) {
                    e.success && ($("#funding_day").val(e.data.funding_day), $("#target_money").val(e.data.target_money), $("#contacts").val(e.data.contacts), $("#contacts_job").val(e.data.contacts_job), $("#contacts_phone").val(e.data.contacts_phone), $("#apply_starttime").val(e.data.apply_starttime), $(".moneytype-txt").text(e.data.limit_curtype_state), $('input[name="target_money_state"]').val(e.data.target_money_state), $('input[name="limit_curtype_state"]').val(e.data.limit_curtype_state), 0 == e.data.target_money_state ? ($("#target_money").addClass("hide"), $(".limittype-txt").text(z.cur_lang.unlimited)) : $(".limittype-txt").text(z.cur_lang.limited))
                })
            }

            function l() {
                $.get("/api/getItemProgess").then(function(e) {
                    if (e.success) {
                        for (var t = '<li data-val="">' + z[L].select_stage + "</li>", a = 0; a < e.data.length; a++) t += '<li data-val="' + e.data[a].id + '">' + e.data[a].name + "</li>";
                        $(".pro-stage-list").html(t)
                    } else alert(e.error || z[L].error)
                })
            }

            function c() {
                $.get("/api/getItemFinancing").then(function(e) {
                    if (e.success) {
                        for (var t = '<li data-val="">' + z[L].select_stage + "</li>", a = 0; a < e.data.length; a++) t += '<li data-val="' + e.data[a].id + '">' + e.data[a].name + "</li>";
                        $(".finance-stage-list").html(t)
                    } else alert(e.error || z[L].error)
                })
            }

            function d() {
                var e = '<svg class="svg-warning" version="1.1" id="" x="0px" y="0px"width="36px" height="36px" viewBox="0 0 36 35.99" ><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#424E98" d="M34.581,11c-0.946-2.188-2.234-4.096-3.863-5.723c-1.63-1.628-3.536-2.914-5.716-3.859S20.489,0,18.001,0c-2.49,0-4.823,0.472-7.003,1.418S6.915,3.649,5.285,5.277C3.655,6.905,2.368,8.813,1.42,11C0.472,13.19,0,15.525,0,18.011c0,2.485,0.472,4.817,1.42,6.993c0.948,2.177,2.235,4.081,3.865,5.709c1.628,1.625,3.533,2.913,5.713,3.859c2.18,0.945,4.513,1.417,7.003,1.417c2.488,0,4.821-0.472,7-1.417c2.18-0.946,4.086-2.234,5.716-3.859c1.627-1.628,2.917-3.532,3.863-5.709C35.528,22.829,36,20.497,36,18.011C36.002,15.525,35.528,13.19,34.581,11L34.581,11L34.581,11L34.581,11z M18.001,29.619c-1.126,0-2.038-0.911-2.038-2.035s0.912-2.035,2.038-2.035s2.038,0.911,2.038,2.035S19.127,29.619,18.001,29.619L18.001,29.619L18.001,29.619z M20.039,21.159c0,1.124-0.912,2.035-2.038,2.035s-2.038-0.911-2.038-2.035V8.407c0-1.126,0.912-2.036,2.038-2.036s2.038,0.91,2.038,2.036V21.159L20.039,21.159L20.039,21.159z"/></g></svg>';
                $.get("/api/getUserItemsState", {
                    language: E
                }).then(function(t) {
                    t.success || layer.confirm("", {
                        skin: "tips_dialog",
                        title: [e + z[L].tips],
                        content: '<p style="font-size: 16px;color:#0b0b0b;line-height: 2em;padding: 0 12px;width:300px;text-align: center;">' + t.error + "</p>",
                        shade: [.7, "#000"],
                        area: ["510"],
                        btn: [z[L].sure, z[L].cancel],
                        btn2: function() {
                            window.history.back()
                        }
                    })
                })
            }

            function p(e, t) {
                var a = $("#phone"),
                    i = $(".gender"),
                    s = $("#address");
                if ("" == s.val()) return q(s, z[L].empty_address), !1;
                var n = $("#information-form").serialize();
                if (n += "&type=2", n += "&language=" + E, a.length) {
                    var r = a.val() || a.text();
                    if ("" == r) return q(a, z[L].empty_phone), !1;
                    n += "&phone=" + r
                }
                i.length && (n += "&gender=" + i.find(".active").data("id")), $.post("/api/saveUserMsg?", n).then(function(a) {
                    a.success ? (F(e, a.error || z[L].save_success), $("#nav_item_second").data("auth", 1), "function" == typeof t && setTimeout(t, 1e3)) : q(e, a.error || z[L].save_fail)
                }).fail(function(t) {
                    var a = t.responseJSON;
                    q(e, a.error || z[L].error);
                    for (var i = 0; i < a.data.length; i++) q($("#" + a.data[i].errorFiled), a.data[i].errorCase || z[L].error)
                })
            }

            function u(e, t) {
                var a = $(".upload-white_paper"),
                    i = $(".upload-item_plan"),
                    s = $(".upload-item_others"),
                    n = [];
                return $(".preview-span").each(function() {
                    n.push($(this).data("url"))
                }), n.length ? void $.post("/api/saveItem", {
                    name: $("#name").val(),
                    progess_id: $('input[name="progess_id"]').val(),
                    person_name: $("#person_name").val() || "",
                    company_name: $("#company_name").val() || "",
                    country_id: $('input[name="country_id"]').val(),
                    office_address: $("#office_address").val(),
                    join_count: $("#join_count").val() || "",
                    employees_count: $("#employees_count").val() || "",
                    financing_id: $('input[name="financing_id"]').val(),
                    introduction: $("#introduction").val(),
                    video_address: $("#video_address").val(),
                    pic_address: n.join(";"),
                    white_pager: a.data("url") || "",
                    white_pager_name: a.data("name") || "",
                    item_plan: i.data("url") || "",
                    item_plan_name: i.data("name") || "",
                    item_others: s.data("url") || "",
                    item_others_name: s.data("name") || "",
                    id: O || "",
                    language: E
                }).then(function(a) {
                    a.success ? (F(e, a.error || z[L].save_success), O = a.item_id, $("#nav_item_third").data("auth", 1), "function" == typeof t && setTimeout(t, 1e3)) : q(e, a.error || z[L].error)
                }).fail(function(t) {
                    var a = t.responseJSON;
                    N(a.data[0].errorFiled), q(e, a.error || z[L].error);
                    for (var i = 0; i < a.data.length; i++) q($("#" + a.data[i].errorFiled), a.data[i].errorCase || z[L].error)
                }) : (q($("#pic_address"), z[L].less1), !1)
            }

            function m(e, t) {
                var a = "",
                    i = A.getContent(),
                    s = A.getContentLength(!0),
                    n = B.getContent(),
                    r = B.getContentLength(!0),
                    o = J.getContent(),
                    l = J.getContentLength(!0);
                return s > 5e4 || r > 5e4 || l > 5e4 ? void q(e, z[L].number_limit) : (a = "detail=" + encodeURIComponent(i), a += "&ico_rules=" + encodeURIComponent(n), a += "&team_info=" + encodeURIComponent(o), a += "&language=" + E, null != O && (a += "&item_id=" + O), void $.post("/api/saveItemDetail", a).then(function(a) {
                    a.success ? (F(e, a.error || z[L].save_success), $("#nav_item_fourth").data("auth", 1), "function" == typeof t && setTimeout(t, 1e3)) : q(e, a.error || z[L].save_fail)
                }).fail(function(t) {
                    var a = t.responseJSON;
                    N(a.data[0].errorFiled), q(e, a.error || z[L].error);
                    for (var i = 0; i < a.data.length; i++) q($("#" + a.data[i].errorFiled), a.data[i].errorCase || z[L].error)
                }))
            }

            function v(e, t) {
                if (null == O) return layer.msg(z[L].no_project), !1;
                var a = $("#limit_money"),
                    i = $("#describe"),
                    s = $("#report_day");
                if (!$(".is-show-money").hasClass("hide") && "" == a.val()) return q(a, z[L].empty_invest), !1;
                if ("" == i.val()) return q(i, z[L].empty_intro), !1;
                if ("" == s.val()) return q(s, z[L].empty_time), !1;
                var n = $("#pro_plan_form").serialize();
                n += "&language=" + E;
                var r = $(".curtype_limit").find(".active").data("id"),
                    o = $(".money_limit").find(".active").data("id"),
                    l = $(".quota_limit").find(".active").data("id"),
                    c = $(".buy_limit").find(".active").data("id"),
                    d = $(".free_shipping").find(".active").data("id"),
                    p = $("#plan_id");
                n += "&item_id=" + O + "&limit_curtype_state=" + r + "&limit_money_state=" + o + "&limit_persons_state=" + l + "&limit_support_state=" + c + "&post_state=" + d, o && (n += "&limit_money=" + $("#limit_money").val()), l && (n += "&limit_persons=" + $("#limit_persons").val()), c && (n += "&limit_support=" + $("#limit_support").val()), "" != p.val() && (n += "&id=" + p.val()), $.post("/api/saveItemProgram", n).then(function(a) {
                    a.success ? (F(e, a.error || z[L].save_success), p.val(a.data), $(".pro-plan-item.active").find(".plan-list-a").data("id", a.data), $(".launch-plan-save").removeClass("high-light"), $("#nav_item_fifth").data("auth", 1), "function" == typeof t && setTimeout(t, 1e3)) : q(e, a.error || z[L].save_fail)
                }).fail(function(t) {
                    var a = t.responseJSON;
                    N(a.data[0].errorFiled), q(e, a.error || z[L].error);
                    for (var i = 0; i < a.data.length; i++) q($("#" + a.data[i].errorFiled), a.data[i].errorCase || z[L].error)
                })
            }

            function f(e, t) {
                return null == O ? (layer.msg(z[L].no_project), !1) : void $.post("/api/saveProgram", {
                    language: E,
                    item_id: O
                }).then(function(a) {
                    a.success ? (F(e, a.error || z[L].save_success), $("#nav_item_fifth").data("auth", 1), "function" == typeof t && setTimeout(t, 1e3)) : q(e, a.error || z[L].save_fail)
                }).fail(function(t) {
                    var a = t.responseJSON;
                    N(a.data[0].errorFiled), q(e, a.error || z[L].error);
                    for (var i = 0; i < a.data.length; i++) q($("#" + a.data[i].errorFiled), a.data[i].errorCase || z[L].error)
                })
            }

            function h() {
                var e = $("#preview_save_btn");
                if (!y()) return !1;
                var t = $(".launch-submit-form").serialize();
                t += "&language=" + E, null != O && (t += "&item_id=" + O), $.post("/api/saveReview", t).then(function(t) {
                    t.success ? F(e, t.error || z[L].save_success) : q(e, t.error || z[L].save_fail)
                }).fail(function(t) {
                    var a = t.responseJSON;
                    N(a.data[0].errorFiled), q(e, a.error || z[L].error);
                    for (var i = 0; i < a.data.length; i++) q($("#" + a.data[i].errorFiled), a.data[i].errorCase || z[L].error)
                })
            }

            function _() {
                var e = $("#pro_submit_btn");
                if (null == O) return layer.msg(z[L].no_project), !1;
                var t = $(".ico-agree");
                if (t.hasClass("unchecked")) return q(t, z[L].read), !1;
                if (!y()) return !1;
                var a = $(".launch-submit-form").serialize();
                a += "&language=" + E, null != O && (a += "&item_id=" + O), $.post("/api/submitItem", a).then(function(t) {
                    t.success ? F(e, t.error || z[L].submit_success, function() {
                        window.location.href = "/pitch/index/" + O
                    }) : q(e, t.error || z[L].submit_fail)
                }).fail(function(t) {
                    var a = t.responseJSON;
                    N(a.data[0].errorFiled), q(e, a.error || z[L].error);
                    for (var i = 0; i < a.data.length; i++) q($("#" + a.data[i].errorFiled), a.data[i].errorCase || z[L].error)
                })
            }

            function y() {
                var e = !0,
                    t = $("#funding_day"),
                    a = $("#target_money_state"),
                    i = $("#target_money"),
                    s = $("#contacts"),
                    n = $("#contacts_job"),
                    r = $("#contacts_phone"),
                    o = $("#apply_starttime");
                if ("" == t.val()) return q(t, z[L].empty_days), e = !1, !1;
                if (1 == a.val()) {
                    if ("" == i.val()) return q(i, z[L].empty_money), e = !1, !1
                } else {
                    if ("" == s.val()) return q(s, z[L].empty_contact), e = !1, !1;
                    if ("" == n.val()) return q(n, z[L].empty_job), e = !1, !1;
                    if ("" == r.val()) return q(r, z[L].empty_tel), e = !1, !1;
                    if (!/^[0-9]*$/.test(r.val())) return q(r, z[L].phone_format), e = !1, !1;
                    if ("" == o.val()) return q(o, z[L].empty_day), e = !1, !1
                }
                return e
            }

            function g(e, t, a) {
                var i = null,
                    s = a.parents(".uploadForm"),
                    n = s.serialize();
                s.ajaxSubmit({
                    type: "POST",
                    url: t,
                    dataType: "json",
                    data: n,
                    timeout: 12e4,
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    beforeSubmit: function() {
                        if ("picture" == e && "" == a.val()) return q($("#pic_address"), z[L].select_file), !1;
                        if ("file" == e && "" == a.val()) return q(a, z[L].select_file), !1;
                        var t = a.parents(".upload-file-item"),
                            s = $('<div class="loading-div">');
                        i = new M(R).spin(s[0]), t.append(s)
                    },
                    uploadProgress: function(e, t, a, i) {},
                    success: function(t) {
                        i.stop(), t.success ? "picture" == e ? C(t) : b(t, a) : layer.msg(t.error)
                    },
                    error: function(e) {
                        i.stop(), layer.msg(e.error || z[L].upload_error)
                    }
                })
            }

            function C(e) {
                if (e.success) {
                    var t = '<span class="preview-span" data-url="' + e.path + '"><a href="javascript:" title="delete" class="img-delete"><svg><use xlink:href="#icon-delete"></use></svg></a><img src="' + e.path + '" alt="" class="preview-img"></span>';
                    $(".img-preview").append(t)
                }
            }

            function b(e, t) {
                var a = '<span class="mask-bg"><a href="javascript:" class="svg-left"><input type="file" name="file" class="file-upload"><svg height="27" width="27"><use xlink:href="#icon-replace"></use></svg></a><a href="javascript:" class="svg-right attachment-clear"><svg height="27" width="27"><use xlink:href="#icon-clear"></use></svg></a></span>',
                    i = t.parents(".upload-file-button"),
                    s = t.parents(".upload-file-item"),
                    n = w(e.file_type);
                i.removeClass("sprite-item software-pdf software-doc software-xls software-ppt"), i.addClass(n + " already"), i.html(a), s.addClass("border-line"), i.find(".file-upload").attr("title", e.file_name), i.data("url", e.path).data("name", e.file_name)
            }

            function w(e) {
                var t = "";
                switch (e) {
                    case "pdf":
                        t = "sprite-item software-pdf";
                        break;
                    case "doc":
                    case "docx":
                        t = "sprite-item software-doc";
                        break;
                    case "xls":
                    case "xlsx":
                        t = "sprite-item software-xls";
                        break;
                    case "ppt":
                    case "pptx":
                        t = "sprite-item software-ppt"
                }
                return t
            }

            function x(e) {
                var t = $(".nav-list-" + e);
                $(".launch-part").hide(), $(".launch-part-" + e).show(), t.hasClass("active") || (t.addClass("active").removeClass("ready").siblings("li").removeClass("active").removeClass("ready"), t.prevAll("li").addClass("ready"))
            }

            function k() {
                $("#detail textarea").css("display", "none"), $("#introduction-editor").css("display", "none"), $("#ico-rules-editor").css("display", "none"), $("#team-info-editor").css("display", "none")
            }

            function T() {
                $("#limit_money").val(""), $("#describe").val(""), $("#report_day").val(""), $(".quota-no").addClass("active"), $(".quota-yes").removeClass("active"), $(".is-show-quota").addClass("hide"), $("#limit_persons").val(""), $(".buy-no").addClass("active"), $(".buy-yes").removeClass("active"), $(".is-show-buy").addClass("hide"), $("#limit_support").val(""), $(".post-no").addClass("active"), $(".post-yes").removeClass("active")
            }

            function j() {
                var e = $(".pro-plan-item"),
                    t = $(".pro-plan-item.active"),
                    a = t.find(".plan-list-a"),
                    i = t.prev(),
                    s = t.next();
                if (!(e.length > 1)) return layer.msg(z[L].least1), !1;
                var n = a.data("id");
                n ? $.get("/api/removeItemProgram", {
                    programId: n
                }).then(function(e) {
                    e.success ? (layer.msg(e.error || z[L].del_success), t.remove(), P(s, i)) : layer.msg(e.error || z[L].del_fail)
                }) : (t.remove(), P(s, i))
            }

            function I(e) {
                var t = e.parents(".upload-file-button"),
                    a = t.data("id"),
                    i = t.data("url");
                t.removeClass("sprite-item software-pdf software-doc software-xls software-ppt already");
                var s = '<input type="file" name="file" class="file-upload"><svg class="svg-center" height="34px" width="34px"><use xlink:href="#icon-add"></use></svg>';
                $.get("/api/deleteUploadFile", {
                    file_path: i,
                    id: a || ""
                }).then(function(e) {
                    e.success ? (layer.msg(e.error || z[L].del_success), t.html(s), t.data("url", "").data("name", "")) : layer.msg(e.error || z[L].del_fail)
                })
            }

            function P(e, t) {
                if (e.length) {
                    e.addClass("active");
                    var a = e.find(".plan-list-a").data("id");
                    T(), a ? ($("#plan_id").val(a), r(a)) : $("#plan_id").val("")
                } else if (t.length) {
                    t.addClass("active");
                    var i = t.find(".plan-list-a").data("id");
                    T(), i ? ($("#plan_id").val(i), r(i)) : $("#plan_id").val("")
                }
                $(".pro-plan-item").each(function(e) {
                    $(this).find(".plan-list-a").text(z[L].payback + U[L][e])
                })
            }

            function S(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                    a = window.location.search.substr(1).match(t);
                return null != a ? unescape(a[2]) : null
            }

            function q(e, t) {
                e.protipShow({
                    trigger: "sticky",
                    gravity: "top-left",
                    autoHide: 3e3,
                    target: "body",
                    title: t
                })
            }

            function F(e, t, a) {
                e.protipShow({
                    trigger: "sticky",
                    gravity: "top-right",
                    scheme: "leaf",
                    arrow: !1,
                    autoHide: 2e3,
                    target: "body",
                    title: t
                }), "function" == typeof a && setTimeout(a, 2e3)
            }

            function N(e) {
                $("html, body").animate({
                    scrollTop: $("#" + e).offset().top - 200
                }, 1e3)
            }
            var z = {
                    en: {
                        error: "Sorry, there was an unexpected error. Please try again.",
                        most3: "Up to 3 covers!",
                        remove_error: "Failed to remove cover",
                        empty_phone: "Please enter the phone number",
                        phone_format: "Phone number format error",
                        acquisition: "seconds after re acquisition",
                        get_code: "Get verification code",
                        most10: "Up to 10 payback",
                        payback: "Payback",
                        no_auth: "No authentication yet, please make the certification first.",
                        ok: "Ok",
                        unauth: "Mailbox not authenticated",
                        wait_auth: "Mailbox waiting for authentication",
                        select_country: "Select the country",
                        get_country: "Error getting countries",
                        payback1: "Payback one",
                        select_stage: "Select the stage",
                        empty_address: "Please enter the address",
                        save_success: "Save successfully",
                        save_fail: "Failed to save",
                        less1: "Upload at least 1 copies of the cover!",
                        no_project: "There was no project",
                        empty_invest: "Please enter the investment",
                        empty_intro: "Please enter the introduction",
                        empty_time: "Please enter the payback time",
                        read: "Please read and agree to The Project specification of the ICO365",
                        submit_success: "Submit successfully",
                        submit_fail: "Failed to submit",
                        empty_days: "Please enter the crowd funding days",
                        empty_money: "Please enter the goal",
                        empty_contact: "Please enter the contact",
                        empty_job: "Please enter the position",
                        empty_tel: "Please enter the Tel",
                        empty_day: "Please enter the starting time",
                        select_file: "Please select the file",
                        upload_error: "Failed to upload",
                        del_success: "Delete successfully",
                        del_fail: "Failed to delete",
                        least1: "At least one investment payback",
                        number_limit: "The number of words exceeds the limit",
                        tips: "Tips",
                        sure: "Continue",
                        cancel: "Cancel",
                        unlimited: "No Limited",
                        limited: "Limited"
                    },
                    "zh-CN": {
                        error: "抱歉，出现未知错误，请重试",
                        most3: "最多3张封面！",
                        remove_error: "移除图片出错",
                        empty_phone: "手机号码不能为空",
                        phone_format: "手机号码格式有误",
                        acquisition: "秒后重新获取",
                        get_code: "获取验证码",
                        most10: "最多只能添加十个回报",
                        payback: "回报",
                        no_auth: "您还没身份认证，请先进行认证。",
                        ok: "好的",
                        unauth: "邮箱未认证",
                        wait_auth: "邮箱等待认证",
                        select_country: "请选择国籍",
                        get_country: "获取国家列表出错啦！",
                        payback1: "回报一",
                        select_stage: "请选择阶段",
                        empty_address: "详细地址不能为空",
                        save_success: "保存成功",
                        save_fail: "保存失败",
                        less1: "至少上传1张封面图片！",
                        no_project: "当前无项目",
                        empty_invest: "投资金额不能为空",
                        empty_intro: "回报说明不能为空",
                        empty_time: "回报时间不能为空",
                        read: "请阅读并同意《18ICO项目协议》",
                        submit_success: "提交成功",
                        submit_fail: "提交失败",
                        empty_days: "ICO天数不能为空",
                        empty_money: "目标金额不能为空",
                        empty_contact: "联系人不能为空",
                        empty_job: "负责职位不能为空",
                        empty_tel: "联系电话不能为空",
                        empty_day: "申请天数不能为空",
                        select_file: "请选择文件",
                        upload_error: "上传出错",
                        del_success: "删除成功",
                        del_fail: "删除失败",
                        least1: "至少有一个投资回报",
                        number_limit: "字数超出限制",
                        tips: "温馨提示",
                        sure: "继续",
                        cancel: "取消",
                        unlimited: "不限",
                        limited: "限制"
                    }
                },
                L = "",
                M = a(11),
                O = S("id") || null,
                E = S("language") || 0,
                U = {
                    en: [" one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten"],
                    "zh-CN": ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]
                },
                A = UE.getEditor("introduction-editor", {
                    wordCount: !0,
                    maximumWords: 5e4
                }),
                B = UE.getEditor("ico-rules-editor", {
                    wordCount: !0,
                    maximumWords: 5e4
                }),
                J = UE.getEditor("team-info-editor", {
                    wordCount: !0,
                    maximumWords: 5e4
                }),
                R = {
                    lines: 10,
                    length: 0,
                    width: 10,
                    radius: 20,
                    scale: .25,
                    corners: 1,
                    color: "#424E98",
                    opacity: .25,
                    rotate: 0,
                    direction: 1,
                    speed: 1,
                    trail: 60,
                    fps: 20,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "0",
                    left: "0",
                    shadow: !1,
                    hwaccel: !1,
                    position: "absolute"
                };
            $(function() {
                L = $("html").attr("lang") || "zh-CN", $("#launch_nav").find("li.active").prevAll().addClass("ready"), t(), l(), c(), e(), 1 == E ? $(".language-txt").text("English") : $(".language-txt").text("中文版"), null != O && (i(O), s(O, A, B, J), n(O), o(O)), $.protip({
                    defaults: {
                        trigger: "sticky"
                    }
                })
            }).on("click", ".nav-item-step", function() {
                var e = $(this).parents("li"),
                    t = $(this).data("auth");
                if (!e.hasClass("active") && t) {
                    e.addClass("active").removeClass("ready").siblings("li").removeClass("active").removeClass("ready"), e.prevAll("li").addClass("ready");
                    var a = $(this).data("step");
                    $(".launch-part").hide(), $(".launch-part-" + a).show()
                }
            }).on("click", ".select-header", function() {
                $(".country-list").slideToggle()
            }).on("click", ".limittype-select-header", function() {
                $(".limittype-list").slideToggle()
            }).on("click", ".moneytype-select-header", function() {
                $(".moneytype-list").slideToggle()
            }).on("click", ".pro-select-header", function() {
                $(".pro-stage-list").slideToggle()
            }).on("click", ".finance-select-header", function() {
                $(".finance-stage-list").slideToggle()
            }).on("click", ".person-country-list li", function() {
                var e = $(this).data("val");
                $(".person-country-txt").html($(this).text()), $('input[name="person_id"]').val(e), $(".person-country-list").hide(), $(".filter-search").val("")
            }).on("click", ".pro-country-list li", function() {
                var e = $(this).data("val");
                $(".pro-country-txt").html($(this).text()), $('input[name="country_id"]').val(e), $(".pro-country-list").hide(), $(".filter-search").val("")
            }).on("click", ".limittype-list li", function() {
                var e = $(this).data("val");
                $(".limittype-txt").html($(this).text()), $('input[name="target_money_state"]').val(e), 0 == e ? ($("#target_money").addClass("hide"), $(".moneytype-select-header").removeClass("noborderleft"), $(".moneytype-list").removeClass("noborderleft")) : ($("#target_money").removeClass("hide"), $(".moneytype-select-header").addClass("noborderleft"), $(".moneytype-list").addClass("noborderleft")), $(".limittype-list").hide()
            }).on("click", ".moneytype-list li", function() {
                var e = $(this).data("val");
                $(".moneytype-txt").html($(this).text()), $('input[name="limit_curtype_state"]').val(e), $(".moneytype-list").hide()
            }).on("click", ".pro-stage-list li", function() {
                var e = $(this).data("val");
                $(".pro-stage-txt").html($(this).text()), $('input[name="progess_id"]').val(e), $(".pro-stage-list").hide()
            }).on("click", ".finance-stage-list li", function() {
                var e = $(this).data("val");
                $(".finance-stage-txt").html($(this).text()), $('input[name="financing_id"]').val(e), $(".finance-stage-list").hide()
            }).on("click", function(e) {
                var t = $(".country-list"),
                    a = $(".country-select"),
                    i = $(".limittype-list"),
                    s = $(".limittype-select"),
                    n = $(".moneytype-list"),
                    r = $(".moneytype-select"),
                    o = $(".stage-select");
                a[0].contains(e.target) || t.eq(0).hide(), a[1].contains(e.target) || t.eq(1).hide(), s[0].contains(e.target) || i.eq(0).hide(), r[0].contains(e.target) || n.eq(0).hide(), o[0].contains(e.target) || $(".pro-stage-list").hide(), o[1].contains(e.target) || $(".finance-stage-list").hide()
            }).on("change", "#upload_img_file", function(e) {
                var t = $(this);
                return "" != t.val() && ($(".img-preview").find(".preview-span").length >= 3 ? (q($("#pic_address"), z[L].most3), !1) : void g("picture", "/api/uploadFile", t))
            }).on("change", ".file-upload", function(e) {
                g("file", "/api/uploadAttachment", $(this))
            }).on("click", ".img-delete", function() {
                var e = $(this),
                    t = e.parent().data("url"),
                    a = e.parent().data("id") || "";
                $.get("/api/deleteUploadFile", {
                    file_path: t,
                    id: a
                }).then(function(t) {
                    t.success ? (e.parent().remove(), $("#upload_img_file").val("")) : alert(t.error || z[L].remove_error)
                })
            }).on("click", ".operate-prev-btn", function() {
                var e = $(this).data("step");
                x(e)
            }).on("click", "#person_info_save", function() {
                p($(this))
            }).on("click", "#person_info_save_next", function() {
                var e = $(this).data("step");
                p($(this), function() {
                    x(e)
                })
            }).on("click", "#pro_info_save", function() {
                u($(this))
            }).on("click", "#pro_info_save_next", function() {
                var e = $(this).data("step");
                u($(this), function() {
                    x(e)
                })
            }).on("click", "#pro_intro_save", function() {
                m($(this))
            }).on("click", "#pro_intro_save_next", function() {
                var e = $(this).data("step");
                m($(this), function() {
                    x(e)
                })
            }).on("click", ".launch-plan-save", function() {
                v($(this))
            }).on("click", "#pro_plan_save_next", function() {
                var e = $(this).data("step");
                f($(this), function() {
                    x(e)
                })
            }).on("click", "#preview_save_btn", function() {
                h()
            }).on("click", "#pro_submit_btn", function() {
                _()
            }).on("click", ".gender span", function() {
                var e = $(this);
                e.hasClass("active") || e.addClass("active").siblings("span").removeClass("active")
            }).on("click", ".quota_limit span", function() {
                var e = $(this);
                e.hasClass("active") || (e.addClass("active").siblings("span").removeClass("active"), 1 == e.data("id") ? $(".is-show-quota").removeClass("hide") : $(".is-show-quota").addClass("hide"))
            }).on("click", ".curtype_limit span", function() {
                var e = $(this);
                if (!e.hasClass("active")) {
                    e.addClass("active").siblings("span").removeClass("active");
                    var t = e.data("id");
                    $(".money-type").text(t)
                }
            }).on("click", ".money_limit span", function() {
                var e = $(this);
                e.hasClass("active") || (e.addClass("active").siblings("span").removeClass("active"), 1 == e.data("id") ? $(".is-show-money").removeClass("hide") : $(".is-show-money").addClass("hide"))
            }).on("click", ".buy_limit span", function() {
                var e = $(this);
                e.hasClass("active") || (e.addClass("active").siblings("span").removeClass("active"), 1 == e.data("id") ? $(".is-show-buy").removeClass("hide") : $(".is-show-buy").addClass("hide"))
            }).on("click", ".free_shipping span", function() {
                var e = $(this);
                e.hasClass("active") || e.addClass("active").siblings("span").removeClass("active")
            }).on("click", ".send-phone-code", function() {
                var e = arguments,
                    t = this,
                    a = null,
                    i = "";
                if (!e.callee.hasSend) {
                    var s = $("#phone");
                    if (s) {
                        if (!s.val()) return q(s, z[L].empty_phone), !1;
                        if (!/^(13[0-9]|147|170|177|15[^4]|18[^14])\d{8}$/.test(s.val())) return q(s, z[L].phone_format), !1;
                        i = s.val()
                    }
                    $.get("/api/sendMsg", {
                        phone: i
                    }).then(function(i) {
                        if (i.success) {
                            e.callee.hasSend = !0;
                            var s = 119;
                            clearInterval(a), a = setInterval(function() {
                                s > 0 ? ($(t).text(s + z[L].acquisition), s--) : (clearInterval(a), $(t).text("获取验证码"), e.callee.hasSend = !1)
                            }, 1e3)
                        } else q($(".send-phone-code"), i.error || z[L].error)
                    })
                }
            }).on("click", ".add-plan", function() {
                var e = $(".launch-plan-left-list"),
                    t = e.find("li").length;
                if (t > 9) return q($(this), z[L].most10), !1;
                var a = '<li class="pro-plan-item active"><a href="javascript:" class="plan-list-a" data-id="">' + z[L].payback + U[L][t] + "</a></li>";
                $(".pro-plan-item").removeClass("active"), e.append(a), $("#plan_id").val(""), T()
            }).on("click", ".plan-list-a", function() {
                $(this).parent().addClass("active").siblings("li").removeClass("active");
                var e = $(this).data("id");
                T(), "" != e ? ($("#plan_id").val(e), r(e)) : $("#plan_id").val("")
            }).on("click", ".edit-focus", function() {
                $(".launch-plan-save").addClass("high-light")
            }).on("click", ".ico-agree", function() {
                $(this).hasClass("unchecked") ? $(this).removeClass("unchecked") : $(this).addClass("unchecked")
            }).on("click", ".delete-plan", function() {
                j()
            }).on("click", ".attachment-clear", function() {
                I($(this))
            }).on("click", ".select-header", function() {
                $(".language-list").slideToggle()
            }).on("click", ".language-select li", function() {
                var e = $(this).text(),
                    t = $(this).data("value");
                $(".language-txt").text(e), $(".language-list").hide(), E != t && (E = t, location.href = "/launch?id=" + (null == O ? "" : O) + "&language=" + E)
            }).on("click", function(e) {
                var t = $(".language-list"),
                    a = $(".language-select");
                a.length && (a[0].contains(e.target) || t.eq(0).hide(), a[1] && !a[1].contains(e.target) && t.eq(1).hide(), a[2] && !a[2].contains(e.target) && t.eq(2).hide())
            }).on("input", ".filter-search", function() {
                var e = $(this).next(),
                    t = $(this).val().toString();
                if ("" == t) return e.children().show(), !1;
                var a = e.find("li").filter(":contains(" + t + ")");
                a.show(), e.find("li").not(a).hide()
            });
            var D = $(".launch-pro-introduction").find("a");
            k(), $("#introduction-editor").css("display", "block"), D[0].onclick = function() {
                k(), $("#introduction-editor").css("display", "block")
            }, D[1].onclick = function() {
                k(), $("#ico-rules-editor").css("display", "block")
            }, D[2].onclick = function() {
                k(), $("#team-info-editor").css("display", "block")
            }, $("#pro_intro_save_next").click(function() {
                "" == $("#detail textarea").val() ? ($(".launch-save-operate .btn-warn").fadeIn(), setTimeout(function() {
                    $(".launch-save-operate .btn-warn").fadeOut()
                }, 1e3)) : (setTimeout(function() {
                    $(".launch-save-operate .btn-success").fadeOut()
                }, 1e3), $(".launch-save-operate .btn-success").fadeIn())
            })
        }()
    }
}, [118]);