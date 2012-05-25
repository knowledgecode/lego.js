/**
 * @preserve lego.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
*/

/*jslint nomen: true, regexp: true, indent: 2 */
(function (global) {
  'use strict';

  var lego = {},
    _modules = {},
    _cache = {},
    _deps = [],
    _privates,
    ascend,
    getAbsUri,
    create,
    load,
    require,
    define,
    normalize,
    origin,
    pathname,
    root,
    doc = global.document,
    loc = global.location;

  /**
   * @name ascend
   * @function
   * @param {string} uri
   * @return {string} new uri
   */
  ascend = function (uri) {
    return uri.replace(/\/[^\/]*\/?$/, '/');
  };

  /**
   * @name getAbsUri
   * @function
   * @param {string} uri
   * @param {string=} opt_path
   * @return {string} absolute uri
   */
  getAbsUri = function (uri, opt_path) {
    if (/^(https?|file):\/\//.test(uri)) {
      return uri;
    }
    if (/^\.{1,2}\//.test(uri)) {
      opt_path = opt_path || pathname;
      while (uri.indexOf('../') === 0) {
        uri = uri.substring(3);
        opt_path = ascend(opt_path);
      }
      while (uri.indexOf('./') === 0) {
        uri = uri.substring(2);
      }
    } else if (uri.indexOf('/') === 0) {
      opt_path = '';
    } else {
      opt_path = opt_path || root;
    }
    return origin + opt_path + uri;
  };

  /**
   * @name create
   * @function
   * @param {string=} baseId
   * @return {Object} module
   */
  create = (function () {
    var Module = function () {}, Exports = function () {};

    return function (baseId) {
      var module = new Module(), base = _modules[baseId] || {};

      Exports.prototype = base.exports;
      module.exports = new Exports();
      return module;
    };
  }());

  /**
   * @name load
   * @function
   * @param {string=} id
   * @param {function(function, object, object)} callback
   * @param {string=} opt_base
   */
  load = function (id, callback, opt_base) {
    var module, i = 0, j, dependencies, dep, id2, callback2, opt_base2;

    callback = callback || function () {};
    if (id) {
      module = create(normalize(opt_base));
      module.id = id;
      module.uri = _cache[id];
      callback(require, module.exports, module);
      _modules[id] = module;
      while (_deps[i]) {
        dep = _deps[i];
        dependencies = dep.deps;
        j = 0;
        while (dependencies[j]) {
          if (dependencies[j] === id) {
            dependencies.splice(j, 1);
          } else {
            j += 1;
          }
        }
        if (j === 0) {
          id2 = dep.id;
          callback2 = dep.callback;
          opt_base2 = dep.base;
          _deps.splice(i, 1);
          load(id2, callback2, opt_base2);
          i = 0;
        } else {
          i += 1;
        }
      }
    } else {
      callback(require);
    }
  };

  /**
   * @name require
   * @function
   * @param {string} id
   * @return {Object} exported module
   */
  require = function (id) {
    return (_modules[normalize(id)] || {}).exports;
  };

  /**
   * @name define
   * @function
   * @param {string=} id
   * @param {Array.<string>=} dependencies
   * @param {function(function, object, object)} factory
   * @param {string=} baseId
   */
  define = function (id, dependencies, factory, baseId) {
    var i = 0, uri;

    dependencies = dependencies || [];
    dependencies.push(baseId);
    while (dependencies[i]) {
      dependencies[i] = normalize(dependencies[i]);
      if (_modules[dependencies[i]]) {
        dependencies.splice(i, 1);
      } else {
        i += 1;
      }
    }
    if (i === 0) {
      load(id, factory, baseId);
    } else {
      _deps.push({
        id: id,
        deps: dependencies,
        callback: factory,
        base: baseId
      });
      i = 0;
      while (dependencies[i]) {
        uri = _cache[dependencies[i]];
        if (!_cache[uri]) {
          _cache[uri] = dependencies[i];
          lego.add(uri);
        }
        i += 1;
      }
    }
  };

  /**
   * @name normalize
   * @function
   * @param {string} id
   * @return {string} normalized id
   */
  normalize = function (id) {
    var trueId;

    if (id) {
      trueId = id.replace(/(^.*\/|\.js$)/g, '');
      _cache[trueId] = _cache[trueId] || getAbsUri(id) + '.js';
    }
    return trueId;
  };

  /**
   * @name origin
   * @property {string} protocol + domain
   */
  origin = loc.protocol + '//' + loc.host;

  /**
   * @name pathname
   * @property {string} default module path
   */
  pathname = (function () {
    var i = 0, scripts = doc.getElementsByTagName('script'), uri, path;

    while (scripts[i]) {
      uri = scripts[i].src;
      if (/(^|\/)lego\.js$/.test(uri)) {
        uri = getAbsUri(uri, ascend(loc.pathname.replace(/\\/g, '/')));
        path = ascend(uri.replace(origin, ''));
        root = path + 'lego_modules/';
        break;
      }
      i += 1;
    }
    return path;
  }());

  /**
   * @name add
   * @function
   * @param {string} uri
   * @param {function()=} callback
   */
  lego.add = function (uri, callback) {
    var script = doc.createElement('script');

    script.src = uri;
    if (script.readyState) {
      script.onreadystatechange = function () {
        var state = script.readyState;

        if (state === 'complete' || state === 'loaded') {
          script.onreadystatechange = null;
          callback = callback && callback();
        }
      };
    } else {
      script.onload = function () {
        callback = callback && callback();
      };
    }
    doc.getElementsByTagName('head')[0].appendChild(script);
  };

  /**
   * @name define
   * @function
   * @param {Object} arg1
   * @param {Object=} arg2
   * @param {Object=} arg3
   * @param {Object=} arg4
   */
  lego.define = function (arg1, arg2, arg3, arg4) {
    var len = arguments.length, empty;

    define.apply(
      this,
      [empty, empty, arg1, arg2, arg3, arg4].slice(len > 3 ? 2 : len - 1)
    );
  };

  /**
   * @name ln
   * @function
   * @param {string} id
   * @param {string} uri
   */
  lego.ln = function (id, uri) {
    _cache[id] = getAbsUri(uri) + '.js';
  };

  /**
   * @name cd
   * @function
   * @param {string} uri
   */
  lego.cd = function (uri) {
    root = getAbsUri(uri).replace(origin, '');
  };

  /**
   * @name test
   * @function
   * @param {string} name
   * @param {Array.<Object>=} args
   */
  lego.test = function (name, args) {
    if (_privates[name]) {
      return _privates[name].apply(this, args || []);
    }
  };

  _privates = {
    ascend: ascend,
    getAbsUri: getAbsUri,
    create: create,
    load: load,
    require: require,
    normalize: normalize
  };

  global.lego = lego;

}(this));
