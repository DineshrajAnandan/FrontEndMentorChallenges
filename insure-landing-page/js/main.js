document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    registerEvents();
  }
};

function registerEvents() {
  document
    .querySelector("nav.ham-menu.mobile > img.menu-ham")
    .addEventListener("click", (el) => {
      mobileMenuToggle(true);
    });
  document
    .querySelector("nav.ham-menu.mobile > img.menu-close")
    .addEventListener("click", (el) => {
      mobileMenuToggle(false);
    });
}

function mobileMenuToggle(isOpen) {
  let hamIcon = document.querySelector("nav.ham-menu.mobile > img.menu-ham");
  let closeIcon = document.querySelector(
    "nav.ham-menu.mobile > img.menu-close"
  );
  let navMenu = document.querySelector("nav.nav-menu.mobile");

  if (isOpen) {
    hamIcon.style.display = "none";
    closeIcon.style.display = "block";
    navMenu.style.display = "block";
  } else {
    hamIcon.style.display = "block";
    closeIcon.style.display = "none";
    navMenu.style.display = "none";
  }
}
