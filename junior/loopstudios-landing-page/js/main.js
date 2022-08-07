document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    registerEvents();
  }
};

function registerEvents() {
  document
    .querySelector('.ham-menu.mobile')
    .addEventListener('click', openMobileMenu);
  document
    .querySelector('.menu-close.mobile')
    .addEventListener('click', closeMobileMenu);
}

function openMobileMenu(el) {
  el.currentTarget.classList.add('hidden');
  el.currentTarget.classList.remove('visible');

  document.querySelector('.menu-close.mobile').classList.add('visible');
  document.querySelector('.menu-close.mobile').classList.remove('hidden');

  document.querySelector('.mobile-menu-overlay').classList.add('visible');
  document.querySelector('.mobile-menu-overlay').classList.remove('hidden');

  document.querySelector('.header-wrap > .menu-wrap').classList.add('visible');
}

function closeMobileMenu(el) {
  el.currentTarget.classList.add('hidden');
  el.currentTarget.classList.remove('visible');

  document.querySelector('.ham-menu.mobile').classList.add('visible');
  document.querySelector('.ham-menu.mobile').classList.remove('hidden');

  document.querySelector('.mobile-menu-overlay').classList.remove('visible');
  document.querySelector('.mobile-menu-overlay').classList.add('hidden');

  document
    .querySelector('.header-wrap > .menu-wrap')
    .classList.remove('visible');
}
