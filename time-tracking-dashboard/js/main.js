let activeMenuItem = "weekly";
let DATA = [];
// INITIALLY FETCHING THE JSON DATA
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    DATA = data;
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        populateData();
      }
    };
  });

function populateData() {
  DATA.forEach((item) => {
    let currValElem = document.querySelector(
      `div.dashboard-item[id="${item.title}"] > div.sub-wrap > div.value > div.curr-value`
    );
    let prevValElem = document.querySelector(
      `div.dashboard-item[id="${item.title}"] > div.sub-wrap > div.value > div.prev-value`
    );

    switch (activeMenuItem) {
      case "daily":
        currValElem.innerText = `${item.timeframes["daily"].current}hrs`;
        prevValElem.innerText = `Yesterday - ${item.timeframes["daily"].previous}hrs`;
        break;
      case "weekly":
        currValElem.innerText = `${item.timeframes["weekly"].current}hrs`;
        prevValElem.innerText = `Last Week - ${item.timeframes["weekly"].previous}hrs`;
        break;
      case "monthly":
        currValElem.innerText = `${item.timeframes["monthly"].current}hrs`;
        prevValElem.innerText = `Last Month - ${item.timeframes["monthly"].previous}hrs`;
        break;
    }
  });
}

function choosePeriod(val) {
  activeMenuItem = val;
  clearMenuItemsActiveState();
  populateData();

  let menuItem = document.querySelector(`div.nav-menu > div.menu-item#${val}`);
  menuItem.classList.add("active");
}

function clearMenuItemsActiveState() {
  let elems = document.querySelectorAll("div.nav-menu > div.menu-item");
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove("active");
  }
}
