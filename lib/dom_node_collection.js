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
