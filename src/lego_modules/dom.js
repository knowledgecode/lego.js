/**
 * @preserve dom.js v0.1.1 (c) 2012 knowledgecode | MIT licensed
 */

/*global lego */
/*jslint nomen: true, unparam: true, indent: 2 */
(function (global, define) {
  'use strict';

  define('dom', [], function (require, exports, module) {
    var _doc = global.document, _getElementsByClassName, _getElementsByTagName;

    /**
    * @name _getElementsByClassName
    * @function
    * @param {string} name
    * @param {Object} elm
    * @return {Array.<Object>} elements
    */
    if (_doc.getElementsByClassName) {
      _getElementsByClassName = function (name, elm) {
        return [].slice.call(elm.getElementsByClassName(name), 0);
      };
    } else {
      _getElementsByClassName = function (name, elm) {
        var i = 0, elements = [];

        if (elm.className === name) {
          elements[0] = elm;
        }
        if (elm.hasChildNodes()) {
          while (elm.childNodes[i]) {
            elements = elements.concat(
              _getElementsByClassName(name, elm.childNodes[i])
            );
            i += 1;
          }
        }
        return elements;
      };
    }

    /**
    * @name _getElementsByTagName
    * @function
    * @param {string} tagName
    * @param {Object} elm
    * @return {Array.<Object>} elements
    */
    _getElementsByTagName = function (tagName, elm) {
      var i = 0, elements = [], elms = elm.getElementsByTagName(tagName);

      while (elms[i]) {
        elements[i] = elms[i];
        i += 1;
      }
      return elements;
    };

    /**
    * @name ready
    * @function
    * @param {function()} fn
    */
    exports.ready = function (fn) {
      var _fn;

      if (_doc.readyState === 'complete') {
        global.setTimeout(fn, 1);
      } else {
        _fn = function () {
          fn();
          exports.unbind(global, 'load', _fn);
        };
        this.bind(global, 'load', _fn);
      }
    };

    /**
    * @name $
    * @function
    * @param {string} name
    * @param {Object=} opt_elm
    * @return {Object|Array.<Object>} element(s)
    */
    exports.$ = function (name, opt_elm) {
      var elm = opt_elm || _doc;

      if (name.indexOf('#') === 0) {
        return _doc.getElementById(name.substring(1));
      }
      if (name.indexOf('.') === 0) {
        return _getElementsByClassName(name.substring(1), elm);
      }
      return _getElementsByTagName(name, elm);
    };

    /**
    * @name bind
    * @function
    * @param {Object} elm
    * @param {string} type
    * @param {function()} listener
    * @return {function()} listener
    */
    if (global.addEventListener) {
      exports.bind = function (elm, type, listener) {
        elm.addEventListener(type, listener, false);
        return listener;
      };
    } else if (global.attachEvent) {
      exports.bind = function (elm, type, listener) {
        elm.attachEvent('on' + type, listener);
        return listener;
      };
    }

    /**
    * @name unbind
    * @function
    * @param {Object} elm
    * @param {string} type
    * @param {function()} listener
    */
    if (global.removeEventListener) {
      exports.unbind = function (elm, type, listener) {
        elm.removeEventListener(type, listener, false);
      };
    } else if (global.detachEvent) {
      exports.unbind = function (elm, type, listener) {
        elm.detachEvent('on' + type, listener);
      };
    }
  });

}(this, lego.define));
