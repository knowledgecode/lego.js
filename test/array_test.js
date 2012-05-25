/*global QUnit, lego */
/*jslint indent: 2 */
(function ($) {
  'use strict';

  lego.define(['array'], function (require) {
    var array = require('array');

    /**
     * isArray
     */
    $.test('isArray', function () {
      var a = [], b = {}, c;

      $.deepEqual(array.isArray(a), true);
      $.deepEqual(array.isArray(b), false);
      $.deepEqual(array.isArray(c), false);
    });

    /**
     * indexOf
     */
    $.test('indexOf', function () {
      var a = [1, 2, 3, 1, 2, 3];

      delete a[0];
      delete a[2];

      $.deepEqual(array.indexOf(a, 3), 5);
      $.deepEqual(array.indexOf(a, 6), -1);
      $.deepEqual(array.indexOf(a, '1'), -1);
      $.deepEqual(array.indexOf(a, 2, 4), 4);
      $.deepEqual(array.indexOf(a, 1, 5), -1);
    });

    /**
     * lastIndexOf
     */
    $.test('lastIndexOf', function () {
      var a = [1, 2, 3, 1, 2, 3];

      delete a[0];
      delete a[2];

      $.deepEqual(array.lastIndexOf(a, 3), 5);
      $.deepEqual(array.lastIndexOf(a, 6), -1);
      $.deepEqual(array.lastIndexOf(a, '1'), -1);
      $.deepEqual(array.lastIndexOf(a, 2, 4), 4);
      $.deepEqual(array.lastIndexOf(a, 3, 1), -1);
    });

    /**
     * filter
     */
    $.test('filter', function () {
      var a = [1, 2, 3, 1, 2, 3], b;

      delete a[0];
      delete a[2];

      b = array.filter(a, function (val) {
        return val % 2;
      });
      $.deepEqual(b.length, 2);

      b = array.filter(a, function (val) {
        return val < 0;
      });
      $.deepEqual(b.length, 0);
    });

    /**
     * forEach
     */
    $.test('forEach', function () {
      var a = [1, 2, 3, 1, 2, 3];

      delete a[0];
      delete a[2];

      array.forEach(a, function (val, i, arg) {
        $.deepEqual(val, arg[i]);
      });
    });

    /**
     * every
     */
    $.test('every', function () {
      var a = [1, 2, 3, 1, 2, 3], b;

      delete a[0];
      delete a[2];

      b = array.every(a, function (val) {
        return val > 0;
      });
      $.deepEqual(b, true);

      b = array.every(a, function (val) {
        return val > 1;
      });
      $.deepEqual(b, false);

      b = array.every(a, function (val) {
        return val > 3;
      });
      $.deepEqual(b, false);
    });

    /**
     * map
     */
    $.test('map', function () {
      var a = [1, 2, 3, 1, 2, 3], b;

      delete a[0];
      delete a[2];

      b = array.map(a, function (val) {
        return val * 2;
      });
      $.deepEqual(b[0], undefined);
      $.deepEqual(b[1], 4);
      $.deepEqual(b[2], undefined);
      $.deepEqual(b[3], 2);
      $.deepEqual(b[4], 4);
      $.deepEqual(b[5], 6);
    });

    /**
     * some
     */
    $.test('some', function () {
      var a = [1, 2, 3, 1, 2, 3], b;

      delete a[0];

      b = array.some(a, function (val) {
        return val > 0;
      });
      $.deepEqual(b, true);

      b = array.some(a, function (val) {
        return val > 1;
      });
      $.deepEqual(b, true);

      b = array.some(a, function (val) {
        return val > 3;
      });
      $.deepEqual(b, false);
    });

    /**
     * reduce
     */
    $.test('reduce', function () {
      var a = [1, 2, 3, 1, 2, 3], b;

      delete a[0];
      delete a[1];

      b = array.reduce(a, function (c, d) {
        return c + d;
      });
      $.deepEqual(b, 9);

      b = array.reduce(a, function (c, d) {
        return c.toString() + d.toString();
      });
      $.deepEqual(b, '3123');

      b = array.reduce([1], function (c, d) {
        return c.toString() + d.toString();
      });
      $.deepEqual(b, 1);
    });

    /**
     * reduceRight
     */
    $.test('reduceRight', function () {
      var a = [1, 2, 3, 4, 5, 6], b;

      delete a[4];
      delete a[5];

      b = array.reduceRight(a, function (c, d) {
        return c - d;
      });
      $.deepEqual(b, -2);

      b = array.reduceRight(a, function (c, d) {
        return c.toString() + d.toString();
      });
      $.deepEqual(b, '4321');

      b = array.reduceRight([1], function (c, d) {
        return c.toString() + d.toString();
      });
      $.deepEqual(b, 1);
    });
  });

}(QUnit));
