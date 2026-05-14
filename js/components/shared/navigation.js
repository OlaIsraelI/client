export const initNavigationMenu = () => {
  const navBar = document.querySelector(".navigation-bar");
  const navToggle = document.querySelector(".nav-toggle");

  if (!navBar || !navToggle) {
    return;
  }

  const navIcon = navToggle.querySelector("i");
  const navLinks = navBar.querySelectorAll(".nav-links a, .nav-actions a");

  const setMenuState = (isOpen) => {
    navBar.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

    if (navIcon) {
      navIcon.classList.toggle("fa-bars", !isOpen);
      navIcon.classList.toggle("fa-xmark", isOpen);
    }
  };

  navToggle.addEventListener("click", () => {
    const isOpen = !navBar.classList.contains("menu-open");
    setMenuState(isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 760px)").matches) {
        setMenuState(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenuState(false);
    }
  });
};
