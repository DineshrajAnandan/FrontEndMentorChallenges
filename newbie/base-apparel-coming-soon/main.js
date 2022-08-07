document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    registerValidation();
  }
};

function registerValidation() {
  const elem = document.querySelector('.send-btn');
  elem.addEventListener('click', () => {
    const email = document.querySelector('.email-input').value;
    if (!email || !ValidateEmail(email)) showEmailError();
    else submitEmail();
  });
}

function showEmailError() {
  const errIconElem = document.querySelector('.err-icon');
  errIconElem.style.visibility = 'visible';
  const errMsgElem = document.querySelector('.err-msg');
  errMsgElem.style.visibility = 'visible';

  document.querySelector('.email-input').focus();
}

function submitEmail() {
  const errIconElem = document.querySelector('.err-icon');
  errIconElem.style.visibility = 'hidden';
  const errMsgElem = document.querySelector('.err-msg');
  errMsgElem.style.visibility = 'hidden';

  document.querySelector('.email-input').value = '';
}

function ValidateEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}
