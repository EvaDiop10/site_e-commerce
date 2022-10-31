<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'kawsara_shoes' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!vNF`A,SD|GLJeN$:KkL!r0%`IPy`);Qw^v^T$|yFL6.4Cuy4uv5QPTqb>%da7B3' );
define( 'SECURE_AUTH_KEY',  'COpuxd`ZYPPfvMF(F]+a}2ZP?lU4dDIBGW.|5MzeSGfQi11b4Pd6J~9~1zV%`N-g' );
define( 'LOGGED_IN_KEY',    '>s.rL~%k.?{HhgbB}yG@;Jmz#r[^xPm<@)b+!n.]I.woygiAzL0YC?XrE^6vNtX>' );
define( 'NONCE_KEY',        ',0@HJ9Ab81wW,{N/R}@t@#n/AGf+A ?VyFU$I-sFPU4&LYaqfMYG1DZYr@$QEg*|' );
define( 'AUTH_SALT',        '6Tw#;*5v!t|dqw{5A|, sq|kwU-I]{W==s[o9ccyvZ)]&e|ujqJ~ma`F`6YzBlb|' );
define( 'SECURE_AUTH_SALT', '=^GHfn{R(+]/ T2 fA1?.+|zTmuzq,H}O9{YM9n6QuRF?wdu9N:,N&}LU+:&}fUb' );
define( 'LOGGED_IN_SALT',   '@|f %SWRO~[RgG_FXY6F[MPy)hjGvB5{@U=).lFB#)]PNYzX`C6qqO!9^W|9(Ozt' );
define( 'NONCE_SALT',       '-iS(n3D3~DmUVlkHK%Y~r^E`cAG.!rwDE&1H#D fC[n*)y%V&*-(vNqG>8Y.rC%j' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
