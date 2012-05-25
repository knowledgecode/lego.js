/*global QUnit, lego */
/*jslint indent: 2 */
(function ($) {
  'use strict';

  lego.define(['cache'], function (require) {
    var cache = require('cache');

    /**
     * setItem
     */
    $.test('setItem', function () {
      cache.clear();
      cache.setItem('test1', 'item1');
      cache.setItem('test1', 'item2');
      cache.setItem('test2', 123);
      cache.setItem('test2', 456);
      cache.setItem('test3', [10, 20, 30]);
      cache.setItem('test4', {'item': 'value'});

      $.deepEqual(cache.length, 4);
    });

    /**
     * getItem
     */
    $.test('getItem', function () {
      cache.clear();
      cache.setItem('test1', 'item1');
      cache.setItem('test1', 'item2');
      cache.setItem('test2', 123);
      cache.setItem('test2', 456);
      cache.setItem('test3', [10, 20, 30]);
      cache.setItem('test4', {'item': 'value'});

      $.deepEqual(cache.getItem('test1'), 'item2');
      $.deepEqual(cache.getItem('test2'), 456);
      $.deepEqual(cache.getItem('test3'), [10, 20, 30]);
      $.deepEqual(cache.getItem('test4'), {'item': 'value'});
    });

    /**
     * removeItem
     */
    $.test('removeItem', function () {
      cache.clear();
      cache.setItem('test1', 'item1');
      cache.setItem('test1', 'item2');
      cache.setItem('test2', 123);
      cache.setItem('test2', 456);
      cache.setItem('test3', [10, 20, 30]);
      cache.setItem('test4', {'item': 'value'});
      cache.removeItem('test1');
      cache.removeItem('test1');
      cache.removeItem('test2');
      cache.removeItem('test2');

      $.deepEqual(cache.length, 2);
    });

    /**
     * clear
     */
    $.test('clear', function () {
      cache.clear();
      cache.setItem('test1', 'item1');
      cache.setItem('test1', 'item2');
      cache.setItem('test2', 123);
      cache.setItem('test2', 456);
      cache.setItem('test3', [10, 20, 30]);
      cache.setItem('test4', {'item': 'value'});
      cache.clear();

      $.deepEqual(cache.length, 0);
    });
  });

}(QUnit));
