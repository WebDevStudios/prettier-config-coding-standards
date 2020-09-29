/* eslint-disable */

function tryAndRequire( module ) {
	try {
		require( module );
	} catch ( error ) {
		// Fail gracefully.
	}
}

module.export = {
	...tryAndRequire( '@webdevstudios/prettier-config-js-coding-standards' ),
	...tryAndRequire( '@webdevstudios/prettier-config-php-coding-standards' ),
	...tryAndRequire( '@webdevstudios/prettier-config-css-coding-standards' ),
};
