/*global lego */
/*jslint unparam: true, indent: 2 */
(function (global, define) {
  'use strict';

  define('material', [], function (require, exports, module) {
    exports.double = function (arg) {
      return arg * 2;
    };
    global.lego_test_material = 'lego_test_material.js has just been loaded.';
  });

}(this, lego.define));
