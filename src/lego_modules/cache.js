/**
 * @preserve cache.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
 */

/*global lego */
/*jslint nomen: true, unparam: true, indent: 2 */
(function (define) {
  'use strict';

  define('cache', [], function (require, exports, module) {
    var _cache = {};

    /**
     * @name length
     * @property
     */
    exports.length = 0;

    /**
     * @name getItem
     * @function
     * @param {string} key
     * @return {Object} value or null
     */
    exports.getItem = function (key) {
      return _cache.hasOwnProperty(key) ? _cache[key] : null;
    };

    /**
     * @name setItem
     * @function
     * @param {string} key
     * @param {Object} value
     */
    exports.setItem = function (key, value) {
      if (!_cache.hasOwnProperty(key)) {
        this.length += 1;
      }
      _cache[key] = value;
    };

    /**
     * @name removeItem
     * @function
     * @param {string} key
     */
    exports.removeItem = function (key) {
      if (_cache.hasOwnProperty(key)) {
        this.length -= 1;
        delete _cache[key];
      }
    };

    /**
     * @name clear
     * @function
     */
    exports.clear = function () {
      _cache = {};
      this.length = 0;
    };
  });

}(lego.define));
