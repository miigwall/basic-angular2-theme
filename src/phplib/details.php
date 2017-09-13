<?php
/**
 * WP REST API Detail routes
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Details_Endpoint' ) ) :

	/**
	 * WP REST Menus class.
	 *
	 * WP API Menus support for WP API v2.
	 *
	 * @package WP_API_Menus
	 * @since 1.2.0
	 */
	class Details_Endpoint {

		function init() {
			add_filter( 'rest_api_init', [ $this, 'register_routes' ] );
		}


		/**
		 * Get WP API namespace.
		 *
		 * @since 1.2.0
		 * @return string
		 */
		public static function get_api_namespace() {
			return 'wp/v2';
		}


		/**
		 * Get WP API Menus namespace.
		 *
		 * @since 1.2.1
		 * @return string
		 */
		public static function get_plugin_namespace() {
			return 'basic-angular2-theme/v1';
		}


		/**
		 * Register menu routes for WP API v2.
		 *
		 * @since  1.2.0
		 */
		public function register_routes() {

			register_rest_route( self::get_plugin_namespace(), '/details', array(
				array(
					'methods'  => WP_REST_Server::READABLE,
					'callback' => array( $this, 'get_details' ),
				)
			) );
		}


		/**
		 * Get details.
		 *
		 * @since  1.2.0
		 * @return array All registered details
		 */
		public static function get_details() {

			$rest_url = trailingslashit( get_rest_url() . self::get_plugin_namespace() . '/details/' );
			
			$details = array(
				'name' => get_bloginfo('name'),
				'description' => get_bloginfo('description'),
				'language' => get_bloginfo('language')
			);

			return json_encode($details);
		}
	}


endif;