/**
 * Node module system hooks to prevent loading non-js resources on the server
 *
 * @package: AppCore
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2016-07-18
 */

module.exports = function preventStyleImports() {
    require.extensions['.scss'] = function(m, filename) {};
    require.extensions['.sass'] = function(m, filename) {};
    require.extensions['.less'] = function(m, filename) {};
    require.extensions['.css'] = function(m, filename) {};
};
