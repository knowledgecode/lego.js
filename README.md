# lego.js
Lego.js is an extensible library for JavaScript that is inspired by [CommonJS Modules](http://wiki.commonjs.org/wiki/Modules), [RequireJS](https://github.com/jrburke/requirejs) and so on.

## Features
* It supports AMD (Asynchronous Module Definition).
* It is probably compliant with the CommonJS Modules.
* It is compact (about 1KB, minified via Closure Compiler and gzipped).
* It dosen't pollute the global namespace.
* It works in Chrome, Firefox, Safari, Opera, iOS Safari, Android Browser, and IE 6.0+.

## Usage
define function pattern 1 (This pattern has "require" only.)

    (function (define) {

      define([dependencies], function (require) {
        // your code here
      });

    }(lego.define));

define function pattern 2 (This pattern has no "require".)

    (function (define) {

      define(function () {
        // your code here
      });

    }(lego.define));

define function pattern 3 (This pattern has "require", "exports" and "module".)

    (function (define) {

      define(id, [dependencies], function (require, exports, module) {
        // your code here
      });

    }(lego.define));

define function pattern 4 (This pattern has "require", "exports" and "module". In addition, it can extend a parent module.)

    (function (define) {

      define(id, [dependencies], function (require, exports, module) {
        // your code here
      }, baseId);

    }(lego.define));

## License
Lego.js is available under the terms of the MIT license.

### and ...
I'm not good at English, so let me know good English usage. :-)
