document.onreadystatechange = () => {
    if(document.readyState == 'complete') {
        registerEvents();
    }
}

function registerEvents() {
    document.querySelector('.filter-item.all').addEventListener('click',filterAllItems);
    document.querySelector('.filter-item.level1').addEventListener('click',filterLevel1Items);
    document.querySelector('.filter-item.level2').addEventListener('click',filterLevel2Items);
}

function filterAllItems(el) {
    clearAllFilters();
    el.currentTarget.classList.add('filter-selected');
    document.querySelectorAll('.portfolio-item').forEach ( el => {
        el.style.display = 'block';
    })
}

function filterLevel1Items(el) {
    clearAllFilters();
    el.currentTarget.classList.add('filter-selected');
    document.querySelectorAll('.portfolio-item.level1').forEach ( el => {
        el.style.display = 'block';
    })
}

function filterLevel2Items(el) {
    clearAllFilters();
    el.currentTarget.classList.add('filter-selected');
    document.querySelectorAll('.portfolio-item.level2').forEach ( el => {
        el.style.display = 'block';
    })
}

function clearAllFilters() {
    document.querySelectorAll('.filter-item').forEach ( el => {
        el.classList.remove('filter-selected');
    })

    document.querySelectorAll('.portfolio-item').forEach ( el => {
        el.style.display = 'none';
    })

}