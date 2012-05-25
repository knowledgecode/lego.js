/**
 * @preserve string.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
 */

/*global lego */
/*jslint nomen: true, unparam: true, indent: 2 */
(function (define) {
  'use strict';

  define('string', [], function (require, exports, module) {

    /**
     * @name trim
     * @function
     * @param {string} str
     * @return {string} processed string
     */
    if (String.prototype.trim) {
      exports.trim = function (str) {
        return str.trim();
      };
    } else {
      exports.trim = function (str) {
        var val = str.replace(/^\s+/, ''), end = val.length - 1, ws = /\s/;

        while (ws.test(val.charAt(end))) {
          end -= 1;
        }
        return val.slice(0, end + 1);
      };
    }

    /**
     * @name trimLeft
     * @function
     * @param {string} str
     * @return {string} processed string
     */
    if (String.prototype.trimLeft) {
      exports.trimLeft = function (str) {
        return str.trimLeft();
      };
    } else {
      exports.trimLeft = function (str) {
        return str.replace(/^\s+/, '');
      };
    }

    /**
     * @name trimRight
     * @function
     * @param {string} str
     * @return {string} processed string
     */
    if (String.prototype.trimRight) {
      exports.trimRight = function (str) {
        return str.trimRight();
      };
    } else {
      exports.trimRight = function (str) {
        var end = str.length - 1, ws = /\s/;

        while (ws.test(str.charAt(end))) {
          end -= 1;
        }
        return str.slice(0, end + 1);
      };
    }

    /**
     * @name padLeft
     * @function
     * @param {string} str
     * @param {number} length
     * @param {string=} opt_char
     * @return {string} processed string
     */
    exports.padLeft = function (str, length, opt_char) {
      var len = length - str.length + 1, arry = [];

      opt_char = opt_char || ' ';
      while (len > 0) {
        arry[len -= 1] = '';
      }
      return arry.join(opt_char) + str;
    };

    /**
     * @name padRight
     * @function
     * @param {string} str
     * @param {number} length
     * @param {string=} opt_char
     * @return {string} processed string
     */
    exports.padRight = function (str, length, opt_char) {
      var len = length - str.length + 1, arry = [];

      opt_char = opt_char || ' ';
      while (len > 0) {
        arry[len -= 1] = '';
      }
      return str + arry.join(opt_char);
    };

    /**
     * @name replaceAll
     * @function
     * @param {string} str
     * @param {string} arg1
     * @param {string} arg2
     * @return {string} processed string
     */
    exports.replaceAll = function (str, arg1, arg2) {
      return str.replace(new RegExp(arg1, 'g'), arg2);
    };

    /**
     * @name format
     * @function
     * @param {string} str
     * @return {string} processed string
     */
    exports.format = function (str) {
      // give-up (JSLint)
      var args = Array.prototype.slice.call(arguments, 1), i, len;

      for (i = 0, len = args.length; i < len; i += 1) {
        str = str.replace(/%s/, args[i]);
      }
      return str;
    };

    /**
     * @name startsWith
     * @function
     * @param {string} str
     * @param {string} arg
     * @return {boolean} true or false
     */
    exports.startsWith = function (str, arg) {
      return str.indexOf(arg) === 0;
    };

    /**
     * @name endsWith
     * @function
     * @param {string} str
     * @param {string} arg
     * @return {boolean} true or false
     */
    exports.endsWith = function (str, arg) {
      return str.lastIndexOf(arg) + arg.length === str.length;
    };
  });

}(lego.define));
