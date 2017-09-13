<?php
/**
 * WP REST API Detail routes
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Custom_Page_Endpoint' ) ) :

	/**
	 * WP REST Menus class.
	 *
	 * WP API Menus support for WP API v2.
	 *
	 * @package WP_API_Menus
	 * @since 1.2.0
	 */
	class Custom_Page_Endpoint {

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

			register_rest_route( self::get_plugin_namespace(), '/get/page/(?P<slug>[a-zA-Z0-9_-]+)', array(
				array(
					'methods'  => WP_REST_Server::READABLE,
					'callback' => array( $this, 'get_page' ),
				)
			) );
		}


		/**
		 * Get details.
		 *
		 * @since  1.2.0
		 * @return array All registered details
		 */
		public static function get_page( $request ) {

			$params = $request->get_params();
			$slug = $params['slug'];

			// Shortcode pattern
			$pattern = get_shortcode_regex();

			$page = get_page_by_path($slug);

			$output = array();

			if (isset($page)) {

				$post = get_post( $page->ID );
				$post->post_content = nl2br(do_shortcode($post->post_content));

				$output[] = $post;
			}

			return json_encode( $output );
		}
	}


endif;