var MiproTheme;

(function($) {
    "use strict";

    MiproTheme = {
        init: function() {
            
            this.ShowSearch();
            
            this.preloadJs();

            this.ProgressBar();

            this.SliderShortcode();

            this.SliderBrandShortcode();

            this.MegaMenuSetting();

            this.MobileNavigation();

            this.PopupNewletter();

            this.HeaderSticky();

            this.ShopSidebar();

            this.ShopFilters();

            this.BannerPrlxShortcode();

            this.Backtotop();

            this.BackgroundPrlx();

            this.SizeChartProductImg();

            this.VideoLightbox();

            this.CounterUpShortcode();

            this.AjaxSearch();

            this.HoverGalleryProduct();

            this.AccordionProductTab();

            this.QuickviewAction();

            this.HideMessagePopup();

            this.WishlistAction();

            this.RecentPostWg();

            this.ProductWgSlider();

            this.CountdownTimer();

            this.BlogGallerySlider();

            this.BlogMasonryShortcode();

            this.BootrapTooltip();

            this.WooQuantity();

            this.ProductImageSetting();

            this.ProductDefaultSlider();

            this.OrderByWoo();

            this.RelatedPostSlider();

            this.loginSidebar();

            this.CartSidebar();

            this.GalleryImagesShortcode();

            this.ProductShortcode();

            this.CatMasonryShot();

            this.MessageAddtoCart();

            this.StickyProduct();

            this.LazyLoading();

            this.ColorSwatches();

            this.CookieNotice();

            this.ProductVideo360();

            this.infiniteProduct();

            this.GridListShop();

            this.AjaxShop();

            this.VariationsProduct();
        },

        ShowSearch:function(){
            $('.kft-header-search .toggle-search').on('click',function(){
                $(this).parent().find('.search-form-wrapper').toggle();
                return false;
            })
        },

        ProgressBar: function() {

            $(window).on( 'scroll', function() {
                var scrollTop = $(window).scrollTop();
                var docHeight = $(document).height();
                var winHeight = $(window).height();
                var scrollPercent = (scrollTop) / (docHeight - winHeight);
                var scrollPercentRounded = Math.round(scrollPercent*100);

                $( ".progress-bar-page" ).css( "width", scrollPercentRounded + "%" );

            });
        },

        SliderShortcode: function() {
            $('.kft-banners-slider,.kft-product-categories-shortcode.layout-slider,.kft-blogs-shortcode.slider,.kft-testimonials-shortcode.layout-slider').each(function() {
                var element = $(this);
                var margin = element.data('margin');
                var columns = element.data('columns');
                var nav = element.data('nav') === 1;
                var dots = element.data('dots') === 1;
                var autoplay = element.data('autoplay') === 1;
                var slider = element.data('slider') === 1;
                var desksmini = element.data('desksmini');
                var tabletmini = element.data('tabletmini');
                var tablet = element.data('tablet');
                var mobile = element.data('mobile');
                var mobilesmini = element.data('mobilesmini');

                if (slider) {
                    var _slider_data = {
                        loop: false,
                        nav: nav,
                        dots: dots,
                        slideBy: 1,
                        navText: false,
                        rtl: $('body').hasClass('rtl'),
                        margin: margin,
                        autoplay: autoplay,
                        autoplayHoverPause: true,
                        autoplayTimeout: 5000,
                        responsive: {
                            0: {
                                items: mobilesmini
                            },
                            480: {
                                items: mobile
                            },
                            640: {
                                items: tabletmini
                            },
                            768: {
                                items: tablet
                            },
                            991: {
                                items: desksmini
                            },
                            1199: {
                                items: columns
                            }
                        },
                        onInitialized: function() {
                            element.find('.meta-slider').addClass('loaded').removeClass('loading');
                        }
                    };
                    element.find('.meta-slider > div').addClass('owl-carousel').owlCarousel(_slider_data);
                }
            });
        },
SliderBrandShortcode: function() {
            $('.kft-brand-slider-shortcode').each(function() {
                var element = $(this);
                var margin = element.data('margin');
                var columns = element.data('columns');
                var nav = element.data('nav') === 1;
                var dots = element.data('dots') === 1;
                var autoplay = element.data('autoplay') === 1;
                var slider = element.data('slider') === 1;
                var desksmini = element.data('desksmini');
                var tabletmini = element.data('tabletmini');
                var tablet = element.data('tablet');
                var mobile = element.data('mobile');
                var mobilesmini = element.data('mobilesmini');

                if (slider) {
                    var _slider_data = {
                        loop: true,
                        nav: nav,
                        dots: dots,
                        slideBy: 1,
                        center:true,
                        navText: false,
                        rtl: $('body').hasClass('rtl'),
                        margin: margin,
                        autoplay: autoplay,
                        autoplayHoverPause: true,
                        autoplayTimeout: 5000,
                        responsive: {
                            0: {
                                items: mobilesmini
                            },
                            480: {
                                items: mobile
                            },
                            640: {
                                items: tabletmini
                            },
                            768: {
                                items: tablet
                            },
                            991: {
                                items: desksmini
                            },
                            1199: {
                                items: columns
                            }
                        },
                        onInitialized: function() {
                            element.find('.meta-slider').addClass('loaded').removeClass('loading');
                        }
                    };
                    element.find('.meta-slider > div').addClass('owl-carousel').owlCarousel(_slider_data);
                }
            });
        },

        ProductShortcode: function() {
            $('.kft-product-shortcode').each(function() {
                var element = $(this);
                var atts = element.data('atts');

                if (atts.is_slider) {
                    var nav = parseInt(atts.nav) === 1;
                    var dots = parseInt(atts.dots) === 1;
                    var autoplay = parseInt(atts.autoplay) === 1;
                    var margin = parseInt(atts.margin);
                    var desksmini = parseInt(atts.desksmini);
                    var tabletmini = parseInt(atts.tabletmini);
                    var tablet = parseInt(atts.tablet);
                    var mobile = parseInt(atts.mobile);
                    var mobilesmini = parseInt(atts.mobilesmini);
                    var columns = parseInt(atts.columns);
                    var slider_data = {
                        loop: false,
                        nav: nav,
                        navText: false,
                        dots: dots,
                        slideBy: 1,
                        rtl: $('body').hasClass('rtl'),
                        margin: margin,
                        autoplay: autoplay,
                        autoplayTimeout: 5000,
                        autoHeight: true,
                        responsive: {
                            0: {
                                items: mobilesmini
                            },
                            480: {
                                items: mobile
                            },
                            640: {
                                items: tabletmini
                            },
                            768: {
                                items: tablet
                            },
                            991: {
                                items: desksmini
                            },
                            1199: {
                                items: columns
                            }
                        },
                        onInitialized: function() {
                            element.find('.meta-slider').addClass('loaded').removeClass('loading');
                        }
                    };
                    element.find('.meta-slider > .products').addClass('owl-carousel').owlCarousel(slider_data);
                }

                var is_masonry = false;
                if (atts.is_masonry && typeof $.fn.isotope === 'function' && typeof($.fn.imagesLoaded) === 'function') {
                    is_masonry = true;
                }

                if (is_masonry) {
                    var $container = element.find('.meta-slider > .products');
                    $container.imagesLoaded(function() {
                        $container.isotope();
                    });
                }

                if (atts.show_load_more) {
                    element.on('click', 'a.load-more', function() {
                        var button = $(this);
                        if (button.hasClass('loading')) {
                            return false;
                        }

                        button.addClass('loading');
                        var paged = button.attr('data-paged'),
                            appendProducts = element.find('.meta-slider > .products');

                        $.ajax({
                            type: 'POST',
                            timeout: 30000,
                            url: mipro_settings.ajax_uri,
                            data: { action: 'kft_products_load_items', paged: paged, atts: atts },
                            error: function(xhr, err) {

                            },
                            success: function(response) {
                                button.removeClass('loading');
                                button.attr('data-paged', ++paged);

                                if (response != 0 && response != '') {
                                    if (element.hasClass('is-masonry') && typeof $.fn.isotope === 'function' && typeof $.fn.imagesLoaded === 'function') {
                                        appendProducts.isotope('insert', $(response));
                                        appendProducts.imagesLoaded().progress(function() {
                                            appendProducts.isotope('layout');
                                        });
                                    } else {
                                        appendProducts.append(response);
                                    }
                                } else {
                                    button.parent().remove();
                                }
                                MiproTheme.BootrapTooltip();
                                MiproTheme.CountdownTimer();
                                MiproTheme.LazyLoading();
                            }
                        });

                        return false;
                    });
                }
            });
        },

        BlogMasonryShortcode: function() {
            $('.kft-blogs-shortcode.masonry').each(function() {
                var element = $(this);
                if (typeof $.fn.isotope === 'function' && typeof $.fn.imagesLoaded === 'function') {
                    var blogMasonry = element.find('.blogs');
                    blogMasonry.imagesLoaded(function() {
                        blogMasonry.isotope();
                    });
                }
            });

            $('.kft-blogs-shortcode.has-load-more').each(function() {
                var element = $(this);
                var atts = element.data('atts');
                element.on('click', 'a.load-more', function() {
                    var button = $(this);
                    if (button.hasClass('loading')) {
                        return false;
                    }

                    button.addClass('loading');
                    var paged = button.attr('data-paged'),
                        appendBlogs = element.find('.blogs');

                    $.ajax({
                        type: 'POST',
                        timeout: 30000,
                        url: mipro_settings.ajax_uri,
                        data: { action: 'kft_blogs_load_items', paged: paged, atts: atts },
                        error: function(xhr, err) {

                        },
                        success: function(response) {
                            button.removeClass('loading');
                            button.attr('data-paged', ++paged);
                            if (response != 0 && response != '') {
                                if (element.hasClass('masonry') && typeof $.fn.isotope === 'function' && typeof $.fn.imagesLoaded === 'function') {
                                    appendBlogs.isotope('insert', $(response));
                                    appendBlogs.imagesLoaded().progress(function() {
                                        appendBlogs.isotope('layout');
                                    });
                                } else {
                                    appendBlogs.append(response);

                                    var columns = parseInt(atts.columns);
                                    element.find('.blogs .item').removeClass('first last');
                                    element.find('.blogs .item').each(function(index, ele) {
                                        if (index % columns === 0) {
                                            $(ele).addClass('first');
                                        }
                                        if (index % columns === columns - 1) {
                                            $(ele).addClass('last');
                                        }
                                    });
                                }
                            } else {
                                button.parent().remove();
                            }
                            MiproTheme.BlogGallerySlider();
                            MiproTheme.LazyLoading();
                        }
                    });

                    return false;
                });
            });
        },

        BootrapTooltip: function() {
            if ($(window).width() <= 1024) {
                return;
            }

            var wrapper = $('.kft-tooltip, .social-sharing li a, .product-images-wrapper .product-zoom-button a, .product-images-wrapper .product-360-btn a');
            wrapper.tooltip({
                animation: false,
                container: 'body',
                trigger: 'hover',
                placement: 'top',
                title: function() {
                    return $(this).text();
                }
            });

            var productBtn = $('.woocommerce .images div.kft-add-to-cart, .kft-product-buttons .compare, .kft-product-buttons .yith-wcwl-add-to-wishlist a, .kft-product-buttons .quickview');
            productBtn.tooltip({
                animation: false,
                container: 'body',
                trigger: 'hover',
                placement: 'left',
                title: function() {
                    if ($(this).find('.added_to_cart').length > 0) {
                        return $(this).find('.add_to_cart_button').text();
                    }
                    return $(this).text();
                }
            });

            productBtn.on( 'click' ,function() {
                $( this ).tooltip( 'hide' );

            });

            $('.mipro-social-button .social-sharing li a').tooltip('destroy');
        },

        WooQuantity: function() {
            $(document).on('click', '.plus, .minus', function() {

                var $qty = $(this).closest('.quantity').find('.qty'),
                    currentVal = parseFloat($qty.val()),
                    max = parseFloat($qty.attr('max')),
                    min = parseFloat($qty.attr('min')),
                    step = $qty.attr('step');

                if (!currentVal || currentVal === '' || currentVal === 'NaN') {
                    currentVal = 0;
                }
                if (max === '' || max === 'NaN') {
                    max = '';
                }
                if (min === '' || min === 'NaN') {
                    min = 0;
                }
                if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') {
                    step = 1;
                }

                if ($(this).is('.plus')) {

                    if (max && (max == currentVal || currentVal > max)) {
                        $qty.val(max);
                    } else {
                        $qty.val(currentVal + parseFloat(step));
                    }

                } else {

                    if (min && (min == currentVal || currentVal < min)) {
                        $qty.val(min);
                    } else if (currentVal > 0) {
                        $qty.val(currentVal - parseFloat(step));
                    }

                }

                $qty.trigger('change');

            });
        },

        ProductImageSetting: function() {
            if ($('.single-product').length > 0) {
                $('.product-thumbnails').on('click', '.thumbnail-image a', function(e) {
                    e.preventDefault();
                });

                $('.product-images-wrapper > .images').each(function() {
                    var element = $(this);
                    element.addClass('owl-carousel').owlCarousel({
                        loop: false,
                        nav: true,
                        navText: false,
                        dots: false,
                        navSpeed: 1000,
                        slideBy: 1,
                        rtl: $('body').hasClass('rtl'),
                        margin: 0,
                        autoplayTimeout: 5000,
                        responsiveRefreshRate: 400,
                        responsive: {
                            0: {
                                items: 1
                            }
                        },
                        onInitialized: function() {
                            element.addClass('loaded').removeClass('loading');
                        }
                    });
                });
                if ($('.product-images-wrapper > .images').hasClass('has-product-lightbox') && typeof PhotoSwipe != 'undefined') {
                    ProductLightbox();

                    $('.product-images-wrapper').on('click', '.product-zoom-button', function(t) {
                        $('.product-images-wrapper > .images').find('.owl-item.active a').trigger('click');
                        t.preventDefault();
                    });
                } else {
                    $('.product-images-wrapper > .images').on('click', '.woocommerce-product-gallery__image a', function(e) {
                        e.preventDefault();
                    });
                }
                ProductThumbnailBottom();
                ProductThumbnailLeft();

                if ($(".has-product-zoom").length) {
                    if ($(window).width() > 1024) {
                        var prodZoom = $('.product-images-wrapper > .images.has-product-zoom .woocommerce-product-gallery__image').easyZoom({
                            loadingNotice: '',
                            errorNotice: '',
                            preventClicks: false,
                        });
                        var updateZoom = prodZoom.filter('.product-images-wrapper > .images.has-product-zoom .first').data('easyZoom');

                        $('.variations').on('change', 'select', function() {
                            updateZoom.teardown();
                            updateZoom._init();
                        });
                    }
                }

                $('form.variations_form').on('show_variation', function(e, variation, purchasable) {
                    $('.product-images-wrapper > .images').trigger('to.owl.carousel', 0);

                    var image_src = variation.image.src;
                    if (!image_src) {
                        return;
                    }
                    var $thumb = $('.thumbnails .thumbnail-image.first img');
                    if (typeof $.fn.wc_set_variation_attr === 'function') {
                        $thumb.wc_set_variation_attr('src', image_src);
                    }
                });

                $('form.variations_form').on('click', '.reset_variations', function() {

                    var $thumb = $('.thumbnails .thumbnail-image.first img');
                    if (typeof $.fn.wc_reset_variation_attr === 'function') {
                        $thumb.wc_reset_variation_attr('src');
                    }
                });
            }

            function ProductLightbox() {
                $('.product-images-wrapper > .images').on('click', '.woocommerce-product-gallery__image a', function(e) {
                    e.preventDefault();
                    var items = PhotoswipeItems();
                    var index = $(this).find('img').attr('data-index');
                    var pswpElement = $('.pswp')[0];
                    var options = {
                        index: parseInt(index),
                        shareEl: false,
                        closeOnScroll: false,
                        history: false,
                        hideAnimationDuration: 0,
                        showAnimationDuration: 0
                    };
                    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                    gallery.init();
                });
            }

            function PhotoswipeItems() {
                var items = [];
                $('.product-images-wrapper > .images .woocommerce-product-gallery__image a').each(function(index, ele) {
                    if ($(ele).parents('.owl-item.cloned').length === 0) {
                        var img = $(ele).find('img');
                        var large_image_src = img.attr('data-large_image');
                        var large_image_w = img.attr('data-large_image_width');
                        var large_image_h = img.attr('data-large_image_height');
                        var item = {
                            src: large_image_src,
                            w: large_image_w,
                            h: large_image_h,
                            title: img.attr('title')
                        };
                        items.push(item);
                    }
                });

                return items;
            }

            function ProductThumbnailBottom() {
                var $thumbnail = $('.single-product .thumbnails:not(.vertical-thumbnail) .product-thumbnails');
                $thumbnail.addClass('owl-carousel').owlCarousel({
                    loop: false,
                    nav: false,
                    navText: false,
                    dots: false,
                    navSpeed: 1000,
                    rtl: $('body').hasClass('rtl'),
                    margin: 15,
                    autoplay: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        100: {
                            items: 2
                        },
                        290: {
                            items: 3
                        }
                    },
                    onInitialized: function() {
                        $thumbnail.addClass('loaded').removeClass('loading');
                    }
                });

                var $thumbSlider = $thumbnail.owlCarousel(),
                    $imageWrap = $('.product-images-wrapper > .images');

                $thumbnail.on('click', '.owl-item', function(e) {
                    var i = $(this).index();
                    $thumbSlider.trigger('to.owl.carousel', i);
                    $imageWrap.trigger('to.owl.carousel', i);
                });

                $imageWrap.on('changed.owl.carousel', function(e) {
                    var i = e.item.index;
                    $thumbSlider.trigger('to.owl.carousel', i);
                    $thumbnail.find('.is-selected').removeClass('is-selected');
                    $thumbnail.find('.thumbnail-image').eq(i).addClass('is-selected');
                });
                $thumbnail.find('.thumbnail-image').eq(0).addClass('is-selected');
            }

            function ProductThumbnailLeft() {
                var $thumbnail = $('.single-product .thumbnails.vertical-thumbnail .product-thumbnails');
                if ($thumbnail.length > 0) {
                    var _slider_data = {
                        slidesToShow: 3,
                        dot: false,
                        lazy: 'ondemand',
                        slidesToScroll: 1,
                        vertical: true,
                        verticalSwiping: true,
                        infinite: false
                    };
                    $thumbnail.slick(_slider_data);
                    $thumbnail.addClass('loaded').removeClass('loading');
                }
                var $imageWrap = $('.product-images-wrapper > .images');
                $thumbnail.on('click', '.thumbnail-image', function(e) {
                    var i = $(this).index();
                    $imageWrap.trigger('to.owl.carousel', i);
                });

                $imageWrap.on('changed.owl.carousel', function(e) {
                    var i = e.item.index;
                    $thumbnail.on('init', function() {
                        $thumbnail.slick('slickGoTo', i, true);
                    });
                    $thumbnail.find('.is-selected').removeClass('is-selected');
                    $thumbnail.find('.thumbnail-image').eq(i).addClass('is-selected');
                });
                $thumbnail.find('.thumbnail-image').eq(0).addClass('is-selected');
            }

            $('.single-product').on('click', 'a.woocommerce-review-link', function(t) {
                $.scrollTo('.reviews_tab', {
                    duration: 300,
                    offset: -150
                });
            });
        },

        VariationsProduct: function() {
            $( '.variations_form' ).on( 'click', '.kft-product-attribute .variation-product__option a', function() {
                var element = $( this );
                var val = element.closest( '.variation-product__option' ).data( 'variation' );
                var selector = element.closest( '.kft-product-attribute' ).siblings( 'select' );
                if ( 0 < selector.length ) {
                    if ( 0 < selector.find( 'option[value="' + val + '"]' ).length ) {
                        selector.val( val ).trigger( 'change' );
                        element.closest( '.kft-product-attribute' ).find( '.variation-product__option' ).removeClass( 'selected' );
                        element.closest( '.variation-product__option' ).addClass( 'selected' );
                    }
                }
                return false;
            });

            $( '.variations_form' ).on( 'click', '.reset_variations', function() {
                $( this ).closest( '.variations' ).find( '.kft-product-attribute .variation-product__option' ).removeClass( 'selected' );
            });
        },

        ProductDefaultSlider: function() {
            $('.single-product .related .products, .single-product .up-sells .products, .woocommerce .cross-sells .products').each(function() {
                var element = $(this);
                element.addClass('owl-carousel').owlCarousel({
                    loop: false,
                    nav: false,
                    navText: false,
                    dots: true,
                    slideBy: 1,
                    rtl: $('body').hasClass('rtl'),
                    margin: 30,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 1
                        },
                        667: {
                            items: 2
                        },
                        736: {
                            items: 2
                        },
                        800: {
                            items: 3
                        },
                        1400: {
                            items: 4
                        }
                    },
                    onInitialized: function() {
                        element.addClass('loaded').removeClass('loading');
                    }
                });
            });
        },

        RelatedPostSlider: function() {
            $('.related-posts.loading .meta-slider > .blogs').each(function() {
                var element = $(this);

                element.addClass('owl-carousel').owlCarousel({
                    loop: true,
                    nav: false,
                    navText: false,
                    dots: false,
                    slideBy: 1,
                    rtl: $('body').hasClass('rtl'),
                    margin: 30,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        800: {
                            items: 3
                        },
                        1400: {
                            items: 4
                        }
                    }
                });
            });
        },

        BlogGallerySlider: function() {
            $('.blog-image.gallery').each(function() {
                var element = $(this);
                element.addClass('owl-carousel').owlCarousel({
                    items: 1,
                    loop: true,
                    nav: false,
                    dots: true,
                    navText: false,
                    slideBy: 1,
                    rtl: $('body').hasClass('rtl'),
                    margin: 0,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoHeight: true,
                    responsive: {
                        0: {
                            items: 1
                        }
                    },
                    onInitialized: function() {
                        element.addClass('loaded').removeClass('loading');
                    }

                });

            });
        },

        CountdownTimer: function() {
            $('.countdown-timer').each(function() {
                var time = $(this).data('countdown');
                $(this).countdown(time, function(event) {
                    $(this).html(event.strftime('' +
                        '<div class="days"><span class="number">%-D </span><div class="countdown-meta">' + mipro_settings.countdown_days + '</div></div> ' +
                        '<div class="hours"><span class="number">%H </span><div class="countdown-meta">' + mipro_settings.countdown_hours + '</div></div> ' +
                        '<div class="minutes"><span class="number">%M </span><div class="countdown-meta">' + mipro_settings.countdown_mins + '</div></div> ' +
                        '<div class="sec"><span class="number">%S </span><div class="countdown-meta">' + mipro_settings.countdown_sec + '</div></div>'));
                });
            });
        },

        ProductWgSlider: function() {
            $('.kft-product-items-widget.slider').each(function() {
                var element = $(this);
                var nav = element.data('nav') === 1;
                var autoplay = element.data('auto_play') === 1;
                var columns = element.data('columns');
                var margin = element.data('margin');

                element.addClass('owl-carousel').owlCarousel({
                    loop: true,
                    items: 1,
                    nav: nav,
                    navText: false,
                    dots: false,
                    slideBy: 1,
                    rtl: $('body').hasClass('rtl'),
                    columns: columns,
                    margin: margin,
                    autoplay: autoplay,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: columns
                        }
                    },
                    onInitialized: function() {
                        element.addClass('loaded').removeClass('loading');
                    }
                });
            });
        },

        RecentPostWg: function() {
            var element = $('.kft_recent_comments.is-slider, .kft_blog_widget.is-slider');
            var nav = element.data('nav') === 1;
            var autoplay = element.data('autoplay') === 1;

            element.addClass('owl-carousel').owlCarousel({
                loop: false,
                items: 1,
                margin: 10,
                nav: nav,
                navText: false,
                dots: false,
                slideBy: 1,
                rtl: $('body').hasClass('rtl'),
                autoplay: autoplay,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1
                    }
                },
                onInitialized: function() {
                    element.addClass('loaded').removeClass('loading');
                }
            });
        },

        WishlistAction: function() {
            $('body').on('click', '.add_to_wishlist', function() {
                $(this).parent().addClass('loading');
            });
            $('body').on('added_to_wishlist', function() {
                WishlistButton();
                $('.yith-wcwl-wishlistaddedbrowse.show, .yith-wcwl-wishlistexistsbrowse.show').closest('.yith-wcwl-add-to-wishlist').removeClass('loading').addClass('added');
            });
            var WishlistButton = function() {
                var wishlist = $('.header-wishlist');
                if (wishlist.length === 0) {
                    return;
                }

                wishlist.addClass('loading');
                $.ajax({
                    type: 'POST',
                    url: mipro_settings.ajax_uri,
                    data: { action: 'update_tini_wishlist' },
                    success: function(response) {
                        var first_icon = wishlist.children('i.fa:first');
                        wishlist.html(response);
                        if (first_icon.length > 0) {
                            wishlist.prepend(first_icon);
                        }
                        wishlist.removeClass('loading');
                    }
                });
            };

            $(document).on('click', '#yith-wcwl-form table tbody tr td a.remove, #yith-wcwl-form table tbody tr td a.add_to_cart_button', function() {
                var old_num_product = $('#yith-wcwl-form table tbody tr[id^="yith-wcwl-row"]').length;
                var count = 1;
                var time_interval = setInterval(function() {
                    count++;
                    var new_num_product = $('#yith-wcwl-form table tbody tr[id^="yith-wcwl-row"]').length;
                    if (old_num_product != new_num_product || count === 20) {
                        clearInterval(time_interval);
                        WishlistButton();
                    }
                }, 500);
            });
        },

        HideMessagePopup: function() {
            var wrapper = '#yith-wcwl-popup-message';
            $('body').on('click', wrapper, function() {
                $(wrapper).addClass('hidden-message');
            });
        },

        QuickviewAction: function() {
            $(document).on('click', '.quickview', function(e) {
                e.preventDefault();

                var id = $(this).data('id'),
                    prev = '',
                    next = '',
                    btn = $(this);
                btn.addClass('loading');

                $.ajax({
                    url: mipro_settings.ajax_uri,
                    data: {
                        id: id,
                        action: 'load_quickshop_content'
                    },
                    type: 'POST',
                    success: function(data) {
                        $.magnificPopup.open({
                            items: {
                                src: '<div class="quick-view-popup">' + data + '</div>',
                                type: 'inline'
                            },
                            tClose: '',
                            tLoading: '',
                            removalDelay: 500,
                            callbacks: {
                                beforeOpen: function() {
                                    this.st.mainClass = 'mfp-move-horizontal' + ' quick-view-wrapper woocommerce';
                                },
                                open: function() {
                                    $('.variations_form').each(function() {
                                        $(this).wc_variation_form().find('.variations select:eq(0)').trigger('change');
                                    });
                                    $('.variations_form').trigger('wc_variation_form');
                                }
                            },
                        });

                        var element = $('.kft-quickshop-wrapper .images-slider-wrapper');
                        if (element.find('.woocommerce-product-gallery__image').length <= 1) {
                            return;
                        }

                        var owl = element.find('.image-items').addClass('owl-carousel').owlCarousel({
                            items: 1,
                            loop: true,
                            nav: true,
                            navText: false,
                            dots: true,
                            slideBy: 1,
                            rtl: $('body').hasClass('rtl'),
                            margin: 0,
                            autoplay: false,
                            autoplayTimeout: 5000,
                            onInitialized: function() {
                                element.addClass('loaded').removeClass('loading');
                            }
                        });

                        var imgVariation = $('.kft-quickshop-wrapper .woocommerce-product-gallery__image.first img');
                        $('form.variations_form').on('show_variation', function(e, variation, purchasable) {
                            $('.kft-quickshop-wrapper .images-slider-wrapper > .image-items').trigger('to.owl.carousel', 0);

                            var image_src = variation.image.src;
                            if (!image_src) {
                                return;
                            }
                            if (typeof $.fn.wc_set_variation_attr === 'function') {
                                imgVariation.attr('srcset', '').wc_set_variation_attr('src', image_src);
                            }
                        });

                        $('form.variations_form').on('click', '.reset_variations', function() {
                            if (typeof $.fn.wc_reset_variation_attr === 'function') {
                                imgVariation.wc_reset_variation_attr('src');
                            }
                        });

                        MiproTheme.VariationsProduct();
                    },
                    complete: function() {
                        btn.removeClass('loading');
                    },
                    error: function() {},
                });
            });
        },

        AccordionProductTab: function() {
            if ($('.woocommerce-tabs.accordion-product-tabs').length > 0) {
                $('a.woocommerce-review-link').on('click', function() {
                    var reviews = $('#reviews').parents('.kc_accordion_section');
                    if (!reviews.hasClass('kc-section-active')) {
                        reviews.find('>h3.kc_accordion_header a').trigger('click');
                    }
                    $.scrollTo('.accordion-product-tabs', {
                        duration: 300,
                        offset: -150
                    });
                });
            }
        },

        HoverGalleryProduct: function() {
            $('body').on('mouseenter mouseleave', '.kft_thumb_list_hover', function() {
                $(this).closest('.kft-product').find('.images a img').attr('src', $(this).attr('data-hover'));
            });
        },

        AjaxSearch: function() {
            var results,
                form = $( '.kft_search_products' ),
                searchCache = new Array;

            if ( 'undefined' === typeof mipro_settings.kft_enable_ajax_search || 1 != mipro_settings.kft_enable_ajax_search ) {
                return;
            }

            $.xhrPool = [];
            $.xhrPool.abortAll = function() {
                $( this ).each( function( i, jqXHR ) {
                    jqXHR.abort();
                    $.xhrPool.splice( i, 1 );
                });
            };

            $( '.kft_search_products' ).append( '<div class="kft-live-search-results"></div>' );
            ( results = $( '.kft-live-search-results' ) ),
            form.on( 'keyup', 'input[type="text"]', function( e ) {
                var thisForm = $( this ).parents( '.searchform' ),
                    s = thisForm.find( 'input[type="text"]' ).val(),
                    cat = '',
                    selectCat = $( this ).parents( '.kft_search_products' ).siblings( '.select-category' );

                results.hide();

                if ( 2 > s.length ) {
                    form.removeClass( 'loading' );
                    return;
                }

                if ( 0 < selectCat.length && '0' != selectCat.find( ':selected' ).val() ) {
                    cat = selectCat.find( ':selected' ).val();
                }

                $.xhrPool.abortAll();

                if ( searchCache[s + cat] !== undefined ) {
                    results.html( searchCache[s + cat]).show();
                } else {
                    $.ajax({
                        url: mipro_settings.ajax_uri,
                        method: 'POST',
                        cache: true,
                        data: {
                            action: 'mipro_ajax_search',
                            security: mipro_settings.kft_ajax_search_nonce,
                            s: s,
                            cat: cat
                        },
                        dataType: 'json',
                        beforeSend: function( jqXHR ) {
                            $.xhrPool.push( jqXHR );

                            form.addClass( 'loading' );
                            results.hide();
                        },
                        complete: function( jqXHR ) {
                            var i = $.xhrPool.indexOf( jqXHR );
                            if ( -1 < i ) {
                                $.xhrPool.splice( i, 1 );
                            }

                            form.removeClass( 'loading' );
                            results.on( 'click', '.view-all a', function( e ) {
                                e.preventDefault();
                                form.find( '.search-submit' ).trigger( 'click' );
                            });
                        },
                        success: function( response ) {
                            searchCache[s + cat] = response.html;
                            results.html( response.html ).show();
                        },
                        error: function() { }
                    });
                }

                $( 'body' ).on( 'click', function( event ) {
                    if ( ! $( event.target ).is( '.search-form-wrapper' ) && $( event.target ).closest( '.search-form-wrapper' ).length ) {
                        return;
                    }
                    results.hide();
                });
            });

            $( '.search-form-wrapper' ).on( 'change', 'select.select-category', function() {
                $.xhrPool.abortAll();
                $( this ).parents( '.search-form-wrapper' ).find( '.kft_search_products input[type="text"]' ).trigger( 'keyup' );
            });
        },

        CounterUpShortcode: function() {
            $('.kft-counter .number').counterUp({
                delay: 10,
                time: 1000,
                formatter: function(n) {
                    return n.replace(/,/g, '.');
                }
            });
        },

        VideoLightbox: function() {
            $('a.kft-video-lightbox').magnificPopup({
                type: 'iframe',
                preloader: false,
                fixedContentPos: false
            });
        },

        SizeChartProductImg: function() {
            $('a.size-guide-btn').magnificPopup({
                type: 'image',
                closeOnContentClick: false,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: true
                },
                zoom: {
                    enable: true
                }
            });
        },

        GalleryImagesShortcode: function() {
            $('.lightbox.kft-images-shortcode a').parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                closeBtnInside: false,
                tLoading: '<div class="loading"></div>',
                removalDelay: 300,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    arrowMarkup: '<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>',
                    preload: [0, 1]
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    verticalFit: false
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });

            $('.layout-masonry.kft-images-shortcode').each(function() {
                if (typeof($.fn.isotope) === 'undefined' || typeof($.fn.imagesLoaded) == 'undefined') {
                    return;
                }
                var $container = $(this).find('.images-gallery');
                $container.imagesLoaded(function() {
                    $container.isotope({
                        gutter: 0,
                        isOriginLeft: !$('body').hasClass('rtl'),
                        itemSelector: '.images-gallery-item'
                    });
                });
            });

            $('.layout-slider.kft-images-shortcode').each(function() {
                var element = $(this);
                var margin = element.data('margin');
                var columns = element.data('columns');
                var nav = element.data('nav') === 1;
                var dots = element.data('dots') === 1;
                var autoplay = element.data('autoplay') === 1;
                var desksmini = element.data('desksmini');
                var tabletmini = element.data('tabletmini');
                var tablet = element.data('tablet');
                var mobile = element.data('mobile');
                var mobilesmini = element.data('mobilesmini');
                var _slider_data = {
                    loop: false,
                    nav: nav,
                    dots: dots,
                    slideBy: 1,
                    navText: false,
                    navRewind: false,
                    rtl: $('body').hasClass('rtl'),
                    margin: margin,
                    autoplay: autoplay,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: mobilesmini
                        },
                        480: {
                            items: mobile
                        },
                        640: {
                            items: tabletmini
                        },
                        768: {
                            items: tablet
                        },
                        991: {
                            items: desksmini
                        },
                        1199: {
                            items: columns
                        }
                    }
                };
                element.find('.images-gallery').addClass('owl-carousel').owlCarousel(_slider_data);
            });
        },

        BackgroundPrlx: function() {
            if ($(window).width() <= 1024) {
                return;
            }
            $('.kft-prlx-background').each(function() {
                $(this).parallax('50%', 0.3);
            });
        },

        MegaMenuSetting: function() {
            var mainMenu = $( '.main-navigation' ).find( 'ul.menu' ),
                activeMega = mainMenu.find( ' > li.menu-item-sized, li.menu-item-full-width' );
            var setOffset = function( li ) {
                var dropdown = li.find( ' > .sub-menu-dropdown' ),
                    siteWrapper = $( '#wrapper' );

                var submenuWidth = dropdown.outerWidth(),
                    submenuOffset = dropdown.offset(),
                    windowWidth = $( window ).width(),
                    bodyRight = siteWrapper.outerWidth() + siteWrapper.offset().left,
                    viewportWidth = $( 'body' ).hasClass( 'wrapper-layout-boxed' ) ? bodyRight : windowWidth,
                    extraSpace = li.hasClass( 'menu-item-full-width' ) ? 0 : 10;

                    if( ! submenuWidth || ! submenuOffset ) return;

                var submenuOffsetRight = windowWidth - submenuOffset.left - submenuWidth;
                var toLeft = submenuOffsetRight + submenuWidth - viewportWidth;
                var toRight = submenuOffset.left + submenuWidth - viewportWidth;

                dropdown.attr( 'style', '' );

                if ( $( 'body' ).hasClass( 'rtl' ) && submenuOffsetRight + submenuWidth >= viewportWidth && ( li.hasClass( 'menu-item-sized' ) || li.hasClass( 'menu-item-full-width' ) ) ) {
                    dropdown.css({
                        right: -toLeft - extraSpace
                    });
                } else if ( submenuOffset.left + submenuWidth >= viewportWidth && ( li.hasClass( 'menu-item-sized' ) || li.hasClass( 'menu-item-full-width' ) ) ) {
                    dropdown.css({
                        left: -toRight - extraSpace
                    });
                }
            };

            mainMenu.on( 'mouseenter mouseleave', ' > li.menu-item-sized, li.menu-item-full-width', function( e ) {
                setOffset( $( this ) );
            });

            activeMega.each( function() {
                setOffset( $( this ) );
            });
        },

        MobileNavigation: function() {
            $('.kft-mobile-navigation .menu-item-has-children').append('<span class="sub-menu-icon"></span>');
            $('.kft-mobile-navigation').on('click', '.sub-menu-icon', function(e) {
                e.preventDefault();

                if ($(this).parent().hasClass('active')) {
                    $(this).parent().removeClass('active').find('> ul').slideUp(200);
                    $(this).parent().removeClass('active').find('.sub-menu-dropdown .container > ul, .sub-menu-dropdown > ul').slideUp(200);
                    $(this).parent().find('> .icon-sub-menu').removeClass('up-icon');
                } else {
                    $(this).parent().addClass('active').find('> ul').slideDown(200);
                    $(this).parent().addClass('active').find('.sub-menu-dropdown .container > ul, .sub-menu-dropdown > ul').slideDown(200);
                    $(this).parent().find(' > .icon-sub-menu').addClass('up-icon');
                }
            });
            $('body').on('click', '.mobile-nav > a', function(e) {
                e.preventDefault();
                if ($('body').hasClass('has-mobile-menu')) {
                    $('body').removeClass('has-mobile-menu');
                } else {
                    $('body').addClass('has-mobile-menu');
                }
            });
            $('body').on('click touchstart', '.kft-close-popup', function() {
                $('body').removeClass('has-mobile-menu');
            });
        },

        HeaderSticky: function() {
            if ($('body').hasClass('has_sticky_header')) {
                var headerSticky = $('.sticky-header'),
                    headerHeight = $('.site-header').outerHeight() + 100;

                $(window).on('scroll', function() {
                    if ($(this).scrollTop() > headerHeight) {
                        headerSticky.addClass('is-sticky');
                    } else {
                        headerSticky.removeClass('is-sticky');
                    }
                });
            }
        },

        PopupNewletter: function() {

            if (typeof mipro_settings.kft_enable_popup === 'undefined' || mipro_settings.kft_enable_popup != 1 || $(window).width() < 768) {
                return;
            }
            var show = false;

            if ($.cookie('mipro_popup_show') != 'show') {
                if (mipro_settings.kft_popup_event === 'scroll') {
                    $(window).on('scroll', function() {
                        if (show) {
                            return false;
                        }
                        if ($(document).scrollTop() >= mipro_settings.kft_popup_scroll) {
                            showPopup();
                            show = true;
                        }
                    });
                } else {
                    setTimeout(function() {
                        showPopup();
                    }, mipro_settings.kft_popup_timeout);
                }
            }

            var showPopup = function() {
                $.magnificPopup.open({
                    items: {
                        src: '.kft-popup'
                    },
                    type: 'inline',
                    removalDelay: 500,
                    callbacks: {
                        beforeOpen: function() {
                            this.st.mainClass = 'mfp-move-horizontal' + ' promo-popup-wrapper';
                        },
                        open: function() {},
                        close: function() {
                            $.cookie('mipro_popup_show', 'show', { expires: 7, path: '/' });
                        }
                    }
                });
            };
        },

        Backtotop: function() {
            if ($('.back-to-top').length > 0) {
                $(window).on('scroll', function() {
                    if ($(this).scrollTop() > 100) {
                        $('.back-to-top').addClass('show');
                    } else {
                        $('.back-to-top').removeClass('show');
                    }
                });
                $('.back-to-top').on('click', '.scroll-button', function() {
                    $('body, html').animate({
                        scrollTop: '0px'
                    }, 800);
                    return false;
                });
            }
        },

        BannerPrlxShortcode: function() {
            $('.has-hover.image-hover-parallax .image').panr({
                sensitivity: 20,
                scale: false,
                scaleOnHover: true,
                scaleTo: 1.12,
                scaleDuration: 0.34,
                panY: true,
                panX: true,
                panDuration: 0.5,
                resetPanOnMouseLeave: true
            });
        },

        ShopSidebar: function() {
            $('body').on('click', '.kft-show-sidebar-button', function(e) {
                e.preventDefault();
                if ($('.shop-sidebar').hasClass('show-hidden-sidebar')) {
                    hideSidebar();
                } else {
                    showSidebar();
                }
            });
            $('body').on('click touchstart', '.kft-close-popup, .close-sidebar', function() {
                hideSidebar();
            });
            var showSidebar = function() {
                $('.shop-sidebar').addClass('show-hidden-sidebar');
                $('body').addClass('show-shop-sidebar');
                $('.kft-show-sidebar-button').addClass('shown');
            };
            var hideSidebar = function() {
                $('.kft-show-sidebar-button').removeClass('shown');
                $('.shop-sidebar').removeClass('show-hidden-sidebar');
                $('body').removeClass('show-shop-sidebar');
            };
        },

        ShopFilters: function() {
            $('body').on('click', '.kft-filters-button', function(e) {
                e.preventDefault();
                if ($('.kft-filters-content').hasClass('show-filter-content')) {
                    hideSidebar();
                } else {
                    showSidebar();
                }
            });
            $('body').on('click touchstart', '.kft-close-popup, .close-sidebar', function() {
                hideSidebar();
            });
            var showSidebar = function() {
                $('body').addClass('show-filter');
                $('.kft-filters-content').addClass('show-filter-content');
                $('.kft-filters-button').addClass('shown');
            };
            var hideSidebar = function() {
                $('.kft-filters-button').removeClass('shown');
                $('.kft-filters-content').removeClass('show-filter-content');
                $('body').removeClass('show-filter');
            };
        },

        loginSidebar: function() {
            var body = $('body');
            $('.login-canvas').on('click', '.login', function(e) {
                e.preventDefault();
                if (isOpened()) {
                    hideLogin();
                } else {
                    setTimeout(function() {
                        showLogin();
                    }, 10);
                }
            });

            body.on('click touchstart', '.kft-close-popup, .login-close', function() {
                if (isOpened()) {
                    hideLogin();
                }
            });

            var hideLogin = function() {
                body.removeClass('has-login-form');
            };

            var showLogin = function() {
                if ($('body').hasClass('woocommerce-account')) {
                    return false;
                }
                body.addClass('has-login-form');
            };

            var isOpened = function() {
                return body.hasClass('has-login-form');
            };
        },

        CartSidebar: function() {
            var body = $('body');
            $('.cart-canvas').on('click', '.kft_cart', function(e) {
                e.preventDefault();
                if (isOpened()) {
                    hideCartSidebar();
                } else {
                    setTimeout(function() {
                        showCartSidebar();
                    }, 10);
                }
            });

            body.on('click', '.added-to-cart-message', function(e) {
                $('.added-to-cart-message').hide();
                $('.cart-canvas').find('.kft_cart').trigger('click');
                e.preventDefault();
            });

            body.on('click touchstart', '.kft-close-popup, .close-cart', function() {
                if (isOpened()) {
                    hideCartSidebar();
                }
            });

            var hideCartSidebar = function() {
                body.removeClass('has-cart-sidebar');
            };

            var showCartSidebar = function() {
                if (body.hasClass('woocommerce-checkout') || body.hasClass('woocommerce-cart')) {
                    return false;
                }
                body.addClass('has-cart-sidebar');
            };

            var isOpened = function() {
                return body.hasClass('has-cart-sidebar');
            };
        },

        CatMasonryShot: function() {
            var element = $('.kft-product-categories-shortcode.layout-masonry'),
                is_masonry = false;
            if (typeof $.fn.isotope === 'function' && typeof($.fn.imagesLoaded) === 'function') {
                is_masonry = true;
            }

            if (is_masonry) {
                $(window).on('load', function() {
                    var $container = element.find('.meta-slider > .products');
                    $container.imagesLoaded(function() {
                        $container.isotope();
                    });
                });
            }
        },

        MessageAddtoCart: function() {
            var src,
                title,
                message = false;

            $('body').on('click', '.ajax_add_to_cart', function() {
                $('.woocommerce-message').remove();
                if ($('body').hasClass('woocommerce-wishlist')) {
                    src = $(this).parents('tr').find('img.attachment-woocommerce_thumbnail').attr('src');
                    title = $(this).parents('tr').find('.product-name').html();
                } else {
                    src = $(this).parents('div.kft-product').find('img.attachment-woocommerce_thumbnail').attr('src');
                    title = $(this).parents('div.kft-product').find('.product-title').html();
                }

                if (typeof src !== 'undefined' && typeof title !== 'undefined') {
                    message = '<div class="added-to-cart-message"><div class="product_message_wrapper"><div class="product_message_image"><img src="' + src + '" alt></div><div class="product_notification_text">' + title + mipro_settings.cart_message + '</div></div></div>';
                }
            });

            $(document).on('added_to_cart', function(event, data) {
                if (message !== false) {
                    $('body').prepend(message);
                }
            });
        },

        StickyProduct: function() {
            if ($(window).width() <= 1024) {
                return;
            }
            var productSticky = $('.mipro_product_sticky');
            $('.product-single-wrapper').waypoint({
                handler: function(d) {
                    productSticky.toggleClass('shown', d === 'down');
                }
            });

            productSticky.on('click', '.kft-add-to-cart a:not(".ajax_add_to_cart, .added_to_cart")', function(e) {
                e.preventDefault();
                $.scrollTo('.product-single-wrapper', {
                    duration: 300,
                    offset: -150
                });
            });
        },

        LazyLoading: function() {
            $('img.lazyload').Lazy();
        },

        ColorSwatches: function() {
            $('body').on('click', '.color-swatch', function() {
                var src, srcset,
                    imageSrc = $(this).data('src'),
                    imageSrcset = $(this).data('srcset'),
                    product = $(this).parents('.kft-product'),
                    image = product.find('.images > a > img'),
                    currentSrc = image.data('current-src'),
                    currentSrcset = image.data('current-srcset');

                if (typeof imageSrc === 'undefined') {
                    return;
                }

                if (typeof currentSrc === 'undefined') {
                    currentSrc = image.data('current-src', image.attr('src'));
                }

                if (typeof currentSrcset === 'undefined') {
                    if (typeof image.attr('srcset') === 'undefined') {
                        currentSrcset = image.data('current-srcset', '');
                    } else {
                        currentSrcset = image.data('current-srcset', image.attr('srcset'));
                    }
                }

                if ($(this).hasClass('chosen')) {
                    src = currentSrc;
                    srcset = currentSrcset;
                    $(this).removeClass('chosen');
                } else {
                    $(this).parent().find('.chosen').removeClass('chosen');
                    src = imageSrc;
                    srcset = imageSrcset;
                    $(this).addClass('chosen');
                }

                if (image.attr('src') === src) {
                    return;
                }

                image.attr('src', src).attr('srcset', srcset);

            });
        },

        CookieNotice: function() {
            if (typeof mipro_settings.kft_cookie_notice === 'undefined' || mipro_settings.kft_cookie_notice != 1) {
                return;
            }
            if ($.cookie('mipro_show_cookie') == '1') {
                return;
            }
            var body = $('body'),
                cookiePopup = $('.mipro-cookie-notice'),
                expiry = parseInt(mipro_settings.kft_cookie_expiry);

            setTimeout(function() {
                body.addClass('cookie-show');
                cookiePopup.on('click', '.cookie-accept', function(e) {
                    e.preventDefault();
                    body.removeClass('cookie-show');
                    $.cookie('mipro_show_cookie', '1', { expires: expiry, path: '/' });
                });
            }, 2000);
        },

        ProductVideo360: function() {
            $('.product-360-btn a').magnificPopup({
                type: 'inline',
                mainClass: 'product-360-wrap',
                preloader: false,
                fixedContentPos: false,
                callbacks: {
                    open: function() {
                        $(window).resize()
                    },
                },
            });
        },

        infiniteProduct: function() {
            var container = $('.archive .woocommerce > .products'),
                paginationNext = '.woocommerce-pagination li a.next';
            if (container.length === 0 || $(paginationNext).length === 0) {
                return;
            }
            if (mipro_settings.kft_shop_pagination === 'pagination') {
                return;
            }
            var loadMore = $('.mipro-products-load-more');
            var loadProduct = container.infiniteScroll({
                path: paginationNext,
                append: '.product',
                checkLastPage: true,
                status: '.page-load-status',
                hideNav: '.woocommerce-pagination',
                button: '.mipro-products-load-more',
                history: 'push',
                debug: false,
                scrollThreshold: 400
            });

            if (mipro_settings.kft_shop_pagination === 'loadmore') {
                loadMore.removeClass('hidden');
                loadProduct.infiniteScroll('option', {
                    scrollThreshold: false,
                    loadOnScroll: false
                });
            }

            if (mipro_settings.kft_shop_pagination === 'infinit') {
                loadProduct.infiniteScroll('option', {
                    scrollThreshold: true,
                    loadOnScroll: true
                });
            }

            loadProduct.on('request.infiniteScroll', function(event, path) {
                if (loadMore) {
                    loadMore.addClass('loading');
                }
            });

            loadProduct.on('append.infiniteScroll', function(event, response, path, items) {
                if (loadMore) {
                    loadMore.removeClass('loading');
                }
                $(items).find('img').each(function(index, img) {
                    img.outerHTML = img.outerHTML
                });
                MiproTheme.BootrapTooltip();
                MiproTheme.LazyLoading();
            });
        },

        GridListShop: function() {
            if (typeof $.cookie == 'function') {
                if ($.cookie('mipro_grid_list')) {
                    $('.shop-content div.products').addClass($.cookie('mipro_grid_list'));
                    $('.grid_list_nav a').removeClass('active');
                    $('.grid_list_nav #' + $.cookie('mipro_grid_list')).addClass('active');
                } else {
                    $('.shop-content div.products').addClass(mipro_settings.kft_grid_list);
                    $('.grid_list_nav #' + mipro_settings.kft_grid_list).addClass('active');
                }

                $('#grid, #list').on('click', function() {
                    if ($(this).hasClass('active')) {
                        return;
                    }

                    var id = $(this).attr('id'),
                        currentClass = (id == 'grid') ? 'list' : 'grid';

                    $('#grid, #list').removeClass('active');
                    $(this).addClass('active');

                    $.cookie('mipro_grid_list', id, { path: '/' });
                    $('.shop-content div.products').fadeOut(300, function() {
                        $(this).removeClass(currentClass).addClass(id).fadeIn(300);
                    });
                });

                $('.grid_list_nav a').on('click', function(e) {
                    e.preventDefault();
                });
            }
        },

        AjaxShop: function() {
            if (!$('body').hasClass('is_ajax_shop') || typeof($.fn.pjax) == 'undefined') {
                return;
            }
            var that = this,
                body = $('body'),
                ajaxLinks = 'a.kft-per-page-options, .widget_product_categories a, .product-categories-wg a, .product-filter-by-color a, .mipro-active-filters a, .woocommerce-pagination a, .widget_layered_nav_filters a, .widget_layered_nav a, .widget_product_tag_cloud a';

            var scrollToTop = function() {
                $.scrollTo('.site-main', {
                    duration: 400,
                    offset: -80
                });
            };

            $(document).pjax(ajaxLinks, '.site-main', {
                timeout: 6000,
                scrollTo: false,
                fragment: '.site-main'
            });

            $(document).on('click', '.widget_price_filter form .button', function() {
                var form = $('.widget_price_filter form');
                $.pjax({
                    container: '.site-main',
                    fragment: '.site-main',
                    timeout: 5000,
                    url: form.attr('action'),
                    data: form.serialize(),
                    scrollTo: false
                });

                return false;
            });

            $(document).on('pjax:start', function(xhr, options) {
                body.addClass('shop-loading');
                scrollToTop();
            });

            $(document).on('pjax:complete', function(xhr, textStatus, options) {
                that.BootrapTooltip();
                that.CountdownTimer();
                that.LazyLoading();
                that.wooPriceSlider();
                that.GridListShop();
                that.infiniteProduct();
                that.ProductWgSlider();
                that.OrderByWoo();

                body.removeClass('shop-loading');
                body.removeClass('show-filter');
                body.removeClass('show-shop-sidebar');
            });

            $(document).on('pjax:end', function(xhr, textStatus, options) {
                body.removeClass('shop-loading');
            });

            $(document).on('pjax:error', function(xhr, textStatus, error, options) {
                console.log('pjax error ' + error);
            });

            $(document).on('yith-wcan-ajax-loading', function() {
                if ($('.yit-wcan-container').length) {
                    scrollToTop();
                }
            });
        },

        OrderByWoo: function() {
            $('form.woocommerce-ordering ul.orderby ul a').on('click', function(e) {
                e.preventDefault();
                if ($(this).hasClass('current')) {
                    return;
                }

                var $form = $('form.woocommerce-ordering');

                $(this).closest($form).find('select.orderby').val($(this).attr('data-orderby'));

                if (!$('body').hasClass('is_ajax_shop') || typeof($.fn.pjax) == 'undefined') {
                    $(this).closest('form.woocommerce-ordering').trigger('submit');
                } else {
                    $form.find('[name="_pjax"]').remove();

                    $.pjax({
                        container: '.site-main',
                        fragment: '.site-main',
                        timeout: 5000,
                        data: $form.serialize(),
                        scrollTo: false
                    });
                }
            });
        },

        wooPriceSlider: function() {
            if (typeof woocommerce_price_slider_params === 'undefined' || !$.fn.slider) {
                return false;
            }

            $('input#min_price, input#max_price').hide();
            $('.price_slider, .price_label').show();

            var $products = $('.products'),
                min_price = $('.price_slider_amount #min_price').data('min'),
                max_price = $('.price_slider_amount #max_price').data('max'),
                current_min_price = parseInt(min_price, 10),
                current_max_price = parseInt(max_price, 10);

            if ($products.attr('data-min_price') && $products.attr('data-min_price').length) {
                current_min_price = parseInt($products.attr('data-min_price'), 10);
            }
            if ($products.attr('data-max_price') && $products.attr('data-max_price').length) {
                current_max_price = parseInt($products.attr('data-max_price'), 10);
            }

            $('.price_slider').slider({
                range: true,
                animate: true,
                min: min_price,
                max: max_price,
                values: [current_min_price, current_max_price, ],
                create: function() {

                    $('.price_slider_amount #min_price').val(current_min_price);
                    $('.price_slider_amount #max_price').val(current_max_price);

                    $(document.body).trigger('price_slider_create', [current_min_price, current_max_price, ]);
                },
                slide: function(event, ui) {

                    $('input#min_price').val(ui.values[0]);
                    $('input#max_price').val(ui.values[1]);

                    $(document.body).trigger('price_slider_slide', [ui.values[0], ui.values[1], ]);
                },
                change: function(event, ui) {

                    $(document.body).trigger('price_slider_change', [ui.values[0], ui.values[1], ]);
                },
            });

            setTimeout(function() {
                $(document.body).trigger('price_slider_create', [current_min_price, current_max_price, ]);
            }, 10);
        },

        preloadJs: function() {
            var loaded = $( '.kft-preload-wrapper' );

            if ( loaded.length ) {
                loaded.css( {
                    'opacity':'0',
                    'visibility':'hidden',
                } );
            } 
            
            $('body').css('opacity', '1');
        },

    };
    
    $(document).ready(function() {
        MiproTheme.init();
    });

})(jQuery);