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

const Router = __webpack_require__(1);
const Inbox = __webpack_require__(2);
const Sent = __webpack_require__(4);

const routes = {};
routes["inbox"] = new Inbox;
routes["sent"] = new Sent;

document.addEventListener("DOMContentLoaded", (event) => {
  const router = new Router(document.querySelector('.content'), routes);
  router.start();
  document.querySelectorAll('.sidebar-nav li').forEach(el => {
      el.addEventListener("click", (e) => {
      const loc = e.target.innerText.toLowerCase();
      window.location.hash = loc;
    });
  })
});



/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }
  
  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }
  
  activeRoute() {
    const route = window.location.hash.slice(1);
    const keys = Object.keys(this.routes);
    for (let i=0; i < keys.length; i++){
      if (keys[i] === route) return this.routes[keys[i]];
    }
  }
  
  render() {
    let component = this.activeRoute();
    this.node.innerHTML = "";
    if (component) {
      this.node.appendChild(component.render());
    }
  }
}

module.exports = Router;



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const MessageStore = __webpack_require__(3);

class Inbox {
  render() {
    let ul = document.createElement('ul');
    const inboxMsg = MessageStore.getInboxMessages();
    for(let i=0; i<inboxMsg.length;i++){
      const result = this.renderMessage(inboxMsg[i]);
      ul.appendChild(result);
    }
    return ul;
  }
  
  renderMessage(message) {
    let li = document.createElement('li');
    li.className = 'messages';
    li.innerHTML += `<span class="from">${message.from}</span>`;
    li.innerHTML += `<span class="subject">${message.subject}</span>`;
    li.innerHTML += `<span class="body">${message.body}</span>`;
    return li;
  }
}

module.exports = Inbox;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/appacademy/Desktop/W6D4/mail/message_store.js Unexpected token (27:29)\nYou may need an appropriate loader to handle this file type.\n|   },\n|   \n|   messageDraft: new Message();\n| };\n| ");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const MessageStore = __webpack_require__(3);

class Sent {
  render() {
    let ul = document.createElement('ul');
    const sentMsg = MessageStore.getSentMessages();
    for(let i=0; i<sentMsg.length;i++){
      const result = this.renderMessage(sentMsg[i]);
      ul.appendChild(result);
    }
    return ul;
  }
  
  renderMessage(message) {
    let li = document.createElement('li');
    li.className = 'messages';
    li.innerHTML += `<span class="to">${message.to}</span>`;
    li.innerHTML += `<span class="subject">${message.subject}</span>`;
    li.innerHTML += `<span class="body">${message.body}</span>`;
    return li;
  }
}

module.exports = Sent;

/***/ })
/******/ ]);