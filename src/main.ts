import { SignInPage } from "./components/SignIn.ts";
import Router from "./services/router.ts";

import "./index.css";
import { BasePage } from "./components/BasePage.ts";

declare global {
  interface Window {
    app: { router: typeof Router };
  }
}

window.app = {
  router: Router,
};

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  window.app.router.init();
});

customElements.define("sign-in-page", SignInPage);
customElements.define("base-page", BasePage);
