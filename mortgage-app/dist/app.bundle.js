/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mortgage2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mortgage2 */ \"./src/mortgage2.js\");\n\ndocument.getElementById('calcBtn').addEventListener('click', function () {\n  var principal = document.getElementById(\"principal\").value;\n  var years = document.getElementById(\"years\").value;\n  var rate = document.getElementById(\"rate\").value;\n  var mortgage = new _mortgage2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](principal, years, rate);\n  document.getElementById(\"monthlyPayment\").innerHTML = mortgage.monthlyPayment.toFixed(2);\n  document.getElementById(\"monthlyRate\").innerHTML = (rate / 12).toFixed(2);\n  var html = \"\";\n  mortgage.amortization.forEach(function (year, index) {\n    return html += \"\\n        <tr>\\n            <td>\".concat(index + 1, \"</td>\\n            <td class=\\\"currency\\\">\").concat(Math.round(year.principalY), \"</td>\\n            <td class=\\\"stretch\\\">\\n                <div class=\\\"flex\\\">\\n                    <div class=\\\"bar principal\\\" style=\\\"flex:\").concat(year.principalY, \";-webkit-flex:\").concat(year.principalY, \"\\\"></div>\\n                    <div class=\\\"bar interest\\\" style=\\\"flex:\").concat(year.interestY, \";-webkit-flex:\").concat(year.interestY, \"\\\">\\n                    </div>\\n                </div>\\n            </td>\\n            <td class=\\\"currency left\\\">\").concat(Math.round(year.interestY), \"</td>\\n            <td class=\\\"currency\\\">\").concat(Math.round(year.balance), \"</td>\\n        </tr>\\n    \");\n  });\n  document.getElementById(\"amortization\").innerHTML = html;\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/mortgage2.js":
/*!**************************!*\
  !*** ./src/mortgage2.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mortgage; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Mortgage =\n/*#__PURE__*/\nfunction () {\n  function Mortgage(principal, years, rate) {\n    _classCallCheck(this, Mortgage);\n\n    this.principal = principal;\n    this.years = years;\n    this.rate = rate;\n  }\n\n  _createClass(Mortgage, [{\n    key: \"monthlyPayment\",\n    get: function get() {\n      var monthlyRate = this.rate / 100 / 12;\n      return this.principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), this.years * 12));\n    }\n  }, {\n    key: \"amortization\",\n    get: function get() {\n      var monthlyPayment = this.monthlyPayment;\n      var monthlyRate = this.rate / 100 / 12;\n      var balance = this.principal;\n      var amortization = [];\n\n      for (var y = 0; y < this.years; y++) {\n        var interestY = 0;\n        var principalY = 0;\n\n        for (var m = 0; m < 12; m++) {\n          var interestM = balance * monthlyRate;\n          var principalM = monthlyPayment - interestM;\n          interestY = interestY + interestM;\n          principalY = principalY + principalM;\n          balance = balance - principalM;\n        }\n\n        amortization.push({\n          principalY: principalY,\n          interestY: interestY,\n          balance: balance\n        });\n      }\n\n      return amortization;\n    }\n  }]);\n\n  return Mortgage;\n}();\n\n\n\n//# sourceURL=webpack:///./src/mortgage2.js?");

/***/ })

/******/ });