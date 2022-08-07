document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    registerEvents();
  }
};

function registerEvents() {
  var elems = document.querySelectorAll('.accordion-item');
  elems.forEach((elem) => {
    elem.addEventListener('click', (el) => {
      closeAllAccordion();
      document.querySelector(
        `#${el.currentTarget.id} > .faq-answer`
      ).style.display = 'block';
      document.querySelector(
        `#${el.currentTarget.id} > .faq-question`
      ).style.fontWeight = 'bold';
      document.querySelector(
        `#${el.currentTarget.id} > .faq-question > .arrow`
      ).style.transform = 'rotate(180deg)';
    });
  });
}

function closeAllAccordion() {
  var answerElems = document.querySelectorAll('.faq-answer');
  answerElems.forEach((elem) => {
    elem.style.display = 'none';
  });

  var questionElems = document.querySelectorAll('.faq-question');
  questionElems.forEach((elem) => {
    elem.style.fontWeight = '400';
  });

  var arrowElems = document.querySelectorAll('.arrow');
  arrowElems.forEach((elem) => {
    elem.style.transform = 'none';
  });
}
