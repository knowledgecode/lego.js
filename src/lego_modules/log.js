/**
 * @preserve log.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
 */

/*global lego */
/*jslint nomen: true, unparam: true, indent: 2 */
(function (global, define) {
  'use strict';

  define('log', ['string'], function (require, exports, module) {
    var _string = require('string'),
      _doc = global.document,
      _logger,
      _render,
      _format,
      _error,
      _warn,
      _info,
      _debug;

    /**
     * @name _render
     * @function
     * @param {string} obj
     */
    _render = function (obj) {
      var log = _doc.createElement('div'), style = log.style;

      log.innerHTML = obj;
      style.fontFamily = 'monospace';
      style.fontSize = '12';
      style.color = '#000000';
      style.backgroundColor = '#ffffff';
      _doc.getElementsByTagName('body')[0].appendChild(log);
    };

    /**
     * @name _format
     * @function
     * @param {date} date
     * @param {string} level
     * @param {string} obj
     * @return {string} formatted log
     */
    _format = function (date, level, obj) {
      return _string.format('%s/%s/%s %s:%s:%s.%s [%s] %s',
        date.getFullYear(),
        _string.padLeft((date.getMonth() + 1).toString(), 2, '0'),
        _string.padLeft((date.getDate().toString()), 2, '0'),
        _string.padLeft((date.getHours().toString()), 2, '0'),
        _string.padLeft((date.getMinutes().toString()), 2, '0'),
        _string.padLeft((date.getSeconds().toString()), 2, '0'),
        _string.padLeft((date.getMilliseconds().toString()), 3, '0'),
        level,
        obj);
    };

    /**
     * @name _error
     * @function
     * @param {string} obj
     */
    _error = function (obj) {
      _logger.error(_format(new Date(), 'E', obj));
    };

    /**
     * @name _warn
     * @function
     * @param {string} obj
     */
    _warn = function (obj) {
      _logger.warn(_format(new Date(), 'W', obj));
    };

    /**
     * @name _info
     * @function
     * @param {string} obj
     */
    _info = function (obj) {
      _logger.info(_format(new Date(), 'I', obj));
    };

    /**
     * @name _debug
     * @function
     * @param {string} obj
     */
    _debug = function (obj) {
      _logger.log(_format(new Date(), 'D', obj));
    };

    /**
     * @name forceRendering
     * @function
     * @param {boolean} rendering
     */
    exports.forceRendering = function (rendering) {
      if (global.console && !rendering) {
        _logger = global.console;
      } else {
        _logger = {
          error: _render,
          warn: _render,
          info: _render,
          log: _render
        };
      }
    };

    /**
     * @name filter
     * @function
     * @param {number} level
     */
    exports.filter = function (level) {
      exports.error = exports.warn = exports.info = exports.debug
        = function () {};

      if (level >= 0 && level <= 3) {
        exports.error = _error;
        if (level <= 2) {
          exports.warn = _warn;
          if (level <= 1) {
            exports.info = _info;
            if (level <= 0) {
              exports.debug = _debug;
            }
          }
        }
      }
    };

    /* initialize */
    exports.forceRendering(false);
    exports.filter(0);
  });

}(this, lego.define));
