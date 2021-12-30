document.onreadystatechange = () => {
    if(document.readyState == "complete") {
        registerEvents();
    }
}

function registerEvents() {
    document.querySelector('div.sign-up-dialog > div.dialog-input-wrap > div.dialog-action').addEventListener('click', evt => {
        let email = document.querySelector('div.sign-up-dialog > div.dialog-input-wrap > input[type=email]').value;
        let error = !validateEmail(email);
        let errorMsgElem = document.querySelector('div.sign-up-dialog > div.dialog-input-wrap > span.email-error');
        errorMsgElem.style.display = error ? 'block' : 'none';

        if(!error) window.location.reload();
        
    })
}

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}