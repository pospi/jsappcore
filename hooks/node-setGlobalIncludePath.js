/**
 * Given the a loaded module object (given by the global `module`), make the module
 * part of node's include mechanism such that it will be always be tried as a last resort.
 *
 * @package: AppCore
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2016-07-18
 */

var Module = require('module');

export default function setGlobalIncludePaths(globalModule) {
    var globalPaths = globalModule.paths;
    var oldPathHandler = Module._nodeModulePaths;

    Module._nodeModulePaths = function(from) {
      return oldPathHandler(from).concat(globalPaths);
    };
}
