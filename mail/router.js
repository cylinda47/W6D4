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

