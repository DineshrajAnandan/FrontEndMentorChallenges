document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    registerEvents();
  }
};

function registerEvents() {
  document.querySelectorAll('.icon-prev').forEach((el) => {
    el.addEventListener('click', displaySlideOne);
  });

  document.querySelectorAll('.icon-next').forEach((el) => {
    el.addEventListener('click', displaySlideTwo);
  });
}

function displaySlideOne() {
  let elem = document.querySelector('.slide-container.slide-1');
  // elem.classList.remove('hidden-left');
  elem.classList.remove('hidden');
  let elem2 = document.querySelector('.slide-container.slide-2');
  // elem2.classList.add('hidden-right');
  elem2.classList.add('hidden');
}

function displaySlideTwo() {
  let elem = document.querySelector('.slide-container.slide-1');
  elem.classList.add('hidden');
  let elem2 = document.querySelector('.slide-container.slide-2');
  elem2.classList.remove('hidden');
}
