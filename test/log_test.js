/*global QUnit, lego */
/*jslint indent: 2 */
(function ($) {
  'use strict';

  lego.define(['log'], function (require) {
    var log = require('log');

    /**
     * error
     */
    $.test('error', function () {
      log.error('test1');
      log.error({});
      $.ok(true);
    });

    /**
     * warn
     */
    $.test('warn', function () {
      log.warn('test2');
      log.warn({});
      $.ok(true);
    });

    /**
     * info
     */
    $.test('info', function () {
      log.info('test3');
      log.info({});
      $.ok(true);
    });

    /**
     * debug
     */
    $.test('debug', function () {
      log.debug('test4');
      log.debug({});
      $.ok(true);
    });

    /**
     * filter
     */
    $.test('filter', function () {
      log.filter(4);
      log.error('filter = 4');
      log.filter(3);
      log.error('filter = 3');
      log.filter(2);
      log.warn('filter = 2');
      log.filter(1);
      log.info('filter = 1');
      log.filter(0);
      log.debug('filter = 0');
      log.filter(-1);
      log.debug('filter = -1');
      log.filter('test');
      log.debug('filter = test');
      $.ok(true);
    });

    /**
     * forceRendering
     */
    $.test('forceRendering', function () {
      log.forceRendering(true);
      log.filter(0);
      log.error('forceRendering error');
      log.warn('forceRendering warn');
      log.info('forceRendering info');
      log.debug('forceRendering debug');
      $.ok(true);
    });
  });

}(QUnit));
