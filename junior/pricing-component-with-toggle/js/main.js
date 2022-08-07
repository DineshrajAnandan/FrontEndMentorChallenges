document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    registerEvents();
  }
};

let annualToggle = false;

function registerEvents() {
  document.onkeydown = checkKey;
  document
    .querySelector(".toggle-outer")
    .addEventListener("click", handleTogglePricing);
}

function checkKey(event) {
  switch (event.key) {
    case "ArrowLeft":
      annualToggle = true;
      break;
    case "ArrowRight":
      annualToggle = false;
      break;
  }
  togglePricing();
}

function handleTogglePricing() {
  annualToggle = !annualToggle;
  togglePricing();
}

function togglePricing() {
  let innerElem = document.querySelector(".toggle-inner");
  let annualElems = document.querySelectorAll(".annually");
  let monthlyElems = document.querySelectorAll(".monthly");
  if (annualToggle) {
    innerElem.classList.add("annual");
    monthlyElems.forEach((el) => {
      el.classList.add("hidden");
    });
    annualElems.forEach((el) => {
      el.classList.remove("hidden");
    });
  } else {
    innerElem.classList.remove("annual");
    monthlyElems.forEach((el) => {
      el.classList.remove("hidden");
    });
    annualElems.forEach((el) => {
      el.classList.add("hidden");
    });
  }
}
