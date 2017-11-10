const Router = require('./router.js');
const Inbox = require('./inbox');
const Sent = require('./sent');

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

