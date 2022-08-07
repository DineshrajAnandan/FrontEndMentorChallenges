document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    registerEvents();
  }
};

let bookmarked = false;

function registerEvents() {
  document
    .querySelector('.bookmark-button-wrap')
    .addEventListener('click', toggleBookMark);
  document
    .querySelector('.back-this-button')
    .addEventListener('click', openBackThisProjectModal);
  document
    .querySelector('.back-this-modal-close')
    .addEventListener('click', closeBackThisProjectModal);
  document
    .querySelectorAll('.desktop-model-item-head > .modal-item-title')
    .forEach((el) => {
      el.addEventListener('click', selectModalItemFromTitle);
    });
  document.querySelectorAll('.modal-item-radio').forEach((el) => {
    el.addEventListener('click', selectModalItemFromRadio);
  });
  document.querySelectorAll('.pledge-continue-btn').forEach((el) => {
    el.addEventListener('click', showSuccessModal);
  });
  document
    .querySelector('.success-modal-button')
    .addEventListener('click', closeSuccessModal);

  document
    .querySelector('.header-menu-ham > .ham-open')
    .addEventListener('click', openHamMenu);
  document
    .querySelector('.header-menu-ham > .ham-close')
    .addEventListener('click', closeHamMenu);
  document
    .querySelector('.modal-overlay')
    .addEventListener('click', closeModals);
}

function openHamMenu() {
  document.querySelector('.header-menu').style.display = 'block';
  document.querySelector('.ham-menu-overlay').style.display = 'block';
  document.querySelector('.ham-open').style.display = 'none';
  document.querySelector('.ham-close').style.display = 'block';
}

function closeHamMenu() {
  document.querySelector('.header-menu').style.display = 'none';
  document.querySelector('.ham-menu-overlay').style.display = 'none';
  document.querySelector('.ham-open').style.display = 'block';
  document.querySelector('.ham-close').style.display = 'none';
}

function closeModals() {
  clearAllModalRadios();
  document.querySelector('.modal-overlay').style.display = 'none';
  document.querySelector('.back-this-modal').style.display = 'none';
  document.querySelector('.success-modal-wrap').style.display = 'none';
}

function showSuccessModal() {
  clearAllModalRadios();
  window.scrollTo(0, 0);
  document.querySelector('.success-modal-wrap').style.display = 'block';
  document.querySelector('.back-this-modal').style.display = 'none';
}

function closeSuccessModal() {
  document.querySelector('.success-modal-wrap').style.display = 'none';
  document.querySelector('.modal-overlay').style.display = 'none';
}

function selectModalItemFromRadio(el) {
  clearAllModalRadios();
  el.currentTarget.querySelector('.radio-inner').style.display = 'block';
  el.currentTarget.parentElement.classList.add('selected');
  let pledge = el.currentTarget.parentElement.querySelector('.pledge-wrap');
  !!pledge && pledge.classList.remove('hidden');
  !!pledge &&
    el.currentTarget.parentElement
      .querySelector('.pledge-wrap > .pledge-price-input')
      .classList.add('selected');
}

function selectModalItemFromTitle(el) {
  clearAllModalRadios();
  el.currentTarget.parentElement.parentElement.parentElement.querySelector(
    '.modal-item-radio > .radio-outer > .radio-inner'
  ).style.display = 'block';
  el.currentTarget.parentElement.parentElement.parentElement.classList.add(
    'selected'
  );
  let pledge =
    el.currentTarget.parentElement.parentElement.parentElement.querySelector(
      '.pledge-wrap'
    );
  !!pledge && pledge.classList.remove('hidden');
  !!pledge &&
    el.currentTarget.parentElement.parentElement.parentElement
      .querySelector('.pledge-wrap > .pledge-price-input')
      .classList.add('selected');
}

function clearAllModalRadios() {
  document
    .querySelectorAll('.modal-item-radio > .radio-outer > .radio-inner')
    .forEach((el) => {
      el.style.display = 'none';
    });
  document.querySelectorAll('.back-this-modal-item').forEach((el) => {
    el.classList.remove('selected');
  });
  document.querySelectorAll('.pledge-wrap').forEach((el) => {
    el.classList.add('hidden');
  });
  document
    .querySelectorAll('.pledge-wrap > .pledge-price-input')
    .forEach((el) => {
      el.classList.remove('selected');
    });
}

function openBackThisProjectModal() {
  document.querySelector('.modal-overlay').style.display = 'block';
  document.querySelector('.back-this-modal').style.display = 'block';
}

function closeBackThisProjectModal() {
  clearAllModalRadios();
  document.querySelector('.modal-overlay').style.display = 'none';
  document.querySelector('.back-this-modal').style.display = 'none';
}

function toggleBookMark(el) {
  bookmarked = !bookmarked;
  if (bookmarked) {
    el.currentTarget.classList.add('bookmarked');
    el.currentTarget.children[1].innerText = 'Bookmarked';
  } else {
    el.currentTarget.classList.remove('bookmarked');
    el.currentTarget.children[1].innerText = 'Bookmark';
  }
}
