/**
 * @preserve storage.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
 */

/*global lego */
/*jslint nomen: true, unparam: true, indent: 2 */
(function (global, define) {
  'use strict';

  define('storage', ['base64'], function (require, exports, module) {
    var _storage = global.sessionStorage,
      _doc = global.document,
      _base64 = require('base64'),
      _hasSessionStorage,
      _getStorage,
      _setStorage,
      _cache = {};

    /**
     * @name _hasSessionStorage
     * @property
     * @return {boolean} true or false
     */
    _hasSessionStorage = (function () {
      return typeof _storage === 'object';
    }());

    /**
     * @name _getStorage
     * @function
     * @return {Object} cookie
     */
    _getStorage = function () {
      var cookies, i = 0, j = 0, pairs, pair, cookie = {};

      cookies = _doc.cookie.split('; ');
      while (cookies[i]) {
        if (cookies[i].indexOf('sessionStorage=') === 0) {
          pairs = cookies[i].split('=')[1].split(',');
          while (pairs[j]) {
            pair = pairs[j].split(':');
            cookie[pair[0]] = pair[1];
            j += 1;
          }
          break;
        }
        i += 1;
      }
      return cookie;
    };

    /**
     * @name _setStorage
     * @function
     * @param {Object} cookie
     */
    _setStorage = function (cookie) {
      var key, i = 0, values = [];

      for (key in cookie) {
        if (cookie.hasOwnProperty(key)) {
          values[i] = key + ':' + cookie[key];
          i += 1;
        }
      }
      _doc.cookie = 'sessionStorage=' + values.join(',');
    };

    /**
     * @name length
     * @property
     */
    exports.length = 0;

    /**
     * @name getItem
     * @function
     * @param {string} key
     * @return {string} value
     */
    if (_hasSessionStorage) {
      exports.getItem = function (key) {
        var value = _storage.getItem(_base64.encodeSafe(key));
        return value ? _base64.decodeSafe(value) : null;
      };
    } else {
      exports.getItem = function (key) {
        var value;

        if (_cache[key]) {
          return _cache[key];
        }
        value = _getStorage()[_base64.encodeSafe(key)];
        return value ? _base64.decodeSafe(value) : null;
      };
    }

    /**
     * @name setItem
     * @function
     * @param {string} key
     * @param {string} value
     */
    if (_hasSessionStorage) {
      exports.setItem = function (key, value) {
        _storage.setItem(_base64.encodeSafe(key), _base64.encodeSafe(value));
        this.length = _storage.length;
      };
    } else {
      exports.setItem = function (key, value) {
        var cookie = _getStorage(),
          key64 = _base64.encodeSafe(key);

        if (!cookie.hasOwnProperty(key64)) {
          this.length += 1;
        }
        cookie[key64] = _base64.encodeSafe(value);
        _setStorage(cookie);
        _cache[key] = value;
      };
    }

    /**
     * @name removeItem
     * @function
     * @param {string} key
     */
    if (_hasSessionStorage) {
      exports.removeItem = function (key) {
        _storage.removeItem(_base64.encodeSafe(key));
        this.length = _storage.length;
      };
    } else {
      exports.removeItem = function (key) {
        var cookie = _getStorage(),
          key64 = _base64.encodeSafe(key);

        if (cookie.hasOwnProperty(key64)) {
          this.length -= 1;
        }
        delete cookie[key64];
        _setStorage(cookie);
        delete _cache[key];
      };
    }

    /**
     * @name clear
     * @function
     */
    if (_hasSessionStorage) {
      exports.clear = function () {
        _storage.clear();
        this.length = 0;
      };
    } else {
      exports.clear = function () {
        _doc.cookie =
          'sessionStorage=; expires=Thu, 01-Jan-1970 00:00:00 GMT';
        _cache = {};
        this.length = 0;
      };
    }
  });

}(this, lego.define));
