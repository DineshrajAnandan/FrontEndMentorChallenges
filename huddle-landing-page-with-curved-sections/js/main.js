document.onreadystatechange = () => {
    if(document.readyState == "complete") {
        registerEvents();
    }
}

function registerEvents() {
    document.querySelector('footer > div.footer-wrap > div.footer-content > div.footer-newsletter > div.newsletter-wrap > div.newsletter-action').addEventListener('click', evt => {
        let email = document.querySelector('footer > div.footer-wrap > div.footer-content > div.footer-newsletter > div.newsletter-wrap > input[type=email]').value;
        let error = !validateEmail(email);
        let errorMsgElem = document.querySelector('footer > div.footer-wrap > div.footer-content > div.footer-newsletter > span.email-error');
        errorMsgElem.style.display = error ? 'block' : 'none';

        if(!error) window.location.reload();
        
    })
}

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}