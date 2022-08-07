document.onreadystatechange = () => {
  if (document.readyState == 'complete') registerEvents();
};

let mobileMenuToggle = false;

function registerEvents() {
  registerNavMenuEvents();
}

function registerNavMenuEvents() {
  document.querySelectorAll('.menu-item').forEach((elem) => {
    elem.addEventListener('click', (el) => {
      resetNavMenuProps();
      el.target.classList.add('menu-item-selected');
    });
  });

  document.querySelector('.menu-icon').addEventListener('click', () => {
    toggleMoblieMenu();
  });

  document.querySelector('.down-arrow-wrap').addEventListener('click', () => {
    scrollIntoGrid();
  });
}

function resetNavMenuProps() {
  document.querySelectorAll('.menu-item').forEach((elem) => {
    elem.classList.remove('menu-item-selected');
  });
}

function toggleMoblieMenu() {
  let menuElem = document.querySelector('.menu-wrap');
  if (!mobileMenuToggle) {
    menuElem.classList.add('mob-menu-visible');
  } else {
    menuElem.classList.remove('mob-menu-visible');
  }
  mobileMenuToggle = !mobileMenuToggle;
}

function scrollIntoGrid() {
  document.querySelector('#grid-section').scrollIntoView({
    behavior: 'smooth',
  });
}
