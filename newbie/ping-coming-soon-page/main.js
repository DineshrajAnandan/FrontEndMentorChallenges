document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        registerEvents();
    }
}

function registerEvents() {
    document.querySelector('button.notify-btn').addEventListener('click', () => {
        let email = document.querySelector('input.email').value.trim();
        if (!!email && isEmailValid(email)) {
            clearInput();
        }
        else {
            showErrorMessage(email);
        }
    })
}

function showErrorMessage(email) {
    let errorMsgElem = document.querySelector('div.error-msg');
    errorMsgElem.style.visibility = "visible";
    errorMsgElem.innerText = !email ? "Whoops! It looks like you forgot to add your email" :
                                        "Please provide a valid email address";
                                        
    document.querySelector('input.email').style.border = "2px solid hsl(354, 100%, 66%)";

    if(window.screen.width <= 768) {
        document.querySelector('.email-wrap').style.gridGap = '3em';
    }
}

function clearInput() {
    document.querySelector('div.error-msg').style.visibility = "hidden";
    document.querySelector('input.email').style.border = "1px solid hsl(223, 100%, 88%)";
    document.querySelector('input.email').value = '';

    if(window.screen.width <= 768) {
        document.querySelector('.email-wrap').style.gridGap = '0.5em';
    }
}

function isEmailValid(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      );
}