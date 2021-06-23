document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    registerDesktopEvents();
    registerMobileEvents();
  }
};

function registerDesktopEvents() {
  document.querySelectorAll('.nav-main-menu').forEach((elem) => {
    elem.addEventListener('click', toggleDesktopNavMenu);
  });
}

function registerMobileEvents() {
  document
    .querySelector('.ham-menu-div')
    .addEventListener('click', toggleMobileNavMenu);

  document.querySelectorAll('.mobile-nav-main-menu').forEach((elem) => {
    elem.addEventListener('click', toggleMobileNavSubMenu);
  });
}

function toggleDesktopNavMenu(el) {
  let currVisibility = el.currentTarget.nextElementSibling.style.visibility;
  let currTransform = el.currentTarget.children[0].style.transform;
  closeAllDesktopNavMenu();

  el.currentTarget.nextElementSibling.style.visibility =
    currVisibility == 'visible' ? 'hidden' : 'visible';
  el.currentTarget.nextElementSibling.style.opacity =
    currVisibility == 'visible' ? 0 : 1;
  el.currentTarget.children[0].style.transform =
    currTransform == 'rotate(180deg)' ? 'unset' : 'rotate(180deg)';
}

function closeAllDesktopNavMenu() {
  document.querySelectorAll('.nav-sub-menu-group').forEach((el) => {
    el.style.visibility = 'hidden';
    el.style.opacity = 0;
  });
  document.querySelectorAll('.nav-main-menu > img').forEach((elem) => {
    elem.style.transform = 'unset';
  });
}

function toggleMobileNavMenu() {
  let currDisplay = document.querySelector('.mobile-nav-menu-wrap').style
    .display;
  document.querySelector('.mobile-nav-menu-wrap').style.display =
    currDisplay == 'block' ? 'none' : 'block';
  if (currDisplay == 'block') {
    closeAllMobileNavMenu();
    document.querySelector('.menu-ham').style.display = 'block';
    document.querySelector('.menu-close').style.display = 'none';
  } else {
    document.querySelector('.menu-ham').style.display = 'none';
    document.querySelector('.menu-close').style.display = 'block';
  }
}

function toggleMobileNavSubMenu(el) {
  let currDisplay = el.currentTarget.nextElementSibling.style.display;
  let currTransform = el.currentTarget.children[0].style.transform;
  closeAllMobileNavMenu();

  el.currentTarget.style.color =
    currDisplay == 'block' ? 'hsl(240, 10%, 16%)' : 'hsl(207, 13%, 34%)';
  el.currentTarget.nextElementSibling.style.display =
    currDisplay == 'block' ? 'none' : 'block';
  el.currentTarget.nextElementSibling.style.opacity =
    currDisplay == 'block' ? 0 : 1;
  el.currentTarget.children[0].style.transform =
    currTransform == 'rotate(180deg)' ? 'unset' : 'rotate(180deg)';
}

function closeAllMobileNavMenu() {
  document.querySelectorAll('.mobile-nav-sub-menu-group').forEach((el) => {
    el.style.display = 'none';
  });
  document.querySelectorAll('.mobile-nav-main-menu').forEach((elem) => {
    elem.style.color = 'hsl(240, 10%, 16%)';
  });
  document.querySelectorAll('.mobile-nav-main-menu > img').forEach((elem) => {
    elem.style.transform = 'unset';
  });
}
