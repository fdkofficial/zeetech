! function(e) {
    "use strict";
    e(window).on("load", (function() {
        e(".preloader").fadeOut()
    })), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
        e(this).on("click", (function(s) {
            s.preventDefault(), e(".preloader").css("display", "none")
        }))
    })), e.fn.vsmobilemenu = function(s) {
        var t = e.extend({
            menuToggleBtn: ".vs-menu-toggle",
            bodyToggleClass: "vs-body-visible",
            subMenuClass: "vs-submenu",
            subMenuParent: "vs-item-has-children",
            subMenuParentToggle: "vs-active",
            meanExpandClass: "vs-mean-expand",
            appendElement: '<span class="vs-mean-expand"></span>',
            subMenuToggleClass: "vs-open",
            toggleSpeed: 400
        }, s);
        return this.each((function() {
            var s = e(this);

            function a() {
                s.toggleClass(t.bodyToggleClass);
                var a = "." + t.subMenuClass;
                e(a).each((function() {
                    e(this).hasClass(t.subMenuToggleClass) && (e(this).removeClass(t.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(t.subMenuParentToggle))
                }))
            }
            s.find("li").each((function() {
                var s = e(this).find("ul");
                s.addClass(t.subMenuClass), s.css("display", "none"), s.parent().addClass(t.subMenuParent), s.prev("a").append(t.appendElement), s.next("a").append(t.appendElement)
            }));
            var o = "." + t.meanExpandClass;
            e(o).each((function() {
                e(this).on("click", (function(s) {
                    var a;
                    s.preventDefault(), a = e(this).parent(), e(a).next("ul").length > 0 ? (e(a).parent().toggleClass(t.subMenuParentToggle), e(a).next("ul").slideToggle(t.toggleSpeed), e(a).next("ul").toggleClass(t.subMenuToggleClass)) : e(a).prev("ul").length > 0 && (e(a).parent().toggleClass(t.subMenuParentToggle), e(a).prev("ul").slideToggle(t.toggleSpeed), e(a).prev("ul").toggleClass(t.subMenuToggleClass))
                }))
            })), e(t.menuToggleBtn).each((function() {
                e(this).on("click", (function() {
                    a()
                }))
            })), s.on("click", (function(e) {
                e.stopPropagation(), a()
            })), s.find("div").on("click", (function(e) {
                e.stopPropagation()
            }))
        }))
    }, e(".vs-menu-wrapper").vsmobilemenu();
    var s = "",
        t = ".scrollToTop";
    e(window).on("scroll", (function() {
        var a, o, n, i, l;
        a = e(".sticky-active"), o = "active", n = "will-sticky", i = e(window).scrollTop(), l = a.css("height"), a.parent().css("min-height", l), e(window).scrollTop() > 800 ? (a.parent().addClass(n), i > s ? a.removeClass(o) : a.addClass(o)) : (a.parent().css("min-height", "").removeClass(n), a.removeClass(o)), s = i, e(this).scrollTop() > 500 ? e(t).addClass("show") : e(t).removeClass("show")
    })), e(t).each((function() {
        e(this).on("click", (function(t) {
            return t.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, s / 3), !1
        }))
    })), e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var s = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + s + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e(".vs-carousel").each((function() {
        var s = e(this);

        function t(e) {
            return s.data(e)
        }
        var a = '<button type="button" class="slick-prev"><i class="' + t("prev-arrow") + '"></i></button>',
            o = '<button type="button" class="slick-next"><i class="' + t("next-arrow") + '"></i></button>';
        e("[data-slick-next]").each((function() {
            e(this).on("click", (function(s) {
                s.preventDefault(), e(e(this).data("slick-next")).slick("slickNext")
            }))
        })), e("[data-slick-prev]").each((function() {
            e(this).on("click", (function(s) {
                s.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == t("arrows") && (s.closest(".arrow-wrap").length || s.closest(".container").parent().addClass("arrow-wrap")), s.slick({
            dots: !!t("dots"),
            fade: !!t("fade"),
            arrows: !!t("arrows"),
            speed: t("speed") ? t("speed") : 1e3,
            asNavFor: !!t("asnavfor") && t("asnavfor"),
            autoplay: (t("autoplay"), !1),
            infinite: 0 != t("infinite"),
            slidesToShow: t("slide-show") ? t("slide-show") : 1,
            adaptiveHeight: !!t("adaptive-height"),
            centerMode: !!t("center-mode"),
            autoplaySpeed: t("autoplay-speed") ? t("autoplay-speed") : 8e3,
            centerPadding: t("center-padding") ? t("center-padding") : "0",
            focusOnSelect: !!t("focuson-select"),
            pauseOnFocus: !!t("pauseon-focus"),
            pauseOnHover: !!t("pauseon-hover"),
            variableWidth: !!t("variable-width"),
            vertical: !!t("vertical"),
            verticalSwiping: !!t("vertical"),
            prevArrow: t("prev-arrow") ? a : '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></i></button>',
            nextArrow: t("next-arrow") ? o : '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
            rtl: "rtl" == e("html").attr("dir"),
            responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: !!t("xl-arrows"),
                    dots: !!t("xl-dots"),
                    slidesToShow: t("xl-slide-show") ? t("xl-slide-show") : t("slide-show"),
                    centerMode: !!t("xl-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!t("ml-arrows"),
                    dots: !!t("ml-dots"),
                    slidesToShow: t("ml-slide-show") ? t("ml-slide-show") : t("slide-show"),
                    centerMode: !!t("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!t("lg-arrows"),
                    dots: !!t("lg-dots"),
                    slidesToShow: t("lg-slide-show") ? t("lg-slide-show") : t("slide-show"),
                    centerMode: !!t("lg-center-mode") && t("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!t("md-arrows"),
                    dots: !!t("md-dots"),
                    slidesToShow: t("md-slide-show") ? t("md-slide-show") : 1,
                    centerMode: !!t("md-center-mode") && t("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 767,
                settings: {
                    arrows: !!t("sm-arrows"),
                    dots: !!t("sm-dots"),
                    slidesToShow: t("sm-slide-show") ? t("sm-slide-show") : 1,
                    centerMode: !!t("sm-center-mode") && t("sm-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!t("xs-arrows"),
                    dots: !!t("xs-dots"),
                    slidesToShow: t("xs-slide-show") ? t("xs-slide-show") : 1,
                    centerMode: !!t("xs-center-mode") && t("xs-center-mode"),
                    centerPadding: 0
                }
            }]
        })
    }));
    var a, o, n, i = ".ajax-contact",
        l = "is-invalid",
        r = '[name="email"]',
        c = '[name="name"],[name="email"],[name="number"],[name="subject"],[name="callchoice"],[name="message"]',
        d = e(i).find(".form-messages");

    function u() {
        var s, t = e(i).serialize();
        s = function() {
            var s, t = !0;

            function a(a) {
                a = a.split(",");
                for (var o = 0; o < a.length; o++) s = i + " " + a[o], e(s).val() ? (e(s).removeClass(l), t = !0) : (e(s).addClass(l), t = !1)
            }
            a(c), e(r).val() && e(r).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(r).removeClass(l), t = !0) : (e(r).addClass(l), t = !1);
            return t
        }(), s && jQuery.ajax({
            url: e(i).attr("action"),
            data: t,
            type: "POST"
        }).done((function(s) {
            d.removeClass("error"), d.addClass("success"), d.text(s), e(i + ' input:not([type="submit"]),' + i + " textarea").val("")
        })).fail((function(e) {
            d.removeClass("success"), d.addClass("error"), "" !== e.responseText ? d.html(e.responseText) : d.html("Oops! An error occured and your message could not be sent.")
        }))
    }
    e(i).on("submit", (function(e) {
        e.preventDefault(), u()
    })), a = ".popup-search-box", o = ".searchClose", n = "show", e(".searchBoxTggler").on("click", (function(s) {
        s.preventDefault(), e(a).addClass(n)
    })), e(a).on("click", (function(s) {
        s.stopPropagation(), e(a).removeClass(n)
    })), e(a).find("form").on("click", (function(s) {
        s.stopPropagation(), e(a).addClass(n)
    })), e(o).on("click", (function(s) {
        s.preventDefault(), s.stopPropagation(), e(a).removeClass(n)
    })), e(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), e(".popup-video").magnificPopup({
        type: "iframe"
    }), e(".testi-slide1").slick({
        speed: 1e3,
        arrows: !1,
        fade: !1,
        dots: !1,
        vertical: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: !0,
        infinite: !0,
        centerMode: !0,
        centerPadding: "0",
        asNavFor: ".testi-slide2",
        responsive: [{
            breakpoint: 1199,
            settings: {
                vertical: !1,
                centerMode: !1
            }
        }, {
            breakpoint: 992,
            settings: {
                vertical: !1,
                centerMode: !1,
                slidesToShow: 2
            }
        }]
    }), e(".testi-slide2").slick({
        speed: 1e3,
        arrows: !1,
        fade: !0,
        dots: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: !0,
        infinite: !0,
        asNavFor: ".testi-slide1",
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: !1
            }
        }]
    }), new WOW({
        boxClass: "wow",
        animateClass: "wow-animated",
        offset: 0,
        mobile: !1,
        live: !0,
        scrollContainer: null,
        resetAnimation: !1
    }).init(), e(".accordion-button").on("click", (function() {
        e(this).closest(".accordion-item").toggleClass("active").siblings().removeClass("active")
    })), e.fn.shapeMockup = function() {
        e(this).each((function() {
            var s = e(this),
                t = s.data("top"),
                a = s.data("right"),
                o = s.data("bottom"),
                n = s.data("left");
            s.css({
                top: t,
                right: a,
                bottom: o,
                left: n
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e.fn.countdown = function() {
        e(this).each((function() {
            var s = e(this),
                t = new Date(s.data("end-date")).getTime();

            function a(e) {
                return s.find(e)
            }
            var o = setInterval((function() {
                var e = (new Date).getTime(),
                    n = t - e,
                    i = Math.floor(n / 864e5),
                    l = Math.floor(n % 864e5 / 36e5),
                    r = Math.floor(n % 36e5 / 6e4),
                    c = Math.floor(n % 6e4 / 1e3);

                function d(e) {
                    return e < 10 ? "0" + e : e
                }
                n < 0 ? (clearInterval(o), s.addClass("expired"), s.find(".message").css("display", "block")) : (a(".day").html(d(i)), a(".hour").html(d(l)), a(".minute").html(d(r)), a(".seconds").html(d(c)))
            }), 1e3)
        }))
    }, e(".countdown-active").length && e(".countdown-active").countdown()
}(jQuery);