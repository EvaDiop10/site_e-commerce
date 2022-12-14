<?php
/**
 * Options when Redux is not installed
 * (c) Joyce
 */

class Mipro_Default_Options {

    function __construct() {

        if ( ! class_exists('ReduxFramework') ) {
            $this->_load_default_options();
        }
    }

    /** Load default options if redux is not installed * */
    function _load_default_options() {
        global $mipro_opt;
        
        $mipro_opt = array(
            'kft_layout' => 'full-width',
            'kft_status_opengraph' => false,
            'kft_gmap_api_key' => '',
            'kft_back_to_top_button' => false,
            'kft_back_to_top_button_on_mobile' => false,
            'kft_logo' => array(
                'url' => get_parent_theme_file_uri( '/assets/images/logo.svg' ),
            ),
            'kft_logo_sticky' => array(
                'url' => get_parent_theme_file_uri( '/assets/images/logo.svg' ),
            ),
            'kft_logo_img_width' => '250',
            'kft_favicon' => array(
                'url' => get_parent_theme_file_uri( '/assets/images/icon.png' ),
            ),
            'kft_favicon_retina' => array(
                'url' => get_parent_theme_file_uri( '/assets/images/icon.png' ),
            ),
            'kft_page_title' => 1,
            'kft_page_title_fontsize' => '30px',
            'kft_breadcrumbs' => 1,
            'kft_breadcrumbs_height' => '300px',
            'kft_breadcrumbs_mobile_height' => '200px',
            'kft_breadcrumb_layout' => 'layout1',
            'kft_bg_breadcrumbs' => array(
                'background-image' => '',
            ),
            'kft_enable_popup' => 0,
            'kft_enable_custom_404_page' => 0,
            'kft_header_layout' => 'layout1',
            'kft_header_mobile_layout' => 'center',
            'kft_enable_sticky_header' => 1,
            'kft_enable_search_sticky' => 0,
            'kft_header_top_bar' => 1,
            'kft-top-bar-color' => '#999',
            'kft-top-bar-bg' => array(
                'rgba' => 'rgb(255, 255, 255)',
            ),
            'kft_header_contact_information' => '',
            'kft_middle_header_content' => '',
            'kft_header_currency' => 0,
            'kft_header_language' => 0,
            'kft_enable_tiny_shopping_cart' => 1,
            'kft_tiny_cart_style' => 'dropdown',
            'kft_enable_search' => 1,
            'kft_ajax_search' => 0,
            'kft_ajax_search_number_result' => 3,
            'kft_enable_tiny_account' => 0,
            'kft_login_style' => 'dropdown',
            'kft_enable_tiny_wishlist' => 1,
            'kft_primary_color' => '#ed9c3d',
            'kft_secondary_color' => '#444',
            'kft_body_background_color' => '#ffffff',
            'kft_title_font' => array(
                'color' => "#000000",
                'google' => true,
                'font-family' => 'Poppins',
                'font-weight' => '600',
            ),
            'kft_title_font_weight' => '600',
            'kft_body_font' => array(
                'color' => "#000000",
                'google' => true,
                'font-family' => 'Lato',
            ),
            'kft_font_size_body' => '14',
            'kft_line_height_body' => '24',
            'kft_effect_hover_product_style' => 'style-1',
            'kft_effect_product' => '1',
            'kft_effect_hover_product_img' => 'zoom-long',
            'kft_product_gallery_number' => 3,
            'kft_enable_quickshop' => '1',
            'kft_enable_lazyload_product' => 0,
            'kft_enable_catalog_mode' => '0',
            'kft_product_sale_percentage' => 0,
            'kft_product_feature_label' => 1,
            'kft_product_out_of_stock_label' => 1,
            'kft_prod_cat_layout' => 'full-width',
            'kft_prod_cat_left_sidebar' => 'product-category-sidebar',
            'kft_prod_cat_right_sidebar' => 'product-category-sidebar',
            'kft_show_sidebar_button' => 1,
            'kft_show_filters_area' => 0,
            'kft_prod_cat_columns' => '3',
            'kft_prod_per_page' => 9,
            'kft_per_page_options' => '12,24,36,-1',
            'kft_shop_pagination' => 'pagination',
            'kft_enable_color_swatches' => 0,
            'kft_enable_grid_list' => 1,
            'kft_grid_list_default' => 'grid',
            'kft_prod_cat_thumbnail' => 1,
            'kft_prod_cat_label' => 1,
            'kft_prod_cat_cat' => 0,
            'kft_prod_cat_title' => 1,
            'kft_prod_cat_sku' => 0,
            'kft_prod_cat_rating' => 1,
            'kft_prod_cat_price' => 1,
            'kft_prod_cat_add_to_cart' => 1,
            'kft_prod_cat_grid_desc' => 0,
            'kft_prod_cat_grid_desc_words' => 8,
            'kft_prod_cat_list_desc' => 1,
            'kft_prod_cat_list_desc_words' => 50,
            'kft_prod_layout' => 'full-width',
            'kft_prod_left_sidebar' => 'product-detail-sidebar',
            'kft_prod_right_sidebar' => 'product-detail-sidebar',
            'kft_product_zoom' => 1,
            'kft_product_lightbox' => 0,
            'kft_product_zoom_button' => 0,
            'kft_ajax_shop' => 0,
            'kft_prod_variation_swatches' => 1,
            'kft_prod_thumbnail' => 1,
            'kft_prod_label' => 0,
            'kft_show_prod_navigation' => 0,
            'kft_prod_title' => 1,
            'kft_prod_title_in_content' => 0,
            'kft_prod_rating' => 1,
            'kft_prod_sku' => 0,
            'kft_prod_availability' => 1,
            'kft_prod_excerpt' => 1,
            'kft_prod_count_down' => 1,
            'kft_prod_price' => 1,
            'kft_prod_add_to_cart' => 1,
            'kft_prod_cat' => 1,
            'kft_prod_tag' => 0,
            'kft_prod_sharing' => 0,
            'kft_show_prod_size_chart' => 0,
            'kft_prod_size_chart' => array( 'url' => get_parent_theme_file_uri( '/assets/images/size-chart.jpg' ) ),
            'kft_prod_thumbnails_style' => 'horizontal',
            'kft_product_sticky_bar' => 0,
            'kft_prod_tabs' => 1,
            'kft_prod_style_tabs' => 'default',
            'kft_prod_tabs_position' => 'after_summary',
            'kft_prod_custom_tab' => 0,
            'kft_prod_custom_tab_title' => 'Custom Tab',
            'kft_prod_custom_tab_content' => '',
            'kft_prod_ads_banner' => 0,
            'kft_prod_ads_banner_content' => '',
            'kft_prod_upsells' => 0,
            'kft_prod_related' => 1,
            'kft_blog_layout' => 'right-sidebar',
            'kft_blog_left_sidebar' => 'blog-sidebar',
            'kft_blog_right_sidebar' => 'blog-sidebar',
            'kft_blog_thumbnail' => 1,
            'kft_blog_lazyload' => 0,
            'kft_blog_date' => 1,
            'kft_blog_title' => 1,
            'kft_blog_author' => 0,
            'kft_blog_comment' => 0,
            'kft_blog_count_view' => 0,
            'kft_blog_read_more' => 1,
            'kft_blog_categories' => 1,
            'kft_blog_tags' => 1,
            'kft_blog_excerpt' => 1,
            'kft_blog_excerpt_strip_tags' => 0,
            'kft_blog_excerpt_max_words' => -1,
            'kft_blog_details_layout' => 'right-sidebar',
            'kft_blog_details_left_sidebar' => 'blog-detail-sidebar',
            'kft_blog_details_right_sidebar' => 'blog-detail-sidebar',
            'kft_blog_details_thumbnail' => 1,
            'kft_blog_details_date' => 1,
            'kft_blog_details_title' => 1,
            'kft_blog_details_title' => 1,
            'kft_blog_details_content' => 1,
            'kft_blog_details_tags' => 1,
            'kft_blog_details_sharing' => 0,
            'kft_blog_details_navigation' => 0,
            'kft_blog_details_count_view' => 0,
            'kft_blog_details_categories' => 1,
            'kft_blog_details_author_box' => 0,
            'kft_blog_details_related_posts' => 0,
            'kft_blog_details_comment_form' => 1,
            'kft_maintenance_mode' => 0,
            'kft_social_button' => 0,
            'kft_social_button_mobile' => 1,
            'kft_cookie_notice' => 0,
            'instagram_user_id' => '',
            'instagram_access_token' => '',
        );
    }
}
new Mipro_Default_Options();

/* Function to get option from Redux Framework */
function mipro_get_opt( $slug = '' ) {
    global $mipro_opt;

    return isset( $mipro_opt[$slug] ) ? $mipro_opt[$slug] : '';
}
