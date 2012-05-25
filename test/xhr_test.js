/*global QUnit, lego */
/*jslint indent: 2 */
(function (global, $) {
  'use strict';

  lego.define(['xhr', 'dom'], function (require) {
    var xhr = require('xhr'),
      dom = require('dom');

    /**
     * get
     */
    $.asyncTest('get', function () {
      var urls = [
        './xhr_test.html',
        './xhr_test.js'
      ];

      xhr.get(urls, function (res) {
        if (res) {
          dom.$('#get1').value = res[0];
          dom.$('#get2').value = res[1];
        }
      });

      global.setTimeout(function () {
        $.ok(dom.$('#get1').value);
        $.ok(dom.$('#get2').value);
        $.start();
      }, 500);

    });
  });

}(this, QUnit));
