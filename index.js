/**
 * Try and require module override data.
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  1.0.1
 * @param  {string} module Module.
 * @return {Object}        Config object.
 */
function loadOverrideFromModule( module ) {
	try {
		return {
			...require( module ).overrides[ 0 ],
		};
	} catch ( error ) {
		return {
			...{
				files: '',
				options: {},
			},
		};
	}
}

module.exports = {
	overrides: [
		loadOverrideFromModule( '@webdevstudios/prettier-config-js-coding-standards' ),
		loadOverrideFromModule( '@webdevstudios/prettier-config-php-coding-standards' ),
		loadOverrideFromModule( '@webdevstudios/prettier-config-css-coding-standards' ),
	],
};
