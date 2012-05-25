/**
 * @preserve array.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
 */

/*global lego */
/*jslint nomen: true, unparam: true, indent: 2 */
(function (define) {
  'use strict';

  define('array', [], function (require, exports, module) {

    /**
     * @name isArray
     * @function
     * @param {Object} arg
     * @return {boolean} true or false
     */
    if (Array.isArray) {
      exports.isArray = function (arg) {
        return Array.isArray(arg);
      };
    } else {
      exports.isArray = function (arg) {
        return {}.toString.call(arg) === '[object Array]';
      };
    }

    /**
     * @name indexOf
     * @function
     * @param {Array.<Object>} arg
     * @param {Object} searchElement
     * @param {number=} opt_fromIndex
     * @return {number} index
     */
    if (Array.prototype.indexOf) {
      exports.indexOf = function (arg, searchElement, opt_fromIndex) {
        return opt_fromIndex ?
            arg.indexOf(searchElement, opt_fromIndex) :
            arg.indexOf(searchElement);
      };
    } else {
      exports.indexOf = function (arg, searchElement, opt_fromIndex) {
        var i = opt_fromIndex || 0,
          len = arg.length;

        while (i < len) {
          if (arg[i] === searchElement) {
            return i;
          }
          i += 1;
        }
        return -1;
      };
    }

    /**
     * @name lastIndexOf
     * @function
     * @param {Array.<Object>} arg
     * @param {Object} searchElement
     * @param {number=} opt_fromIndex
     * @return {number} index
     */
    if (Array.prototype.lastIndexOf) {
      exports.lastIndexOf = function (arg, searchElement, opt_fromIndex) {
        return opt_fromIndex ?
            arg.lastIndexOf(searchElement, opt_fromIndex) :
            arg.lastIndexOf(searchElement);
      };
    } else {
      exports.lastIndexOf = function (arg, searchElement, opt_fromIndex) {
        var i = opt_fromIndex || arg.length - 1;

        while (i >= 0) {
          if (arg[i] === searchElement) {
            return i;
          }
          i -= 1;
        }
        return -1;
      };
    }

    /**
     * @name filter
     * @function
     * @param {Array.<Object>} arg
     * @param {function(Object, number, Array)} callback
     * @return {Array.<Object>} filtered array
     */
    if (Array.prototype.filter) {
      exports.filter = function (arg, callback) {
        return arg.filter(callback);
      };
    } else {
      exports.filter = function (arg, callback) {
        var i, len, ret = [];

        for (i = 0, len = arg.length; i < len; i += 1) {
          if (arg.hasOwnProperty(i) && callback(arg[i], i, arg)) {
            ret.push(arg[i]);
          }
        }
        return ret;
      };
    }

    /**
     * @name forEach
     * @function
     * @param {Array.<Object>} arg
     * @param {function(Object, number, Array)} callback
     */
    if (Array.prototype.forEach) {
      exports.forEach = function (arg, callback) {
        arg.forEach(callback);
      };
    } else {
      exports.forEach = function (arg, callback) {
        var i, len;

        for (i = 0, len = arg.length; i < len; i += 1) {
          if (arg.hasOwnProperty(i)) {
            callback(arg[i], i, arg);
          }
        }
      };
    }

    /**
     * @name every
     * @function
     * @param {Array.<Object>} arg
     * @param {function(Object, number, Array)} callback
     * @return {Boolean} true or false
     */
    if (Array.prototype.every) {
      exports.every = function (arg, callback) {
        return arg.every(callback);
      };
    } else {
      exports.every = function (arg, callback) {
        var i, len;

        for (i = 0, len = arg.length; i < len; i += 1) {
          if (arg.hasOwnProperty(i) && !callback(arg[i], i, arg)) {
            return false;
          }
        }
        return true;
      };
    }

    /**
     * @name map
     * @function
     * @param {Array.<Object>} arg
     * @param {function(Object, number, Array)} callback
     * @return {Array} processed array
     */
    if (Array.prototype.map) {
      exports.map = function (arg, callback) {
        return arg.map(callback);
      };
    } else {
      exports.map = function (arg, callback) {
        var i, len, ret = [];

        for (i = 0, len = arg.length; i < len; i += 1) {
          if (arg.hasOwnProperty(i)) {
            ret[i] = callback(arg[i], i, arg);
          }
        }
        return ret;
      };
    }

    /**
     * @name some
     * @function
     * @param {Array.<Object>} arg
     * @param {function(Object, number, Array)} callback
     * @return {Boolean} true or false
     */
    if (Array.prototype.some) {
      exports.some = function (arg, callback) {
        return arg.some(callback);
      };
    } else {
      exports.some = function (arg, callback) {
        var i, len;

        for (i = 0, len = arg.length; i < len; i += 1) {
          if (arg.hasOwnProperty(i) && callback(arg[i], i, arg)) {
            return true;
          }
        }
        return false;
      };
    }

    /**
     * @name reduce
     * @function
     * @param {Array.<Object>} arg
     * @param {function(Object, number, Array)} callback
     * @return {Array} processed array
     */
    if (Array.prototype.reduce) {
      exports.reduce = function (arg, callback) {
        return arg.reduce(callback);
      };
    } else {
      exports.reduce = function (arg, callback) {
        var i, len, prev;

        for (i = 0, len = arg.length; i < len; i += 1) {
          if (arg.hasOwnProperty(i)) {
            prev = arg[i];
            break;
          }
        }
        for (i += 1; i < len; i += 1) {
          if (arg.hasOwnProperty(i)) {
            prev = callback(prev, arg[i], i, arg);
          }
        }
        return prev;
      };
    }

    /**
     * @name reduceRight
     * @function
     * @param {Array.<Object>} arg
     * @param {function(Object, number, Array)} callback
     * @return {Array} processed array
     */
    if (Array.prototype.reduceRight) {
      exports.reduceRight = function (arg, callback) {
        return arg.reduceRight(callback);
      };
    } else {
      exports.reduceRight = function (arg, callback) {
        var i, prev;

        for (i = arg.length - 1; i >= 0; i -= 1) {
          if (arg.hasOwnProperty(i)) {
            prev = arg[i];
            break;
          }
        }
        for (i -= 1; i >= 0; i -= 1) {
          if (arg.hasOwnProperty(i)) {
            prev = callback(prev, arg[i], i, arg);
          }
        }
        return prev;
      };
    }
  });

}(lego.define));
