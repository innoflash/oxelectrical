!function (a) {
    function b() {
        this.removeEventListener("touchmove", c), this.removeEventListener("touchend", b), h = !1
    }

    function c(c) {
        if (a.detectSwipe.preventDefault && c.preventDefault(), h) {
            var d, e = c.touches[0].pageX, i = c.touches[0].pageY, j = f - e, k = g - i;
            Math.abs(j) >= a.detectSwipe.threshold ? d = j > 0 ? "left" : "right" : Math.abs(k) >= a.detectSwipe.threshold && (d = k > 0 ? "down" : "up"), d && (b.call(this), a(this).trigger("swipe", d).trigger("swipe" + d))
        }
    }

    function d(a) {
        1 == a.touches.length && (f = a.touches[0].pageX, g = a.touches[0].pageY, h = !0, this.addEventListener("touchmove", c, !1), this.addEventListener("touchend", b, !1))
    }

    function e() {
        this.addEventListener("touchstart", d, !1)
    }

    a.detectSwipe = {
        version: "2.1.1",
        enabled: "ontouchstart"in document.documentElement,
        preventDefault: !0,
        threshold: 20
    };
    var f, g, h = !1;
    a.event.special.swipe = {setup: e}, a.each(["left", "up", "down", "right"], function () {
        a.event.special["swipe" + this] = {
            setup: function () {
                a(this).on("swipe", a.noop)
            }
        }
    })
}(jQuery), function (a) {
    "use strict";
    function b(a, c) {
        if (!(this instanceof b)) {
            var d = new b(a, c);
            return d.open(), d
        }
        this.id = b.id++, this.setup(a, c), this.chainCallbacks(b._callbackChain)
    }

    if ("undefined" == typeof a)return void("console"in window && window.console.info("Too much lightness, Featherlight needs jQuery."));
    var c = [], d = function (b) {
        return c = a.grep(c, function (a) {
            return a !== b && a.$instance.closest("body").length > 0
        })
    }, e = function (a, b) {
        var c = {}, d = new RegExp("^" + b + "([A-Z])(.*)");
        for (var e in a) {
            var f = e.match(d);
            if (f) {
                var g = (f[1] + f[2].replace(/([A-Z])/g, "-$1")).toLowerCase();
                c[g] = a[e]
            }
        }
        return c
    }, f = {keyup: "onKeyUp", resize: "onResize"}, g = function (c) {
        a.each(b.opened().reverse(), function () {
            return c.isDefaultPrevented() || !1 !== this[f[c.type]](c) ? void 0 : (c.preventDefault(), c.stopPropagation(), !1)
        })
    }, h = function (c) {
        if (c !== b._globalHandlerInstalled) {
            b._globalHandlerInstalled = c;
            var d = a.map(f, function (a, c) {
                return c + "." + b.prototype.namespace
            }).join(" ");
            a(window)[c ? "on" : "off"](d, g)
        }
    };
    b.prototype = {
        constructor: b,
        namespace: "featherlight",
        targetAttr: "data-featherlight",
        variant: null,
        resetCss: !1,
        background: null,
        openTrigger: "click",
        closeTrigger: "click",
        filter: null,
        root: "body",
        openSpeed: 250,
        closeSpeed: 250,
        closeOnClick: "background",
        closeOnEsc: !0,
        closeIcon: "&#10005;",
        loading: "",
        persist: !1,
        otherClose: null,
        beforeOpen: a.noop,
        beforeContent: a.noop,
        beforeClose: a.noop,
        afterOpen: a.noop,
        afterContent: a.noop,
        afterClose: a.noop,
        onKeyUp: a.noop,
        onResize: a.noop,
        type: null,
        contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
        setup: function (b, c) {
            "object" != typeof b || b instanceof a != !1 || c || (c = b, b = void 0);
            var d = a.extend(this, c, {target: b}), e = d.resetCss ? d.namespace + "-reset" : d.namespace, f = a(d.background || ['<div class="' + e + "-loading " + e + '">', '<div class="' + e + '-content">', '<span class="' + e + "-close-icon " + d.namespace + '-close">', d.closeIcon, "</span>", '<div class="' + d.namespace + '-inner">' + d.loading + "</div>", "</div>", "</div>"].join("")), g = "." + d.namespace + "-close" + (d.otherClose ? "," + d.otherClose : "");
            return d.$instance = f.clone().addClass(d.variant), d.$instance.on(d.closeTrigger + "." + d.namespace, function (b) {
                var c = a(b.target);
                ("background" === d.closeOnClick && c.is("." + d.namespace) || "anywhere" === d.closeOnClick || c.closest(g).length) && (b.preventDefault(), d.close())
            }), this
        },
        getContent: function () {
            if (this.persist !== !1 && this.$content)return this.$content;
            var b = this, c = this.constructor.contentFilters, d = function (a) {
                return b.$currentTarget && b.$currentTarget.attr(a)
            }, e = d(b.targetAttr), f = b.target || e || "", g = c[b.type];
            if (!g && f in c && (g = c[f], f = b.target && e), f = f || d("href") || "", !g)for (var h in c)b[h] && (g = c[h], f = b[h]);
            if (!g) {
                var i = f;
                if (f = null, a.each(b.contentFilters, function () {
                        return g = c[this], g.test && (f = g.test(i)), !f && g.regex && i.match && i.match(g.regex) && (f = i), !f
                    }), !f)return "console"in window && window.console.error("Featherlight: no content filter found " + (i ? ' for "' + i + '"' : " (no target specified)")), !1
            }
            return g.process.call(b, f)
        },
        setContent: function (b) {
            var c = this;
            return (b.is("iframe") || a("iframe", b).length > 0) && c.$instance.addClass(c.namespace + "-iframe"), c.$instance.removeClass(c.namespace + "-loading"), c.$instance.find("." + c.namespace + "-inner").not(b).slice(1).remove().end().replaceWith(a.contains(c.$instance[0], b[0]) ? "" : b), c.$content = b.addClass(c.namespace + "-inner"), c
        },
        open: function (b) {
            var d = this;
            if (d.$instance.hide().appendTo(d.root), !(b && b.isDefaultPrevented() || d.beforeOpen(b) === !1)) {
                b && b.preventDefault();
                var e = d.getContent();
                if (e)return c.push(d), h(!0), d.$instance.fadeIn(d.openSpeed), d.beforeContent(b), a.when(e).always(function (a) {
                    d.setContent(a), d.afterContent(b)
                }).then(d.$instance.promise()).done(function () {
                    d.afterOpen(b)
                })
            }
            return d.$instance.detach(), a.Deferred().reject().promise()
        },
        close: function (b) {
            var c = this, e = a.Deferred();
            return c.beforeClose(b) === !1 ? e.reject() : (0 === d(c).length && h(!1), c.$instance.fadeOut(c.closeSpeed, function () {
                c.$instance.detach(), c.afterClose(b), e.resolve()
            })), e.promise()
        },
        chainCallbacks: function (b) {
            for (var c in b)this[c] = a.proxy(b[c], this, a.proxy(this[c], this))
        }
    }, a.extend(b, {
        id: 0,
        autoBind: "[data-featherlight]",
        defaults: b.prototype,
        contentFilters: {
            jquery: {
                regex: /^[#.]\w/, test: function (b) {
                    return b instanceof a && b
                }, process: function (b) {
                    return this.persist !== !1 ? a(b) : a(b).clone(!0)
                }
            }, image: {
                regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i, process: function (b) {
                    var c = this, d = a.Deferred(), e = new Image, f = a('<img src="' + b + '" alt="" class="' + c.namespace + '-image" />');
                    return e.onload = function () {
                        f.naturalWidth = e.width, f.naturalHeight = e.height, d.resolve(f)
                    }, e.onerror = function () {
                        d.reject(f)
                    }, e.src = b, d.promise()
                }
            }, html: {
                regex: /^\s*<[\w!][^<]*>/, process: function (b) {
                    return a(b)
                }
            }, ajax: {
                regex: /./, process: function (b) {
                    var c = a.Deferred(), d = a("<div></div>").load(b, function (a, b) {
                        "error" !== b && c.resolve(d.contents()), c.fail()
                    });
                    return c.promise()
                }
            }, iframe: {
                process: function (b) {
                    var c = new a.Deferred, d = a("<iframe/>").hide().attr("src", b).css(e(this, "iframe")).on("load", function () {
                        c.resolve(d.show())
                    }).appendTo(this.$instance.find("." + this.namespace + "-content"));
                    return c.promise()
                }
            }, text: {
                process: function (b) {
                    return a("<div>", {text: b})
                }
            }
        },
        functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
        readElementConfig: function (b, c) {
            var d = this, e = new RegExp("^data-" + c + "-(.*)"), f = {};
            return b && b.attributes && a.each(b.attributes, function () {
                var b = this.name.match(e);
                if (b) {
                    var c = this.value, g = a.camelCase(b[1]);
                    if (a.inArray(g, d.functionAttributes) >= 0)c = new Function(c); else try {
                        c = a.parseJSON(c)
                    } catch (h) {
                    }
                    f[g] = c
                }
            }), f
        },
        extend: function (b, c) {
            var d = function () {
                this.constructor = b
            };
            return d.prototype = this.prototype, b.prototype = new d, b.__super__ = this.prototype, a.extend(b, this, c), b.defaults = b.prototype, b
        },
        attach: function (b, c, d) {
            var e = this;
            "object" != typeof c || c instanceof a != !1 || d || (d = c, c = void 0), d = a.extend({}, d);
            var f, g = d.namespace || e.defaults.namespace, h = a.extend({}, e.defaults, e.readElementConfig(b[0], g), d);
            return b.on(h.openTrigger + "." + h.namespace, h.filter, function (g) {
                var i = a.extend({
                    $source: b,
                    $currentTarget: a(this)
                }, e.readElementConfig(b[0], h.namespace), e.readElementConfig(this, h.namespace), d), j = f || a(this).data("featherlight-persisted") || new e(c, i);
                "shared" === j.persist ? f = j : j.persist !== !1 && a(this).data("featherlight-persisted", j), i.$currentTarget.blur(), j.open(g)
            }), b
        },
        current: function () {
            var a = this.opened();
            return a[a.length - 1] || null
        },
        opened: function () {
            var b = this;
            return d(), a.grep(c, function (a) {
                return a instanceof b
            })
        },
        close: function () {
            var a = this.current();
            return a ? a.close() : void 0
        },
        _onReady: function () {
            var b = this;
            b.autoBind && (b.attach(a(document), {filter: b.autoBind}), a(b.autoBind).filter("[data-featherlight-filter]").each(function () {
                b.attach(a(this))
            }))
        },
        _callbackChain: {
            onKeyUp: function (a, b) {
                return 27 === b.keyCode ? (this.closeOnEsc && this.$instance.find("." + this.namespace + "-close:first").click(), !1) : a(b)
            }, onResize: function (a, b) {
                if (this.$content.naturalWidth) {
                    var c = this.$content.naturalWidth, d = this.$content.naturalHeight;
                    this.$content.css("width", "").css("height", "");
                    var e = Math.max(c / parseInt(this.$content.parent().css("width"), 10), d / parseInt(this.$content.parent().css("height"), 10));
                    e > 1 && this.$content.css("width", "" + c / e + "px").css("height", "" + d / e + "px")
                }
                return a(b)
            }, afterContent: function (a, b) {
                var c = a(b);
                return this.onResize(b), c
            }
        }
    }), a.featherlight = b, a.fn.featherlight = function (a, c) {
        return b.attach(this, a, c)
    }, a(document).ready(function () {
        b._onReady()
    })
}(jQuery), function (a) {
    "use strict";
    function b(c, d) {
        if (!(this instanceof b)) {
            var e = new b(a.extend({$source: c, $currentTarget: c.first()}, d));
            return e.open(), e
        }
        a.featherlight.apply(this, arguments), this.chainCallbacks(h)
    }

    var c = function (a) {
        window.console && window.console.warn && window.console.warn("FeatherlightGallery: " + a)
    };
    if ("undefined" == typeof a)return c("Too much lightness, Featherlight needs jQuery.");
    if (!a.featherlight)return c("Load the featherlight plugin before the gallery plugin");
    var d = "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch, e = a.event && a.event.special.swipeleft && a, f = window.Hammer && function (a) {
            var b = new window.Hammer.Manager(a[0]);
            return b.add(new window.Hammer.Swipe), b
        }, g = d && (e || f);
    d && !g && c("No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.");
    var h = {
        afterClose: function (a, b) {
            var c = this;
            return c.$instance.off("next." + c.namespace + " previous." + c.namespace), c._swiper && (c._swiper.off("swipeleft", c._swipeleft).off("swiperight", c._swiperight), c._swiper = null), a(b)
        }, beforeOpen: function (a, b) {
            var c = this;
            return c.$instance.on("next." + c.namespace + " previous." + c.namespace, function (a) {
                var b = "next" === a.type ? 1 : -1;
                c.navigateTo(c.currentNavigation() + b)
            }), g ? c._swiper = g(c.$instance).on("swipeleft", c._swipeleft = function () {
                c.$instance.trigger("next")
            }).on("swiperight", c._swiperight = function () {
                c.$instance.trigger("previous")
            }) : c.$instance.find("." + c.namespace + "-content").append(c.createNavigation("previous")).append(c.createNavigation("next")), a(b)
        }, onKeyUp: function (a, b) {
            var c = {37: "previous", 39: "next"}[b.keyCode];
            return c ? (this.$instance.trigger(c), !1) : a(b)
        }
    };
    a.featherlight.extend(b, {autoBind: "[data-featherlight-gallery]"}), a.extend(b.prototype, {
        previousIcon: "&#9664;",
        nextIcon: "&#9654;",
        galleryFadeIn: 100,
        galleryFadeOut: 300,
        slides: function () {
            return this.filter ? this.$source.find(this.filter) : this.$source
        },
        images: function () {
            return c("images is deprecated, please use slides instead"), this.slides()
        },
        currentNavigation: function () {
            return this.slides().index(this.$currentTarget)
        },
        navigateTo: function (b) {
            var c = this, d = c.slides(), e = d.length, f = c.$instance.find("." + c.namespace + "-inner");
            return b = (b % e + e) % e, c.$currentTarget = d.eq(b), c.beforeContent(), a.when(c.getContent(), f.fadeTo(c.galleryFadeOut, .2)).always(function (a) {
                c.setContent(a), c.afterContent(), a.fadeTo(c.galleryFadeIn, 1)
            })
        },
        createNavigation: function (b) {
            var c = this;
            return a('<span title="' + b + '" class="' + this.namespace + "-" + b + '"><span>' + this[b + "Icon"] + "</span></span>").click(function () {
                a(this).trigger(b + "." + c.namespace)
            })
        }
    }), a.featherlightGallery = b, a.fn.featherlightGallery = function (a) {
        return b.attach(this, a)
    }, a(document).ready(function () {
        b._onReady()
    })
}(jQuery), function (a, b, c) {
    "use strict";
    function d(a, c) {
        return /(png|jpg|jpeg|gif|tiff|bmp)$/.test(b(c).attr("href").toLowerCase().split("?")[0].split("#")[0])
    }

    function e() {
        b("a[href]").filter(d).attr("data-featherlight", "image")
    }

    function f(a, c) {
        var d = b(c), e = d.find(".gallery-item a");
        0 === e.length && (e = d.find(".tiled-gallery-item a")), e.attr("data-featherlight") && e.featherlightGallery()
    }

    function g() {
        var a = b(".gallery, .tiled-gallery");
        0 !== a.length && b.each(a, f)
    }

    function h() {
        b.featherlight.prototype.afterContent = function () {
            var a = this.$instance, c = this.$currentTarget, d = c.parent(), e = d.find(".wp-caption-text"), f = c.parents(".gallery-item"), g = c.parents(".tiled-gallery-item");
            0 !== f.length ? e = f.find(".wp-caption-text") : 0 !== g.length && (e = g.find(".tiled-gallery-caption")), a.find(".caption").remove(), 0 !== e.length && b('<div class="caption">').text(e.text()).appendTo(a.find(".featherlight-content"))
        }
    }

    function i() {
        e(), g(), j.hasClass("wp-featherlight-captions") && h()
    }

    var j = b("body");
    b(document).ready(function () {
        i()
    })
}(this, jQuery);