# lego.js
lego.js is a lightweight module loader for client-side JavaScript. It is inspired by [CommonJS Modules](http://wiki.commonjs.org.mirrors.page.ca/articles/m/o/d/Modules.html), [RequireJS](https://github.com/jrburke/requirejs) and so on.

## Features
* It supports AMD (Asynchronous Module Definition). But it is not fully compatible with RequireJS.
* It is CommonJS Modules compliant.
* It is small footprint (about 1KB, minified via Closure Compiler and gzipped).
* It dosen't pollute the global namespace.
* It works in Chrome, Firefox, Opera, Safari, Mobile Safari, Android Browser, and IE 6.0+.

## Syntax
define function pattern 1

    (function (define) {

      define([dependencies], function (require) {
        // your code here
      });

    }(lego.define));

define function pattern 2

    (function (define) {

      define(function () {
        // your code here
      });

    }(lego.define));

define function pattern 3

    (function (define) {

      define(id, [dependencies], function (require, exports, module) {
        // your code here
      });

    }(lego.define));

define function pattern 4

    (function (define) {

      define(id, [dependencies], function (require, exports, module) {
        // your code here
      }, baseId);

    }(lego.define));

## License
lego.js is available under the terms of the MIT license.
