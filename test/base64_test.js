/*global QUnit, lego */
/*jslint indent: 2 */
(function ($) {
  'use strict';

  lego.define(['base64'], function (require) {
    var base64 = require('base64');

    /**
     * encode
     */
    $.test('encode', function () {
      $.deepEqual(base64.encode('%u'), 'JXU=');
      $.deepEqual(base64.encode('123'), 'MTIz');
      $.deepEqual(base64.encode('<br>'), 'PGJyPg==');
      $.deepEqual(base64.encode(''), '');
    });

    /**
     * decode
     */
    $.test('decode', function () {
      $.deepEqual(base64.decode('JXU='), '%u');
      $.deepEqual(base64.decode('MTIz'), '123');
      $.deepEqual(base64.decode('PGJyPg=='), '<br>');
      $.deepEqual(base64.decode(''), '');
    });

    /**
     * encodeSafe
     */
    $.test('encodeSafe', function () {
      $.deepEqual(base64.encodeSafe('%u'), 'JTI1dQ..');
      $.deepEqual(base64.encodeSafe('123'), 'MTIz');
      $.deepEqual(base64.encodeSafe('試験'), 'JXU4QTY2JXU5QTEz');
      $.deepEqual(base64.encodeSafe('ﾌﾟｷﾞｬｰ'),
        'JXVGRjhDJXVGRjlGJXVGRjc3JXVGRjlFJXVGRjZDJXVGRjcw');
      $.deepEqual(base64.encodeSafe('<br>'), 'JTNDYnIlM0U.');
      $.deepEqual(base64.encodeSafe(''), '');
    });

    /**
     * decodeSafe
     */
    $.test('decodeSafe', function () {
      $.deepEqual(base64.decodeSafe('JTI1dQ..'), '%u');
      $.deepEqual(base64.decodeSafe('MTIz'), '123');
      $.deepEqual(base64.decodeSafe('JXU4QTY2JXU5QTEz'), '試験');
      $.deepEqual(base64.decodeSafe(
        'JXVGRjhDJXVGRjlGJXVGRjc3JXVGRjlFJXVGRjZDJXVGRjcw'
      ), 'ﾌﾟｷﾞｬｰ');
      $.deepEqual(base64.decodeSafe('JTNDYnIlM0U.'), '<br>');
      $.deepEqual(base64.decodeSafe(''), '');
    });
  });

}(QUnit));
