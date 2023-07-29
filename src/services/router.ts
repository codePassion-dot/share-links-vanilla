const Router = {
  init: () => {
    const menuLinks = document.querySelectorAll(
      "a.navlink",
    ) as NodeListOf<HTMLAnchorElement>;
    menuLinks.forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = (event.currentTarget as HTMLAnchorElement).href;
        Router.go(url);
      });
    });
    // Event Handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // Check the initial URL
    Router.go(location.pathname);
  },
  go: (route: string, addToHistory: boolean = true) => {
    console.log(`Going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("sign-in-page");
        break;
    }
    if (pageElement) {
      // document.querySelector("main").children[0].remove();
      const cache = document.querySelector("main");
      if (cache) {
        cache.innerHTML = "";
        cache.appendChild(pageElement);
        window.scrollX = 0;
        window.scrollY = 0;
      }
    } else {
      // 404
      document.querySelector("main")!.innerHTML = "Oups, 404!";
    }
  },
};
export default Router;
