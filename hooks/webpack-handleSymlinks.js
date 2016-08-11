/**
 * Monkeypatches the internal Compilation webpack module to ensure module IDs
 * are consistent for identical modules included from different parent modules
 * across a filesystem symlink boundary.
 *
 * As a side-effect, module IDs will now be MD5 hashes instead of sequenced integers.
 *
 * @package: AppCore
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2016-07-18
 */

var md5 = require('md5');

module.exports = function handleWebpackModuleSymlinks(Compilation) {
    Compilation.prototype.applyModuleIds = function() {
        this.modules.forEach(function(module) {
            if (module.id === null) {
                module.id = md5(module.userRequest);
            }
        }, this);
    };
};
