
/**
 * Configure require
 * Set relative path to UiBuildingBlocks
 */

require.config({
    paths: {
        //"redux": "./node_modules/redux/dist/redux",
        "base-64": "./node_modules/base-64/base64",
        "utf8": "./node_modules/utf8/utf8"
    }
});
/**
 * Load App
 */
require(['test']);

