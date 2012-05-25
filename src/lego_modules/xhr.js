/**
 * @preserve xhr.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
 */

/*global lego */
/*jslint nomen: true, unparam: true, indent: 2 */
(function (global, define) {
  'use strict';

  define('xhr', [], function (require, exports, module) {
    var Xhr, _gets;

    /**
     * @name Xhr
     * @property
     */
    Xhr = (function () {
      var Obj, progIds, i = 0;

      if (global.XMLHttpRequest) {
        Obj = global.XMLHttpRequest;
      } else if (global.ActiveXObject) {
        progIds = [
          'Msxml2.XMLHTTP.6.0',
          'Msxml2.XMLHTTP.3.0',
          'Microsoft.XMLHTTP'
        ];
        while (progIds[i]) {
          try {
            Obj = new global.ActiveXObject(progIds[i]);
            break;
          } catch (e) {}
          i += 1;
        }
        if (Obj) {
          Obj = function () {
            return new global.ActiveXObject(progIds[i]);
          };
        }
      }
      return Obj;
    }());

    /**
     * @name _gets
     * @function
     * @param {Array.<Object>} req
     * @param {Array.<string>} res
     * @param {number} i
     * @param {function(Array.<string>)} callback
     * @return {function()} callback on readystatechange
     */
    _gets = function (req, res, i, callback) {
      return function () {
        var j = 0;

        if (req[i].readyState === 4) {
          if (req[i].status === 200 || req[i].status === 304) {
            res[i] = req[i].responseText;
            if (req.length === res.length) {
              callback(res);
            }
          } else {
            while (req[j]) {
              req[j].abort();
              j += 1;
            }
            callback(null);
          }
        }
      };
    };

    /**
     * @name get
     * @function
     * @param {Array.<string>} urls
     * @param {function(Array.<string>)} callback
     */
    exports.get = function (urls, callback) {
      var req = [], i = 0, res = [];

      while (urls[i]) {
        req[i] = new Xhr();
        req[i].open('GET', urls[i], true);
        req[i].onreadystatechange = _gets(req, res, i, callback);
        req[i].setRequestHeader('If-Modified-Since',
                                'Thu, 01 Jun 1970 00:00:00 GMT');
        req[i].send(null);
        i += 1;
      }
    };
  });

}(this, lego.define));
