<?php
/**
 * Show options for ordering
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.6.0
 */

defined( 'ABSPATH' ) || exit;
?>

<form class="woocommerce-ordering" method="get">
	<select name="orderby" class="orderby" style="display: none;">
		<?php foreach ( $catalog_orderby_options as $id => $name ) : ?>
			<option value="<?php echo esc_attr( $id ); ?>" <?php selected( $orderby, $id ); ?>><?php echo esc_html( $name ); ?></option>
		<?php endforeach; ?>
	</select>
	<ul class="orderby">
		<li><span class="orderby-current"><?php echo esc_html( $catalog_orderby_options[$orderby] ); ?></span>
			<ul class="dropdown">
				<?php foreach ( $catalog_orderby_options as $id => $name ) : ?>
					<li><a href="#" data-orderby="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( ( $orderby == $id ) ? 'current' : '' ); ?>"><?php echo esc_html( $name ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		</li>
	</ul>
	<?php wc_query_string_form_fields( null, array( 'orderby', 'submit', 'paged' ) ); ?>
</form>
