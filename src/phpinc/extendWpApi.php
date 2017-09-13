<?php

$classes = array(
	get_template_directory() . "/phplib/menus.php",
	get_template_directory() . "/phplib/details.php",
	get_template_directory() . "/phplib/page.php"
);

foreach($classes as $class) {

	if ( file_exists( $class ) ) {

		require_once( $class );

	}

}

$Menus_Endpoint = new Menus_Endpoint();
$Menus_Endpoint->init();

$Details_Endpoint = new Details_Endpoint();
$Details_Endpoint->init();

$Custom_Page_Endpoint = new Custom_Page_Endpoint();
$Custom_Page_Endpoint->init();