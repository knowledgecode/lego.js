/*global QUnit, lego */
/*jslint unparam: true, indent: 2 */
(function (global, $) {
  'use strict';

  var loc = global.location;

  /**
   * ascend
   */
  $.test('ascend', function () {
    var actual, expected;

    actual = lego.test('ascend', ['http://foobar.com/test/lego_test?q=123']);
    expected = 'http://foobar.com/test/';
    $.deepEqual(actual, expected, actual);

    actual = lego.test('ascend', ['lego_test']);
    expected = 'lego_test';
    $.deepEqual(actual, expected, actual);

    actual = lego.test('ascend', ['']);
    expected = '';
    $.deepEqual(actual, expected, actual);
  });

  /**
   * getAbsUri
   */
  $.test('getAbsUri', function () {
    var actual = lego.test('getAbsUri', ['../test/lego_test.html']),
      expected = loc.href.replace(/\\/g, '/').replace(/ /g, '%20');

    $.deepEqual(actual, expected, actual);
  });

  /**
   * create
   */
  $.test('create', function () {
    var actual = typeof lego.test('create'),
      expected = 'object';

    $.deepEqual(actual, expected, actual);
  });

  /**
   * load
   */
  $.test('load', function () {
    lego.test('load', [undefined, function () {
      $.ok(true);
    }]);
  });

  /**
   * require
   */
  $.asyncTest('require', function () {
    var actual1, actual2, expected1, expected2;

    lego.define(['array'], function (require) {
      var array = require('array'),
        list = require('list'),
        obj = ['foo', 'bar', 'baz'];

      actual1 = array.indexOf(obj, 'bar');
      expected1 = 1;
      actual2 = list;
      expected2 = undefined;
    });

    global.setTimeout(function () {
      $.deepEqual(actual1, expected1, actual1);
      $.deepEqual(actual2, expected2, actual2);
      $.start();
    }, 500);
  });

  /**
   * normalize
   */
  $.test('normalize', function () {
    var actual, expected;

    actual = lego.test('normalize', ['./test']);
    expected = 'test';
    $.deepEqual(actual, expected, actual);

    actual = lego.test('normalize', [undefined]);
    expected = undefined;
    $.deepEqual(actual, expected, actual);
  });

  /**
   * add
   */
  $.asyncTest('add', function () {
    var actual, expected;

    lego.add('./lego_test_material.js', function () {
      actual = global.lego_test_material;
      expected = 'lego_test_material.js has just been loaded.';
    });

    global.setTimeout(function () {
      $.deepEqual(actual, expected, actual);
      $.start();
    }, 500);
  });

  /**
   * define
   */
  $.asyncTest('define', function () {
    var actual = [], expected = [];

    lego.define(['string'], function (require) {
      var string = require('string');

      actual[0] = string.trim('  blank spaces  ');
      expected[0] = 'blank spaces';
    });

    lego.define(function () {
      actual[1] = global.Math.pow(123, 2);
      expected[1] = 15129;
    });

    lego.define('define3', [], function (require, exports, module) {
      exports.foo = function (arg) {
        return arg + 1;
      };
      actual[2] = exports.foo(1);
      expected[2] = 2;
    });

    lego.define('define4', [], function (require, exports, module) {
      exports.foo = function (arg) {
        var define3 = require('define3');

        return define3.foo(arg) + 1;
      };
      actual[3] = exports.foo(1);
      expected[3] = 3;
    }, 'define3');

    global.setTimeout(function () {
      $.deepEqual(actual[0], expected[0], actual[0]);
      $.deepEqual(actual[1], expected[1], actual[1]);
      $.deepEqual(actual[2], expected[2], actual[2]);
      $.deepEqual(actual[3], expected[3], actual[3]);
      $.start();
    }, 500);
  });

  /**
   * ln
   */
  $.asyncTest('ln', function () {
    var actual, expected;

    lego.ln('material', './test/lego_test_material');

    lego.define(['material'], function (require) {
      actual = require('material').double(10);
      expected = 20;
    });

    global.setTimeout(function () {
      $.deepEqual(actual, expected, actual);
      $.start();
    }, 500);
  });

  /**
   * cd
   */
  $.test('cd', function () {
    var actual, expected;

    lego.cd('../test/');

    actual = lego.test('getAbsUri', ['lego_test.html']);
    expected = loc.href.replace(/\\/g, '/').replace(/ /g, '%20');
    $.deepEqual(actual, expected, actual);

    // undo
    lego.cd('./lego_modules/');
  });

}(this, QUnit));
