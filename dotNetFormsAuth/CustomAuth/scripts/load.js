﻿(function () {
    function g(b, a) {
        function c(a) {
            m = !0;
            "undefined" !== typeof n && clearTimeout(n);
            if ("string" === typeof a) return "function" === typeof h && h(a), !0;
            if ("object" === typeof a || "undefined" === typeof a) return "object" === typeof a && "error" === a.type ? "function" === typeof h && h(a) : "function" === typeof e && e(), !0
        }
        function d() {
            k++;
            if (m) return !0;
            k < g ? n = setTimeout(d, 50) : c("Load Timeout Error")
        }
        var e = a, g = 200, j = !1, h, k = 0, n, f = document.createElement("script"), l = document.getElementsByTagName("script")[0], m = !1;
        f.src = b;
        f.setAttribute("type",
            "text/javascript");
        f.onload = f.onerror = f.onreadystatechange = function (a) {
            !m && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) && c(a)
        };

        return {
            setTimeoutCallback: function (a) {
                j = !0;
                h = a;
                return this
            },
            setCallback: function (a) {
                e = a;
                return this
            },
            setTimeoutLimit: function (a) {
                g = a;
                return this
            },
            load: function () {
                l.parentNode.insertBefore(f, l);
                j && d()
            }
        }
    }
    function d(b, a) {
        if (0 === a.length) return !1;
        if (b === a.length) {
            var c = ("https:" === document.location.protocol ? "https://d16s8pqtk4uodx.cloudfront.net/" :
                "http://d16s8pqtk4uodx.cloudfront.net/") + "manifest-development/" + a.join("-") + ".js?version=" + encodeURIComponent("2013.12_ws_widgets_rc1");
            g(c, void 0).load()
        } else c = a[b], j(janrain.loadedPackages).hasOwnProperty(c) ? (c = a.slice(b + 1 || a.length), a.length = 0 > b ? a.length + b : b, a.push.apply(a, c), d(b, a)) : (janrain.loadedPackages.push(a[b]), "login" === a[b] && "en" === janrain.settings.language || "capture" === a[b] || "simpleshare" === a[b] ? d(b + 1, a) : g(("https:" === document.location.protocol ? "https://d29usylhdk1xyu.cloudfront.net/" :
        "http://widget-cdn.rpxnow.com/") + "translations/" + a[b] + "/" + janrain.settings.language, function () {
            d(b + 1, a)
        }).load())
    }
    function j(b) {
        for (var a = {}, c = 0, d = b.length; c < d; c++) a[b[c]] = b[c];
        return a
    }
    "object" !== typeof window.janrain.engage && (window.janrain.engage = {});
    janrain.settings.capture || (janrain.settings.capture = {});
    janrain.settings.common || (janrain.settings.common = {});
    janrain.settings.language || (janrain.settings.language = "en");
    janrain.settings.packages ? janrain.settings.tokenUrl && janrain.settings.packages.push("login") :
    janrain.settings.packages = ["login"];
    janrain.settings.publish || (janrain.settings.publish = {});
    janrain.settings.share || (janrain.settings.share = {});
    janrain.settings.simpleshare || (janrain.settings.simpleshare = {});
    janrain.loadedPackages || (janrain.loadedPackages = []);
    janrain.settings.linkClass || (janrain.settings.linkClass = "janrainEngage");
    "undefined" === typeof janrain.settings.common.appUrl && (janrain.settings.common.appUrl = "https://janrain-training.rpxnow.com");
    "undefined" === typeof janrain.settings.showAttribution &&
    (janrain.settings.showAttribution = !0);
    "undefined" === typeof janrain.settings.type && (janrain.settings.type = "embed");
    "undefined" === typeof janrain.settings.format && (janrain.settings.format = "two column");
    "undefined" === typeof janrain.settings.width && (janrain.settings.width = "380");
    "undefined" === typeof janrain.settings.providersPerPage && (janrain.settings.providersPerPage = "6");
    janrain.settings.actionText || (janrain.settings.actionText = "");
    "undefined" === typeof janrain.settings.fontColor && (janrain.settings.fontColor =
        "#333333");
    "undefined" === typeof janrain.settings.fontFamily && (janrain.settings.fontFamily = "arial");
    "undefined" === typeof janrain.settings.backgroundColor && (janrain.settings.backgroundColor = "#FFFFFF");
    "undefined" === typeof janrain.settings.buttonBorderColor && (janrain.settings.buttonBorderColor = "#CCCCCC");
    "undefined" === typeof janrain.settings.buttonBorderRadius && (janrain.settings.buttonBorderRadius = "5");
    "undefined" === typeof janrain.settings.buttonBackgroundStyle && (janrain.settings.buttonBackgroundStyle =
        "gradient");
    "undefined" === typeof janrain.settings.borderWidth && (janrain.settings.borderWidth = "15");
    "undefined" === typeof janrain.settings.borderColor && (janrain.settings.borderColor = "#CCCCCC");
    "undefined" === typeof janrain.settings.borderRadius && (janrain.settings.borderRadius = "10");
    "undefined" === typeof janrain.settings.appId && (janrain.settings.appId = "pgmlcbaamjanmnncpjjn");
    "undefined" === typeof janrain.settings.appUrl && (janrain.settings.appUrl = "https://janrain-training.rpxnow.com");
    janrain.settings.permissions =
    ["customizable_auth_widget_hide_attribution", "customizable_auth_widget_styling"];
    "undefined" === typeof janrain.settings.providers && (janrain.settings.providers = ["aol", "google", "yahoo", "openid"]);
    "undefined" === typeof janrain.settings.noReturnExperience && (janrain.settings.noReturnExperience = !1);
    "undefined" === typeof janrain.settings.maxProviders && (janrain.settings.maxProviders = "16");
    "undefined" === typeof janrain.settings.share.attributionDisplay && (janrain.settings.share.attributionDisplay = !0);
    "undefined" ===
    typeof janrain.settings.share.elementColor && (janrain.settings.share.elementColor = "#333333");
    "undefined" === typeof janrain.settings.share.elementHoverBackgroundColor && (janrain.settings.share.elementHoverBackgroundColor = "#eeeeee");
    "undefined" === typeof janrain.settings.share.elementButtonBorderRadius && (janrain.settings.share.elementButtonBorderRadius = "6");
    "undefined" === typeof janrain.settings.share.elementBorderColor && (janrain.settings.share.elementBorderColor = "#cccccc");
    "undefined" === typeof janrain.settings.share.elementBackgroundColor &&
    (janrain.settings.share.elementBackgroundColor = "#f6f6f6");
    "undefined" === typeof janrain.settings.share.elementLinkColor && (janrain.settings.share.elementLinkColor = "#009DDC");
    "undefined" === typeof janrain.settings.share.elementBorderRadius && (janrain.settings.share.elementBorderRadius = "3");
    "undefined" === typeof janrain.settings.share.elementButtonBoxShadow && (janrain.settings.share.elementButtonBoxShadow = "3");
    "undefined" === typeof janrain.settings.share.modalOpacity && (janrain.settings.share.modalOpacity =
        "0.5");
    "undefined" === typeof janrain.settings.share.modalBorderRadius && (janrain.settings.share.modalBorderRadius = "5");
    "undefined" === typeof janrain.settings.share.bodyColor && (janrain.settings.share.bodyColor = "#333333");
    "undefined" === typeof janrain.settings.share.bodyTabBackgroundColor && (janrain.settings.share.bodyTabBackgroundColor = "#f8f8f8");
    "undefined" === typeof janrain.settings.share.bodyTabColor && (janrain.settings.share.bodyTabColor = "#000000");
    "undefined" === typeof janrain.settings.share.bodyContentBackgroundColor &&
    (janrain.settings.share.bodyContentBackgroundColor = "#ffffff");
    "undefined" === typeof janrain.settings.share.bodyBackgroundColorOverride && (janrain.settings.share.bodyBackgroundColorOverride = !1);
    "undefined" === typeof janrain.settings.share.bodyFontFamily && (janrain.settings.share.bodyFontFamily = "Helvetica");
    "undefined" === typeof janrain.settings.share.bodyBackgroundColor && (janrain.settings.share.bodyBackgroundColor = "#009DDC");
    "undefined" === typeof janrain.settings.share.modalBackgroundColor && (janrain.settings.share.modalBackgroundColor =
        "#000000");
    "undefined" === typeof janrain.settings.share.appUrl && (janrain.settings.share.appUrl = "https://janrain-training.rpxnow.com");
    janrain.settings.share.permissions = ["customizable_share_widget_hide_attribution", "customizable_share_widget_styling", "customizable_share_widget_contact_mode"];
    "undefined" === typeof janrain.settings.share.providers && (janrain.settings.share.providers = []);
    "undefined" === typeof janrain.settings.share.providersEmail && (janrain.settings.share.providersEmail = []);
    "undefined" ===
    typeof janrain.settings.share.modes && (janrain.settings.share.modes = ["broadcast"]);
    var p = janrain.settings, k = j(janrain.settings.packages), l = [], e;
    for (e in k) k.hasOwnProperty(e) && l.push(e); p.packages = l;
    janrain.settings.packages.sort();
    d(0, janrain.settings.packages)
})();