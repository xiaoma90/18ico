webpackJsonp([1], {
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

        function n(e, t, a, i) {
            var n = ["opacity", t, ~~(100 * e), a, i].join("-"),
                s = .01 + a / i * 100,
                r = Math.max(1 - (1 - e) / t * (100 - s), e),
                o = c.substring(0, c.indexOf("Animation")).toLowerCase(),
                l = o && "-" + o + "-" || "";
            return h[n] || (p.insertRule("@" + l + "keyframes " + n + "{0%{opacity:" + r + "}" + s + "%{opacity:" + e + "}" + (s + .01) + "%{opacity:1}" + (s + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + r + "}}", 0), h[n] = 1), n
        }

        function s(e, t) {
            var a, i, n = e.style;
            if (void 0 !== n[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < d.length; i++)
                if (a = d[i] + t, void 0 !== n[a]) return a
        }

        function r(e, t) {
            for (var a in t) e.style[s(e, a) || a] = t[a];
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
            h = {},
            p = function() {
                var e = a("style");
                return i(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
            }(),
            u = {
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
            f = function g(e) {
                return this.spin ? void(this.opts = o(e || {}, g.defaults, u)) : new g(e)
            };
        f.defaults = {}, o(f.prototype, {
            spin: function(e) {
                this.stop();
                var t, i, n = this,
                    s = n.opts,
                    o = n.el = r(a(0, {
                        className: s.className
                    }), {
                        position: "relative",
                        zIndex: s.zIndex
                    }),
                    d = s.radius + s.length + s.width;
                if (e && (e.insertBefore(o, e.firstChild || null), i = l(e), t = l(o), r(o, {
                        left: ("auto" == s.left ? i.x - t.x + (e.offsetWidth >> 1) : s.left + d) + "px",
                        top: ("auto" == s.top ? i.y - t.y + (e.offsetHeight >> 1) : s.top + d) + "px"
                    })), o.setAttribute("aria-role", "progressbar"), n.lines(o, n.opts), !c) {
                    var h = 0,
                        p = s.fps,
                        u = p / s.speed,
                        f = (1 - s.opacity) / (u * s.trail / 100),
                        g = u / s.lines;
                    ! function m() {
                        h++;
                        for (var e = s.lines; e; e--) {
                            var t = Math.max(1 - (h + e * g) % u * f, s.opacity);
                            n.opacity(o, s.lines - e, t, s)
                        }
                        n.timeout = n.el && setTimeout(m, ~~(1e3 / p))
                    }()
                }
                return n
            },
            stop: function() {
                var e = this.el;
                return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
            },
            lines: function(e, t) {
                function s(e, i) {
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
                    animation: c && n(t.opacity, t.trail, l, t.lines) + " " + 1 / t.speed + "s linear infinite"
                }), t.shadow && i(o, r(s("#000", "0 0 4px #000"), {
                    top: "2px"
                })), i(e, i(o, s(t.color, "0 0 1px rgba(0,0,0,.1)")));
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
            !s(t, "transform") && t.adj ? (p.addRule(".spin-vml", "behavior:url(#default#VML)"), f.prototype.lines = function(t, a) {
                function n() {
                    return r(e("group", {
                        coordsize: c + " " + c,
                        coordorigin: -l + " " + -l
                    }), {
                        width: c,
                        height: c
                    })
                }

                function s(t, s, o) {
                    i(h, i(r(n(), {
                        rotation: 360 / a.lines * t + "deg",
                        left: ~~s
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
                    h = r(n(), {
                        position: "absolute",
                        top: d,
                        left: d
                    });
                if (a.shadow)
                    for (o = 1; o <= a.lines; o++) s(o, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (o = 1; o <= a.lines; o++) s(o);
                return i(t, h)
            }, f.prototype.opacity = function(e, t, a, i) {
                var n = e.firstChild;
                i = i.shadow && i.lines || 0, n && t + i < n.childNodes.length && (n = n.childNodes[t + i], n = n && n.firstChild, n = n && n.firstChild, n && (n.opacity = a))
            }) : c = s(t, "animation")
        }(), e.exports = f
    },
    126: function(e, t, a) {
        a(50), a(48), a(38), a(33), a(45), a(27), a(34), a(43), a(46), a(29), a(44), a(49), a(37), a(36), a(40), a(47), e.exports = a(31)
    },
    27: function(e, t) {
        ! function() {
            function e(e) {
                var t = $("#consignee"),
                    a = $("#province"),
                    s = $("#city"),
                    r = $("#detail_address"),
                    o = $("#mobile"),
                    l = $("#phone"),
                    h = $("#email"),
                    p = $("#alias_address"),
                    u = $("#save_address"),
                    f = $.trim(t.val()),
                    g = a.val(),
                    m = s.val(),
                    v = $.trim(r.val()),
                    y = $.trim(o.val()),
                    _ = $.trim(l.val()),
                    b = $.trim(h.val()),
                    w = $.trim(p.val());
                return "" == f ? (layer.tips(c[d].enter_name, t, {
                    tips: [2, "#da2e2b"]
                }), t.focus(), !1) : "" == g ? (layer.tips(c[d].enter_district, a, {
                    tips: [2, "#da2e2b"]
                }), a.focus(), !1) : "" == m ? (layer.tips(c[d].enter_district, s, {
                    tips: [2, "#da2e2b"]
                }), s.focus(), !1) : "" == v ? (layer.tips(c[d].enter_address, r, {
                    tips: [2, "#da2e2b"]
                }), r.focus(), !1) : "" == y ? (layer.tips(c[d].enter_phone, o, {
                    tips: [2, "#da2e2b"]
                }), o.focus(), !1) : e || /^(13[0-9]|147|170|177|15[^4]|18[^14])\d{8}$/.test(y) ? "" == b ? (layer.tips(c[d].enter_email, h, {
                    tips: [2, "#da2e2b"]
                }), h.focus(), !1) : e || /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(b) ? void $.post("/api/saveOrUpdateRecAddress", {
                    address_id: e || "",
                    receiver: f,
                    pro_id: g,
                    city_id: m,
                    address: v,
                    phone: y,
                    telephone: _,
                    email: b,
                    alias_address: w
                }).then(function(t) {
                    if (t.success) {
                        if (e) layer.msg(c[d].modify, {
                            time: 2e3
                        }, function() {
                            window.location.reload()
                        });
                        else {
                            layer.msg(c[d].add_success), i(t);
                            var a = $(".empty-address");
                            a.length && a.remove()
                        }
                        n(), $("#add_address").modal("hide")
                    } else layer.msg(), layer.tips(t.error, u, {
                        tips: [2, "#da2e2b"]
                    })
                }).fail(function(e) {
                    for (var a = e.responseJSON, i = 0; i < a.data.length; i++) "receiver" == a.data[i].errorFiled ? u = t : "alias_address" == a.data[i].errorFiled ? u = p : "detail_address" == a.data[i].errorFiled ? u = r : "email" == a.data[i].errorFiled ? u = h : "phone" == a.data[i].errorFiled ? u = o : "telephone" == a.data[i].errorFiled && (u = l), layer.tips(a.data[i].errorCase, u, {
                        tips: [2, "#da2e2b"]
                    })
                }) : (layer.tips(c[d].email_format, h, {
                    tips: [2, "#da2e2b"]
                }), h.focus(), !1) : (layer.tips(c[d].phone_format, o, {
                    tips: [2, "#da2e2b"]
                }), o.focus(), !1)
            }

            function t() {
                $.get("/api/getProvince").then(function(e) {
                    if (e.success) {
                        for (var t = '<option value="">' + c[d].select + "</option>", a = 0; a < e.data.length; a++) t += '<option value="' + e.data[a].ProID + '">' + e.data[a].proName + "</option>";
                        $("#province").html(t)
                    }
                })
            }

            function a(e, t) {
                var a = $("#city");
                $.get("/api/getCity", {
                    proID: e
                }).then(function(e) {
                    if (e.success) {
                        for (var i = '<option value="">' + c[d].select + "</option>", n = 0; n < e.data.length; n++) i += '<option value="' + e.data[n].cityID + '">' + e.data[n].cityName + "</option>";
                        a.html(i), t && a.val(t)
                    }
                })
            }

            function i(e) {
                var t = '<div class="add-item" data-id="' + e.data.address_id + '"><div class="add-title"><div class="alias-title"><span class="alias-address">' + e.data.alias_address + '</span><a href="javascript:" class="alias-edit" title="' + c[d].edit + '"><svg width="12px" height="12px"><use xlink:href="#icon-wrench"></use></svg></a></div><a href="javascript:" class="add-delete" title="' + c[d]["delete"] + '"><svg width="16px" height="16px"><use xlink:href="#icon-del-fork"></use></svg></a></div><div class="add-body"><div class="item"><span class="s-label">' + c[d].consignee + '：</span><span class="name">' + e.data.receiver + '</span></div><div class="item"><span class="s-label">' + c[d].district + '：</span><span class="name">' + e.data.pro_name + e.data.city_name + '</span></div><div class="item"><span class="s-label">' + c[d].address + '：</span><span class="name">' + e.data.receiver_address + '</span></div><div class="item"><span class="s-label">' + c[d].phone + '：</span><span class="name">' + e.data.receiver_phone + '</span></div><div class="item"><span class="s-label">' + c[d].tel + '：</span><span class="name">' + e.data.telephone + '</span></div><div class="item"><span class="s-label">' + c[d].email + '：</span><span class="name">' + e.data.email + '</span></div></div><div class="add-footer"><div class="add-setting"><a href="javascript:" class="setting-default"><svg width="18px" height="18px"><use xlink:href="#icon-setting-default"></use></svg>' + c[d]["default"] + '</a><a href="javascript:" class="setting-edit"><svg width="18px" height="18px"><use xlink:href="#icon-setting-edit"></use></svg>' + c[d].edit + "</a></div></div></div>";
                $(".add-content").append(t)
            }

            function n() {
                $("#consignee").val(""), $("#province").val(""), $("#city").val(""), $("#detail_address").val(""), $("#mobile").val(""), $("#phone").val(""), $("#email").val(""), $("#alias_address").val(""), $("#save_address").data("id", ""), $("#add-management-label").html(c[d].add_address)
            }

            function s(e, t) {
                $.post("/api/deleteAddress", {
                    address_id: e
                }).then(function(e) {
                    if (e.success) {
                        if (layer.msg(e.error || c[d].del_success), t.remove(), !$(".add-item").length) {
                            var a = '<div class="text-center empty-address"><p>' + c[d].no_address + "</p></div>";
                            $(".add-content").append(a)
                        }
                    } else layer.msg(e.error || c[d].del_fail)
                })
            }

            function r(e, t) {
                $.post("/api/setAddressToDefault", {
                    address_id: e
                }).then(function(e) {
                    if (e.success) {
                        layer.msg(e.error || c[d].set_success), t.find(".alias-title").append('<span class="default-address ml10">' + c[d].default_address + "</span>"), t.find(".setting-default").remove();
                        var a = t.siblings(".add-item");
                        a.find(".default-address").remove(), a.each(function() {
                            var e = $(this).find(".setting-default");
                            if (!e.length) {
                                var t = '<a href="javascript:" class="setting-default"><svg width="18px" height="18px"><use xlink:href="#icon-setting-default"></use></svg>' + c[d]["default"] + "</a>";
                                $(this).find(".add-setting").prepend(t)
                            }
                        });
                        var i = t.remove();
                        $(".add-content").prepend(i)
                    } else layer.msg(e.error || c[d].set_fail)
                })
            }

            function o(e, t) {
                $.get("/api/getAddressDetail", {
                    address_id: e
                }).then(function(t) {
                    $("#add-management-label").html(c[d].edit_address), t.success ? ($("#add_address").modal("show"), $("#consignee").val(t.data.receiver), $("#province").val(t.data.proId), $("#detail_address").val(t.data.receiver_address), $("#mobile").val(t.data.receiver_phone), $("#phone").val(t.data.telephone), $("#email").val(t.data.email), $("#alias_address").val(t.data.alias_address), $("#save_address").data("id", e), a(t.data.proId, t.data.cityID)) : layer.msg(t.error || c[d].get_fail)
                })
            }

            function l(e, t) {
                var a = t.val();
                return "" == a ? (layer.tips(c[d].enter_alias, t, {
                    tips: [2, "#da2e2b"]
                }), t.focus(), !1) : void $.post("/api/setAliasAddress", {
                    address_id: e,
                    alias_address: a
                }).then(function(e) {
                    e.success ? (layer.msg(e.error || c[d].modify), t.replaceWith('<span class="alias-address">' + a + "</span>")) : layer.msg(e.error || c[d].edit_fail)
                })
            }
            var c = {
                    en: {
                        sure: "sure",
                        cancel: "cancel",
                        ensure: "Are you sure you want to delete the address?",
                        enter_name: "Please enter the name of the consignee",
                        enter_district: "Please select the district information",
                        enter_address: "Please enter the street address",
                        enter_phone: "Please enter the phone number",
                        phone_format: "Phone number format error",
                        enter_email: "Please enter the email",
                        email_format: "Email address format error",
                        modify: "Modify successfully!",
                        add_success: "Add successfully!",
                        select: "Please select",
                        consignee: "Consignee",
                        district: "District",
                        address: "Street address",
                        phone: "Phone number",
                        tel: "Tel number",
                        email: "E-mail",
                        "default": "Setting default",
                        edit: "Edit",
                        del_success: "Delete successfully!",
                        no_address: "There is no Delivery address.",
                        del_fail: "Failed to delete",
                        set_success: "Setting successfully!",
                        default_address: "Default address",
                        set_fail: "Sorry, failed to setting",
                        get_fail: "Sorry, failed to getting information",
                        enter_alias: "Please enter the alias address",
                        edit_fail: "Sorry, failed to modify",
                        edit_address: "Edit Delivery address",
                        add_address: "Add Delivery address",
                        "delete": "Delete",
                        warning: "warning"
                    },
                    "zh-CN": {
                        sure: "确定",
                        cancel: "取消",
                        ensure: "确定删除该收货地址吗？",
                        enter_name: "请填写收货人姓名",
                        enter_district: "请选择完整的地区信息",
                        enter_address: "请填写详细地址",
                        enter_phone: "请填写手机号码",
                        phone_format: "手机号码格式有误哦",
                        enter_email: "请填写电子邮箱",
                        email_format: "邮箱地址格式有误哦",
                        modify: "修改成功",
                        add_success: "添加成功",
                        select: "请选择",
                        consignee: "收货人",
                        district: "所在地区",
                        address: "地址",
                        phone: "手机",
                        tel: "固定电话",
                        email: "电子邮箱",
                        "default": "设为默认",
                        edit: "编辑",
                        del_success: "删除成功",
                        no_address: "还没有收货地址哦~",
                        del_fail: "删除失败",
                        set_success: "设置成功",
                        default_address: "默认地址",
                        set_fail: "抱歉，设置失败",
                        get_fail: "抱歉，获取信息出错",
                        enter_alias: "请填写别名地址",
                        edit_fail: "抱歉，修改失败",
                        edit_address: "编辑收货地址",
                        add_address: "新增收货地址",
                        "delete": "删除",
                        warning: "警告"
                    }
                },
                d = "";
            $(function() {
                $("#address_wrap").length && (d = $("html").attr("lang") || "zh-CN", t())
            }).on("click", "#save_address", function() {
                var t = $(this).data("id");
                e(t)
            }).on("change", "#province", function() {
                var e = $("#province").val();
                a(e)
            }).on("click", ".add-delete", function() {
                var e = $(this).parents(".add-item"),
                    t = e.data("id");
                layer.confirm(c[d].ensure, {
                    btn: [c[d].sure, c[d].cancel],
                    title: c[d].warning
                }, function() {
                    s(t, e)
                })
            }).on("click", ".add-setting .setting-default", function() {
                var e = $(this).parents(".add-item"),
                    t = e.data("id");
                r(t, e)
            }).on("click", ".add-setting .setting-edit", function() {
                var e = $(this).parents(".add-item"),
                    t = e.data("id");
                o(t, e)
            }).on("click", ".alias-edit", function() {
                var e = $(this).parents(".add-item").find(".alias-address");
                if (e.hasClass("change-address")) return !1;
                var t = $("<input>").val(e.text()).addClass("alias-address change-address");
                e.replaceWith(t), t.focus()
            }).on("blur", ".change-address", function() {
                var e = $(this).parents(".add-item"),
                    t = e.data("id");
                l(t, $(this))
            }).on("hidden.bs.modal", "#add_address", function() {
                n()
            })
        }()
    },
    29: function(e, t) {
        ! function() {
            function e(n) {
                $.get("/api/getFundDetail", {
                    curpage: n || 1,
                    pagenum: 15
                }).then(function(n) {
                    if (n.success) {
                        if ($(".capital-tbody").html(t(n.data.list)), n.data.count) {
                            var s = "<span>" + n.data.count + a[i].record + " </span><span>" + n.data.curpage + "/" + n.data.pagecount + a[i].page + "</span>";
                            $(".page-count").html(s)
                        }
                        var r = layPage({
                            cont: "capital_page",
                            pages: n.data.pagecount || 1,
                            curr: n.data.curpage,
                            skin: "#424e98",
                            prev: "<",
                            next: ">",
                            jump: function(t, a) {
                                a || e(t.curr)
                            }
                        });
                        $("#capital_page").html(r)
                    } else layer.msg(n.error || a[i].error)
                })
            }

            function t(e) {
                var t = "";
                e.length < 1 && (t = '<tr><td class="text-center" colspan="5">' + a[i].no_info + "</td></tr>");
                for (var n = 0; n < e.length; n++) t += "<tr><td>" + e[n].time + "</td><td>" + e[n].type + '</td><td class="btc-font-family">' + ("BTC" == e[n].limit_curtype_state ? "฿" : e[n].limit_curtype_state) + "&nbsp" + e[n].money + "</td><td>" + e[n].status + '</td><td class="text-center btc-font-family">' + ("BTC" == e[n].limit_curtype_state ? "฿" : e[n].limit_curtype_state) + "&nbsp" + e[n].balance + "</td></tr>";
                return t
            }
            var a = {
                    en: {
                        error: "Sorry, there was an unexpected error. Please try again.",
                        record: "record",
                        page: "pages",
                        no_info: "No information"
                    },
                    "zh-CN": {
                        error: "抱歉，出现意外错误，请重试",
                        record: "条记录",
                        page: "页",
                        no_info: "暂无信息"
                    }
                },
                i = "";
            $(function() {
                $("#capital_wrap").length && (i = $("html").attr("lang") || "zh-CN", e())
            })
        }()
    },
    31: function(e, t) {
        ! function() {
            var e = {
                    en: {
                        ensure_del: "Are you sure cancel the project?",
                        sure: "Sure",
                        cancel: "Cancel",
                        del_success: "Successfully",
                        del_fail: "Cancel failed"
                    },
                    "zh-CN": {
                        ensure_del: "您确定要取消关注？",
                        sure: "确定",
                        cancel: "取消",
                        del_success: "取消关注成功",
                        del_fail: "取消关注失败"
                    }
                },
                t = "";
            $(function() {
                t = $("html").attr("lang") || "zh-CN"
            }).on("click", ".del-state", function() {
                var a = $(this).data("item");
                layer.confirm(e[t].ensure_del, {
                    btn: [e[t].sure, e[t].cancel]
                }, function() {
                    $.post("/api/cancelFavorite", {
                        item_id: a
                    }).then(function(a) {
                        a.success ? layer.msg(a.error || e[t].del_success) : layer.msg(a.error || e[t].del_fail)
                    })
                })
            })
        }()
    },
    33: function(e, t, a) {
        ! function() {
            function e() {
                $.get("/api/getPersonalInfo").then(function(e) {
                    if (e.success) {
                        $("#username").html(e.data.username), (" " != e.data.email && null != e.data.email && "" != e.data.email || "" == e.data.phone) && ($("#email").replaceWith('<span class="txt-hide" id="email">' + e.data.email + "</span>"), $(".email-verify").remove(), $(".send-email-code").remove()), $("#name").val(e.data.name), $(".avatar-pic").attr("src", e.data.avatar), 0 == e.data.lg_email_state ? $(".link-set").html(c[d].setting) : 2 == e.data.email_state && $(".link-set").html(c[d].waiting);
                        var t = "<span>" + e.data.verify_name + "&nbsp;</span>";
                        1 == e.data.verify_state ? (t += '<span class="already-auth">' + c[d].auth + "</span>", $("#identity").html(t)) : 2 == e.data.verify_state ? (t += '<span class="already-auth">' + c[d].waiting + "</span>", $("#identity").html(t)) : 3 == e.data.verify_state && (t += '<a href="/user/identity" class="goto-auth">' + c[d].unauth + "</a>", $("#identity").html(t)), "" != e.data.phone && ($("#phone").replaceWith('<span class="txt-hide" id="iphone">' + e.data.phone + "</span>"), $(".phone-verify").remove(), $(".send-phone-code").remove()), 1 == e.data.gender ? $(".gender-male").addClass("active") : ($(".gender-male").removeClass("active"), $(".gender-female").addClass("active")), e.data.country_name && ($(".person-country-txt").html(e.data.country_name + "(" + e.data.country_enName + ")"), $('input[name="country"]').val(e.data.country_id)), $("#detail_address").val(e.data.detail_address), $("#company_address").val(e.data.user_company), $("#user_company_address").val(e.data.user_company_address), $("#describe").val(e.data.describe), $(".lasttime").html(e.data.lasttime || c[d].none), $(".createtime").html(e.data.createtime)
                    }
                })
            }

            function t() {
                var e = $(".save-info-btn"),
                    t = $("#user_info_form").serialize();
                t += "&gender=" + $(".gender").find(".active").data("id"), $.post("/api/updatePerMsg", t).then(function(t) {
                    t.success ? l(e, t.error || c[d].success, function() {
                        location.reload()
                    }) : o(e, t.error || c[d].fail)
                }).fail(function(e) {
                    for (var t = e.responseJSON, a = 0; a < t.data.length; a++) o($("#" + t.data[a].errorFiled), t.data[a].errorCase || c[d].fail)
                })
            }

            function i() {
                $.get("/api/getCountry").then(function(e) {
                    if (e.success) {
                        for (var t = '<li data-val="">' + c[d].select_country + "</li>", a = 0; a < e.data.length; a++) t += '<li data-val="' + e.data[a].id + '">' + e.data[a].name + "(" + e.data[a].name_en + ")</li>";
                        $(".country-list ul").html(t)
                    } else alert(e.error || c[d].get_country)
                })
            }

            function n() {
                var e = $("#email");
                return e.val() ? /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e.val()) ? void $.get("/api/sendEmailCode", {
                    email: e.val()
                }).then(function(e) {
                    e.success ? l($("#getEmailCode"), e.error || c[d].active_account_code, function() {}) : o($("#getEmailCode"), e.error || c[d].error)
                }) : (o(e, c[d].email_format), !1) : (o(e, c[d].empty_email), !1)
            }

            function s() {
                var e = $("#lg_email");
                return e.val() ? /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e.val()) ? void $.get("/api/sendEmail", {
                    email: e.val()
                }).then(function(e) {
                    e.success ? l($("#getEmailFinish"), e.error || c[d].active_account, function() {
                        window.location.reload()
                    }) : o($("#getEmailFinish"), e.error || c[d].error)
                }) : (o(e, c[d].email_format), !1) : (o(e, c[d].empty_email), !1)
            }

            function r() {
                var e = null,
                    t = $("#upload_form"),
                    a = $("#original_img"),
                    i = t.serialize();
                t.ajaxSubmit({
                    type: "POST",
                    url: "/api/uploadAvatar",
                    dataType: "json",
                    data: i,
                    timeout: 12e3,
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    beforeSubmit: function() {
                        if ("" == $("#upload_avatar").val()) return layer.msg(c[d].select_file), !1;
                        var a = $('<div class="loading-div">');
                        e = new h(p).spin(a[0]), t.append(a)
                    },
                    uploadProgress: function(e, t, a, i) {},
                    success: function(t) {
                        e.stop(), t.success ? (a.cropper("destroy"), $("#original_img, #preview_img").attr("src", t.url), a.cropper({
                            aspectRatio: 1,
                            crop: function(e) {
                                $(".img-container").data("o", e)
                            },
                            zoomable: !1,
                            mouseWheelZoom: !0,
                            touchDragZoom: !0,
                            preview: $(".img-container")
                        }), $(".upload-img-preview").show()) : layer.msg(t.error)
                    },
                    error: function(t) {
                        e.stop(), layer.msg(t.error || c[d].upload_error)
                    }
                })
            }

            function o(e, t) {
                e.protipShow({
                    trigger: "sticky",
                    gravity: "top-left",
                    autoHide: 3e3,
                    target: e.parent()[0],
                    title: t
                })
            }

            function l(e, t, a) {
                e.protipShow({
                    trigger: "sticky",
                    gravity: "top-right",
                    scheme: "leaf",
                    arrow: !1,
                    autoHide: 2e3,
                    target: e.parent()[0],
                    title: t
                }), "function" == typeof a && setTimeout(a, 2e3)
            }
            var c = {
                    en: {
                        error: "Sorry, there was an unexpected error. Please try again.",
                        empty_phone: "Please enter the phone number",
                        phone_format: "Phone number format error",
                        sent: "Verify code has been sent, please check in time",
                        acquisition: "seconds after re acquisition",
                        get_code: "Get verification code",
                        select_pic: "Please upload pictures and clip",
                        changed: "Successfully modified",
                        setting: "setup mailbox",
                        waiting: "waiting for auth",
                        auth: "Authenticated",
                        unauth: "Not passed",
                        success: "Successfully saved",
                        fail: "Failed to save",
                        none: "none",
                        select_country: "Select nationality",
                        get_country: "Error getting countries",
                        empty_email: "Please enter Email address",
                        email_format: "Email address format error",
                        active_account: "The mail has been sent, please check your mailbox!",
                        active_account_code: "The mail has been sent, please check your mailbox!",
                        select_file: "Please select file",
                        upload_error: "Failed to upload"
                    },
                    "zh-CN": {
                        error: "抱歉，出现意外错误，请重试",
                        empty_phone: "手机号码不能为空",
                        phone_format: "手机号码格式有误哦！",
                        sent: "验证码已发送到您的手机上，请及时填写在左边的框内",
                        acquisition: "秒后重新获取",
                        get_code: "获取验证码",
                        select_pic: "请上传图片并框选图片",
                        changed: "成功更换头像",
                        setting: "设置邮箱",
                        waiting: "等待验证",
                        auth: "已认证",
                        unauth: "认证未通过",
                        none: "无",
                        select_country: "请选择国籍",
                        get_country: "获取国家列表出错啦！",
                        empty_email: "邮箱地址不能为空！",
                        email_format: "邮箱地址格式有误！",
                        active_account: "邮件已发送，请登录邮箱激活账号！",
                        active_account_code: "邮件已发送，请登录邮箱查看验证码！",
                        select_file: "请选择文件",
                        upload_error: "上传出错"
                    }
                },
                d = "",
                h = a(11),
                p = {
                    lines: 9,
                    length: 5,
                    width: 4,
                    radius: 10,
                    scale: 1,
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
                $("#home_wrap").length && (d = $("html").attr("lang") || "zh-CN", i(), e(), $.protip({
                    defaults: {
                        trigger: "sticky"
                    }
                }))
            }).on("click", ".gender span", function() {
                var e = $(this);
                e.hasClass("active") || e.addClass("active").siblings("span").removeClass("active")
            }).on("click", ".select-header.person-select", function() {
                $(".country-list").slideToggle()
            }).on("click", ".person-country-list li", function() {
                var e = $(this).data("val");
                $(".person-country-txt").html($(this).text()), $('input[name="country"]').val(e), $(".person-country-list").hide(), $(".filter-search").val("")
            }).on("click", ".save-info-btn", function(e) {
                t()
            }).on("click", "#getEmailFinish", function(e) {
                s()
            }).on("click", "#getEmailCode", function(e) {
                n()
            }).on("click", "#home_wrap .send-phone-code", function() {
                var e = arguments,
                    t = this,
                    a = null,
                    i = "",
                    n = $("#phone");
                if (n) {
                    if (!n.val()) return o(n, c[d].empty_phone), !1;
                    i = n.val()
                }
                $.get("/api/sendMsg", {
                    phone: i
                }).then(function(i) {
                    if (i.success) {
                        l($(".send-phone-code"), i.error || c[d].sent), e.callee.hasSend = !0;
                        var n = 119;
                        clearInterval(a), a = setInterval(function() {
                            n > 0 ? ($(t).text(n + c[d].acquisition), n--) : (clearInterval(a), $(t).text(c[d].get_code), e.callee.hasSend = !1)
                        }, 1e3)
                    } else o($(".send-phone-code"), i.error || c[d].error)
                })
            }).on("click", function(e) {}).on("change", "#upload_avatar", function(e) {
                r()
            }).on("click", "#btn_save", function() {
                var e = $(".img-container").data("o");
                return e ? void $.post("/api/saveUserPic", {
                    x: e.x,
                    y: e.y,
                    w: e.width,
                    h: e.height
                }).then(function(e) {
                    e.success ? ($("#avatar_upload").modal("hide"), layer.msg(e.error || c[d].changed, {
                        time: 2e3
                    }, function() {
                        window.location.reload()
                    })) : layer.msg(e.error || c[d].error)
                }) : (layer.msg(c[d].select_pic), !1)
            }).on("input", ".filter-search", function() {
                var e = $(this).next(),
                    t = $(this).val().toString();
                if ("" == t) return e.children().show(), !1;
                var a = e.find("li").filter(":contains(" + t + ")");
                a.show(), e.find("li").not(a).hide()
            })
        }()
    },
    34: function(e, t) {
        ! function() {
            function e() {
                $.get("/api/getCountry").then(function(e) {
                    if (e.success) {
                        for (var t = '<li data-val="">' + l[c].select_country + "</li>", a = 0; a < e.data.length; a++) t += '<li data-val="' + e.data[a].id + '">' + e.data[a].name + "(" + e.data[a].name_en + ")</li>";
                        $(".country-list ul").html(t)
                    } else alert(e.error || l[c].get_country)
                })
            }

            function t(e, t) {
                var a = $(".submit-person-btn");
                if (a.hasClass("for-btn-disabled")) return !1;
                a.addClass("for-btn-disabled");
                var i = t.serialize();
                i += "&user_type=" + e;
                var n = null;
                if (1 == e) {
                    var s = $("#born_year").val() + "-" + $("#born_month").val() + "-" + $("#born_day").val();
                    i += "&born_day=" + s, n = $(".submit-person-btn")
                } else if (2 == e) {
                    if (7 == $(".agency-country-val").val()) {
                        var d = $("#register_year").val() + "-" + $("#register_month").val() + "-" + $("#register_day").val();
                        i += "&register_date=" + d + "&register_code=" + $("#china_register_code").val()
                    } else {
                        var h = $("#for_register_year").val() + "-" + $("#for_register_month").val() + "-" + $("#for_register_day").val();
                        i += "&register_date=" + h + "&register_code=" + $("#register_code").val()
                    }
                    n = $(".submit-agency-btn")
                }
                $.post("/api/identificate", i).then(function(e) {
                    e.success ? o(n, e.error || l[c].success, function() {
                        window.location.reload()
                    }) : (r(n, e.error || l[c].fail), a.removeClass("for-btn-disabled"))
                })
            }

            function a() {
                var e = $(".person-country-val"),
                    t = $("#username"),
                    a = $("#idcard"),
                    i = $('input[name="identity_handheld_pic"]'),
                    n = $('input[name="identity_front_pic"]'),
                    s = $('input[name="identity_back_pic"]'),
                    o = $('input[name="passport_front_pic"]'),
                    d = $('input[name="passport_back_pic"]'),
                    h = $(".person-id-agree"),
                    p = $("#person_name"),
                    u = $("#person_local_name"),
                    f = $("#passport_code"),
                    g = $("#born_year"),
                    m = $("#born_month"),
                    v = $("#born_day"),
                    y = $("#current_country_id"),
                    _ = $("#person_postcode"),
                    b = $("#person_detail_address"),
                    w = $("#person_city_name"),
                    x = $("#person_district");
                if ("" == e.val()) {
                    var C = $(".person-country-txt").parent();
                    return r(C, l[c].select_nationality), !1
                }
                if (7 == e.val()) {
                    if ("" == t.val()) return r(t, l[c].name), t.focus(), !1;
                    if ("" == a.val()) return r(a, l[c].id_number), a.focus(), !1;
                    if ("" == i.val()) return r(i.parent(), l[c].id_handheld), !1;
                    if ("" == n.val()) return r(n.parent(), l[c].id_front), !1;
                    if ("" == s.val()) return r(s.parent(), l[c].id_back), !1
                } else {
                    if ("" == p.val()) return r(p, l[c].en_name), p.focus(), !1;
                    if ("" == u.val()) return r(u, l[c].local_name), u.focus(), !1;
                    if ("" == f.val()) return r(f, l[c].passport), f.focus(), !1;
                    if ("" == o.val()) return r(o.parent(), l[c].passport_front), !1;
                    if ("" == d.val()) return r(d.parent(), l[c].passport_back), !1;
                    if ("" == g.val()) return r(g, l[c].year), g.focus(), !1;
                    if ("" == m.val()) return r(m, l[c].month), m.focus(), !1;
                    if ("" == v.val()) return r(v, l[c].day), v.focus(), !1;
                    if ("" == y.val()) {
                        var k = $(".current-country-txt").parent();
                        return r(k, l[c].live_country), !1
                    }
                    if ("" == _.val()) return r(_, l[c].postal), _.focus(), !1;
                    if ("" == b.val()) return r(b, l[c].address), b.focus(), !1;
                    if ("" == w.val()) return r(w, l[c].city), w.focus(), !1;
                    if ("" == x.val()) return r(x, l[c].state), x.focus(), !1
                }
                return !h.hasClass("unchecked") || (r(h, l[c].promise), !1)
            }

            function i() {
                var e = $(".agency-country-val"),
                    t = $("#china_company_name"),
                    a = $("#china_register_code"),
                    i = $("#legal_person"),
                    n = $("#register_year"),
                    s = $("#register_month"),
                    o = $("#register_day"),
                    d = $("#register_address"),
                    h = $('input[name="bussiness_pic"]'),
                    p = $("#agency-id-agree"),
                    u = $("#company_foreign_name"),
                    f = $("#company_local_name"),
                    g = $("#agency_postcode"),
                    m = $("#agency_detail_address"),
                    v = $("#agency_city_name"),
                    y = $("#agency_district"),
                    _ = $("#for_register_year"),
                    b = $("#for_register_month"),
                    w = $("#for_register_day");
                if ("" == e.val()) {
                    var x = $(".agency-country-txt").parent();
                    return r(x, l[c].select_nationality), !1
                }
                if (7 == e.val()) {
                    if ("" == t.val()) return r(t, l[c].company_name), t.focus(), !1;
                    if ("" == a.val()) return r(a, l[c].company_code), a.focus(), !1;
                    if ("" == i.val()) return r(i, l[c].legal_name), i.focus(), !1;
                    if ("" == n.val()) return r(n, l[c].reg_year), n.focus(), !1;
                    if ("" == s.val()) return r(s, l[c].month), s.focus(), !1;
                    if ("" == o.val()) return r(o, l[c].day), o.focus(), !1;
                    if ("" == d.val()) return r(d, l[c].reg_address), d.focus(), !1;
                    if ("" == h.val()) return r(h.parent(), l[c].upload_license), !1
                } else {
                    if ("" == u.val()) return r(u, l[c].en_company), u.focus(), !1;
                    if ("" == f.val()) return r(f, l[c].local_country), f.focus(), !1;
                    if ("" == _.val()) return r(_, l[c].reg_year), _.focus(), !1;
                    if ("" == b.val()) return r(b, l[c].reg_month), b.focus(), !1;
                    if ("" == w.val()) return r(w, l[c].reg_day), w.focus(), !1;
                    if ("" == g.val()) return r(g, l[c].postal), g.focus(), !1;
                    if ("" == m.val()) return r(m, l[c].address), m.focus(), !1;
                    if ("" == v.val()) return r(v, l[c].city), v.focus(), !1;
                    if ("" == y.val()) return r(y, l[c].state), y.focus(), !1
                }
                return !p.hasClass("unchecked") || (r(p, l[c].promise), !1)
            }

            function n(e, t) {
                t.wrap('<form enctype="multipart/form-data"></form>');
                var a = t.parent("form"),
                    i = a.serialize();
                a.ajaxSubmit({
                    type: "POST",
                    url: e,
                    dataType: "json",
                    data: i,
                    contentType: !1,
                    cache: !1,
                    processData: !1,
                    beforeSubmit: function() {
                        if ("" == t.val()) return layer.msg(l[c].select_file), !1
                    },
                    uploadProgress: function(e, t, a, i) {},
                    success: function(e) {
                        s(e, t), e.success || alert(e.error)
                    },
                    error: function(e) {
                        alert(e.error || l[c].upload_error)
                    }
                })
            }

            function s(e, t) {
                t.unwrap();
                var a = '<img src="' + e.path + '" alt="">',
                    i = t.parent();
                i.hasClass("already") || i.has("img").length ? i.find("img").replaceWith(a) : (i.addClass("already"), i.prepend(a)), i.find(".hide-pic").val(e.path)
            }

            function r(e, t) {
                e.protipShow({
                    trigger: "sticky",
                    gravity: "top-left",
                    autoHide: 3e3,
                    target: e.parent()[0],
                    title: t
                })
            }

            function o(e, t, a) {
                e.protipShow({
                    trigger: "sticky",
                    gravity: "top-right",
                    scheme: "leaf",
                    arrow: !1,
                    autoHide: 2e3,
                    target: e.parent()[0],
                    title: t
                }), "function" == typeof a && setTimeout(a, 2e3)
            }
            var l = {
                    en: {
                        error: "Sorry, there was an unexpected error. Please try again.",
                        select_nationality: "Select nationality",
                        select_country: "Select nationality",
                        get_country: "Error getting countries",
                        success: "Successfully submitted",
                        fail: "Failed to submit",
                        name: "Please enter your Name",
                        id_number: "Please enter the ID number",
                        id_front: "Please upload front of your ID card",
                        id_handheld: "Please upload your handheld identity photos",
                        id_back: "Please upload back of your ID card",
                        passport_front: "Please upload the photo of your passport",
                        passport_back: "Please upload the photo of your passport",
                        en_name: "Please enter the Name(English or Spell)",
                        local_name: "Please enter the Name(Native language)",
                        passport: "Please enter passport number",
                        year: "Please enter the year",
                        month: "Please enter the month",
                        day: "Please enter the day",
                        live_country: "Please select the current country",
                        postal: "Please enter postal code",
                        address: "Please enter street address",
                        city: "Please enter the city name",
                        state: "Please enter the state",
                        promise: "Please ensure your promise",
                        select_file: "Please select file",
                        upload_error: "Failed to upload",
                        company_name: "Please enter the company name",
                        company_code: "Please enter Register ID",
                        legal_name: "Please enter the Legal representative name",
                        reg_year: "Please enter the register year",
                        reg_month: "Please enter the register month",
                        reg_day: "Please enter the register day",
                        reg_address: "Please enter the register address",
                        upload_license: "Please upload the picture of business license",
                        en_company: "Please enter the company name(English or Spell)",
                        native_company: "Please enter the company name(Native language)"
                    },
                    "zh-CN": {
                        error: "抱歉，出现未知错误，请重试",
                        select_country: "请选择国家",
                        select_nationality: "请选择国籍",
                        get_country: "获取国家列表出错啦！",
                        success: "提交成功",
                        fail: "提交失败",
                        name: "请输入姓名",
                        id_number: "请输入身份证号码",
                        id_handheld: "请上传手持身份证正面",
                        id_front: "请上传身份证正面",
                        id_back: "请上传身份证背面",
                        passport_front: "请上传护照",
                        passport_back: "请上传手持护照",
                        en_name: "请输入姓名（英文或拼音）",
                        local_name: "请输入姓名（本地语言）",
                        passport: "请输入护照号",
                        year: "请输入出生年份",
                        month: "请输入出生月份",
                        day: "请输入出生日期",
                        live_country: "请选择居住国家",
                        postal: "请输入邮编",
                        address: "请输入详细地址",
                        city: "请输入城市",
                        state: "请输入州/省/地区",
                        promise: "请确认您的承诺",
                        select_file: "请选择文件",
                        upload_error: "上传出错",
                        company_name: "请输入公司名称",
                        company_code: "请输入企业注册号",
                        legal_name: "请输入法人代表姓名",
                        reg_year: "请输入注册年份",
                        reg_month: "请输入注册月份",
                        reg_day: "请输入注册日期",
                        reg_address: "请输入注册地址",
                        upload_license: "请上传企业营业执照",
                        en_company: "请输入公司名称（英文或拼音）",
                        native_company: "请输入公司名称(本地语言)"
                    }
                },
                c = "";
            $(function() {
                $("#identity_wrap").length && (c = $("html").attr("lang") || "zh-CN", e(), $.protip({
                    defaults: {
                        trigger: "sticky"
                    }
                }))
            }).on("click", ".identity-switch-item", function() {
                var e = $(this);
                e.hasClass("active") || e.addClass("active").siblings(".identity-switch-item").removeClass("active");
                var t = e.data("type");
                $(".identity-form").addClass("hide"), $("." + t + "-identity-toggle").removeClass("hide")
            }).on("click", ".select-header.id-select", function() {
                $(this).parent().find(".country-list").slideToggle()
            }).on("click", ".person-country-list li", function() {
                var e = $(this).data("val");
                $(".person-country-txt").html($(this).text()), $(".person-country-val").val(e), $(".person-country-list").hide(), $(".filter-search").val(""), "" != e && 7 != e ? ($(".china-person").addClass("hide"), $(".foreign-person").removeClass("hide")) : ($(".china-person").removeClass("hide"), $(".foreign-person").addClass("hide"))
            }).on("click", ".agency-country-list li", function() {
                var e = $(this).data("val");
                $(".agency-country-txt").html($(this).text()), $(".agency-country-val").val(e), $(".agency-country-list").hide(), $(".filter-search").val(""), "" != e && 7 != e ? ($(".china-identity").addClass("hide"), $(".foreign-identity").removeClass("hide")) : ($(".china-identity").removeClass("hide"), $(".foreign-identity").addClass("hide"))
            }).on("click", ".current-country-list li", function() {
                var e = $(this).data("val");
                $(".current-country-txt").html($(this).text()), $("#current_country_id").val(e), $(".current-country-list").hide(), $(".filter-search").val("")
            }).on("click", ".ico-agree", function() {
                $(this).hasClass("unchecked") ? $(this).removeClass("unchecked") : $(this).addClass("unchecked");
            }).on("change", ".file-upload", function(e) {
                n("/api/uploadFile", $(this))
            }).on("click", ".submit-person-btn", function(e) {
                a() && t(1, $("#person_identity_form"))
            }).on("click", ".submit-agency-btn", function(e) {
                i() && t(2, $("#agency_identity_form"))
            }).on("click", function(e) {
                var t = $(".country-list"),
                    a = $(".country-select");
                a.length && (a[0].contains(e.target) || t.eq(0).hide(), a[1] && !a[1].contains(e.target) && t.eq(1).hide(), a[2] && !a[2].contains(e.target) && t.eq(2).hide())
            }).on("input", ".filter-search", function() {
                var e = $(this).next(),
                    t = $(this).val().toString();
                if ("" == t) return e.children().show(), !1;
                var a = e.find("li").filter(":contains(" + t + ")");
                a.show(), e.find("li").not(a).hide()
            })
        }()
    },
    36: function(e, t) {
        ! function() {
            function e(e) {
                var t = $("#sender_info").data("id"),
                    a = e.val();
                $.post("/api/sendPersonMessage", {
                    id: t,
                    content: a
                }).then(function(t) {
                    if (t.success) {
                        layer.msg(t.error || s[r].send_success), e.val(""), $(".send-tips").html(s[r].can_enter + "<em>240</em>" + s[r].words);
                        var i = '<li data-id="' + t.msgId + '" class="clearfix msg-from-mine"><div class="user-info"><img class="avatar-img" src="' + d + '" alt="' + c + '"><p class="user-name">' + c + '</p></div><div class="msg-body"><p>' + a + '</p><div class="clearfix"><span class="msg-time">' + t.createtime + '</span><a class="msg-del-link" href="javascript:">' + s[r]["delete"] + "</a></div></div></li>";
                        $("#history_ul").prepend(i)
                    } else layer.msg(t.error || s[r].error)
                })
            }

            function t(e) {
                var t = e.parents("li"),
                    a = t.data("id");
                $.post("/api/deleteMsg", {
                    id: a,
                    mid: o
                }).then(function(e) {
                    e.success ? (layer.msg(e.error || s[r].del_success), t.remove()) : layer.msg(e.error || s[r].del_fail)
                })
            }

            function a() {
                var e = $(".msg-more").data("id");
                $.get("/api/getMoreMessage", {
                    chat_id: e,
                    mid: o
                }).then(function(e) {
                    if (e.success) {
                        var t = "",
                            a = e.data.list.length;
                        layer.msg(e.error || s[r].load_success);
                        for (var i = 0; i < a; i++) {
                            var n = 0 == e.data.list[i].issend ? d : u,
                                o = 0 == e.data.list[i].issend ? c : p,
                                l = 0 == e.data.list[i].issend ? " msg-from-mine" : "";
                            t += '<li data-id="' + e.data.list[i].id + '" class="clearfix' + l + '"><div class="user-info"><img class="avatar-img" src="' + n + '" alt="' + o + '"><p class="user-name">' + o + '</p></div><div class="msg-body"><p>' + e.data.list[i].content + '</p><div class="clearfix"><span class="msg-time">' + e.data.list[i].creattime + '</span><a class="msg-del-link" href="javascript:">' + s[r]["delete"] + "</a></div></div></li>"
                        }
                        if ($("#history_ul").append(t), e.hasMore) {
                            var h = e.data.list[a - 1].id;
                            $(".msg-more").data("id", h)
                        } else $(".msg-more").remove()
                    } else layer.msg(e.error || s[r].error)
                })
            }

            function i() {
                $.get("/api/nowChatMsg", {
                    mid: o
                }).then(function(e) {
                    if (e.success) {
                        for (var t = "", a = 0; a < e.data.list.length; a++) {
                            var n = 0 == e.data.list[a].issend ? d : u,
                                o = 0 == e.data.list[a].issend ? c : p,
                                l = 0 == e.data.list[a].issend ? " msg-from-mine" : "";
                            t += '<li data-id="' + e.data.list[a].id + '" class="clearfix' + l + '"><div class="user-info"><img class="avatar-img" src="' + n + '" alt="' + o + '"><p class="user-name">' + o + '</p></div><div class="msg-body"><p>' + e.data.list[a].content + '</p><div class="clearfix"><span class="msg-time">' + e.data.list[a].creattime + '</span><a class="msg-del-link" href="javascript:">' + s[r]["delete"] + "</a></div></div></li>"
                        }
                        "" != t && $("#history_ul").prepend(t), clearTimeout(f), f = setTimeout(function() {
                            i()
                        }, 1e4)
                    }
                })
            }

            function n(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                    a = window.location.search.substr(1).match(t);
                return null != a ? unescape(a[2]) : null
            }
            var s = {
                    en: {
                        error: "Sorry, there was an unexpected error. Please try again.",
                        empty_content: "Please enter the content",
                        over_len: "The content length exceeded limit",
                        can_enter: "You can also type ",
                        words: " words",
                        exceeded: "Has exceeded",
                        send_success: "Sent Successfully",
                        "delete": "delete",
                        del_success: "Delete Successfully",
                        del_fail: "Failed to delete",
                        load_success: "Loaded Successfully"
                    },
                    "zh-CN": {
                        error: "抱歉，出现未知错误，请重试",
                        empty_content: "请输入回复内容",
                        over_len: "回复内容长度已超过限制",
                        can_enter: "您还可以输入",
                        words: "字",
                        exceeded: "已经超出",
                        send_success: "发送成功",
                        "delete": "删除",
                        del_success: "删除成功",
                        del_fail: "删除失败",
                        load_success: "加载成功"
                    }
                },
                r = "",
                o = n("mid") || null,
                l = "",
                c = "",
                d = "",
                h = "",
                p = "",
                u = "",
                f = null;
            $(function() {
                $("#messages_detail_wrap").length && (r = $("html").attr("lang") || "zh-CN", l = $("#my_info"), c = l.data("name"), d = l.data("pic"), h = $("#sender_info"), p = h.data("name"), u = h.data("pic"), $(".msg-history").length && i())
            }).on("click", ".btn-reply", function() {
                var t = $("#send_msg"),
                    a = t.val().replace(/[^\x00-\xff]/g, "xx").length;
                return 0 == a ? (layer.tips(s[r].empty_content, t, {
                    tips: [1, "#da2e2b"]
                }), t.focus(), !1) : a > 480 ? (layer.tips(s[r].over_len, t, {
                    tips: [1, "#da2e2b"]
                }), t.focus(), !1) : void e(t)
            }).on("input", "#send_msg", function() {
                var e = $(this).val().replace(/[^\x00-\xff]/g, "xx").length,
                    t = 480 - e;
                t >= 0 ? $(".send-tips").html(s[r].can_enter + "<em>" + Math.ceil(t / 2) + "</em>" + s[r].words) : $(".send-tips").html(s[r].exceeded + "<em>" + Math.ceil(Math.abs(t) / 2) + "</em>" + s[r].words)
            }).on("click", ".msg-del-link", function() {
                t($(this))
            }).on("click", ".show-more", function() {
                a()
            })
        }()
    },
    37: function(e, t) {
        ! function() {
            function e(i) {
                $.get("/api/getMessage", {
                    curpage: i || 1,
                    pagenum: 15
                }).then(function(i) {
                    if (i.success) {
                        for (var n = "", s = i.data.list.length, r = 0; r < s; r++) n += '<tr><td><a href="javascript:" ' + (i.data.list[r].noreadcount > 0 ? 'class="unchecked"' : "") + '><svg width="19px" height="13px" class="icon-letter"><use xlink:href="#icon-letter"></use></svg></a></td><td>' + i.data.list[r].user_name + '</td><td><a href="/user/message_detail?mid=' + i.data.list[r].msg_id + '">' + i.data.list[r].content + '</a></td><td class="text-center">' + i.data.list[r].time + "</td></tr>";
                        s || (n = '<tr><td colspan="4" class="text-center">' + t[a].no_msg + "</td></tr>"), $("#message_list").html(n);
                        var o = "<span>" + i.data.count + t[a].record + "&nbsp;&nbsp;" + i.data.curpage + "/" + i.data.pagecount + t[a].pages + "</span><span>" + t[a].unread + " <strong>" + i.data.noRead + "</strong> " + t[a].letter + "</span>";
                        $(".message-page-info").html(o);
                        var l = layPage({
                            cont: "message_pagination",
                            pages: i.data.pagecount,
                            curr: i.data.curpage,
                            skin: "#424e98",
                            prev: "<",
                            next: ">",
                            jump: function(t, a) {
                                a || e(t.curr)
                            }
                        });
                        $("#message_pagination").html(l)
                    }
                })
            }
            var t = {
                    en: {
                        no_msg: "No message record",
                        record: " records",
                        unread: ", The unread message ",
                        pages: " pages",
                        letter: ""
                    },
                    "zh-CN": {
                        no_msg: "暂无私信记录",
                        record: "条记录",
                        unread: "，其中未读私信 ",
                        pages: "页",
                        letter: "封"
                    }
                },
                a = "";
            $(function() {
                $("#messages_wrap").length && (a = $("html").attr("lang") || "zh-CN", e())
            })
        }()
    },
    38: function(e, t) {
        function a(e, t) {
            t.protipShow({
                trigger: "sticky",
                gravity: "right",
                autoHide: 2e3,
                target: t.parent()[0],
                title: e
            })
        }

        function i(e, t) {
            t.protipShow({
                trigger: "sticky",
                gravity: "top-right",
                scheme: "leaf",
                arrow: !1,
                autoHide: 2e3,
                target: t.parent()[0],
                title: e
            })
        }

        function n(e) {
            var t = $(".project-list");
            t.children() && t.empty();
            for (var a = 0; a < e.length; a++) {
                var i = '<li id="' + e[a].id + '" >' + e[a].theme + "</li>";
                t.append(i);
                var n = "#" + e[a].id,
                    r = t.find(n);
                r.data("programs", e[a].programs)
            }
            e.length && ($(".project-txt").text(e[0].theme), $("#project_repay_id").val(e[0].programs[0].id), s(e[0].id))
        }

        function s(e) {
            var t = $(".moneytype-list");
            t.children() && t.empty();
            var a = "#" + e,
                i = $(".project-list").find(a),
                n = i.data("programs");
            $(".moneytype-txt").text(n[0].currency);
            for (var s = 0; s < n.length; s++) {
                var r = '<li data-val="' + n[s].id + '">' + n[s].currency + "</li>";
                t.append(r)
            }
            $("#project_repay_id").val(n[0].id)
        }! function() {
            function e(e) {
                $.post("/api/notShowFailOrder", {
                    order_id: e
                }, function(e) {
                    e.success ? layer.msg(r[o].delete_success) : layer.msg(e.error || r[o].delete_fail)
                })
            }

            function t(e) {
                $.post("/api/cancelEntrustIdent", {
                    order_id: e
                }, function(e) {
                    e.success ? layer.msg(r[o].revoke_success) : layer.msg(e.error || r[o].revoke_fail)
                })
            }
            var r = {
                    en: {
                        error: "Sorry, there was an unexpected error. Please try again.",
                        empty_locked_money: "Please enter the locked amount.",
                        locked_ask: "will be frozen for the project: ",
                        locked_succeed: "success",
                        no_project: "No items available",
                        nolimited: "No limited",
                        finish: "Done",
                        clock_day: "days",
                        delete_success: "Delete successfully!",
                        delete_failed: "Delete failed!",
                        delete_tips: "Delete this record?!",
                        revoke_success: "Revoke successfully!",
                        revoke_failed: "Revoke successfailed!",
                        revoke_tips: "Revoke this?!",
                        tips: "tips",
                        sure: "confirm",
                        cancel: "cancel",
                        less_than_0: "Can't less than 0"
                    },
                    "zh-CN": {
                        error: "抱歉，出现意外错误，请重试",
                        empty_locked_money: "锁定金额不能为空",
                        locked_ask: "将被锁定来投资于项目: ",
                        locked_succeed: "成功",
                        no_project: "暂时没有合适的项目可以用于锁定投资",
                        nolimited: "不限",
                        finish: "已结束",
                        clock_day: "天",
                        delete_success: "删除成功!",
                        delete_failed: "删除失败!",
                        delete_tips: "确定删除本次记录 ?!",
                        revoke_success: "撤单成功!",
                        revoke_failed: "撤单失败!",
                        revoke_tips: "确定撤单 ?!",
                        tips: "温馨提示",
                        sure: "确认",
                        cancel: "取消",
                        less_than_0: "金额必须大于0"
                    }
                },
                o = "",
                l = '<svg class="svg-warning" version="1.1" id="" x="0px" y="0px"width="36px" height="36px" viewBox="0 0 36 35.99" ><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#424E98" d="M34.581,11c-0.946-2.188-2.234-4.096-3.863-5.723c-1.63-1.628-3.536-2.914-5.716-3.859S20.489,0,18.001,0c-2.49,0-4.823,0.472-7.003,1.418S6.915,3.649,5.285,5.277C3.655,6.905,2.368,8.813,1.42,11C0.472,13.19,0,15.525,0,18.011c0,2.485,0.472,4.817,1.42,6.993c0.948,2.177,2.235,4.081,3.865,5.709c1.628,1.625,3.533,2.913,5.713,3.859c2.18,0.945,4.513,1.417,7.003,1.417c2.488,0,4.821-0.472,7-1.417c2.18-0.946,4.086-2.234,5.716-3.859c1.627-1.628,2.917-3.532,3.863-5.709C35.528,22.829,36,20.497,36,18.011C36.002,15.525,35.528,13.19,34.581,11L34.581,11L34.581,11L34.581,11z M18.001,29.619c-1.126,0-2.038-0.911-2.038-2.035s0.912-2.035,2.038-2.035s2.038,0.911,2.038,2.035S19.127,29.619,18.001,29.619L18.001,29.619L18.001,29.619z M20.039,21.159c0,1.124-0.912,2.035-2.038,2.035s-2.038-0.911-2.038-2.035V8.407c0-1.126,0.912-2.036,2.038-2.036s2.038,0.91,2.038,2.036V21.159L20.039,21.159L20.039,21.159z"/></g></svg>';
            $(function() {
                return !!$("#my_wrap").length && (o = $("html").attr("lang") || "zh-CN", void $.protip({
                    defaults: {
                        trigger: "sticky"
                    }
                }))
            }).on("click", ".project-tab", function() {
                var e = $(this);
                if (!e.hasClass("active")) {
                    e.addClass("active").siblings(".project-tab").removeClass("active");
                    var t = e.data("tab");
                    $(".project-body").hide(), $(".content-" + t).show()
                }
            }).on("click", ".moneytype-select-header", function() {
                $(".moneytype-list").slideToggle()
            }).on("click", ".project-select-header", function() {
                $(".project-list").slideToggle()
            }).on("click", ".moneytype-list li", function() {
                var e = $(this).data("val");
                $(".moneytype-txt").html($(this).text()), $('input[name="curtype_state"]').val(e), $(".moneytype-list").hide()
            }).on("click", ".project-list li", function() {
                var e = $(this).attr("id");
                $(".project-txt").html($(this).text()), s(e), $(".project-list").hide()
            }).on("click", "#locked-btn", function() {
                $.get("/api/getEntrustItems").then(function(e) {
                    if (e.success && (n(e.data), e.data.length <= 0)) {
                        $(".project-txt").text(r[o].no_project);
                        var t = $("#locked_money"),
                            a = $("#locked_confirm");
                        t.attr("disabled", "disabled"), t.css("cursor", "not-allowed"), a.attr("disabled", "disabled"), a.css("cursor", "not-allowed")
                    }
                }), $(".locked-money-window").slideToggle()
            }).on("click", "#locked_confirm", function() {
                var e = $("#locked_money"),
                    t = e.val().trim();
                if ("" == t) return a(r[o].empty_locked_money, e), !1;
                if (isNaN(parseFloat(t)) || parseFloat(t) <= 0) return a(r[o].less_than_0, e), !1;
                var n = $("#project_repay_id").val();
                $.post("/api/saveEntrustIdent", {
                    pay_money: t,
                    item_program_id: n
                }).then(function(e) {
                    e.success ? (i(r[o].locked_succeed, $("#locked_confirm")), location.reload()) : a(e.error || r[o].error, $("#locked_confirm"))
                })
            }).on("click", "#locked_cancel", function() {
                $(".locked-money-window").slideToggle()
            }).on("click", "a.my-delete-record", function() {
                var t = $(this),
                    a = t.data("orderId");
                layer.confirm("", {
                    skin: "tips_dialog",
                    title: [l + r[o].tips],
                    content: '<p style="font-size: 16px;color:#0b0b0b;line-height: 2em;padding: 0 12px;width:270px;text-align: center;">' + r[o].delete_tips + "</p>",
                    shade: [.7, "#000"],
                    area: ["510"],
                    btn: [r[o].cancel, r[o].sure],
                    btn2: function() {
                        e(a), location.reload()
                    }
                })
            }).on("click", "a.my-revoke-record", function() {
                var e = $(this),
                    a = e.data("orderId");
                layer.confirm("", {
                    skin: "tips_dialog",
                    title: [l + r[o].tips],
                    content: '<p style="font-size: 16px;color:#0b0b0b;line-height: 2em;padding: 0 12px;width:270px;text-align: center;">' + r[o].revoke_tips + "</p>",
                    shade: [.7, "#000"],
                    area: ["510"],
                    btn: [r[o].cancel, r[o].sure],
                    btn2: function() {
                        t(a), location.reload()
                    }
                })
            }).on("change", "#locked_money", function() {
                var e = $(this),
                    t = parseFloat(e.val().trim());
                if (isNaN(t) || t <= 0) return a(r[o].less_than_0, e), !1
            }), $(function() {
                var e = $(".raise-countdown");
                e.each(function(e) {
                    var t = $(this);
                    if ("" != t.data("hasclock")) {
                        var a = t.data("hasclock");
                        clearInterval(parseInt(a)), a = ""
                    }
                    var i = t.data("starttime"),
                        n = t.data("endtime"),
                        s = t.data("itemState"),
                        l = new Date,
                        c = l.getTime() / 1e3;
                    if (i > c || "4" == s) return t.text(""), void $(".raise-countdown-box").hide();
                    var d = parseInt(n - c),
                        h = parseInt(d / 3600 / 24),
                        p = parseInt(d / 3600 % 24),
                        u = parseInt(d / 60 % 60),
                        f = parseInt(d % 60);
                    if (h < 0 || "3" == s || "7" == s) return void t.text(r[o].finish);
                    h < 10 ? h = "0" + h : h, p < 10 ? p = "0" + p : p, u < 10 ? u = "0" + u : u, f < 10 ? f = "0" + f : f, t.text(h + " " + r[o].clock_day + " " + p + ":" + u + ":" + f);
                    var g = setInterval(function() {
                        return f > 0 ? (f--, f < 10 ? f = "0" + f : f, void t.text(h + " " + r[o].clock_day + " " + p + ":" + u + ":" + f)) : u > 0 ? (u--, u < 10 ? u = "0" + u : u, f = 59, void t.text(h + " " + r[o].clock_day + " " + p + ":" + u + ":" + f)) : p > 0 ? (p--, p < 10 ? p = "0" + p : p, u = 59, f = 59, void t.text(h + " " + r[o].clock_day + " " + p + ":" + u + ":" + f)) : void(h > 0 ? (h--, h < 10 ? h = "0" + h : h, p = 23, u = 59, f = 59, t.text(h + " " + r[o].clock_day + " " + p + ":" + u + ":" + f)) : t.text(r[o].finish))
                    }, 1e3);
                    t.data("hasclock", g)
                })
            })
        }()
    },
    40: function(e, t) {
        ! function() {
            function e(t) {
                $.get("/api/getWebNotice", {
                    curpage: t || 1,
                    pagenum: 15
                }).then(function(t) {
                    if (t.success) {
                        for (var n = "", s = t.data.list.length, r = 0; r < s; r++) n += '<li data-id="' + t.data.list[r].notice_id + '" class="' + (1 == t.data.list[r].notice_state ? "on" : "") + '"><div class="title"><span class="name">' + a[i].theme + '</span><span class="time">' + t.data.list[r].time + '</span><a href="javascript:" class="msg-opt msg-del" title="' + a[i]["delete"] + '"><svg height="14px" width="14px"><use xlink:href="#icon-delete"></use></svg></a><a href="javascript:" class="msg-opt msg-get" title="' + a[i].open + '"><svg height="8px" width="14px"><use xlink:href="#icon-triangle-down"></use></svg></a></div><div class="msg-bd"></div></li>';
                        s || (n = '<li><p class="text-center">' + a[i].no_msg + "</p></li>"), $(".msg-list").html(n);
                        var o = "<span>" + t.data.count + a[i].record + "&nbsp;&nbsp;" + t.data.curpage + "/" + t.data.pagecount + a[i].pages + "</span><span>" + a[i].unread + " <strong>" + t.data.noRead + "</strong> " + a[i].letter + "</span>";
                        $(".notify-page-info").html(o);
                        var l = layPage({
                            cont: "notify_pagination",
                            pages: t.data.pagecount,
                            curr: t.data.curpage,
                            skin: "#424e98",
                            prev: "<",
                            next: ">",
                            jump: function(t, a) {
                                a || e(t.curr)
                            }
                        });
                        $("#notify_pagination").html(l)
                    }
                })
            }

            function t(e, t) {
                $.get("/api/getNoticeDetail", {
                    id: e
                }).then(function(e) {
                    e.success ? t.html("<p>" + e.data.content + "</p>") : (t.html("<p>" + a[i].error + "</p>"), layer.msg(e.error || a[i].error))
                })
            }
            var a = {
                    en: {
                        error: "Sorry, there was an unexpected error. Please try again.",
                        no_msg: "No notify record",
                        theme: "Notification",
                        record: " records",
                        unread: ", The unread message ",
                        pages: " pages",
                        letter: "",
                        open: "open",
                        close: "close",
                        loading: "loading...",
                        "delete": "Delete",
                        ensure_del: "Are you sure delete this notification message?",
                        sure: "Sure",
                        cancel: "Cancel",
                        del_success: "Deleted Successfully"
                    },
                    "zh-CN": {
                        error: "抱歉，出现未知错误，请重试",
                        no_msg: "暂无通知消息",
                        theme: "系统通知",
                        record: "条记录",
                        unread: "，其中未读通知 ",
                        pages: "页",
                        letter: "条",
                        open: "展开",
                        close: "收起",
                        loading: "正在加载...",
                        "delete": "删除",
                        ensure_del: "确定要删除该通知消息？",
                        sure: "确定",
                        cancel: "取消",
                        del_success: "删除成功"
                    }
                },
                i = "";
            $(function() {
                $(".msg-list").length && (i = $("html").attr("lang") || "zh-CN", e())
            }).on("click", ".msg-get", function() {
                var e = $(this),
                    n = e.parents("li"),
                    s = n.find(".msg-bd"),
                    r = n.data("id");
                if (e.hasClass("open")) s.slideUp(), e.removeClass("open"), e.attr("title", a[i].open);
                else if (s.find("p").length) e.addClass("open"), e.attr("title", a[i].close), s.slideDown();
                else if (s.html("<p>" + a[i].loading + "</p>"), t(r, s), s.slideDown(), e.addClass("open"), e.attr("title", a[i].close), !n.hasClass("on")) {
                    n.addClass("on");
                    var o = Number($(".notify-page-info").find("strong").text());
                    if (o > 0) {
                        var l = o - 1;
                        $(".notify-page-info").find("strong").text(l), 0 == l && $(".notify-unread").removeClass("unread-dot")
                    }
                }
            }).on("click", ".msg-del", function() {
                var t = $(this);
                layer.confirm(a[i].ensure_del, {
                    btn: [a[i].sure, a[i].cancel]
                }, function() {
                    var n = t.parents("li"),
                        s = n.data("id");
                    $.get("/api/removeNotice", {
                        id: s
                    }).then(function(t) {
                        t.success ? (layer.msg(t.error || a[i].del_success), n.remove(), $(".msg-list").find("li").length || e()) : layer.msg(t.error || a[i].error)
                    })
                })
            })
        }()
    },
    43: function(e, t) {
        ! function() {
            function e(a) {
                var s = $(".pro-search-type.active").data("type");
                $.get("/api/getMyItemList", {
                    type: s,
                    curpage: a || 1,
                    pagenum: 8
                }).then(function(a) {
                    if (a.success) {
                        $(".project-tbody").html(t(a.data.list));
                        var s = "<span>" + a.data.count + i[n].record + " </span><span>" + a.data.curpage + "/" + a.data.pagecount + i[n].pages + "</span>";
                        $(".page-count").html(s);
                        var r = layPage({
                            cont: "project_page",
                            pages: a.data.pagecount || 1,
                            curr: a.data.curpage,
                            skin: "#424e98",
                            prev: "<",
                            next: ">",
                            jump: function(t, a) {
                                a || e(t.curr)
                            }
                        });
                        $("#project_page").html(r)
                    } else layer.msg(a.error || i[n].error)
                })
            }

            function t(e) {
                var t = "";
                e.length < 1 && (t = '<tr><td class="text-center" colspan="6">' + i[n].no_project + "</td></tr>");
                for (var a = 0; a < e.length; a++) {
                    var s = "",
                        r = "",
                        o = "",
                        l = '<a href="/pitch/index/' + e[a].id + '/" class="link">' + i[n].look + "</a>",
                        c = '<div><a href="/pitch/index/' + e[a].id + '" class="link">' + i[n].preview + '</a><br/><a href="/launch?id=' + e[a].id + "&language=" + e[a].latest_language + '" class="link">' + i[n].edit + '</a><a href="javascript:" data-id="' + e[a].id + '" class="delete link">' + i[n]["delete"] + "</a></div>",
                        d = '<div><a href="#" class="link">' + i[n].reason + '</a><br/><a href="/launch?id=' + e[a].id + "&language=" + e[a].latest_language + '" class="link">' + i[n].edit + '</a><a href="javascript:" data-id="' + e[a].id + '" class="delete link">' + i[n]["delete"] + "</a></div>";
                    switch (e[a].item_state) {
                        case 1:
                            s = i[n].reviewing, r = l, o = "";
                            break;
                        case 2:
                            s = i[n].in_progress, r = l, o = "green-font";
                            break;
                        case 3:
                            s = i[n].completed, r = l, o = "green-font";
                            break;
                        case 4:
                            s = i[n].ready, r = l, o = "";
                            break;
                        case 5:
                            s = i[n].fail, r = l, o = "red-font";
                            break;
                        case 6:
                            s = i[n].not_pass, r = d, o = "red-font";
                            break;
                        case 7:
                            s = i[n].completed, r = l, o = "green-font";
                            break;
                        default:
                            s = i[n].uncommitted, r = c, o = "red-font"
                    }
                    t += '<tr><td><img src="' + e[a].pic_url + '" alt=""><div class="pro-intro" title="' + e[a].theme + '">' + e[a].theme + '</div></td><td class="text-center btc-font-family">&nbsp' + ("BTC" == e[a].limit_curtype_state ? "฿" : e[a].limit_curtype_state) + e[a].target_money + '</td><td class="text-center">' + e[a].funding_day + '</td><td class="text-center">' + e[a].createtime + '</td><td class="text-center ' + o + '">' + s + '</td><td class="text-center">' + r + "</td></tr>"
                }
                return t
            }

            function a(t) {
                $.get("/api/deleteMyItems", {
                    id: t
                }).then(function(t) {
                    t.success ? (alert(t.error || i[n].del_success), e()) : alert(t.error || i[n].del_fail)
                })
            }
            var i = {
                    en: {
                        del_project: "Are you sure you want to delete this project?",
                        record: " records",
                        pages: " pages",
                        error: "Sorry, Error getting data",
                        no_project: "No projects",
                        look: "View",
                        preview: "Preview",
                        edit: "Modify",
                        "delete": "Delete",
                        reason: "Reason",
                        in_progress: "In progress",
                        completed: "Successful",
                        ready: "Ready",
                        reviewing: "Reviewing",
                        uncommitted: "Uncommitted",
                        not_pass: "Not pass",
                        fail: "Failed",
                        del_success: "Deleted Successfully",
                        del_fail: "Failed to Delete"
                    },
                    "zh-CN": {
                        del_project: "您确定要删除该项目吗？",
                        record: "条记录",
                        pages: "页",
                        error: "抱歉，获取信息出错",
                        no_project: "暂无项目信息",
                        look: "查看",
                        preview: "预览",
                        edit: "修改",
                        "delete": "删除",
                        reason: "原因",
                        in_progress: "进行中",
                        completed: "已完成",
                        ready: "即将开始",
                        reviewing: "待审核",
                        uncommitted: "未提交",
                        not_pass: "未通过",
                        fail: "失败",
                        del_success: "删除成功",
                        del_fail: "删除失败"
                    }
                },
                n = "";
            $(function() {
                $("#project_wrap").length && (n = $("html").attr("lang") || "zh-CN", e())
            }).on("click", ".pro-search-type", function() {
                $(this).hasClass("active") || ($(".pro-search-type").removeClass("active"), $(this).addClass("active"), e())
            }).on("click", ".delete", function() {
                var e = $(this).data("id");
                "" != e && confirm(i[n].del_project) && a(e)
            })
        }()
    },
    44: function(e, t, a) {
        ! function() {
            var e = {
                    en: {
                        copy: "Copied Successfully",
                        not_support: "Your browser does not support this replication feature, /n Please use Ctrl+C or right mouse button to copy"
                    },
                    "zh-CN": {
                        copy: "复制成功",
                        not_support: "您的浏览器不支持此复制功能，/n请使用Ctrl+C或鼠标右键复制"
                    }
                },
                t = "";
            $(function() {
                function i(e, t) {
                    $(t).qrcode({
                        text: e,
                        width: 100,
                        height: 100
                    })
                }
                if ($("#recharge_wrap").length) {
                    t = $("html").attr("lang") || "zh-CN";
                    var n = a(9),
                        s = $("#my_btc_address").text(),
                        r = $("#my_eth_address").text(),
                        o = "bitcoin:" + s + "?amount=",
                        l = r;
                    i(o, "#btc-qrcode"), i(o, "#ltc-qrcode"), i(l, "#eth-qrcode");
                    var c = new n(".copy-the-address");
                    c.on("success", function(a) {
                        layer.msg(e[t].copy), a.clearSelection()
                    }), c.on("error", function(a) {
                        layer.msg(e[t].not_support)
                    })
                }
            })
        }()
    },
    45: function(e, t) {
        ! function() {
            var e = {
                    en: {
                        old_phone: "Please enter the original phone number",
                        new_phone: "Please enter the new phone number",
                        two_diff: "The phone number cannot be the same",
                        sent_verify: "Authentication code has been sent to the phone",
                        mail_sent_verify: "Authentication code has been sent to the primary email address",
                        sent_code: "Authentication code has been sent",
                        second: " second re acquisition",
                        get_verify: "Get authentication code",
                        verify_error: "Sorry, authentication code sent failed",
                        phone_verify: "Please enter the phone authentication code",
                        bind_success: "Successful binding the phone number",
                        change_success: "Successful change the phone number",
                        email_address: "Please enter the email address",
                        email_verify: "Please enter the mail authentication code",
                        email_format: "Address format error",
                        phone_format: "Phone number format error",
                        sent_email: "Mail has been sent, please login mailbox activation!",
                        error: "Sorry, there was an unexpected error. Please try again.",
                        invest_pwd: "Please enter the funds password",
                        confirm_pwd: "Please enter the confirm password",
                        pwd_diff: "Two passwords are not consistent",
                        verify: "Please enter the authentication code",
                        set_success: "Successfully set the funds password"
                    },
                    "zh-CN": {
                        old_phone: "请填写原手机号码",
                        new_phone: "请填写新手机号码",
                        two_diff: "两个手机号码不能相同哦",
                        sent_verify: "验证码已发送到手机上，请及时查看",
                        mail_sent_verify: "验证码已发送到原邮箱上，请及时查看",
                        sent_code: "验证码已发送，请及时查看",
                        second: "秒后重新获取",
                        get_verify: "获取验证码",
                        verify_error: "抱歉！验证码发送失败，请重试",
                        phone: "请填写手机号码",
                        phone_verify: "请填写手机验证码",
                        bind_success: "成功绑定手机号码",
                        change_success: "成功更换手机号码",
                        email_address: "请填写邮箱地址",
                        email_verify: "请填写邮箱验证码",
                        email_format: "邮箱地址格式有误",
                        phone_format: "手机号码格式有误哦",
                        sent_email: "邮件已发送，请登录邮箱激活账号！",
                        error: "抱歉！未知错误，请重试",
                        invest_pwd: "请填写资金密码",
                        confirm_pwd: "请填写确认资金密码",
                        pwd_diff: "两次密码输入不一致",
                        verify: "请填写验证码",
                        set_success: "已成功设置资金密码"
                    }
                },
                t = "";
            $(function() {
                t = $("html").attr("lang") || "zh-CN"
            }).on("click", "#getOldPhoneCode", function() {
                var a = arguments,
                    i = this,
                    n = null,
                    s = $("#change_old_phone"),
                    r = $.trim(s.val());
                if (!a.callee.hasSend) return "" == r ? (layer.tips(e[t].old_phone, s, {
                    tips: [2, "#da2e2b"]
                }), !1) : void $.get("/api/getOldPhoneCode", {
                    phone: r
                }).then(function(s) {
                    if (s.success) {
                        layer.msg(e[t].sent_verify), a.callee.hasSend = !0;
                        var r = 119;
                        clearInterval(n), n = setInterval(function() {
                            r > 0 ? ($(i).text(r + e[t].second), r--) : (clearInterval(n), $(i).text(e[t].get_verify), a.callee.hasSend = !1)
                        }, 1e3)
                    } else layer.msg(s.error || e[t].verify_error)
                })
            }).on("click", "#getNewPhoneCode", function() {
                var a = arguments,
                    i = this,
                    n = null,
                    s = $("#change_old_phone"),
                    r = $("#change_new_phone"),
                    o = $.trim(s.val()),
                    l = $.trim(r.val());
                if (!a.callee.hasSend) return "" == l ? (layer.tips(e[t].new_phone, r, {
                    tips: [2, "#da2e2b"]
                }), !1) : o == l ? (layer.tips(e[t].two_diff, r, {
                    tips: [2, "#da2e2b"]
                }), !1) : void $.get("/api/getNewPhoneCode", {
                    phone: l
                }).then(function(s) {
                    if (s.success) {
                        layer.msg(e[t].sent_verify), a.callee.hasSend = !0;
                        var r = 119;
                        clearInterval(n), n = setInterval(function() {
                            r > 0 ? ($(i).text(r + e[t].second), r--) : (clearInterval(n), $(i).text(e[t].get_verify), a.callee.hasSend = !1)
                        }, 1e3)
                    } else layer.msg(s.error || e[t].verify_error)
                })
            }).on("click", "#getNewPhoneFinish", function() {
                var a = arguments,
                    i = $(this),
                    n = $("#change_new_phone"),
                    s = $("#change_old_phone"),
                    r = $("#inputOldCode"),
                    o = $("#inputNewCode"),
                    l = $.trim(r.val()),
                    c = $.trim(o.val()),
                    d = $.trim(s.val()),
                    h = $.trim(n.val());
                return a.callee.hasSend ? void i.addClass("for-btn-disabled") : "" == d ? (layer.tips(e[t].old_phone, s, {
                    tips: [2, "#da2e2b"]
                }), !1) : "" == l ? (layer.tips(e[t].phone_verify, r, {
                    tips: [2, "#da2e2b"]
                }), !1) : "" == h ? (layer.tips(e[t].new_phone, n, {
                    tips: [2, "#da2e2b"]
                }), !1) : "" == c ? (layer.tips(e[t].phone_verify, o, {
                    tips: [2, "#da2e2b"]
                }), !1) : (a.callee.hasSend = !0, i.addClass("for-btn-disabled"), void $.post("/api/updatePhone", {
                    old_code: l,
                    old_phone: d,
                    code: c,
                    phone: h
                }).then(function(n) {
                    n.success ? layer.msg(n.error || e[t].change_success, {
                        time: 2e3
                    }, function() {
                        window.location.reload()
                    }) : (layer.msg(n.error || e[t].verify_error), a.callee.hasSend = !1, i.removeClass("for-btn-disabled"))
                }))
            }).on("click", "#getPhoneFinish", function() {
                var a = arguments;
                if (!a.callee.hasSend) {
                    var i = $(this),
                        n = $("#change_phone"),
                        s = $("#validPhoneCode"),
                        r = $.trim(s.val()),
                        o = $.trim(n.val());
                    if ("" == o) return layer.tips(e[t].phone, n, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    if ("" == r) return layer.tips(e[t].phone_verify, s, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    a.callee.hasSend = !0, i.addClass("for-btn-disabled"), $.post("/api/updatePhone", {
                        code: r,
                        phone: o
                    }).then(function(n) {
                        n.success ? layer.msg(n.error || e[t].bind_success, {
                            time: 2e3
                        }, function() {
                            window.location.reload()
                        }) : (layer.msg(n.error || e[t].verify_error), a.callee.hasSend = !1, i.removeClass("for-btn-disabled"))
                    })
                }
            }).on("click", "#getOldMailCode", function(a) {
                var i = arguments;
                if (!i.callee.hasSend) {
                    var n = this,
                        s = null,
                        r = $("#old_email"),
                        o = $.trim(r.val());
                    return o ? /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(o) ? void $.get("/api/sendEmailToOld", {
                        email: o
                    }).then(function(a) {
                        if (a.success) {
                            layer.msg(e[t].mail_sent_verify), i.callee.hasSend = !0;
                            var r = 119;
                            clearInterval(s), s = setInterval(function() {
                                r > 0 ? ($(n).text(r + e[t].second), r--) : (clearInterval(s), $(n).text(e[t].get_verify), i.callee.hasSend = !1)
                            }, 1e3)
                        } else layer.msg(a.error || e[t].verify_error)
                    }) : (layer.tips(e[t].email_format, r, {
                        tips: [2, "#da2e2b"]
                    }), !1) : (layer.tips(e[t].email_address, r, {
                        tips: [2, "#da2e2b"]
                    }), !1)
                }
            }).on("click", "#getSecurityEmail", function(a) {
                var i = arguments;
                if (!i.callee.hasSend) {
                    var n = $(this),
                        s = $("#old_email"),
                        r = $.trim(s.val()),
                        o = $("#lg_email"),
                        l = $("#old_mail_code"),
                        c = $.trim(o.val()),
                        d = $.trim(l.val());
                    if (!r) return layer.tips(e[t].email_address, s, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    if ("" == d) return layer.tips(e[t].email_verify, l, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    if (!c) return layer.tips(e[t].email_address, o, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(c)) return layer.tips(e[t].email_format, o, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    i.callee.hasSend = !0, n.addClass("for-btn-disabled"), $.get("/api/sendEmail", {
                        email: c,
                        code: d
                    }).then(function(a) {
                        a.success ? layer.msg(a.error || e[t].sent_email, {
                            time: 2e3
                        }, function() {
                            window.location.reload()
                        }) : (layer.msg(a.error || e[t].error), i.callee.hasSend = !1, n.removeClass("for-btn-disabled"))
                    })
                }
            }).on("click", "#getValidPhoneCode", function(a) {
                var i = arguments,
                    n = this,
                    s = null;
                if (!i.callee.hasSend) {
                    var r = $("#change_phone"),
                        o = r.val();
                    return o ? void $.get("/api/sendMsg", {
                        phone: o
                    }).then(function(a) {
                        if (a.success) {
                            layer.msg(e[t].sent_verify), i.callee.hasSend = !0;
                            var r = 119;
                            clearInterval(s), s = setInterval(function() {
                                r > 0 ? ($(n).text(r + e[t].second), r--) : (clearInterval(s), $(n).text(e[t].get_verify), i.callee.hasSend = !1)
                            }, 1e3)
                        } else layer.msg(a.error || e[t].verify_error)
                    }) : (layer.tips(e[t].phone, r, {
                        tips: [2, "#da2e2b"]
                    }), !1)
                }
            }).on("click", "#get_valid_code", function(a) {
                var i = arguments,
                    n = this,
                    s = null;
                if (!i.callee.hasSend) {
                    var r = $(n).data("type") || "phone",
                        o = "phone" == r ? "/api/getSecretPhoneCode" : "/api/getSecretMailCode";
                    $.get(o).then(function(a) {
                        if (a.success) {
                            layer.msg(a.error || e[t].sent_code), i.callee.hasSend = !0;
                            var r = 119;
                            clearInterval(s), s = setInterval(function() {
                                r > 0 ? ($(n).text(r + e[t].second), r--) : (clearInterval(s), $(n).text(e[t].get_verify), i.callee.hasSend = !1)
                            }, 1e3)
                        } else layer.msg(a.error || e[t].verify_error)
                    })
                }
            }).on("click", "#submit_safe_pwd", function(a) {
                var i = arguments;
                if (!i.callee.hasSend) {
                    var n = $(this),
                        s = $("#safe_password"),
                        r = $.trim(s.val()),
                        o = $("#re_safe_password"),
                        l = $.trim(o.val()),
                        c = $("#valid_code"),
                        d = $.trim(c.val());
                    if (!r) return layer.tips(e[t].invest_pwd, s, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    if (!l) return layer.tips(e[t].confirm_pwd, o, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    if (r != l) return layer.tips(e[t].pwd_diff, o, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    if (!d) return layer.tips(e[t].verify, c, {
                        tips: [2, "#da2e2b"]
                    }), !1;
                    i.callee.hasSend = !0, n.addClass("for-btn-disabled"), $.post("/api/saveSecretKey", {
                        secretKey: r,
                        code: d
                    }).then(function(a) {
                        i.callee.hasSend = !1, a.success ? layer.msg(a.error || e[t].set_success, {
                            time: 2e3
                        }, function() {
                            window.location.reload()
                        }) : (layer.msg(a.error || e[t].error), n.removeClass("for-btn-disabled"))
                    })
                }
            })
        }()
    },
    46: function(e, t) {
        ! function() {
            function e(a) {
                var i = $(".search-type.active").data("type") || "";
                $.get("/api/mySupportItemList", {
                    type: i,
                    curpage: a || 1,
                    pagenum: 8
                }).then(function(a) {
                    if (a.success) {
                        $(".project-tbody").html(t(a.data.list));
                        var i = "<span>" + a.data.count + n[s].record + " </span><span>" + a.data.curpage + "/" + a.data.pagecount + n[s].pages + "</span>";
                        $(".page-count").html(i);
                        var o = layPage({
                            cont: "support_page",
                            pages: a.data.pagecount || 1,
                            curr: a.data.curpage,
                            skin: "#424e98",
                            prev: "<",
                            next: ">",
                            jump: function(t, a) {
                                a || (e(t.curr), r = t.curr)
                            }
                        });
                        $("#support_page").html(o)
                    }
                })
            }

            function t(e) {
                var t = "";
                e.length < 1 && (t = '<tr><td class="text-center" colspan="7">' + n[s].no_project + "</td></tr>");
                for (var a = 0; a < e.length; a++) {
                    var i = "",
                        r = "",
                        o = "",
                        l = "",
                        c = "",
                        d = '<a href="/pitch/index/' + e[a].item_id + '" data-id="' + e[a].item_id + '" target="_blank" class="link">' + n[s].look + "</a>",
                        h = '<a href="/pay/step3?id=' + e[a].item_id + "&order_id=" + e[a].orderid + '" data-id="' + e[a].item_id + '" target="_blank" class="link">' + n[s].pay + "</a>",
                        p = '<a href="javascript:;" data-order-id="' + e[a].orderid + '" class="link delete-record">' + n[s]["delete"] + "</a>",
                        u = ('<a href="javascript:;" data-order-id="' + e[a].orderid + '" class="link revoke-record">' + n[s].revoke + "</a>", "");
                    switch (e[a].order_state) {
                        case 0:
                            i = n[s].pending, r = h, u = "";
                            break;
                        case 1:
                            i = n[s].success, r = d, u = "green-font";
                            break;
                        case 2:
                            i = n[s].overtime, r = p, u = "red-font";
                            break;
                        case 3:
                            i = n[s].fail, r = p, u = "red-font";
                            break;
                        case 4:
                            i = n[s].locked, r = d, u = "orange-font";
                            break;
                        default:
                            i = n[s].reviewing, r = d, u = ""
                    }
                    "BTC" == e[a].pay_type ? (l = "฿", c = "Bitcoins") : "ETH" == e[a].pay_type ? (l = "ETH", c = "Ethereum") : "ETC" == e[a].pay_type && (l = "ETC", c = "Ethereum Classic"), o = e[a].token_currency && e[a].token_number ? e[a].token_number + " " + e[a].token_currency : n[s].no_daibi, t += "<tr><td>" + e[a].order_num + '</td><td><div class="pro-info"><a href="/pitch/index/' + e[a].item_id + '">' + e[a].theme + '</a></div></td><td class="btc-font-family">' + l + "&nbsp" + e[a].money + '</td><td class="text-center">' + c + '</td><td class="text-center">' + e[a].createtime + '</td><td class="text-center ' + u + '">' + i + '</td><td class="text-center">' + o + '</td><td class="text-center">' + r + "</td></tr>"
                }
                return t
            }

            function a(e) {
                $.post("/api/notShowFailOrder", {
                    order_id: e
                }, function(e) {
                    e.success ? layer.msg(n[s].delete_success) : layer.msg(e.error || n[s].delete_fail)
                })
            }

            function i(e) {
                $.post("/api/cancelEntrustIdent", {
                    order_id: e
                }, function(e) {
                    e.success ? layer.msg(n[s].revoke_success) : layer.msg(e.error || n[s].revoke_fail)
                })
            }
            var n = {
                    en: {
                        record: " records",
                        pages: " pages",
                        no_project: "No projects",
                        look: "View",
                        pay: "Pay",
                        pending: "Pending",
                        success: "Successful",
                        overtime: "Overtime",
                        reviewing: "Reviewing",
                        fail: "Failed",
                        no_daibi: "none",
                        locked: "Frozen",
                        "delete": "Delete",
                        revoke: "Revoke",
                        delete_success: "Delete successfully!",
                        delete_failed: "Delete failed!",
                        delete_tips: "Delete this record?!",
                        revoke_success: "Revoke successfully!",
                        revoke_failed: "Revoke failed!",
                        revoke_tips: "Revoke this?!",
                        tips: "tips",
                        sure: "confirm",
                        cancel: "cancel"
                    },
                    "zh-CN": {
                        record: "条记录",
                        pages: "页",
                        no_project: "暂无项目信息",
                        look: "查看",
                        pay: "支付",
                        pending: "待支付",
                        success: "成功",
                        overtime: "超时",
                        reviewing: "待确认",
                        fail: "失败",
                        no_daibi: "暂无",
                        locked: "锁定",
                        "delete": "删除",
                        revoke: "撤销",
                        delete_success: "删除成功!",
                        delete_failed: "删除失败!",
                        delete_tips: "确定删除本次记录 ?!",
                        revoke_success: "撤单成功!",
                        revoke_failed: "撤单失败!",
                        revoke_tips: "确定撤单 ?!",
                        tips: "温馨提示",
                        sure: "确认",
                        cancel: "取消"
                    }
                },
                s = "",
                r = "",
                o = '<svg class="svg-warning" version="1.1" id="" x="0px" y="0px"width="36px" height="36px" viewBox="0 0 36 35.99" ><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#424E98" d="M34.581,11c-0.946-2.188-2.234-4.096-3.863-5.723c-1.63-1.628-3.536-2.914-5.716-3.859S20.489,0,18.001,0c-2.49,0-4.823,0.472-7.003,1.418S6.915,3.649,5.285,5.277C3.655,6.905,2.368,8.813,1.42,11C0.472,13.19,0,15.525,0,18.011c0,2.485,0.472,4.817,1.42,6.993c0.948,2.177,2.235,4.081,3.865,5.709c1.628,1.625,3.533,2.913,5.713,3.859c2.18,0.945,4.513,1.417,7.003,1.417c2.488,0,4.821-0.472,7-1.417c2.18-0.946,4.086-2.234,5.716-3.859c1.627-1.628,2.917-3.532,3.863-5.709C35.528,22.829,36,20.497,36,18.011C36.002,15.525,35.528,13.19,34.581,11L34.581,11L34.581,11L34.581,11z M18.001,29.619c-1.126,0-2.038-0.911-2.038-2.035s0.912-2.035,2.038-2.035s2.038,0.911,2.038,2.035S19.127,29.619,18.001,29.619L18.001,29.619L18.001,29.619z M20.039,21.159c0,1.124-0.912,2.035-2.038,2.035s-2.038-0.911-2.038-2.035V8.407c0-1.126,0.912-2.036,2.038-2.036s2.038,0.91,2.038,2.036V21.159L20.039,21.159L20.039,21.159z"/></g></svg>';
            $(function() {
                $("#support_wrap").length && (s = $("html").attr("lang") || "zh-CN", e())
            }).on("click", ".search-type", function() {
                $(this).hasClass("active") || ($(".search-type").removeClass("active"), $(this).addClass("active"), e())
            }).on("click", "a.delete-record", function() {
                var t = $(this),
                    i = t.data("orderId");
                layer.confirm("", {
                    skin: "warning_dialog",
                    title: [o + n[s].tips],
                    content: '<p style="font-size: 16px;color:#0b0b0b;line-height: 2em;padding: 0 12px;width:270px;text-align: center;">' + n[s].delete_tips + "</p>",
                    shade: [.7, "#000"],
                    area: ["510"],
                    closeBtn: 0,
                    btn: [n[s].cancel, n[s].sure],
                    btn2: function() {
                        a(i), e(r)
                    }
                })
            }).on("click", "a.revoke-record", function() {
                var t = $(this),
                    a = t.data("orderId");
                layer.confirm("", {
                    skin: "warning_dialog",
                    title: [o + n[s].tips],
                    content: '<p style="font-size: 16px;color:#0b0b0b;line-height: 2em;padding: 0 12px;width:270px;text-align: center;">' + n[s].revoke_tips + "</p>",
                    shade: [.7, "#000"],
                    area: ["510"],
                    closeBtn: 0,
                    btn: [n[s].cancel, n[s].sure],
                    btn2: function() {
                        i(a), e(r)
                    }
                })
            })
        }()
    },
    47: function(e, t) {
        ! function() {
            function e(n) {
                $.get("/api/getMyToken", {
                    curpage: n || 1,
                    pagenum: 15
                }).then(function(n) {
                    if (n.success) {
                        if ($(".money").text("￥" + n.data.total_cny), $(".token-tbody").html(t(n.data.list)), n.data.count) {
                            var s = "<span>" + n.data.count + a[i].record + "</span><span>" + n.data.curpage + "/" + n.data.pagecount + a[i].page + "</span>";
                            $(".page-count").html(s)
                        }
                        var r = layPage({
                            cont: "capital_page",
                            pages: n.data.pagecount || 1,
                            curr: n.data.curpage,
                            skin: "#424e98",
                            prev: "<",
                            next: ">",
                            jump: function(t, a) {
                                a || e(t.curr)
                            }
                        });
                        $("#token_page").html(r)
                    } else layer.msg(n.error || a[i].error)
                })
            }

            function t(e) {
                var t = "";
                e.length < 1 && (t = '<tr><td class="text-center" colspan="5">' + a[i].no_info + "</td></tr>");
                for (var n = 0; n < e.length; n++) t += "<tr>", t += e[n].recharge ? '<td class="currency">' + e[n].currency + "</td>" : '<td class="currency">' + e[n].currency + "&nbsp></td>", t += '<td class="second">' + e[n].type + "</td><td>" + e[n].usable + '</td><td class="fourth">' + e[n].usable_cny + "</td>", t += e[n].recharge ? '<td class="last"><a href="/user/recharge" class="recharge">' + a[i].recharge + "</a>" : '<td class="last">', t += e[n].withdrawal ? '<a href="/user/withdrawal" class="withdraw">' + a[i].withdraw + "</a></td></tr>" : '<span href="/user/withdrawal" class="no-withdraw">' + a[i].withdraw + "</span></td></tr>";
                return t
            }
            var a = {
                    en: {
                        error: "Sorry, there was an unexpected error. Please try again.",
                        record: "record",
                        page: "pages",
                        no_info: "No information",
                        recharge: "Recharge",
                        withdraw: "Withdraw"
                    },
                    "zh-CN": {
                        error: "抱歉，出现意外错误，请重试",
                        record: "条记录",
                        page: "页",
                        no_info: "暂无信息",
                        recharge: "充值",
                        withdraw: "提现"
                    }
                },
                i = "";
            $(function() {
                $("#token-wrap").length && (i = $("html").attr("lang") || "zh-CN", e())
            })
        }()
    },
    48: function(e, t, a) {
        ! function() {
            a(99);
            var e = {
                    en: {
                        high: "High",
                        higher: "Higher",
                        common: "Common",
                        lower: "Lower",
                        low: "Low"
                    },
                    "zh-CN": {
                        high: "高",
                        higher: "较高",
                        common: "一般",
                        lower: "较低",
                        low: "低"
                    }
                },
                t = "";
            $(function() {
                t = $("html").attr("lang") || "zh-CN";
                var a = $("#security_rate").data("factor"),
                    i = e[t].low;
                a <= 20 ? i = e[t].low : a > 20 && a <= 40 ? i = e[t].lower : a > 40 && a <= 60 ? i = e[t].common : a > 60 && a <= 80 ? i = e[t].higher : a > 80 && a <= 100 && (i = e[t].high), new JustGage({
                    id: "security_rate",
                    value: a,
                    valueFontColor: "#fff",
                    hideValue: !0,
                    min: 0,
                    max: 100,
                    relativeGaugeSize: !1,
                    donut: !0,
                    gaugeWidthScale: .3,
                    gaugeColor: "#fff",
                    label: i,
                    labelFontColor: "#aebbff",
                    levelColors: ["#abb7ff"],
                    startAnimationTime: 500
                })
            })
        }()
    },
    49: function(e, t) {
        ! function() {
            function e() {
                $.get("/api/getWithdrawalSupportCurrency").then(function(e) {
                    for (var t = '<li data-val="">' + c[d].select_wallet + "</li>", a = 0; a < e.length; a++) t += '<li data-val="' + e[a] + '">' + e[a] + "</li>";
                    $(".coin-list.person-coin-list").html(t)
                })
            }

            function t() {
                if (p) return !1;
                var e = $("#remarks"),
                    t = $("#btc_address"),
                    a = $(".verify-code"),
                    n = $("#password"),
                    s = $("#coin-select"),
                    r = e.val(),
                    f = t.val(),
                    g = a.val(),
                    m = n.val();
                return "" == r ? (layer.tips(c[d].enter_remarks, e, {
                    tips: [1, "#da2e2b"]
                }), e.focus(), !1) : "" == u ? (layer.tips(c[d].select_wallet, s, {
                    tips: [1, "#da2e2b"]
                }), s.focus(), !1) : "" == f ? (layer.tips(c[d].enter_address, t, {
                    tips: [1, "#da2e2b"]
                }), t.focus(), !1) : "" == g ? (layer.tips(c[d].enter_verify, a, {
                    tips: [1, "#da2e2b"]
                }), a.focus(), !1) : "" == m ? (layer.tips(c[d].enter_pwd, n, {
                    tips: [1, "#da2e2b"]
                }), n.focus(), !1) : (p = !0, void $.post("/api/saveTakeCoinAddress", {
                    id: h || "",
                    address: f,
                    name: r,
                    code: g,
                    security_key: m,
                    limit_curtype_state: u
                }).then(function(s) {
                    if (p = !1, s.success) {
                        if ($("#add_btc_address").modal("hide"), h) {
                            layer.msg(s.error || c[d].edit_success);
                            var r = "#edit-" + h,
                                u = $(".address-list").find(r).parents(".address-item");
                            l(u, s.data), o(u)
                        } else layer.msg(s.error || c[d].add_success), i(s.data), o($(".address-list li:last-child"));
                        e.val(""), t.val(""), a.val(""), n.val(""), h = null
                    } else layer.tips(s.error, $("#save_address_btn"), {
                        tips: [1, "#da2e2b"]
                    })
                }).fail(function(e) {
                    p = !1, layer.msg(e.error || c[d].error)
                }))
            }

            function a() {
                if (p) return !1;
                var e = $(".address-item.active"),
                    t = $("#bit_count"),
                    a = $("#brokerage"),
                    i = $("#security_pwd"),
                    n = $("#verify_code"),
                    s = $.trim(t.val()),
                    r = $.trim(a.val()),
                    o = $.trim(i.val()),
                    l = $.trim(n.val());
                if (!e.length) return layer.msg(c[d].select_address), !1;
                var h = e.find(".address").text(),
                    u = e.find(".address-type").data("limit_curtype_state");
                return "" == s ? (layer.tips(c[d].coin_number, t, {
                    tips: [1, "#da2e2b"]
                }), t.focus(), !1) : s <= 0 ? (layer.tips(c[d].less_than_0, t, {
                    tips: [1, "#da2e2b"]
                }), t.focus(), !1) : "" == r ? (layer.tips(c[d].enter_commission, a, {
                    tips: [1, "#da2e2b"]
                }), a.focus(), !1) : r <= 0 ? (layer.tips(c[d].less_than_0, a, {
                    tips: [1, "#da2e2b"]
                }), a.focus(), !1) : "" == o ? (layer.tips(c[d].enter_pwd, i, {
                    tips: [1, "#da2e2b"]
                }), i.focus(), !1) : "" == l ? (layer.tips(c[d].enter_verify, n, {
                    tips: [1, "#da2e2b"]
                }), n.focus(), !1) : (p = !0, void $.post("/api/takeMyCoins", {
                    address: h,
                    limit_curtype_state: u,
                    count: s,
                    code: l,
                    security_key: o,
                    fee: r
                }).then(function(e) {
                    p = !1, e.success ? layer.msg(e.error || c[d].submit_success, {
                        time: 2e3
                    }, function() {
                        window.location.reload()
                    }) : layer.tips(e.error, $("#submit_address_btn"), {
                        tips: [1, "#da2e2b"]
                    })
                }).fail(function(e) {
                    p = !1, layer.msg(e.error || c[d].error)
                }))
            }

            function i(e) {
                var t = '<li class="address-item" data-usable="' + e.usable + '" data-currency="' + e.currency + '" data-fee="' + e.fee + '"><div class="head"><span class="title">' + e.name + '</span><a href="javascript:" class="setting-edit" data-id="' + e.id + '" data-toggle="modal" data-backdrop="static" data-target="#add_btc_address"><svg width="18px" height="18px"><use xlink:href="#icon-setting-edit"></use></svg>' + c[d].edit + '</a></div><div class="body"><span class="address">' + e.address + '</span><p class="address-type" data-limit_curtype_state="' + e.currency + '">' + e.currency + c[d].address + "</p></div></li>",
                    a = $("#add_address");
                if (a.length) {
                    var i = '<ul class="inline-block address-list">' + t + '</ul><button class="add-address-btn" data-toggle="modal" data-backdrop="static" data-target="#add_btc_address">' + c[d].add_address + "</button>";
                    a.replaceWith(i)
                } else $(".address-list").append(t)
            }

            function n(e) {
                var t = $(".search-type.active").data("type") || "";
                $.get("/api/getTakeCoinRecordList", {
                    type: t,
                    curpage: e || 1,
                    pagenum: 8
                }).then(function(e) {
                    if (e.success) {
                        if ($(".withdrawal-tbody").html(s(e.data.list)), e.data.count) {
                            var t = "<span>" + e.data.count + c[d].record + " </span><span>" + e.data.curpage + "/" + e.data.pagecount + c[d].pages + "</span>";
                            $(".page-count").html(t)
                        }
                        var a = layPage({
                            cont: "withdrawal_page",
                            pages: e.data.pagecount || 1,
                            curr: e.data.curpage,
                            skin: "#424e98",
                            prev: "<",
                            next: ">",
                            jump: function(e, t) {
                                t || n(e.curr)
                            }
                        });
                        $("#withdrawal_page").html(a)
                    }
                })
            }

            function s(e) {
                var t = "";
                e.length < 1 && (t = '<tr><td class="text-center" colspan="6">' + c[d].no_record + "</td></tr>");
                for (var a = 0; a < e.length; a++) {
                    var i = "";
                    switch (e[a].state) {
                        case 0:
                            i = '<a href="javascript:" class="cancel-opt" data-id="' + e[a].id + '">' + c[d].cancel + "</a>";
                            break;
                        case 1:
                        case 2:
                        default:
                            i = ""
                    }
                    t += "<tr><td>" + e[a].createtime + "</td>", t += "BTC" == e[a].currency ? '<td class="btc-font-family">฿' + e[a].count + '</td><td class="btc-font-family">฿' + e[a].fee + "</td><td>" + e[a].address + ' <a href="http://block.okcoin.cn/btc/address/' + e[a].address + '" target="_blank">' + c[d].status + "</a></td>" : '<td class="btc-font-family">' + e[a].currency + e[a].count + '</td><td class="btc-font-family">' + e[a].currency + e[a].fee + "</td><td>" + e[a].address + ' <a href="https://etherchain.org/account/' + e[a].address + '" target="_blank">' + c[d].status + "</a></td>", t += "<td>" + e[a].status + "</td><td>" + i + "</td></tr>"
                }
                return t
            }

            function r() {
                $("#add-management-label").html(c[d].add_address), $("#remarks").val(""), $("#btc_address").val(""), h = null
            }

            function o(e) {
                var t = e.data("usable"),
                    a = e.data("currency"),
                    i = e.data("fee");
                $("#max-wd-money").text(a + t), $("#bit_count").data("usable", t).attr("placeholder", c[d].biggest_count + t), $("#brokerage").data("fee", i).attr("placeholder", c[d].less_fee + i), e.hasClass("active") || e.addClass("active").siblings(".address-item").removeClass("active")
            }

            function l(e, t) {
                e.data({
                    usable: t.usable,
                    currency: t.currency,
                    fee: t.fee
                }), e.find(".address-type").data("limit_curtype_state", t.currency), e.find(".title").text(t.name), e.find(".address").text(t.address), e.find(".address-type").text(t.currency + c[d].address)
            }
            var c = {
                    en: {
                        error: "Sorry, there was an unexpected error. Please try again.",
                        record: " records",
                        pages: " pages",
                        setting: "You have not set the capital password, immediately set!",
                        sure: "Sure",
                        cancel: "Cancel",
                        sent_verify: "Authentication code has been sent",
                        second: " second re acquisition",
                        get_verify: "Send authentication code",
                        verify_error: "Sorry, authentication code sent failed",
                        cancel_withdraw: "Sure to cancel the withdrawal?",
                        cancel_success: "Cancel Successfully",
                        edit_address: "Modify address",
                        enter_remarks: "Please enter the Notes name",
                        enter_address: "Please enter the Address",
                        enter_verify: "Please enter the authentication code",
                        enter_pwd: "Please enter the funds password",
                        add_success: "Add Successfully",
                        select_address: "Please add or select address",
                        coin_number: "Please enter the Amount",
                        enter_commission: "Please enter the Commission charge",
                        submit_success: "Submit Successfully",
                        edit: "Edit",
                        address: "Address",
                        add_address: "Add address",
                        no_record: "No records",
                        status: "View status",
                        select_wallet: "Please select wallet",
                        get_wallet: "Error getting wallets",
                        edit_success: "Edit Successfully",
                        less_fee: "minimum commission charge ",
                        biggest_count: "Maximum amount(include commission charge)：",
                        must_be_num: "Must be a number",
                        less_than_0: "Must be more than zero"
                    },
                    "zh-CN": {
                        error: "抱歉，出现未知错误，请重试",
                        record: "条记录",
                        pages: "页",
                        setting: "您还没设置资金密码哦，立即去设置！",
                        sure: "确定",
                        cancel: "取消",
                        sent_verify: "验证码已发送，请及时查看",
                        second: "秒后重新发送",
                        get_verify: "发送验证码",
                        verify_error: "抱歉！验证码发送失败，请重试",
                        cancel_withdraw: "确定取消提现？",
                        cancel_success: "取消成功",
                        edit_address: "编辑币址",
                        enter_remarks: "请填写备注名称",
                        enter_address: "请填写提币地址",
                        enter_verify: "请填写验证码",
                        enter_pwd: "请填写资金密码",
                        add_success: "添加成功",
                        select_address: "请添加或选择提币地址",
                        coin_number: "请填写提币数量",
                        enter_commission: "请填写网络手续费",
                        submit_success: "提交成功",
                        edit: "编辑",
                        address: "地址",
                        add_address: "添加新币址",
                        no_record: "暂无提现记录",
                        status: "查看状态",
                        select_wallet: "请选择币种钱包",
                        get_wallet: "获取钱包出错",
                        edit_success: "更改成功",
                        less_fee: "网络手续费最低",
                        biggest_count: "可提现最大金额（含手续费）：",
                        must_be_num: "必须为数字",
                        less_than_0: "金额必须大于0"
                    }
                },
                d = "",
                h = null,
                p = !1,
                u = "";
            $(function() {
                return !!$("#withdrawal_wrap").length && (d = $("html").attr("lang") || "zh-CN", void n())
            }).on("click", ".add-address-btn,.setting-edit,#add_address", function() {
                e()
            }).on("click", "#unable_add_address", function(e) {
                layer.confirm(c[d].setting, {
                    btn: [c[d].sure]
                }, function() {
                    window.location.href = "security.html"
                })
            }).on("click", ".select-header", function() {
                $(".coin-list").slideToggle()
            }).on("click", ".person-coin-list li", function() {
                var e = $(this).data("val");
                u = e, $(".coin-txt").html($(this).text()), $('input[name="coin"]').val(e), $(".person-coin-list").hide()
            }).on("click", "#save_address_btn", function(e) {
                t()
            }).on("click", "#submit_address_btn", function(e) {
                a()
            }).on("click", ".send-code-btn", function(e) {
                var t = arguments,
                    a = this,
                    i = null;
                if (!t.callee.hasSend) {
                    var n = $(a).data("type") || "phone",
                        s = "phone" == n ? "/api/getCoinAddressPhoneCode" : "/api/getCoinAddressMailCode";
                    $.get(s).then(function(e) {
                        if (e.success) {
                            layer.msg(e.error || c[d].sent_verify), t.callee.hasSend = !0;
                            var n = 119;
                            clearInterval(i), i = setInterval(function() {
                                n > 0 ? ($(a).text(n + c[d].second), n--) : (clearInterval(i), $(a).text(c[d].get_verify), t.callee.hasSend = !1)
                            }, 1e3)
                        } else layer.msg(e.error || c[d].verify_error)
                    })
                }
            }).on("click", "#withdrawal_wrap .send-phone-code", function(e) {
                var t = arguments,
                    a = this,
                    i = null;
                if (!t.callee.hasSend) {
                    var n = $(a).data("type") || "phone",
                        s = "phone" == n ? "/api/getTakeCoinPhoneCode" : "/api/getTakeCoinMailCode";
                    $.get(s).then(function(e) {
                        if (e.success) {
                            layer.msg(e.error || c[d].sent_verify), t.callee.hasSend = !0;
                            var n = 119;
                            clearInterval(i), i = setInterval(function() {
                                n > 0 ? ($(a).text(n + c[d].second), n--) : (clearInterval(i), $(a).text(c[d].get_verify), t.callee.hasSend = !1)
                            }, 1e3)
                        } else layer.msg(e.error || c[d].verify_error)
                    })
                }
            }).on("click", ".address-item", function() {
                o($(this))
            }).on("click", ".cancel-opt", function() {
                var e = $(this),
                    t = e.data("id");
                layer.confirm(c[d].cancel_withdraw, {
                    btn: [c[d].sure, c[d].cancel]
                }, function() {
                    $.post("/api/cancelTakeCoin", {
                        id: t
                    }).then(function(e) {
                        e.success ? (layer.msg(e.error || c[d].cancel_success), n()) : layer.msg(e.error || c[d].error)
                    })
                })
            }).on("click", ".address-item .setting-edit", function() {
                var e = $(this).data("id");
                if (e) {
                    h = e;
                    var t = $(this).parents(".address-item"),
                        a = t.find(".title").text(),
                        i = t.find(".address").text();
                    $("#add-management-label").html(c[d].edit_address), $("#remarks").val(a), $("#btc_address").val(i)
                }
            }).on("hidden.bs.modal", "#add_btc_address", function() {
                r()
            }).on("click", function(e) {
                var t = $(".coin-list"),
                    a = $(".coin-select");
                a.length && (a[0].contains(e.target) || t.eq(0).hide(), a[1] && !a[1].contains(e.target) && t.eq(1).hide(), a[2] && !a[2].contains(e.target) && t.eq(2).hide())
            }).on("change", "#brokerage", function() {
                var e = $(this);
                if ("" == e.val().trim()) return !1;
                var t = parseFloat(e.val().trim()),
                    a = parseFloat(e.data("fee")),
                    i = parseFloat($("#bit_count").val().trim()),
                    n = parseFloat($("#bit_count").data("usable"));
                return isNaN(t) ? (layer.tips(c[d].must_be_num, e, {
                    tips: [1, "#da2e2b"]
                }), e.focus(), !1) : t <= 0 ? (layer.tips(c[d].less_than_0, e, {
                    tips: [1, "#da2e2b"]
                }), e.focus(), !1) : t < a ? (layer.tips(c[d].less_fee + a, e, {
                    tips: [1, "#da2e2b"]
                }), e.focus(), !1) : i + t > n ? (layer.tips(c[d].biggest_count + n, e, {
                    tips: [1, "#da2e2b"]
                }), e.focus(), !1) : void 0
            }).on("change", "#bit_count", function() {
                var e = $(this);
                if ("" == e.val().trim()) return !1;
                var t = parseFloat(e.val().trim()),
                    a = parseFloat(e.data("usable"));
                return isNaN(t) ? (layer.tips(c[d].must_be_num, e, {
                    tips: [1, "#da2e2b"]
                }), e.focus(), !1) : t <= 0 ? (layer.tips(c[d].less_than_0, e, {
                    tips: [1, "#da2e2b"]
                }), e.focus(), !1) : t > a ? (layer.tips(c[d].biggest_count + a, e, {
                    tips: [1, "#da2e2b"]
                }), e.focus(), !1) : void 0
            })
        }()
    },
    50: function(e, t, a) {
        var i, n, s;
        ! function(r) {
            n = [a(2)], i = r, s = "function" == typeof i ? i.apply(t, n) : i, !(void 0 !== s && (e.exports = s))
        }(function(e) {
            "use strict";

            function t(e) {
                return "number" == typeof e && !isNaN(e)
            }

            function a(e) {
                return "undefined" == typeof e
            }

            function i(e, a) {
                var i = [];
                return t(a) && i.push(a), i.slice.apply(e, i)
            }

            function n(e, t) {
                var a = i(arguments, 2);
                return function() {
                    return e.apply(t, a.concat(i(arguments)))
                }
            }

            function s(e) {
                var t = e.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);
                return t && (t[1] !== b.protocol || t[2] !== b.hostname || t[3] !== b.port)
            }

            function r(e) {
                var t = "timestamp=" + (new Date).getTime();
                return e + (e.indexOf("?") === -1 ? "?" : "&") + t
            }

            function o(e) {
                return e ? ' crossOrigin="' + e + '"' : ""
            }

            function l(e, t) {
                var a;
                return e.naturalWidth && !me ? t(e.naturalWidth, e.naturalHeight) : (a = document.createElement("img"), a.onload = function() {
                    t(this.width, this.height)
                }, void(a.src = e.src))
            }

            function c(e) {
                var a = [],
                    i = e.rotate,
                    n = e.scaleX,
                    s = e.scaleY;
                return t(i) && 0 !== i && a.push("rotate(" + i + "deg)"), t(n) && 1 !== n && a.push("scaleX(" + n + ")"), t(s) && 1 !== s && a.push("scaleY(" + s + ")"), a.length ? a.join(" ") : "none"
            }

            function d(e, t) {
                var a, i, n = be(e.degree) % 180,
                    s = (n > 90 ? 180 - n : n) * Math.PI / 180,
                    r = $e(s),
                    o = we(s),
                    l = e.width,
                    c = e.height,
                    d = e.aspectRatio;
                return t ? (a = l / (o + r / d), i = a / d) : (a = l * o + c * r, i = l * r + c * o), {
                    width: a,
                    height: i
                }
            }

            function h(a, i) {
                var n, s, r, o = e("<canvas>")[0],
                    l = o.getContext("2d"),
                    c = 0,
                    h = 0,
                    p = i.naturalWidth,
                    u = i.naturalHeight,
                    f = i.rotate,
                    g = i.scaleX,
                    m = i.scaleY,
                    v = t(g) && t(m) && (1 !== g || 1 !== m),
                    y = t(f) && 0 !== f,
                    _ = y || v,
                    b = p * be(g || 1),
                    $ = u * be(m || 1);
                return v && (n = b / 2, s = $ / 2), y && (r = d({
                    width: b,
                    height: $,
                    degree: f
                }), b = r.width, $ = r.height, n = b / 2, s = $ / 2), o.width = b, o.height = $, _ && (c = -p / 2, h = -u / 2, l.save(), l.translate(n, s)), y && l.rotate(f * Math.PI / 180), v && l.scale(g, m), l.drawImage(a, ke(c), ke(h), ke(p), ke(u)), _ && l.restore(), o
            }

            function p(t) {
                var a = t.length,
                    i = 0,
                    n = 0;
                return a && (e.each(t, function(e, t) {
                    i += t.pageX, n += t.pageY
                }), i /= a, n /= a), {
                    pageX: i,
                    pageY: n
                }
            }

            function u(e, t, a) {
                var i, n = "";
                for (i = t, a += t; i < a; i++) n += Se(e.getUint8(i));
                return n
            }

            function f(e) {
                var t, a, i, n, s, r, o, l, c, d, h = new C(e),
                    p = h.byteLength;
                if (255 === h.getUint8(0) && 216 === h.getUint8(1))
                    for (c = 2; c < p;) {
                        if (255 === h.getUint8(c) && 225 === h.getUint8(c + 1)) {
                            o = c;
                            break
                        }
                        c++
                    }
                if (o && (a = o + 4, i = o + 10, "Exif" === u(h, a, 4) && (r = h.getUint16(i), s = 18761 === r, (s || 19789 === r) && 42 === h.getUint16(i + 2, s) && (n = h.getUint32(i + 4, s), n >= 8 && (l = i + n)))), l)
                    for (p = h.getUint16(l, s), d = 0; d < p; d++)
                        if (c = l + 12 * d + 2, 274 === h.getUint16(c, s)) {
                            c += 8, t = h.getUint16(c, s), me && h.setUint16(c, 1, s);
                            break
                        }
                return t
            }

            function g(e) {
                var t, a = e.replace(K, ""),
                    i = atob(a),
                    n = i.length,
                    s = new w(n),
                    r = new x(s);
                for (t = 0; t < n; t++) r[t] = i.charCodeAt(t);
                return s
            }

            function m(e) {
                var t, a = new x(e),
                    i = a.length,
                    n = "";
                for (t = 0; t < i; t++) n += Se(a[t]);
                return "data:image/jpeg;base64," + k(n)
            }

            function v(t, a) {
                this.$element = e(t), this.options = e.extend({}, v.DEFAULTS, e.isPlainObject(a) && a), this.isLoaded = !1, this.isBuilt = !1, this.isCompleted = !1, this.isRotated = !1, this.isCropped = !1, this.isDisabled = !1, this.isReplaced = !1, this.isLimited = !1, this.wheeling = !1, this.isImg = !1, this.originalUrl = "", this.canvas = null, this.cropBox = null, this.init()
            }
            var y = e(window),
                _ = e(document),
                b = window.location,
                $ = window.navigator,
                w = window.ArrayBuffer,
                x = window.Uint8Array,
                C = window.DataView,
                k = window.btoa,
                S = "cropper",
                M = "cropper-modal",
                P = "cropper-hide",
                z = "cropper-hidden",
                T = "cropper-invisible",
                F = "cropper-move",
                D = "cropper-crop",
                N = "cropper-disabled",
                B = "cropper-bg",
                A = "mousedown touchstart pointerdown MSPointerDown",
                I = "mousemove touchmove pointermove MSPointerMove",
                L = "mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",
                E = "wheel mousewheel DOMMouseScroll",
                j = "dblclick",
                O = "load." + S,
                W = "error." + S,
                Y = "resize." + S,
                R = "build." + S,
                H = "built." + S,
                X = "cropstart." + S,
                V = "cropmove." + S,
                U = "cropend." + S,
                G = "crop." + S,
                q = "zoom." + S,
                J = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,
                Z = /^data:/,
                K = /^data:([^;]+);base64,/,
                Q = /^data:image\/jpeg.*;base64,/,
                ee = "preview",
                te = "action",
                ae = "e",
                ie = "w",
                ne = "s",
                se = "n",
                re = "se",
                oe = "sw",
                le = "ne",
                ce = "nw",
                de = "all",
                he = "crop",
                pe = "move",
                ue = "zoom",
                fe = "none",
                ge = e.isFunction(e("<canvas>")[0].getContext),
                me = $ && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test($.userAgent),
                ve = Number,
                ye = Math.min,
                _e = Math.max,
                be = Math.abs,
                $e = Math.sin,
                we = Math.cos,
                xe = Math.sqrt,
                Ce = Math.round,
                ke = Math.floor,
                Se = String.fromCharCode;
            v.prototype = {
                constructor: v,
                init: function() {
                    var e, t = this.$element;
                    if (t.is("img")) {
                        if (this.isImg = !0, this.originalUrl = e = t.attr("src"), !e) return;
                        e = t.prop("src")
                    } else t.is("canvas") && ge && (e = t[0].toDataURL());
                    this.load(e)
                },
                trigger: function(t, a) {
                    var i = e.Event(t, a);
                    return this.$element.trigger(i), i
                },
                load: function(t) {
                    var a, i, n = this.options,
                        o = this.$element;
                    if (t && (o.one(R, n.build), !this.trigger(R).isDefaultPrevented())) {
                        if (this.url = t, this.image = {}, !n.checkOrientation || !w) return this.clone();
                        if (a = e.proxy(this.read, this), Z.test(t)) return Q.test(t) ? a(g(t)) : this.clone();
                        i = new XMLHttpRequest, i.onerror = i.onabort = e.proxy(function() {
                            this.clone()
                        }, this), i.onload = function() {
                            a(this.response)
                        }, n.checkCrossOrigin && s(t) && o.prop("crossOrigin") && (t = r(t)), i.open("get", t), i.responseType = "arraybuffer", i.send()
                    }
                },
                read: function(e) {
                    var t = this.options,
                        a = f(e),
                        i = this.image,
                        n = 0,
                        s = 1,
                        r = 1;
                    if (a > 1) switch (this.url = m(e), a) {
                        case 2:
                            s = -1;
                            break;
                        case 3:
                            n = -180;
                            break;
                        case 4:
                            r = -1;
                            break;
                        case 5:
                            n = 90, r = -1;
                            break;
                        case 6:
                            n = 90;
                            break;
                        case 7:
                            n = 90, s = -1;
                            break;
                        case 8:
                            n = -90
                    }
                    t.rotatable && (i.rotate = n), t.scalable && (i.scaleX = s, i.scaleY = r), this.clone()
                },
                clone: function() {
                    var t, a, i = this.options,
                        n = this.$element,
                        l = this.url,
                        c = "";
                    i.checkCrossOrigin && s(l) && (c = n.prop("crossOrigin"), c ? t = l : (c = "anonymous", t = r(l))), this.crossOrigin = c, this.crossOriginUrl = t, this.$clone = a = e("<img" + o(c) + ' src="' + (t || l) + '">'), this.isImg ? n[0].complete ? this.start() : n.one(O, e.proxy(this.start, this)) : a.one(O, e.proxy(this.start, this)).one(W, e.proxy(this.stop, this)).addClass(P).insertAfter(n)
                },
                start: function() {
                    var t = this.$element,
                        a = this.$clone;
                    this.isImg || (a.off(W, this.stop), t = a), l(t[0], e.proxy(function(t, a) {
                        e.extend(this.image, {
                            naturalWidth: t,
                            naturalHeight: a,
                            aspectRatio: t / a
                        }), this.isLoaded = !0, this.build()
                    }, this))
                },
                stop: function() {
                    this.$clone.remove(), this.$clone = null
                },
                build: function() {
                    var t, a, i, n = this.options,
                        s = this.$element,
                        r = this.$clone;
                    this.isLoaded && (this.isBuilt && this.unbuild(), this.$container = s.parent(), this.$cropper = t = e(v.TEMPLATE), this.$canvas = t.find(".cropper-canvas").append(r), this.$dragBox = t.find(".cropper-drag-box"), this.$cropBox = a = t.find(".cropper-crop-box"), this.$viewBox = t.find(".cropper-view-box"), this.$face = i = a.find(".cropper-face"), s.addClass(z).after(t), this.isImg || r.removeClass(P), this.initPreview(), this.bind(), n.aspectRatio = _e(0, n.aspectRatio) || NaN, n.viewMode = _e(0, ye(3, Ce(n.viewMode))) || 0, n.autoCrop ? (this.isCropped = !0, n.modal && this.$dragBox.addClass(M)) : a.addClass(z), n.guides || a.find(".cropper-dashed").addClass(z), n.center || a.find(".cropper-center").addClass(z), n.cropBoxMovable && i.addClass(F).data(te, de), n.highlight || i.addClass(T), n.background && t.addClass(B), n.cropBoxResizable || a.find(".cropper-line, .cropper-point").addClass(z), this.setDragMode(n.dragMode), this.render(), this.isBuilt = !0, this.setData(n.data), s.one(H, n.built), this.completing = setTimeout(e.proxy(function() {
                        this.trigger(H), this.trigger(G, this.getData()), this.isCompleted = !0
                    }, this), 0))
                },
                unbuild: function() {
                    this.isBuilt && (this.isCompleted || clearTimeout(this.completing), this.isBuilt = !1, this.isCompleted = !1, this.initialImage = null, this.initialCanvas = null, this.initialCropBox = null, this.container = null, this.canvas = null, this.cropBox = null, this.unbind(), this.resetPreview(), this.$preview = null, this.$viewBox = null, this.$cropBox = null, this.$dragBox = null, this.$canvas = null, this.$container = null, this.$cropper.remove(), this.$cropper = null)
                },
                render: function() {
                    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.isCropped && this.renderCropBox()
                },
                initContainer: function() {
                    var e = this.options,
                        t = this.$element,
                        a = this.$container,
                        i = this.$cropper;
                    i.addClass(z), t.removeClass(z), i.css(this.container = {
                        width: _e(a.width(), ve(e.minContainerWidth) || 200),
                        height: _e(a.height(), ve(e.minContainerHeight) || 100)
                    }), t.addClass(z), i.removeClass(z)
                },
                initCanvas: function() {
                    var t, a = this.options.viewMode,
                        i = this.container,
                        n = i.width,
                        s = i.height,
                        r = this.image,
                        o = r.naturalWidth,
                        l = r.naturalHeight,
                        c = 90 === be(r.rotate),
                        d = c ? l : o,
                        h = c ? o : l,
                        p = d / h,
                        u = n,
                        f = s;
                    s * p > n ? 3 === a ? u = s * p : f = n / p : 3 === a ? f = n / p : u = s * p, t = {
                        naturalWidth: d,
                        naturalHeight: h,
                        aspectRatio: p,
                        width: u,
                        height: f
                    }, t.oldLeft = t.left = (n - u) / 2, t.oldTop = t.top = (s - f) / 2, this.canvas = t, this.isLimited = 1 === a || 2 === a, this.limitCanvas(!0, !0), this.initialImage = e.extend({}, r), this.initialCanvas = e.extend({}, t)
                },
                limitCanvas: function(e, t) {
                    var a, i, n, s, r = this.options,
                        o = r.viewMode,
                        l = this.container,
                        c = l.width,
                        d = l.height,
                        h = this.canvas,
                        p = h.aspectRatio,
                        u = this.cropBox,
                        f = this.isCropped && u;
                    e && (a = ve(r.minCanvasWidth) || 0, i = ve(r.minCanvasHeight) || 0, o && (o > 1 ? (a = _e(a, c), i = _e(i, d), 3 === o && (i * p > a ? a = i * p : i = a / p)) : a ? a = _e(a, f ? u.width : 0) : i ? i = _e(i, f ? u.height : 0) : f && (a = u.width, i = u.height, i * p > a ? a = i * p : i = a / p)), a && i ? i * p > a ? i = a / p : a = i * p : a ? i = a / p : i && (a = i * p), h.minWidth = a, h.minHeight = i, h.maxWidth = 1 / 0, h.maxHeight = 1 / 0), t && (o ? (n = c - h.width, s = d - h.height, h.minLeft = ye(0, n), h.minTop = ye(0, s), h.maxLeft = _e(0, n), h.maxTop = _e(0, s), f && this.isLimited && (h.minLeft = ye(u.left, u.left + u.width - h.width), h.minTop = ye(u.top, u.top + u.height - h.height), h.maxLeft = u.left, h.maxTop = u.top, 2 === o && (h.width >= c && (h.minLeft = ye(0, n), h.maxLeft = _e(0, n)), h.height >= d && (h.minTop = ye(0, s), h.maxTop = _e(0, s))))) : (h.minLeft = -h.width, h.minTop = -h.height, h.maxLeft = c, h.maxTop = d))
                },
                renderCanvas: function(e) {
                    var t, a, i = this.canvas,
                        n = this.image,
                        s = n.rotate,
                        r = n.naturalWidth,
                        o = n.naturalHeight;
                    this.isRotated && (this.isRotated = !1, a = d({
                        width: n.width,
                        height: n.height,
                        degree: s
                    }), t = a.width / a.height, t !== i.aspectRatio && (i.left -= (a.width - i.width) / 2, i.top -= (a.height - i.height) / 2, i.width = a.width, i.height = a.height, i.aspectRatio = t, i.naturalWidth = r, i.naturalHeight = o, s % 180 && (a = d({
                        width: r,
                        height: o,
                        degree: s
                    }), i.naturalWidth = a.width, i.naturalHeight = a.height), this.limitCanvas(!0, !1))), (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = ye(_e(i.width, i.minWidth), i.maxWidth), i.height = ye(_e(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.oldLeft = i.left = ye(_e(i.left, i.minLeft), i.maxLeft), i.oldTop = i.top = ye(_e(i.top, i.minTop), i.maxTop), this.$canvas.css({
                        width: i.width,
                        height: i.height,
                        left: i.left,
                        top: i.top
                    }), this.renderImage(), this.isCropped && this.isLimited && this.limitCropBox(!0, !0), e && this.output()
                },
                renderImage: function(t) {
                    var a, i = this.canvas,
                        n = this.image;
                    n.rotate && (a = d({
                        width: i.width,
                        height: i.height,
                        degree: n.rotate,
                        aspectRatio: n.aspectRatio
                    }, !0)), e.extend(n, a ? {
                        width: a.width,
                        height: a.height,
                        left: (i.width - a.width) / 2,
                        top: (i.height - a.height) / 2
                    } : {
                        width: i.width,
                        height: i.height,
                        left: 0,
                        top: 0
                    }), this.$clone.css({
                        width: n.width,
                        height: n.height,
                        marginLeft: n.left,
                        marginTop: n.top,
                        transform: c(n)
                    }), t && this.output()
                },
                initCropBox: function() {
                    var t = this.options,
                        a = this.canvas,
                        i = t.aspectRatio,
                        n = ve(t.autoCropArea) || .8,
                        s = {
                            width: a.width,
                            height: a.height
                        };
                    i && (a.height * i > a.width ? s.height = s.width / i : s.width = s.height * i), this.cropBox = s, this.limitCropBox(!0, !0), s.width = ye(_e(s.width, s.minWidth), s.maxWidth), s.height = ye(_e(s.height, s.minHeight), s.maxHeight), s.width = _e(s.minWidth, s.width * n), s.height = _e(s.minHeight, s.height * n), s.oldLeft = s.left = a.left + (a.width - s.width) / 2, s.oldTop = s.top = a.top + (a.height - s.height) / 2, this.initialCropBox = e.extend({}, s)
                },
                limitCropBox: function(e, t) {
                    var a, i, n, s, r = this.options,
                        o = r.aspectRatio,
                        l = this.container,
                        c = l.width,
                        d = l.height,
                        h = this.canvas,
                        p = this.cropBox,
                        u = this.isLimited;
                    e && (a = ve(r.minCropBoxWidth) || 0, i = ve(r.minCropBoxHeight) || 0, a = ye(a, c), i = ye(i, d), n = ye(c, u ? h.width : c), s = ye(d, u ? h.height : d), o && (a && i ? i * o > a ? i = a / o : a = i * o : a ? i = a / o : i && (a = i * o), s * o > n ? s = n / o : n = s * o), p.minWidth = ye(a, n), p.minHeight = ye(i, s), p.maxWidth = n, p.maxHeight = s), t && (u ? (p.minLeft = _e(0, h.left), p.minTop = _e(0, h.top), p.maxLeft = ye(c, h.left + h.width) - p.width, p.maxTop = ye(d, h.top + h.height) - p.height) : (p.minLeft = 0, p.minTop = 0, p.maxLeft = c - p.width, p.maxTop = d - p.height))
                },
                renderCropBox: function() {
                    var e = this.options,
                        t = this.container,
                        a = t.width,
                        i = t.height,
                        n = this.cropBox;
                    (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = ye(_e(n.width, n.minWidth), n.maxWidth), n.height = ye(_e(n.height, n.minHeight), n.maxHeight), this.limitCropBox(!1, !0), n.oldLeft = n.left = ye(_e(n.left, n.minLeft), n.maxLeft), n.oldTop = n.top = ye(_e(n.top, n.minTop), n.maxTop), e.movable && e.cropBoxMovable && this.$face.data(te, n.width === a && n.height === i ? pe : de), this.$cropBox.css({
                        width: n.width,
                        height: n.height,
                        left: n.left,
                        top: n.top
                    }), this.isCropped && this.isLimited && this.limitCanvas(!0, !0), this.isDisabled || this.output()
                },
                output: function() {
                    this.preview(), this.isCompleted && this.trigger(G, this.getData())
                },
                initPreview: function() {
                    var t, a = o(this.crossOrigin),
                        i = a ? this.crossOriginUrl : this.url;
                    this.$preview = e(this.options.preview), this.$clone2 = t = e("<img" + a + ' src="' + i + '">'), this.$viewBox.html(t), this.$preview.each(function() {
                        var t = e(this);
                        t.data(ee, {
                            width: t.width(),
                            height: t.height(),
                            html: t.html()
                        }), t.html("<img" + a + ' src="' + i + '" style="display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;">')
                    })
                },
                resetPreview: function() {
                    this.$preview.each(function() {
                        var t = e(this),
                            a = t.data(ee);
                        t.css({
                            width: a.width,
                            height: a.height
                        }).html(a.html).removeData(ee)
                    })
                },
                preview: function() {
                    var t = this.image,
                        a = this.canvas,
                        i = this.cropBox,
                        n = i.width,
                        s = i.height,
                        r = t.width,
                        o = t.height,
                        l = i.left - a.left - t.left,
                        d = i.top - a.top - t.top;
                    this.isCropped && !this.isDisabled && (this.$clone2.css({
                        width: r,
                        height: o,
                        marginLeft: -l,
                        marginTop: -d,
                        transform: c(t)
                    }), this.$preview.each(function() {
                        var a = e(this),
                            i = a.data(ee),
                            h = i.width,
                            p = i.height,
                            u = h,
                            f = p,
                            g = 1;
                        n && (g = h / n, f = s * g), s && f > p && (g = p / s, u = n * g, f = p), a.css({
                            width: u,
                            height: f
                        }).find("img").css({
                            width: r * g,
                            height: o * g,
                            marginLeft: -l * g,
                            marginTop: -d * g,
                            transform: c(t)
                        })
                    }))
                },
                bind: function() {
                    var t = this.options,
                        a = this.$element,
                        i = this.$cropper;
                    e.isFunction(t.cropstart) && a.on(X, t.cropstart), e.isFunction(t.cropmove) && a.on(V, t.cropmove), e.isFunction(t.cropend) && a.on(U, t.cropend), e.isFunction(t.crop) && a.on(G, t.crop), e.isFunction(t.zoom) && a.on(q, t.zoom), i.on(A, e.proxy(this.cropStart, this)), t.zoomable && t.zoomOnWheel && i.on(E, e.proxy(this.wheel, this)), t.toggleDragModeOnDblclick && i.on(j, e.proxy(this.dblclick, this)), _.on(I, this._cropMove = n(this.cropMove, this)).on(L, this._cropEnd = n(this.cropEnd, this)), t.responsive && y.on(Y, this._resize = n(this.resize, this))
                },
                unbind: function() {
                    var t = this.options,
                        a = this.$element,
                        i = this.$cropper;
                    e.isFunction(t.cropstart) && a.off(X, t.cropstart), e.isFunction(t.cropmove) && a.off(V, t.cropmove), e.isFunction(t.cropend) && a.off(U, t.cropend), e.isFunction(t.crop) && a.off(G, t.crop), e.isFunction(t.zoom) && a.off(q, t.zoom), i.off(A, this.cropStart), t.zoomable && t.zoomOnWheel && i.off(E, this.wheel), t.toggleDragModeOnDblclick && i.off(j, this.dblclick), _.off(I, this._cropMove).off(L, this._cropEnd), t.responsive && y.off(Y, this._resize)
                },
                resize: function() {
                    var t, a, i, n = this.options.restore,
                        s = this.$container,
                        r = this.container;
                    !this.isDisabled && r && (i = s.width() / r.width, 1 === i && s.height() === r.height || (n && (t = this.getCanvasData(), a = this.getCropBoxData()), this.render(), n && (this.setCanvasData(e.each(t, function(e, a) {
                        t[e] = a * i
                    })), this.setCropBoxData(e.each(a, function(e, t) {
                        a[e] = t * i
                    })))))
                },
                dblclick: function() {
                    this.isDisabled || (this.$dragBox.hasClass(D) ? this.setDragMode(pe) : this.setDragMode(he))
                },
                wheel: function(t) {
                    var a = t.originalEvent || t,
                        i = ve(this.options.wheelZoomRatio) || .1,
                        n = 1;
                    this.isDisabled || (t.preventDefault(), this.wheeling || (this.wheeling = !0, setTimeout(e.proxy(function() {
                        this.wheeling = !1
                    }, this), 50), a.deltaY ? n = a.deltaY > 0 ? 1 : -1 : a.wheelDelta ? n = -a.wheelDelta / 120 : a.detail && (n = a.detail > 0 ? 1 : -1), this.zoom(-n * i, t)))
                },
                cropStart: function(t) {
                    var a, i, n = this.options,
                        s = t.originalEvent,
                        r = s && s.touches,
                        o = t;
                    if (!this.isDisabled) {
                        if (r) {
                            if (a = r.length, a > 1) {
                                if (!n.zoomable || !n.zoomOnTouch || 2 !== a) return;
                                o = r[1], this.startX2 = o.pageX, this.startY2 = o.pageY, i = ue
                            }
                            o = r[0]
                        }
                        if (i = i || e(o.target).data(te), J.test(i)) {
                            if (this.trigger(X, {
                                    originalEvent: s,
                                    action: i
                                }).isDefaultPrevented()) return;
                            t.preventDefault(), this.action = i, this.cropping = !1, this.startX = o.pageX || s && s.pageX, this.startY = o.pageY || s && s.pageY, i === he && (this.cropping = !0, this.$dragBox.addClass(M))
                        }
                    }
                },
                cropMove: function(e) {
                    var t, a = this.options,
                        i = e.originalEvent,
                        n = i && i.touches,
                        s = e,
                        r = this.action;
                    if (!this.isDisabled) {
                        if (n) {
                            if (t = n.length, t > 1) {
                                if (!a.zoomable || !a.zoomOnTouch || 2 !== t) return;
                                s = n[1], this.endX2 = s.pageX, this.endY2 = s.pageY
                            }
                            s = n[0]
                        }
                        if (r) {
                            if (this.trigger(V, {
                                    originalEvent: i,
                                    action: r
                                }).isDefaultPrevented()) return;
                            e.preventDefault(), this.endX = s.pageX || i && i.pageX, this.endY = s.pageY || i && i.pageY, this.change(s.shiftKey, r === ue ? e : null)
                        }
                    }
                },
                cropEnd: function(e) {
                    var t = e.originalEvent,
                        a = this.action;
                    this.isDisabled || a && (e.preventDefault(), this.cropping && (this.cropping = !1, this.$dragBox.toggleClass(M, this.isCropped && this.options.modal)), this.action = "", this.trigger(U, {
                        originalEvent: t,
                        action: a
                    }))
                },
                change: function(e, t) {
                    var a, i, n = this.options,
                        s = n.aspectRatio,
                        r = this.action,
                        o = this.container,
                        l = this.canvas,
                        c = this.cropBox,
                        d = c.width,
                        h = c.height,
                        p = c.left,
                        u = c.top,
                        f = p + d,
                        g = u + h,
                        m = 0,
                        v = 0,
                        y = o.width,
                        _ = o.height,
                        b = !0;
                    switch (!s && e && (s = d && h ? d / h : 1), this.isLimited && (m = c.minLeft, v = c.minTop, y = m + ye(o.width, l.width, l.left + l.width), _ = v + ye(o.height, l.height, l.top + l.height)), i = {
                        x: this.endX - this.startX,
                        y: this.endY - this.startY
                    }, s && (i.X = i.y * s, i.Y = i.x / s), r) {
                        case de:
                            p += i.x, u += i.y;
                            break;
                        case ae:
                            if (i.x >= 0 && (f >= y || s && (u <= v || g >= _))) {
                                b = !1;
                                break
                            }
                            d += i.x, s && (h = d / s, u -= i.Y / 2), d < 0 && (r = ie, d = 0);
                            break;
                        case se:
                            if (i.y <= 0 && (u <= v || s && (p <= m || f >= y))) {
                                b = !1;
                                break
                            }
                            h -= i.y, u += i.y, s && (d = h * s, p += i.X / 2), h < 0 && (r = ne, h = 0);
                            break;
                        case ie:
                            if (i.x <= 0 && (p <= m || s && (u <= v || g >= _))) {
                                b = !1;
                                break
                            }
                            d -= i.x, p += i.x, s && (h = d / s, u += i.Y / 2), d < 0 && (r = ae, d = 0);
                            break;
                        case ne:
                            if (i.y >= 0 && (g >= _ || s && (p <= m || f >= y))) {
                                b = !1;
                                break
                            }
                            h += i.y, s && (d = h * s, p -= i.X / 2), h < 0 && (r = se, h = 0);
                            break;
                        case le:
                            if (s) {
                                if (i.y <= 0 && (u <= v || f >= y)) {
                                    b = !1;
                                    break
                                }
                                h -= i.y, u += i.y, d = h * s
                            } else i.x >= 0 ? f < y ? d += i.x : i.y <= 0 && u <= v && (b = !1) : d += i.x,
                                i.y <= 0 ? u > v && (h -= i.y, u += i.y) : (h -= i.y, u += i.y);
                            d < 0 && h < 0 ? (r = oe, h = 0, d = 0) : d < 0 ? (r = ce, d = 0) : h < 0 && (r = re, h = 0);
                            break;
                        case ce:
                            if (s) {
                                if (i.y <= 0 && (u <= v || p <= m)) {
                                    b = !1;
                                    break
                                }
                                h -= i.y, u += i.y, d = h * s, p += i.X
                            } else i.x <= 0 ? p > m ? (d -= i.x, p += i.x) : i.y <= 0 && u <= v && (b = !1) : (d -= i.x, p += i.x), i.y <= 0 ? u > v && (h -= i.y, u += i.y) : (h -= i.y, u += i.y);
                            d < 0 && h < 0 ? (r = re, h = 0, d = 0) : d < 0 ? (r = le, d = 0) : h < 0 && (r = oe, h = 0);
                            break;
                        case oe:
                            if (s) {
                                if (i.x <= 0 && (p <= m || g >= _)) {
                                    b = !1;
                                    break
                                }
                                d -= i.x, p += i.x, h = d / s
                            } else i.x <= 0 ? p > m ? (d -= i.x, p += i.x) : i.y >= 0 && g >= _ && (b = !1) : (d -= i.x, p += i.x), i.y >= 0 ? g < _ && (h += i.y) : h += i.y;
                            d < 0 && h < 0 ? (r = le, h = 0, d = 0) : d < 0 ? (r = re, d = 0) : h < 0 && (r = ce, h = 0);
                            break;
                        case re:
                            if (s) {
                                if (i.x >= 0 && (f >= y || g >= _)) {
                                    b = !1;
                                    break
                                }
                                d += i.x, h = d / s
                            } else i.x >= 0 ? f < y ? d += i.x : i.y >= 0 && g >= _ && (b = !1) : d += i.x, i.y >= 0 ? g < _ && (h += i.y) : h += i.y;
                            d < 0 && h < 0 ? (r = ce, h = 0, d = 0) : d < 0 ? (r = oe, d = 0) : h < 0 && (r = le, h = 0);
                            break;
                        case pe:
                            this.move(i.x, i.y), b = !1;
                            break;
                        case ue:
                            this.zoom(function(e, t, a, i) {
                                var n = xe(e * e + t * t),
                                    s = xe(a * a + i * i);
                                return (s - n) / n
                            }(be(this.startX - this.startX2), be(this.startY - this.startY2), be(this.endX - this.endX2), be(this.endY - this.endY2)), t), this.startX2 = this.endX2, this.startY2 = this.endY2, b = !1;
                            break;
                        case he:
                            if (!i.x || !i.y) {
                                b = !1;
                                break
                            }
                            a = this.$cropper.offset(), p = this.startX - a.left, u = this.startY - a.top, d = c.minWidth, h = c.minHeight, i.x > 0 ? r = i.y > 0 ? re : le : i.x < 0 && (p -= d, r = i.y > 0 ? oe : ce), i.y < 0 && (u -= h), this.isCropped || (this.$cropBox.removeClass(z), this.isCropped = !0, this.isLimited && this.limitCropBox(!0, !0))
                    }
                    b && (c.width = d, c.height = h, c.left = p, c.top = u, this.action = r, this.renderCropBox()), this.startX = this.endX, this.startY = this.endY
                },
                crop: function() {
                    this.isBuilt && !this.isDisabled && (this.isCropped || (this.isCropped = !0, this.limitCropBox(!0, !0), this.options.modal && this.$dragBox.addClass(M), this.$cropBox.removeClass(z)), this.setCropBoxData(this.initialCropBox))
                },
                reset: function() {
                    this.isBuilt && !this.isDisabled && (this.image = e.extend({}, this.initialImage), this.canvas = e.extend({}, this.initialCanvas), this.cropBox = e.extend({}, this.initialCropBox), this.renderCanvas(), this.isCropped && this.renderCropBox())
                },
                clear: function() {
                    this.isCropped && !this.isDisabled && (e.extend(this.cropBox, {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    }), this.isCropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), this.$dragBox.removeClass(M), this.$cropBox.addClass(z))
                },
                replace: function(e, t) {
                    !this.isDisabled && e && (this.isImg && this.$element.attr("src", e), t ? (this.url = e, this.$clone.attr("src", e), this.isBuilt && this.$preview.find("img").add(this.$clone2).attr("src", e)) : (this.isImg && (this.isReplaced = !0), this.options.data = null, this.load(e)))
                },
                enable: function() {
                    this.isBuilt && (this.isDisabled = !1, this.$cropper.removeClass(N))
                },
                disable: function() {
                    this.isBuilt && (this.isDisabled = !0, this.$cropper.addClass(N))
                },
                destroy: function() {
                    var e = this.$element;
                    this.isLoaded ? (this.isImg && this.isReplaced && e.attr("src", this.originalUrl), this.unbuild(), e.removeClass(z)) : this.isImg ? e.off(O, this.start) : this.$clone && this.$clone.remove(), e.removeData(S)
                },
                move: function(e, t) {
                    var i = this.canvas;
                    this.moveTo(a(e) ? e : i.left + ve(e), a(t) ? t : i.top + ve(t))
                },
                moveTo: function(e, i) {
                    var n = this.canvas,
                        s = !1;
                    a(i) && (i = e), e = ve(e), i = ve(i), this.isBuilt && !this.isDisabled && this.options.movable && (t(e) && (n.left = e, s = !0), t(i) && (n.top = i, s = !0), s && this.renderCanvas(!0))
                },
                zoom: function(e, t) {
                    var a = this.canvas;
                    e = ve(e), e = e < 0 ? 1 / (1 - e) : 1 + e, this.zoomTo(a.width * e / a.naturalWidth, t)
                },
                zoomTo: function(e, t) {
                    var a, i, n, s, r, o = this.options,
                        l = this.canvas,
                        c = l.width,
                        d = l.height,
                        h = l.naturalWidth,
                        u = l.naturalHeight;
                    if (e = ve(e), e >= 0 && this.isBuilt && !this.isDisabled && o.zoomable) {
                        if (i = h * e, n = u * e, t && (a = t.originalEvent), this.trigger(q, {
                                originalEvent: a,
                                oldRatio: c / h,
                                ratio: i / h
                            }).isDefaultPrevented()) return;
                        a ? (s = this.$cropper.offset(), r = a.touches ? p(a.touches) : {
                            pageX: t.pageX || a.pageX || 0,
                            pageY: t.pageY || a.pageY || 0
                        }, l.left -= (i - c) * ((r.pageX - s.left - l.left) / c), l.top -= (n - d) * ((r.pageY - s.top - l.top) / d)) : (l.left -= (i - c) / 2, l.top -= (n - d) / 2), l.width = i, l.height = n, this.renderCanvas(!0)
                    }
                },
                rotate: function(e) {
                    this.rotateTo((this.image.rotate || 0) + ve(e))
                },
                rotateTo: function(e) {
                    e = ve(e), t(e) && this.isBuilt && !this.isDisabled && this.options.rotatable && (this.image.rotate = e % 360, this.isRotated = !0, this.renderCanvas(!0))
                },
                scale: function(e, i) {
                    var n = this.image,
                        s = !1;
                    a(i) && (i = e), e = ve(e), i = ve(i), this.isBuilt && !this.isDisabled && this.options.scalable && (t(e) && (n.scaleX = e, s = !0), t(i) && (n.scaleY = i, s = !0), s && this.renderImage(!0))
                },
                scaleX: function(e) {
                    var a = this.image.scaleY;
                    this.scale(e, t(a) ? a : 1)
                },
                scaleY: function(e) {
                    var a = this.image.scaleX;
                    this.scale(t(a) ? a : 1, e)
                },
                getData: function(t) {
                    var a, i, n = this.options,
                        s = this.image,
                        r = this.canvas,
                        o = this.cropBox;
                    return this.isBuilt && this.isCropped ? (i = {
                        x: o.left - r.left,
                        y: o.top - r.top,
                        width: o.width,
                        height: o.height
                    }, a = s.width / s.naturalWidth, e.each(i, function(e, n) {
                        n /= a, i[e] = t ? Ce(n) : n
                    })) : i = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }, n.rotatable && (i.rotate = s.rotate || 0), n.scalable && (i.scaleX = s.scaleX || 1, i.scaleY = s.scaleY || 1), i
                },
                setData: function(a) {
                    var i, n, s, r = this.options,
                        o = this.image,
                        l = this.canvas,
                        c = {};
                    e.isFunction(a) && (a = a.call(this.element)), this.isBuilt && !this.isDisabled && e.isPlainObject(a) && (r.rotatable && t(a.rotate) && a.rotate !== o.rotate && (o.rotate = a.rotate, this.isRotated = i = !0), r.scalable && (t(a.scaleX) && a.scaleX !== o.scaleX && (o.scaleX = a.scaleX, n = !0), t(a.scaleY) && a.scaleY !== o.scaleY && (o.scaleY = a.scaleY, n = !0)), i ? this.renderCanvas() : n && this.renderImage(), s = o.width / o.naturalWidth, t(a.x) && (c.left = a.x * s + l.left), t(a.y) && (c.top = a.y * s + l.top), t(a.width) && (c.width = a.width * s), t(a.height) && (c.height = a.height * s), this.setCropBoxData(c))
                },
                getContainerData: function() {
                    return this.isBuilt ? this.container : {}
                },
                getImageData: function() {
                    return this.isLoaded ? this.image : {}
                },
                getCanvasData: function() {
                    var t = this.canvas,
                        a = {};
                    return this.isBuilt && e.each(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(e, i) {
                        a[i] = t[i]
                    }), a
                },
                setCanvasData: function(a) {
                    var i = this.canvas,
                        n = i.aspectRatio;
                    e.isFunction(a) && (a = a.call(this.$element)), this.isBuilt && !this.isDisabled && e.isPlainObject(a) && (t(a.left) && (i.left = a.left), t(a.top) && (i.top = a.top), t(a.width) ? (i.width = a.width, i.height = a.width / n) : t(a.height) && (i.height = a.height, i.width = a.height * n), this.renderCanvas(!0))
                },
                getCropBoxData: function() {
                    var e, t = this.cropBox;
                    return this.isBuilt && this.isCropped && (e = {
                        left: t.left,
                        top: t.top,
                        width: t.width,
                        height: t.height
                    }), e || {}
                },
                setCropBoxData: function(a) {
                    var i, n, s = this.cropBox,
                        r = this.options.aspectRatio;
                    e.isFunction(a) && (a = a.call(this.$element)), this.isBuilt && this.isCropped && !this.isDisabled && e.isPlainObject(a) && (t(a.left) && (s.left = a.left), t(a.top) && (s.top = a.top), t(a.width) && (i = !0, s.width = a.width), t(a.height) && (n = !0, s.height = a.height), r && (i ? s.height = s.width / r : n && (s.width = s.height * r)), this.renderCropBox())
                },
                getCroppedCanvas: function(t) {
                    var a, i, n, s, r, o, l, c, d, p, u;
                    if (this.isBuilt && ge) return this.isCropped ? (e.isPlainObject(t) || (t = {}), u = this.getData(), a = u.width, i = u.height, c = a / i, e.isPlainObject(t) && (r = t.width, o = t.height, r ? (o = r / c, l = r / a) : o && (r = o * c, l = o / i)), n = ke(r || a), s = ke(o || i), d = e("<canvas>")[0], d.width = n, d.height = s, p = d.getContext("2d"), t.fillColor && (p.fillStyle = t.fillColor, p.fillRect(0, 0, n, s)), p.drawImage.apply(p, function() {
                        var e, t, n, s, r, o, c = h(this.$clone[0], this.image),
                            d = c.width,
                            p = c.height,
                            f = this.canvas,
                            g = [c],
                            m = u.x + f.naturalWidth * (be(u.scaleX || 1) - 1) / 2,
                            v = u.y + f.naturalHeight * (be(u.scaleY || 1) - 1) / 2;
                        return m <= -a || m > d ? m = e = n = r = 0 : m <= 0 ? (n = -m, m = 0, e = r = ye(d, a + m)) : m <= d && (n = 0, e = r = ye(a, d - m)), e <= 0 || v <= -i || v > p ? v = t = s = o = 0 : v <= 0 ? (s = -v, v = 0, t = o = ye(p, i + v)) : v <= p && (s = 0, t = o = ye(i, p - v)), g.push(ke(m), ke(v), ke(e), ke(t)), l && (n *= l, s *= l, r *= l, o *= l), r > 0 && o > 0 && g.push(ke(n), ke(s), ke(r), ke(o)), g
                    }.call(this)), d) : h(this.$clone[0], this.image)
                },
                setAspectRatio: function(e) {
                    var t = this.options;
                    this.isDisabled || a(e) || (t.aspectRatio = _e(0, e) || NaN, this.isBuilt && (this.initCropBox(), this.isCropped && this.renderCropBox()))
                },
                setDragMode: function(e) {
                    var t, a, i = this.options;
                    this.isLoaded && !this.isDisabled && (t = e === he, a = i.movable && e === pe, e = t || a ? e : fe, this.$dragBox.data(te, e).toggleClass(D, t).toggleClass(F, a), i.cropBoxMovable || this.$face.data(te, e).toggleClass(D, t).toggleClass(F, a))
                }
            }, v.DEFAULTS = {
                viewMode: 0,
                dragMode: "crop",
                aspectRatio: NaN,
                data: null,
                preview: "",
                responsive: !0,
                restore: !0,
                checkCrossOrigin: !0,
                checkOrientation: !0,
                modal: !0,
                guides: !0,
                center: !0,
                highlight: !0,
                background: !0,
                autoCrop: !0,
                autoCropArea: .8,
                movable: !0,
                rotatable: !0,
                scalable: !0,
                zoomable: !0,
                zoomOnTouch: !0,
                zoomOnWheel: !0,
                wheelZoomRatio: .1,
                cropBoxMovable: !0,
                cropBoxResizable: !0,
                toggleDragModeOnDblclick: !0,
                minCanvasWidth: 0,
                minCanvasHeight: 0,
                minCropBoxWidth: 0,
                minCropBoxHeight: 0,
                minContainerWidth: 200,
                minContainerHeight: 100,
                build: null,
                built: null,
                cropstart: null,
                cropmove: null,
                cropend: null,
                crop: null,
                zoom: null
            }, v.setDefaults = function(t) {
                e.extend(v.DEFAULTS, t)
            }, v.TEMPLATE = '<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>', v.other = e.fn.cropper, e.fn.cropper = function(t) {
                var n, s = i(arguments, 1);
                return this.each(function() {
                    var a, i, r = e(this),
                        o = r.data(S);
                    if (!o) {
                        if (/destroy/.test(t)) return;
                        a = e.extend({}, r.data(), e.isPlainObject(t) && t), r.data(S, o = new v(this, a))
                    }
                    "string" == typeof t && e.isFunction(i = o[t]) && (n = i.apply(o, s))
                }), a(n) ? this : n
            }, e.fn.cropper.Constructor = v, e.fn.cropper.setDefaults = v.setDefaults, e.fn.cropper.noConflict = function() {
                return e.fn.cropper = v.other, this
            }
        })
    },
    99: function(e, t) {
        function a(e, t, a, i, n, s) {
            var r = i,
                o = !1;
            if (null !== e && void 0 !== e && (null !== a && void 0 !== a && "object" == typeof a && e in a ? (r = a[e], o = !0) : null !== t && void 0 !== t && "object" == typeof t && e in t ? (r = t[e], o = !0) : r = i, o === !0 && null !== n && void 0 !== n)) switch (n) {
                case "int":
                    r = parseInt(r, 10);
                    break;
                case "float":
                    r = parseFloat(r)
            }
            return r
        }

        function i(e, t, a, i, n) {
            var r, o, l, c, d, h, p, u, f, g, m, v, y, _, i = i || n.length > 0;
            if (n.length > 0) {
                n.percents === !0 && (e = 100 * t);
                for (var b = 0; b < n.ranges.length; b++)
                    if (e >= n.ranges[b].lo && e <= n.ranges[b].hi) return n.ranges[b].color
            }
            if (r = a.length, 1 === r) return a[0];
            for (o = i ? 1 / r : 1 / (r - 1), l = [], b = 0; b < a.length; b++) c = i ? o * (b + 1) : o * b, d = parseInt(s(a[b]).substring(0, 2), 16), h = parseInt(s(a[b]).substring(2, 4), 16), p = parseInt(s(a[b]).substring(4, 6), 16), l[b] = {
                pct: c,
                color: {
                    r: d,
                    g: h,
                    b: p
                }
            };
            if (0 === t) return "rgb(" + [l[0].color.r, l[0].color.g, l[0].color.b].join(",") + ")";
            for (var $ = 0; $ < l.length; $++)
                if (t <= l[$].pct) return i ? "rgb(" + [l[$].color.r, l[$].color.g, l[$].color.b].join(",") + ")" : (u = l[$ - 1], f = l[$], g = f.pct - u.pct, m = (t - u.pct) / g, v = 1 - m, y = m, _ = {
                    r: Math.floor(u.color.r * v + f.color.r * y),
                    g: Math.floor(u.color.g * v + f.color.g * y),
                    b: Math.floor(u.color.b * v + f.color.b * y)
                }, "rgb(" + [_.r, _.g, _.b].join(",") + ")")
        }

        function n(e, t, a) {
            (!h || h > 9) && e.node.firstChild.attributes.dy && (e.node.firstChild.attributes.dy.value = 0)
        }

        function s(e) {
            return "#" == e.charAt(0) ? e.substring(1, 7) : e
        }

        function r(e, t) {
            var a, i, n, s;
            for (a = Math.pow, i = a(10, t), n = 7; n;) s = a(10, 3 * n--), s <= e && (e = Math.round(e * i / s) / i + "KMGTPE" [n]);
            return e
        }

        function o(e) {
            var t = e.toString().split(".");
            return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
        }

        function l(e, t) {
            var a = "";
            return document.defaultView && document.defaultView.getComputedStyle ? a = document.defaultView.getComputedStyle(e, "").getPropertyValue(t) : e.currentStyle && (t = t.replace(/\-(\w)/g, function(e, t) {
                return t.toUpperCase()
            }), a = e.currentStyle[t]), a
        }

        function c(e) {
            void 0 !== document.createElementNS ? e() : setTimeout(function() {
                c(e)
            }, 100)
        }

        function d(e) {
            e = e || {};
            for (var t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var a in arguments[t]) arguments[t].hasOwnProperty(a) && (e[a] = arguments[t][a]);
            return e
        }
        JustGage = function(e) {
            var t = this;
            if (null === e || void 0 === e) return !1;
            var s;
            if (null !== e.id && void 0 !== e.id) {
                if (s = document.getElementById(e.id), !s) return !1
            } else {
                if (null === e.parentNode || void 0 === e.parentNode) return !1;
                s = e.parentNode
            }
            var p = s.dataset ? s.dataset : {},
                u = null !== e.defaults && void 0 !== e.defaults && e.defaults;
            u !== !1 && (e = d({}, e, u), delete e.defaults), t.config = {
                id: e.id,
                value: a("value", e, p, 0, "float"),
                defaults: a("defaults", e, p, 0, !1),
                parentNode: a("parentNode", e, p, null),
                width: a("width", e, p, null),
                height: a("height", e, p, null),
                valueFontColor: a("valueFontColor", e, p, "#010101"),
                valueFontFamily: a("valueFontFamily", e, p, "Arial"),
                symbol: a("symbol", e, p, ""),
                min: a("min", e, p, 0, "float"),
                minTxt: a("minTxt", e, p, !1),
                max: a("max", e, p, 100, "float"),
                maxTxt: a("maxTxt", e, p, !1),
                reverse: a("reverse", e, p, !1),
                humanFriendlyDecimal: a("humanFriendlyDecimal", e, p, 0),
                textRenderer: a("textRenderer", e, p, null),
                onAnimationEnd: a("onAnimationEnd", e, p, null),
                gaugeWidthScale: a("gaugeWidthScale", e, p, 1),
                gaugeColor: a("gaugeColor", e, p, "#edebeb"),
                label: a("label", e, p, ""),
                labelFontColor: a("labelFontColor", e, p, "#b3b3b3"),
                shadowOpacity: a("shadowOpacity", e, p, .2),
                shadowSize: a("shadowSize", e, p, 5),
                shadowVerticalOffset: a("shadowVerticalOffset", e, p, 3),
                levelColors: a("levelColors", e, p, ["#a9d70b", "#f9c802", "#ff0000"], "array", ","),
                startAnimationTime: a("startAnimationTime", e, p, 700),
                startAnimationType: a("startAnimationType", e, p, ">"),
                refreshAnimationTime: a("refreshAnimationTime", e, p, 700),
                refreshAnimationType: a("refreshAnimationType", e, p, ">"),
                donutStartAngle: a("donutStartAngle", e, p, 90),
                valueMinFontSize: a("valueMinFontSize", e, p, 16),
                labelMinFontSize: a("labelMinFontSize", e, p, 10),
                minLabelMinFontSize: a("minLabelMinFontSize", e, p, 10),
                maxLabelMinFontSize: a("maxLabelMinFontSize", e, p, 10),
                hideValue: a("hideValue", e, p, !1),
                hideMinMax: a("hideMinMax", e, p, !1),
                showInnerShadow: a("showInnerShadow", e, p, !1),
                humanFriendly: a("humanFriendly", e, p, !1),
                noGradient: a("noGradient", e, p, !1),
                donut: a("donut", e, p, !1),
                relativeGaugeSize: a("relativeGaugeSize", e, p, !1),
                counter: a("counter", e, p, !1),
                decimals: a("decimals", e, p, 0),
                customSectors: a("customSectors", e, p, []),
                formatNumber: a("formatNumber", e, p, !1),
                pointer: a("pointer", e, p, !1),
                pointerOptions: a("pointerOptions", e, p, [])
            };
            var f, g, m, v, y, _, b, $, w, x, C, k, S, M, P, z, T, F, D;
            t.config.value > t.config.max && (t.config.value = t.config.max), t.config.value < t.config.min && (t.config.value = t.config.min), t.originalValue = a("value", e, p, -1, "float"), null !== t.config.id && null !== document.getElementById(t.config.id) ? t.canvas = Raphael(t.config.id, "100%", "100%") : null !== t.config.parentNode && (t.canvas = Raphael(t.config.parentNode, "100%", "100%")), t.config.relativeGaugeSize === !0 ? t.config.donut === !0 ? (t.canvas.setViewBox(0, 0, 200, 200, !0), f = 200, g = 200) : (t.canvas.setViewBox(0, 0, 200, 100, !0), f = 200, g = 100) : null !== t.config.width && null !== t.config.height ? (f = t.config.width, g = t.config.height) : null !== t.config.parentNode ? (t.canvas.setViewBox(0, 0, 200, 100, !0), f = 200, g = 100) : (f = 1 * l(document.getElementById(t.config.id), "width").slice(0, -2), g = 1 * l(document.getElementById(t.config.id), "height").slice(0, -2)), t.config.donut === !0 ? (f > g ? (v = g, m = v) : f < g ? (m = f, v = m) : (m = f, v = m), _ = (f - m) / 2, b = (g - v) / 2, $ = v / 6.4 > 16 ? v / 5.4 : 18, w = _ + m / 2, x = "" !== t.config.label ? b + v / 1.85 : b + v / 1.7, C = v / 16 > 10 ? v / 16 : 10, k = _ + m / 2, S = x + C, M = v / 16 > 10 ? v / 16 : 10, P = _ + m / 10 + m / 6.666666666666667 * t.config.gaugeWidthScale / 2, z = S, T = v / 16 > 10 ? v / 16 : 10, F = _ + m - m / 10 - m / 6.666666666666667 * t.config.gaugeWidthScale / 2, D = S) : (f > g ? (v = g, m = 2 * v, m > f && (y = m / f, m /= y, v /= y)) : f < g ? (m = f, v = m / 2) : (m = f, v = .5 * m), _ = (f - m) / 2, b = (g - v) / 2, $ = v / 6.5 > t.config.valueMinFontSize ? v / 6.5 : t.config.valueMinFontSize, w = _ + m / 2, x = b + v / 1.275, C = v / 16 > t.config.labelMinFontSize ? v / 16 : t.config.labelMinFontSize, k = _ + m / 2, S = x + $ / 2 + 5, M = v / 16 > t.config.minLabelMinFontSize ? v / 16 : t.config.minLabelMinFontSize, P = _ + m / 10 + m / 6.666666666666667 * t.config.gaugeWidthScale / 2, z = S, T = v / 16 > t.config.maxLabelMinFontSize ? v / 16 : t.config.maxLabelMinFontSize, F = _ + m - m / 10 - m / 6.666666666666667 * t.config.gaugeWidthScale / 2, D = S), t.params = {
                canvasW: f,
                canvasH: g,
                widgetW: m,
                widgetH: v,
                dx: _,
                dy: b,
                valueFontSize: $,
                valueX: w,
                valueY: x,
                labelFontSize: C,
                labelX: k,
                labelY: S,
                minFontSize: M,
                minX: P,
                minY: z,
                maxFontSize: T,
                maxX: F,
                maxY: D
            }, D = null, t.canvas.customAttributes.pki = function(e, t, a, i, n, s, r, o, l, c) {
                var d, h, p, u, f, g, m, v, y, _;
                return l ? (d = (1 - 2 * (e - t) / (a - t)) * Math.PI, h = i / 2 - i / 30, p = h - i / 6.666666666666667 * o, u = i / 2 + s, f = n / 2 + r, g = u + h * Math.cos(d), m = f - h * Math.sin(d), v = u + p * Math.cos(d), y = f - p * Math.sin(d), _ = "M" + (u - p) + "," + f + " ", _ += "L" + (u - h) + "," + f + " ", e > (a - t) / 2 && (_ += "A" + h + "," + h + " 0 0 1 " + (u + h) + "," + f + " "), _ += "A" + h + "," + h + " 0 0 1 " + g + "," + m + " ", _ += "L" + v + "," + y + " ", e > (a - t) / 2 && (_ += "A" + p + "," + p + " 0 0 0 " + (u + p) + "," + f + " "), _ += "A" + p + "," + p + " 0 0 0 " + (u - p) + "," + f + " ", _ += "Z ", {
                    path: _
                }) : (d = (1 - (e - t) / (a - t)) * Math.PI, h = i / 2 - i / 10, p = h - i / 6.666666666666667 * o, u = i / 2 + s, f = n / 1.25 + r, g = u + h * Math.cos(d), m = f - h * Math.sin(d), v = u + p * Math.cos(d), y = f - p * Math.sin(d), _ = "M" + (u - p) + "," + f + " ", _ += "L" + (u - h) + "," + f + " ", _ += "A" + h + "," + h + " 0 0 1 " + g + "," + m + " ", _ += "L" + v + "," + y + " ", _ += "A" + p + "," + p + " 0 0 0 " + (u - p) + "," + f + " ", _ += "Z ", {
                    path: _
                })
            }, t.canvas.customAttributes.ndl = function(e, a, i, n, s, r, o, l, c) {
                var d = 3.5 * n / 100,
                    h = n / 15,
                    p = n / 100;
                null != t.config.pointerOptions.toplength && void 0 != t.config.pointerOptions.toplength && (d = t.config.pointerOptions.toplength), null != t.config.pointerOptions.bottomlength && void 0 != t.config.pointerOptions.bottomlength && (h = t.config.pointerOptions.bottomlength), null != t.config.pointerOptions.bottomwidth && void 0 != t.config.pointerOptions.bottomwidth && (p = t.config.pointerOptions.bottomwidth);
                var u, f, g, m, v, y, _, b, $, w, x, C, k, S, M, P, z, T;
                return c ? (u = (1 - 2 * (e - a) / (i - a)) * Math.PI, f = n / 2 - n / 30, g = f - n / 6.666666666666667 * l, m = n / 2 + r, v = s / 2 + o, y = n / 2 + r + f * Math.cos(u), _ = s - (s - v) - f * Math.sin(u), b = n / 2 + r + g * Math.cos(u), $ = s - (s - v) - g * Math.sin(u), w = y + d * Math.cos(u), x = _ - d * Math.sin(u), C = b - h * Math.cos(u), k = $ + h * Math.sin(u), S = C + p * Math.sin(u), M = k + p * Math.cos(u), P = C - p * Math.sin(u), z = k - p * Math.cos(u), T = "M" + S + "," + M + " ", T += "L" + P + "," + z + " ", T += "L" + w + "," + x + " ", T += "Z ", {
                    path: T
                }) : (u = (1 - (e - a) / (i - a)) * Math.PI, f = n / 2 - n / 10, g = f - n / 6.666666666666667 * l, m = n / 2 + r, v = s / 1.25 + o, y = n / 2 + r + f * Math.cos(u), _ = s - (s - v) - f * Math.sin(u), b = n / 2 + r + g * Math.cos(u), $ = s - (s - v) - g * Math.sin(u), w = y + d * Math.cos(u), x = _ - d * Math.sin(u), C = b - h * Math.cos(u), k = $ + h * Math.sin(u), S = C + p * Math.sin(u), M = k + p * Math.cos(u), P = C - p * Math.sin(u), z = k - p * Math.cos(u), T = "M" + S + "," + M + " ", T += "L" + P + "," + z + " ", T += "L" + w + "," + x + " ", T += "Z ", {
                    path: T
                })
            }, t.gauge = t.canvas.path().attr({
                stroke: "none",
                fill: t.config.gaugeColor,
                pki: [t.config.max, t.config.min, t.config.max, t.params.widgetW, t.params.widgetH, t.params.dx, t.params.dy, t.config.gaugeWidthScale, t.config.donut, t.config.reverse]
            }), t.level = t.canvas.path().attr({
                stroke: "none",
                fill: i(t.config.value, (t.config.value - t.config.min) / (t.config.max - t.config.min), t.config.levelColors, t.config.noGradient, t.config.customSectors),
                pki: [t.config.min, t.config.min, t.config.max, t.params.widgetW, t.params.widgetH, t.params.dx, t.params.dy, t.config.gaugeWidthScale, t.config.donut, t.config.reverse]
            }), t.config.donut && t.level.transform("r" + t.config.donutStartAngle + ", " + (t.params.widgetW / 2 + t.params.dx) + ", " + (t.params.widgetH / 2 + t.params.dy)), t.config.pointer && (t.needle = t.canvas.path().attr({
                stroke: null !== t.config.pointerOptions.stroke && void 0 !== t.config.pointerOptions.stroke ? t.config.pointerOptions.stroke : "none",
                "stroke-width": null !== t.config.pointerOptions.stroke_width && void 0 !== t.config.pointerOptions.stroke_width ? t.config.pointerOptions.stroke_width : 0,
                "stroke-linecap": null !== t.config.pointerOptions.stroke_linecap && void 0 !== t.config.pointerOptions.stroke_linecap ? t.config.pointerOptions.stroke_linecap : "square",
                fill: null !== t.config.pointerOptions.color && void 0 !== t.config.pointerOptions.color ? t.config.pointerOptions.color : "#000000",
                ndl: [t.config.min, t.config.min, t.config.max, t.params.widgetW, t.params.widgetH, t.params.dx, t.params.dy, t.config.gaugeWidthScale, t.config.donut]
            }), t.config.donut && t.needle.transform("r" + t.config.donutStartAngle + ", " + (t.params.widgetW / 2 + t.params.dx) + ", " + (t.params.widgetH / 2 + t.params.dy))), t.txtValue = t.canvas.text(t.params.valueX, t.params.valueY, 0), t.txtValue.attr({
                "font-size": t.params.valueFontSize,
                "font-weight": "bold",
                "font-family": t.config.valueFontFamily,
                fill: t.config.valueFontColor,
                "fill-opacity": "0"
            }), n(t.txtValue, t.params.valueFontSize, t.params.valueY), t.txtLabel = t.canvas.text(t.params.labelX, t.params.labelY, t.config.label), t.txtLabel.attr({
                "font-size": "18px",
                "font-weight": "bold",
                "font-family": "Arial,'Microsoft Yahei','Hiragino Sans GB',sans-serif",
                fill: t.config.labelFontColor,
                "fill-opacity": "0"
            }), n(t.txtLabel, t.params.labelFontSize, t.params.labelY);
            var N = t.config.min;
            t.config.reverse && (N = t.config.max), t.txtMinimum = N, t.config.minTxt ? t.txtMinimum = t.config.minTxt : t.config.humanFriendly ? t.txtMinimum = r(N, t.config.humanFriendlyDecimal) : t.config.formatNumber && (t.txtMinimum = o(N)), t.txtMin = t.canvas.text(t.params.minX, t.params.minY, t.txtMinimum), t.txtMin.attr({
                "font-size": t.params.minFontSize,
                "font-weight": "normal",
                "font-family": "Arial",
                fill: t.config.labelFontColor,
                "fill-opacity": t.config.hideMinMax || t.config.donut ? "0" : "1"
            }), n(t.txtMin, t.params.minFontSize, t.params.minY);
            var B = t.config.max;
            t.config.reverse && (B = t.config.min), t.txtMaximum = B, t.config.maxTxt ? t.txtMaximum = t.config.maxTxt : t.config.humanFriendly ? t.txtMaximum = r(B, t.config.humanFriendlyDecimal) : t.config.formatNumber && (t.txtMaximum = o(B)), t.txtMax = t.canvas.text(t.params.maxX, t.params.maxY, t.txtMaximum), t.txtMax.attr({
                "font-size": t.params.maxFontSize,
                "font-weight": "normal",
                "font-family": "Arial",
                fill: t.config.labelFontColor,
                "fill-opacity": t.config.hideMinMax || t.config.donut ? "0" : "1"
            }), n(t.txtMax, t.params.maxFontSize, t.params.maxY);
            var A = t.canvas.canvas.childNodes[1],
                I = "http://www.w3.org/2000/svg";
            "undefined" !== h && h < 9 || ("undefined" !== h ? c(function() {
                t.generateShadow(I, A)
            }) : t.generateShadow(I, A)), I = null, t.config.textRenderer ? t.originalValue = t.config.textRenderer(t.originalValue) : t.config.humanFriendly ? t.originalValue = r(t.originalValue, t.config.humanFriendlyDecimal) + t.config.symbol : t.config.formatNumber ? t.originalValue = o(t.originalValue) + t.config.symbol : t.originalValue = (1 * t.originalValue).toFixed(t.config.decimals) + t.config.symbol, t.config.counter === !0 ? (eve.on("raphael.anim.frame." + t.level.id, function() {
                var e = t.level.attr("pki")[0];
                t.config.reverse && (e = 1 * t.config.max + 1 * t.config.min - 1 * t.level.attr("pki")[0]), t.config.textRenderer ? t.txtValue.attr("text", t.config.textRenderer(Math.floor(e))) : t.config.humanFriendly ? t.txtValue.attr("text", r(Math.floor(e), t.config.humanFriendlyDecimal) + t.config.symbol) : t.config.formatNumber ? t.txtValue.attr("text", o(Math.floor(e)) + t.config.symbol) : t.txtValue.attr("text", (1 * e).toFixed(t.config.decimals) + t.config.symbol), n(t.txtValue, t.params.valueFontSize, t.params.valueY), e = null
            }), eve.on("raphael.anim.finish." + t.level.id, function() {
                t.txtValue.attr({
                    text: t.originalValue
                }), n(t.txtValue, t.params.valueFontSize, t.params.valueY)
            })) : eve.on("raphael.anim.start." + t.level.id, function() {
                t.txtValue.attr({
                    text: t.originalValue
                }), n(t.txtValue, t.params.valueFontSize, t.params.valueY)
            });
            var L = t.config.value;
            t.config.reverse && (L = 1 * t.config.max + 1 * t.config.min - 1 * t.config.value), t.level.animate({
                pki: [L, t.config.min, t.config.max, t.params.widgetW, t.params.widgetH, t.params.dx, t.params.dy, t.config.gaugeWidthScale, t.config.donut, t.config.reverse]
            }, t.config.startAnimationTime, t.config.startAnimationType, t.config.onAnimationEnd), t.config.pointer && t.needle.animate({
                ndl: [L, t.config.min, t.config.max, t.params.widgetW, t.params.widgetH, t.params.dx, t.params.dy, t.config.gaugeWidthScale, t.config.donut]
            }, t.config.startAnimationTime, t.config.startAnimationType), t.txtValue.animate({
                "fill-opacity": t.config.hideValue ? "0" : "1"
            }, t.config.startAnimationTime, t.config.startAnimationType), t.txtLabel.animate({
                "fill-opacity": "1"
            }, t.config.startAnimationTime, t.config.startAnimationType)
        }, JustGage.prototype.refresh = function(e, t) {
            var a, s, l = this,
                t = t || null;
            null !== t && (l.config.max = t, l.txtMaximum = l.config.max, l.config.maxTxt ? l.txtMaximum = l.config.maxTxt : l.config.humanFriendly ? l.txtMaximum = r(l.config.max, l.config.humanFriendlyDecimal) : l.config.formatNumber && (l.txtMaximum = o(l.config.max)), l.config.reverse ? (l.txtMin.attr({
                text: l.txtMaximum
            }), l.txtMax.attr({
                text: l.txtMinimum
            }), n(l.txtMin, l.params.minFontSize, l.params.minY), n(l.txtMax, l.params.minFontSize, l.params.minY)) : (l.txtMax.attr({
                text: l.txtMaximum
            }), n(l.txtMax, l.params.maxFontSize, l.params.maxY))), a = e, 1 * e > 1 * l.config.max && (e = 1 * l.config.max), 1 * e < 1 * l.config.min && (e = 1 * l.config.min), s = i(e, (e - l.config.min) / (l.config.max - l.config.min), l.config.levelColors, l.config.noGradient, l.config.customSectors), a = l.config.textRenderer ? l.config.textRenderer(a) : l.config.humanFriendly ? r(a, l.config.humanFriendlyDecimal) + l.config.symbol : l.config.formatNumber ? o((1 * a).toFixed(l.config.decimals)) + l.config.symbol : (1 * a).toFixed(l.config.decimals) + l.config.symbol, l.originalValue = a, l.config.value = 1 * e, l.config.counter || (l.txtValue.attr({
                text: a
            }), n(l.txtValue, l.params.valueFontSize, l.params.valueY));
            var c = l.config.value;
            l.config.reverse && (c = 1 * l.config.max + 1 * l.config.min - 1 * l.config.value), l.level.animate({
                pki: [c, l.config.min, l.config.max, l.params.widgetW, l.params.widgetH, l.params.dx, l.params.dy, l.config.gaugeWidthScale, l.config.donut, l.config.reverse],
                fill: s
            }, l.config.refreshAnimationTime, l.config.refreshAnimationType, l.config.onAnimationEnd), l.config.pointer && l.needle.animate({
                ndl: [c, l.config.min, l.config.max, l.params.widgetW, l.params.widgetH, l.params.dx, l.params.dy, l.config.gaugeWidthScale, l.config.donut]
            }, l.config.refreshAnimationTime, l.config.refreshAnimationType), t = null
        }, JustGage.prototype.destroy = function() {
            document.getElementById(this.config.id).innerHTML = ""
        }, JustGage.prototype.generateShadow = function(e, t) {
            var a, i, n, s, r, o, l, c = this,
                d = "inner-shadow-" + c.config.id;
            a = document.createElementNS(e, "filter"), a.setAttribute("id", d), t.appendChild(a), i = document.createElementNS(e, "feOffset"), i.setAttribute("dx", 0), i.setAttribute("dy", c.config.shadowVerticalOffset), a.appendChild(i), n = document.createElementNS(e, "feGaussianBlur"), n.setAttribute("result", "offset-blur"), n.setAttribute("stdDeviation", c.config.shadowSize), a.appendChild(n), s = document.createElementNS(e, "feComposite"), s.setAttribute("operator", "out"), s.setAttribute("in", "SourceGraphic"), s.setAttribute("in2", "offset-blur"), s.setAttribute("result", "inverse"), a.appendChild(s), r = document.createElementNS(e, "feFlood"), r.setAttribute("flood-color", "black"), r.setAttribute("flood-opacity", c.config.shadowOpacity), r.setAttribute("result", "color"), a.appendChild(r), o = document.createElementNS(e, "feComposite"), o.setAttribute("operator", "in"), o.setAttribute("in", "color"), o.setAttribute("in2", "inverse"), o.setAttribute("result", "shadow"), a.appendChild(o), l = document.createElementNS(e, "feComposite"), l.setAttribute("operator", "over"), l.setAttribute("in", "shadow"), l.setAttribute("in2", "SourceGraphic"), a.appendChild(l), c.config.showInnerShadow && (c.canvas.canvas.childNodes[2].setAttribute("filter", "url(" + window.location.pathname + "#" + d + ")"), c.canvas.canvas.childNodes[3].setAttribute("filter", "url(" + window.location.pathname + "#" + d + ")")), l = null
        };
        var h = function() {
            for (var e, t = 3, a = document.createElement("div"), i = a.getElementsByTagName("i"); a.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", i[0];);
            return t > 4 ? t : e
        }()
    }
}, [126]);