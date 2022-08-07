document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        registerEvents()
    }
}
let yearlyToggle = false;

function registerEvents() {
    document.querySelector('.toggle-item').addEventListener('click', toggleYearlyPrice);
}

function toggleYearlyPrice(el) {
    yearlyToggle = !yearlyToggle;
    let toggleCircle = document.querySelector('.toggle-item-circle');
    if (yearlyToggle) {
        toggleCircle.style.left = 'unset';
        toggleCircle.style.right = '15%';
    }
    else {
        toggleCircle.style.left = '15%';
        toggleCircle.style.right = 'unset';
    }

    let rangeVal = document.querySelector('.price-slider > input').value;
    calculatePrice(rangeVal);
}

function calculatePrice(value) {
    var val = (+value-1)/(5-1)*100;
    document.body.style.setProperty(
        '--webkit-slider-background', 
        'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + val + '%, #eaeefb ' + val + '%, #eaeefb 100%)'
    );


    let pageViews = '';
    let price = 0;

    switch (value) {
        case "1":
            pageViews = '10K';
            price = 8;
            break;
        case "2":
            pageViews = '50K';
            price = 12;
            break;
        case "3":
            pageViews = '100K';
            price = 16;
            break;
        case "4":
            pageViews = '500K';
            price = 24;
            break;
        case "5":
            pageViews = '1M';
            price = 36;
            break;
    }

    if (yearlyToggle) price = parseFloat(price - price/4);

    document.querySelector('.page-view-count > span').innerText = pageViews;
    document.querySelector('.price-amount > span > span').innerText = price+'.00';
}
