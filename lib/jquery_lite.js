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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function (arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(arg));
  } else {
    const selector = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(selector));
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(htmlArr) {
    this.htmlArr = htmlArr;
  }

  html(string) {
    if (string) {
      this.htmlArr.forEach( (el) => {
        el.innerHTML = string;
      });
    } else {
      return this.htmlArr[0].innerHTML;
    }
  }

  empty() {
    this.htmlArr.forEach( (el) => {
      el.innerHTML = '';
    });
  }

  append(arg) {
    for (let i=0; i<this.htmlArr.length; i++){
      if (typeof arg === 'string') {
        this.htmlArr[i].innerHTML += arg;
      } else {
        for (let j=0; j<arg.length; j++){
          this.htmlArr[i].innerHTML += arg[j].outerHTML;
        }
      }
    }
  }

  attr(key, value) {
    for(let i=0; i<this.htmlArr.length; i++){
      if (typeof value !== 'undefined') {
        this.htmlArr[i].setAttribute(key, value);
      } else {
        console.log("Get");
        return this.htmlArr[i].getAttribute(key);
      }
    }
  }

  addClass(name) {
    for (let i = 0; i < this.htmlArr.length; i++) {
      if (this.htmlArr[i].className.length === 0) {
        this.htmlArr[i].className = name;
      } else {
        this.htmlArr[i].className += ` ${name}`;
      }
    }
  }

  removeClass(name){
    for (let i = 0; i < this.htmlArry.length; i++) {
      this.htmlArry[i].classList.remove(name);
    }
  }

  children() {
    const childrenArr = [];
    this.htmlArr.forEach( el => {
      for (let i=0; i < el.children.length; i++) {
        childrenArr.push(new DOMNodeCollection([el.children]));
      }
    });
    return childrenArr;
  }

  parent() {
    const parentArr = [];
    this.htmlArr.forEach( el => {
      for (let i=0; i < el.parent.length; i++) {
        parentArr.push(new DOMNodeCollection([el.parent]));
      }
    });
    return parentArr;
  }

}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);