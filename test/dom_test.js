/*global QUnit, lego */
/*jslint indent: 2 */
(function (global, $) {
  'use strict';

  lego.define(['dom'], function (require) {
    var dom = require('dom');

    /**
     * ready
     */
    $.asyncTest('ready', function () {
      dom.ready(function () {
        $.ok(true);
        $.start();
      });
    });

    /**
     * $
     */
    $.test('$', function () {
      var elm, elms;

      elm = dom.$('#dom_test_id');
      $.deepEqual(typeof elm, 'object');

      elms = dom.$('.dom_test_class');
      $.deepEqual(elms.length, 6);

      elms = dom.$('.dom_test_class', elm);
      $.deepEqual(elms.length, 3);

      elms = dom.$('script');
      $.deepEqual(elms.length, 4);

      elms = dom.$('script', dom.$('head')[0]);
      $.deepEqual(elms.length, 1);

      $.deepEqual(dom.$('#dom_test_id_error'), null);

      elms = dom.$('.dom_test_class_error');
      $.deepEqual(elms.length, 0);

      elms = dom.$('script_error');
      $.deepEqual(elms.length, 0);
    });

    /**
     * bind
     */
    $.asyncTest('bind', function () {
      var elm = dom.$('#dom_test_button');

      dom.bind(elm, 'click', function () {
        elm.disabled = 'disabled';
        $.ok(true);
        $.start();
      });
    });

    /**
     * unbind
     */
    $.asyncTest('unbind', function () {
      var elm = dom.$('#dom_test_button'),
        fn = function () {
          global.alert('unbind test error');
        };

      elm.value = 'Click here when \'unbind\' test.';
      elm.disabled = '';
      dom.bind(elm, 'click', fn);
      dom.unbind(elm, 'click', fn);
    });
  });

}(this, QUnit));
