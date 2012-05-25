/*global QUnit, lego */
/*jslint indent: 2 */
(function ($) {
  'use strict';

  lego.define(['string'], function (require) {
    var string = require('string');

    /**
     * trim
     */
    $.test('trim', function () {
      var actual, expected;

      actual = string.trim('  trim test  ');
      expected = 'trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trim('trim test  ');
      expected = 'trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trim('  trim test');
      expected = 'trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trim('trim test');
      expected = 'trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trim(' ');
      expected = '';
      $.deepEqual(actual, expected, actual);

      actual = string.trim('');
      expected = '';
      $.deepEqual(actual, expected, actual);
    });

    /**
     * trimLeft
     */
    $.test('trimLeft', function () {
      var actual, expected;

      actual = string.trimLeft('  trim test  ');
      expected = 'trim test  ';
      $.deepEqual(actual, expected, actual);

      actual = string.trimLeft('trim test  ');
      expected = 'trim test  ';
      $.deepEqual(actual, expected, actual);

      actual = string.trimLeft('  trim test');
      expected = 'trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trimLeft('trim test');
      expected = 'trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trimLeft(' ');
      expected = '';
      $.deepEqual(actual, expected, actual);

      actual = string.trimLeft('');
      expected = '';
      $.deepEqual(actual, expected, actual);
    });

    /**
     * trimRight
     */
    $.test('trimRight', function () {
      var actual, expected;

      actual = string.trimRight('  trim test  ');
      expected = '  trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trimRight('trim test  ');
      expected = 'trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trimRight('  trim test');
      expected = '  trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trimRight('trim test');
      expected = 'trim test';
      $.deepEqual(actual, expected, actual);

      actual = string.trimRight(' ');
      expected = '';
      $.deepEqual(actual, expected, actual);

      actual = string.trimRight('');
      expected = '';
      $.deepEqual(actual, expected, actual);
    });

    /**
     * padLeft
     */
    $.test('padLeft', function () {
      var actual, expected;

      actual = string.padLeft('pad test', 8 + 1);
      expected = ' pad test';
      $.deepEqual(actual, expected, actual);

      actual = string.padLeft('pad test', 8);
      expected = 'pad test';
      $.deepEqual(actual, expected, actual);

      actual = string.padLeft('pad test', 8 - 1);
      expected = 'pad test';
      $.deepEqual(actual, expected, actual);

      actual = string.padLeft('pad test', 8 + 1, '?');
      expected = '?pad test';
      $.deepEqual(actual, expected, actual);

      actual = string.padLeft('pad test', 8, '$');
      expected = 'pad test';
      $.deepEqual(actual, expected, actual);

      actual = string.padLeft('pad test', 8 - 1, '\\');
      expected = 'pad test';
      $.deepEqual(actual, expected, actual);
    });

    /**
     * padRight
     */
    $.test('padRight', function () {
      var actual, expected;

      actual = string.padRight('pad test', 8 + 1);
      expected = 'pad test ';
      $.deepEqual(actual, expected, actual);

      actual = string.padRight('pad test', 8);
      expected = 'pad test';
      $.deepEqual(actual, expected, actual);

      actual = string.padRight('pad test', 8 - 1);
      expected = 'pad test';
      $.deepEqual(actual, expected, actual);

      actual = string.padRight('pad test', 8 + 1, '?');
      expected = 'pad test?';
      $.deepEqual(actual, expected, actual);

      actual = string.padRight('pad test', 8, '$');
      expected = 'pad test';
      $.deepEqual(actual, expected, actual);

      actual = string.padRight('pad test', 8 - 1, '\\');
      expected = 'pad test';
      $.deepEqual(actual, expected, actual);
    });

    /**
     * replaceAll
     */
    $.test('replaceAll', function () {
      var actual, expected;

      actual = string.replaceAll('test /%s/\n /%s/% s% test', '/%s/', 'test');
      expected = 'test test\n test% s% test';
      $.deepEqual(actual, expected, actual);
    });

    /**
     *
     */
    $.test('format', function () {
      var actual, expected;

      actual = string.format('test /%s/ /%s/% s% test', '1', '2');
      expected = 'test /1/ /2/% s% test';
      $.deepEqual(actual, expected, actual);

      actual = string.format('test /%s/ /%s/% s% test');
      expected = 'test /%s/ /%s/% s% test';
      $.deepEqual(actual, expected, actual);

      actual = string.format('test /%s/ /%s/% s% test', '1', '2', '3');
      expected = 'test /1/ /2/% s% test';
      $.deepEqual(actual, expected, actual);
    });

    /**
     *
     */
    $.test('startsWith', function () {
      var actual, expected;

      actual = string.startsWith('C:\\Program Files\\JavaScript\\bin', 'C:\\');
      expected = true;
      $.deepEqual(actual, expected, actual);

      actual = string.startsWith('C:\\Program Files\\JavaScript\\bin', 'c:\\');
      expected = false;
      $.deepEqual(actual, expected, actual);
    });

    /**
     * endsWith
     */
    $.test('endsWith', function () {
      var actual, expected;

      actual = string.endsWith('C:\\Program Files\\JavaScript\\bin', '\\bin');
      expected = true;
      $.deepEqual(actual, expected, actual);

      actual = string.endsWith('C:\\Program Files\\JavaScript\\bin', '\bin');
      expected = false;
      $.deepEqual(actual, expected, actual);
    });
  });

}(QUnit));
