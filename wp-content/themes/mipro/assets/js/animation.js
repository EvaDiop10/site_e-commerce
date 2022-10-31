(function ($) {
    "use strict";

    if ($(window).width() < 1025) {
        return;
    }

    window.settime = function (e) {
        $('.kft-instagram-shortcode').addClass('visit');
    }

    window.gb_throttle = function (func, wait, immediate) {
        var timeout;

        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;

            if (!timeout) {
                timeout = setTimeout(later, wait);
            }

            if (callNow) {
                func.apply(context, args);
            }
        };
    };

    window.animation_cart = function (action, delay) {
        if (typeof action === "undefined" || action === null) {
            action = '';
        }

        if (typeof delay === "undefined" || delay === null) {
            delay = 250;
        }

        $('div.products, div.kft-instagram').addClass('js_animated');

        $('.kc_tab div.products').removeClass('js_animated');

        if (action == 'reset') {
            $('div.products.js_animated div.product,div.kft-instagram.js_animated .item').removeClass('visible animation_ready animated');
        }

        $('div.products.js_animated div.product:not(.visible),div.kft-instagram.js_animated .item:not(.visible)').each(function () {
            if ($(this).visible("partial")) {
                $(this).addClass('visible');
            }
        });

        $('div.products.js_animated div.product.visible:not(.animation_ready), div.kft-instagram.js_animated .item.visible:not(.animation_ready)').each(function (i) {
            $(this).addClass('animation_ready');

            $(this).delay(i * delay).queue(function (next) {
                $(this).addClass('animated');
                next();
            });
        });

        $('div.products.js_animated div.product.visible:first,div.kft-instagram.js_animated .item.visible:first').prevAll().addClass('visible').addClass('animation_ready').addClass('animated');

    }

    $('div.products.js_animated,div.kft-instagram.js_animated').imagesLoaded(function () {
        animation_cart();
    });

    $(window).on('resize', function () {
        gb_throttle(animation_cart(), 300);
    });

    $(window).on('scroll', function () {
        gb_throttle(animation_cart(), 900);
    });

    $(document).ajaxComplete(function () {
        $('div.products.js_animated').imagesLoaded(function () {
            animation_cart();
        });
    });

})(jQuery);