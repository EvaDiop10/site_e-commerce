<?php
function mipro_child_enqueue_styles() {
    wp_enqueue_style( 'mipro-style' , get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'mipro-child-style', get_stylesheet_directory_uri() . '/style.css', array( 'mipro-style' ) );
}
add_action(  'wp_enqueue_scripts', 'mipro_child_enqueue_styles' );