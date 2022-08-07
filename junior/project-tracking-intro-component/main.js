document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      registerEvents();
    }
  };
  
  function registerEvents() {
    document
      .querySelector("nav.menu-icon.mobile > img.icon-hamburger")
      .addEventListener("click", (el) => {
        mobileMenuToggle(true);
      });
    document
      .querySelector("nav.menu-icon.mobile > img.icon-close")
      .addEventListener("click", (el) => {
        mobileMenuToggle(false);
      });
  }
  
  function mobileMenuToggle(isOpen) {
    let hamIcon = document.querySelector("nav.menu-icon.mobile > img.icon-hamburger");
    let closeIcon = document.querySelector(
      "nav.menu-icon.mobile > img.icon-close"
    );
    let navMenu = document.querySelector("nav.menu");
  
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
  