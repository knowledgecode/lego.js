/*global QUnit, lego, JSON */
/*jslint indent: 2 */
(function ($) {
  'use strict';

  lego.add('./json3.min.js', function () {
    lego.define(['storage'], function (require) {
      var storage = require('storage');

      /**
       * setItem
       */
      $.test('setItem', function () {
        storage.clear();
        storage.setItem('test1', 'item1');
        storage.setItem('test1', 'item2');
        storage.setItem('test2', JSON.stringify(123));
        storage.setItem('test2', JSON.stringify(456));
        storage.setItem('test3', JSON.stringify([10, 20, 30]));
        storage.setItem('test4', JSON.stringify({'item': 'value'}));

        $.deepEqual(storage.length, 4);
      });

      /**
       * getItem
       */
      $.test('getItem', function () {
        storage.clear();
        storage.setItem('test1', 'item1');
        storage.setItem('test1', 'item2');
        storage.setItem('test2', JSON.stringify(123));
        storage.setItem('test2', JSON.stringify(456));
        storage.setItem('test3', JSON.stringify([10, 20, 30]));
        storage.setItem('test4', JSON.stringify({'item': 'value'}));

        $.deepEqual(storage.getItem('test1'), 'item2');
        $.deepEqual(JSON.parse(storage.getItem('test2')), 456);
        $.deepEqual(JSON.parse(storage.getItem('test3')), [10, 20, 30]);
        $.deepEqual(JSON.parse(storage.getItem('test4')), {'item': 'value'});
      });

      /**
       * removeItem
       */
      $.test('removeItem', function () {
        storage.clear();
        storage.setItem('test1', 'item1');
        storage.setItem('test1', 'item2');
        storage.setItem('test2', JSON.stringify(123));
        storage.setItem('test2', JSON.stringify(456));
        storage.setItem('test3', JSON.stringify([10, 20, 30]));
        storage.setItem('test4', JSON.stringify({'item': 'value'}));
        storage.removeItem('test1');
        storage.removeItem('test1');
        storage.removeItem('test2');
        storage.removeItem('test2');

        $.deepEqual(storage.length, 2);
      });

      /**
       * clear
       */
      $.test('clear', function () {
        storage.clear();
        storage.setItem('test1', 'item1');
        storage.setItem('test1', 'item2');
        storage.setItem('test2', JSON.stringify(123));
        storage.setItem('test2', JSON.stringify(456));
        storage.setItem('test3', JSON.stringify([10, 20, 30]));
        storage.setItem('test4', JSON.stringify({'item': 'value'}));
        storage.clear();

        $.deepEqual(storage.length, 0);
      });
    });
  });

}(QUnit));
