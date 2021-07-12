document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    registerEvents();
  }
};

let tipPercentValue = "";
let billValue = 0;
let peopleValue = 0;

function registerEvents() {
  // document.querySelector('input#radioCustom').addEventListener('change', customPercentToggle);
  document
    .querySelector(".input-box.bill > input")
    .addEventListener("input", billUpdate);
  document
    .querySelector(".input-box.people > input")
    .addEventListener("input", peopleUpdate);
  document
    .querySelector(".percent-item.custom > input")
    .addEventListener("input", customPercentUpdate);
  document.querySelectorAll(".percent-radio").forEach((el) => {
    el.addEventListener("change", percentRadioChangeHandle);
  });
  document.querySelector(".sub-sec.btn").addEventListener("click", reset);
}

function billUpdate(el) {
  billValue = +el.srcElement.value;
  updateResult();
}

function peopleUpdate(el) {
  peopleValue = +el.srcElement.value;
  updateResult();
}

function customPercentUpdate(el) {
  tipPercentValue = +el.srcElement.value;
  updateResult();
}

function percentRadioChangeHandle(el) {
  hideCustomPercent();
  tipPercentValue = +el.srcElement.value;
  if (el.srcElement.id == "radioCustom") {
    showCustomPercent(el);
    tipPercentValue = +document.querySelector(".percent-item.custom > input")
      .value;
  }
  updateResult();
}

function showCustomPercent(el) {
  if (el.srcElement.checked == true) {
    document
      .querySelector(".percent-item.custom > span")
      .classList.add("hidden");
    let percentInput = document.querySelector(".percent-item.custom > input");
    percentInput.classList.remove("hidden");
    percentInput.focus();
  }
}

function hideCustomPercent() {
  document
    .querySelector(".percent-item.custom > span")
    .classList.remove("hidden");
  document
    .querySelector(".percent-item.custom > input")
    .classList.add("hidden");
}

function updateResult() {
  let tipElem = document.querySelector(".result-amount.tip > span");
  let totalElem = document.querySelector(".result-amount.total > span");

  if (+peopleValue <= 0) peopleInputErrorToggle(true);
  else peopleInputErrorToggle(false);

  if (+peopleValue <= 0 || +billValue <= 0) {
    tipElem.innerText = "0.00";
    totalElem.innerText = "0.00";
    toggleResetActive(false);
    return;
  }
  toggleResetActive(true);

  let totalTip = +billValue * (+tipPercentValue / 100);
  let totalBillWithTip = +billValue + totalTip;

  let tipPerPerson = parseFloat(totalTip / +peopleValue).toFixed(2);
  let totalPerPerson = parseFloat(totalBillWithTip / +peopleValue).toFixed(2);

  tipElem.innerText = tipPerPerson;
  totalElem.innerText = totalPerPerson;
}

function toggleResetActive(val) {
  let resetButton = document.querySelector(".sub-sec.btn");
  if (val == true) resetButton.classList.add("reset-active");
  else resetButton.classList.remove("reset-active");
}

function reset() {
  let tipElem = document.querySelector(".result-amount.tip > span");
  let totalElem = document.querySelector(".result-amount.total > span");

  peopleValue = 0;
  billValue = 0;
  tipPercentValue = "";

  tipElem.innerText = "0.00";
  totalElem.innerText = "0.00";
  toggleResetActive(false);
  hideCustomPercent();

  document.querySelector(".input-box.bill > input").value = "";
  document.querySelector(".input-box.people > input").value = "";
  document.querySelector(".percent-item.custom > input").value = "";
  document.querySelectorAll(".percent-radio").forEach((el) => {
    el.checked = false;
  });
  peopleInputErrorToggle(false);
}

function peopleInputErrorToggle(val) {
  let elemInp = document.querySelector(".input-box.people");
  let elemText = document.querySelector(".label-title.no-people > .error");
  if (val == true) {
    elemInp.classList.add("error");
    elemText.classList.remove("hidden");
  } else {
    elemInp.classList.remove("error");
    elemText.classList.add("hidden");
  }
}
