"use strict";
(self["webpackChunkhalo_admin"] = self["webpackChunkhalo_admin"] || []).push([[298], {
    92298: function (t, e, n) {
        n.r(e), n.d(e, {
            default: function () {
                return g
            }
        });
        var a = function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("page-view", [n("a-row", [n("a-col", {attrs: {span: 24}}, [n("a-card", {
                        attrs: {
                            bodyStyle: {padding: "16px"},
                            bordered: !1
                        }
                    }, [n("a-card", {
                        staticClass: "environment-info",
                        attrs: {bodyStyle: {padding: "16px"}, bordered: !1}
                    }, [n("template", {slot: "title"}, [t._v(" 环境信息 "), n("a-button", {
                        staticClass: "!p-0",
                        attrs: {type: "link"},
                        on: {click: t.handleCopyEnvironments}
                    }, [n("a-icon", {attrs: {type: "copy"}})], 1)], 1), n("a-popover", {
                        attrs: {
                            slot: "extra",
                            title: t.isLatest ? "当前为最新版本" : "有新版本",
                            placement: "left"
                        }, slot: "extra"
                    }, [n("template", {slot: "content"}, [n("p", [t._v(t._s(t.versionMessage))]), n("a-button", {
                        attrs: {type: "dashed"},
                        on: {click: t.handleShowVersionContent}
                    }, [t._v("查看详情")])], 1), n("a-button", {
                        attrs: {
                            icon: t.isLatest ? "check-circle" : "exclamation-circle",
                            loading: t.checking,
                            shape: "circle",
                            type: "dashed"
                        }
                    })], 2), n("ul", {staticClass: "p-0 m-0 list-none"}, [n("li", [t._v("版本：" + t._s(t.environments.version))]), n("li", [t._v("数据库：" + t._s(t.environments.database))]), n("li", [t._v("运行模式：" + t._s(t.environments.mode))]), n("li", [t._v("启用主题：" + t._s(t.activatedTheme.name))]), n("li", [t._v("启动时间：" + t._s(t._f("moment")(t.environments.startTime)))])]), n("a", {
                        staticClass: "mr-3",
                        attrs: {href: "https://halo.run", target: "_blank"}
                    }, [t._v("官网 "), n("a-icon", {attrs: {type: "link"}})], 1), n("a", {
                        staticClass: "mr-3",
                        attrs: {href: "https://docs.halo.run", target: "_blank"}
                    }, [t._v("文档 "), n("a-icon", {attrs: {type: "link"}})], 1), n("a", {
                        staticClass: "mr-3",
                        attrs: {href: "https://github.com/halo-dev", target: "_blank"}
                    }, [t._v("开源组织 "), n("a-icon", {attrs: {type: "link"}})], 1), n("a", {
                        staticClass: "mr-3",
                        attrs: {href: "https://bbs.halo.run", target: "_blank"}
                    }, [t._v("在线社区 "), n("a-icon", {attrs: {type: "link"}})], 1)], 2), n("a-card", {
                        attrs: {
                            bodyStyle: {padding: "16px"},
                            bordered: !1,
                            loading: t.contributorsLoading,
                            title: "开发者"
                        }
                    }, t._l(t.contributors, (function (e, a) {
                        return n("a", {
                            key: a,
                            attrs: {href: e.html_url, target: "_blank"}
                        }, [n("a-tooltip", {
                            attrs: {
                                title: e.login,
                                placement: "top"
                            }
                        }, [n("a-avatar", {
                            style: {marginRight: "10px", marginBottom: "10px"},
                            attrs: {alt: e.login, src: t._f("webpAvatarConvert")(e.avatar_url), size: "large"}
                        })], 1)], 1)
                    })), 0)], 1)], 1), n("a-col", {attrs: {span: 24}})], 1), n("a-modal", {
                        attrs: {
                            title: t.versionContentModalTitle,
                            visible: t.versionContentVisible,
                            width: 620,
                            "ok-text": "查看更多"
                        }, on: {
                            cancel: function (e) {
                                t.versionContentVisible = !1
                            }, ok: t.handleOpenVersionUrl
                        }
                    }, [n("div", {domProps: {innerHTML: t._s(t.versionContent)}})])], 1)
                }, r = [], i = n(46519), s = (n(70315), n(41479), n(21082), n(31875), n(30535), n(85018), n(96339), n(18608)),
                o = n(10299), c = n.n(o), l = n(45311), u = n(71101), h = c().create({
                    baseURL: "https://api.github.com",
                    timeout: 1e4,
                    headers: {"Content-Type": "application/json", Accept: "application/vnd.github.v3+json"},
                    withCredentials: !1
                }), p = {
                    components: {PageView: u.B4}, data: function () {
                        return {
                            environments: {},
                            contributors: [{
                                login: "",
                                id: 0,
                                node_id: "",
                                avatar_url: "",
                                gravatar_id: "",
                                url: "",
                                html_url: "",
                                followers_url: "",
                                following_url: "",
                                gists_url: "",
                                starred_url: "",
                                subscriptions_url: "",
                                organizations_url: "",
                                repos_url: "",
                                events_url: "",
                                received_events_url: "",
                                type: "",
                                site_admin: !1,
                                contributions: 0
                            }],
                            contributorsLoading: !0,
                            checking: !1,
                            isLatest: !1,
                            latestData: {},
                            versionContentVisible: !1,
                            activatedTheme: {}
                        }
                    }, computed: {
                        versionMessage: function () {
                            return "当前版本：".concat(this.environments.version, "，").concat(this.isLatest ? "已经是最新版本。" : "新版本：".concat(this.latestData.name, "，你可以点击下方按钮查看详情。"))
                        }, versionContent: function () {
                            return this.latestData && this.latestData.body ? l.TU.parse(this.latestData.body) : "暂无内容"
                        }, versionContentModalTitle: function () {
                            return "".concat(this.latestData.name, " 更新内容")
                        }
                    }, created: function () {
                        this.getEnvironments(), this.handleGetActivatedTheme(), this.fetchContributors()
                    }, methods: {
                        getEnvironments: function () {
                            var t = this;
                            return (0, i.Z)(regeneratorRuntime.mark((function e() {
                                var n, a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, s.Z.getEnvironment();
                                        case 2:
                                            n = e.sent, a = n.data, t.environments = a, t.checkServerUpdate();
                                        case 6:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }, handleGetActivatedTheme: function () {
                            var t = this;
                            return (0, i.Z)(regeneratorRuntime.mark((function e() {
                                var n, a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, s.Z.theme.getActivatedTheme();
                                        case 2:
                                            n = e.sent, a = n.data, t.activatedTheme = a;
                                        case 5:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }, handleCopyEnvironments: function () {
                            var t = this,
                                    e = "版本：".concat(this.environments.version, "\n数据库：").concat(this.environments.database, "\n运行模式：").concat(this.environments.mode, "\n启用主题：").concat(this.activatedTheme.name, "\nUser Agent：").concat(navigator.userAgent);
                            this.$copyText(e).then((function (e) {
                                t.$log.debug("copy", e), t.$message.success("复制成功！")
                            })).catch((function (e) {
                                t.$log.debug("copy.err", e), t.$message.error("复制失败！")
                            }))
                        }, fetchContributors: function () {
                            var t = this;
                            t.contributorsLoading = !0, h.get("/repos/halo-dev/halo/contributors?per_page=100").then((function (e) {
                                t.contributors = e.data
                            })).catch((function (e) {
                                t.$log.error("Fetch contributors error", e)
                            })).finally((function () {
                                t.contributorsLoading = !1
                            }))
                        }, checkServerUpdate: function () {
                            var t = this, e = this.$createElement, n = this;
                            n.checking = !0, h.get("/repos/halo-dev/halo/releases/latest").then((function (a) {
                                var r = a.data;
                                if (n.latestData = r, !r.draft && !r.prerelease) {
                                    var i = n.calculateIntValue(n.environments.version), s = n.calculateIntValue(r.name);
                                    if (i >= s) n.isLatest = !0; else {
                                        var o = "新版本提醒", c = "检测到 Halo 新版本：" + r.name + "，点击下方按钮查看最新版本。";
                                        n.$notification.open({
                                            message: o,
                                            description: c,
                                            icon: e("a-icon", {attrs: {type: "smile"}, style: "color: #108ee9"}),
                                            btn: function (e) {
                                                return e("a-button", {
                                                    props: {type: "primary", size: "small"},
                                                    on: {
                                                        click: function () {
                                                            return t.handleShowVersionContent()
                                                        }
                                                    }
                                                }, "去看看")
                                            }
                                        })
                                    }
                                }
                            })).catch((function (t) {
                                this.$log.error("Check update fail", t)
                            })).finally((function () {
                                t.checking = !1
                            }))
                        }, handleShowVersionContent: function () {
                            this.versionContentVisible = !0
                        }, handleOpenVersionUrl: function () {
                            window.open(this.latestData.html_url, "_blank")
                        }, calculateIntValue: function (t) {
                            t = t.replace(/v/g, "");
                            var e = t.split(".");
                            if (null == e || 3 !== e.length) return -1;
                            var n = parseInt(e[0]), a = parseInt(e[1]), r = parseInt(e[2]);
                            return isNaN(n) || isNaN(a) || isNaN(r) ? -1 : 1e6 * n + 1e3 * a + r
                        }
                    }, filters: {
                        webpAvatarConvert: function (t) {
                            return t.replace("avatars.githubusercontent.com", "avatars-githubusercontent.webp.se")
                        }
                    }
                }, d = p, v = n(42177), m = (0, v.Z)(d, a, r, !1, null, null, null), g = m.exports
    }
}]);