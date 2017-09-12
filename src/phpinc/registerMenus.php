<?php

add_theme_support( 'menus' );

function register_my_menus() {
  register_nav_menus(
    array(
      'main-menu' => __( 'Main menu' ),
      'top-menu' => __( 'Top menu' )
    )
  );
}

add_action( 'init', 'register_my_menus' );