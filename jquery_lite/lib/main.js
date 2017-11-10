const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function (arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(arg));
  } else {
    const selector = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(selector));
  }
};
