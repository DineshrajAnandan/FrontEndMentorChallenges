document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    registerEvents();
  }
};

let showDarkMode = false;

function registerEvents() {
  document
    .querySelector(".switch-outer")
    .addEventListener("click", toggleDarkMode);
}

function toggleDarkMode() {
  showDarkMode = !showDarkMode;

  let bgDiv = document.querySelector(".bck-div");
  let body = document.querySelector("body");
  let switchText = document.querySelector(".mode-switch-wrap");
  let switchOuter = document.querySelector(".switch-outer");
  let switchInner = document.querySelector(".switch-inner");
  let headTitle = document.querySelector(".head-title-wrap > .title");
  let subTitle = document.querySelector(".sub-title");
  let headTitleDesc = document.querySelector(".head-title-wrap > .desc");
  let card = document.querySelectorAll(".item");
  let dashItemSectionOne = document.querySelectorAll(".dash-sec.one > span");
  let dashItemSectionTwo = document.querySelectorAll(".dash-sec.two");
  let dashItemSectionThree = document.querySelectorAll(".dash-sec.three");
  let overvItemSectionOne = document.querySelectorAll(".overv-sec.one");
  let overvItemSectionTwo = document.querySelectorAll(".overv-sec.two");

  if (showDarkMode) {
    bgDiv.style.setProperty("--bck-div-bg", "var(--very-dark-blue-top)");
    body.style.setProperty("--body-bg", "var(--very-dark-blue)");
    switchText.style.setProperty(
      "--switch-text-color",
      "var(--desaturated-blue)"
    );
    switchText.style.borderColor = "gray";
    switchOuter.style.setProperty("--switch-outer-bg", "var(--toggle-dark)");
    switchInner.classList.add("dark");
    headTitle.style.setProperty("--head-title-color", "var(--white)");
    subTitle.style.setProperty("--sub-title-color", "var(--white)");
    headTitleDesc.style.setProperty(
      "--head-desc-color",
      "var(--desaturated-blue)"
    );
    card.forEach((el) => {
      el.style.setProperty("--card-bg", "var(--dark-desaturated-blue)");
      el.style.setProperty("--card-bg-hvr", "#373d58");
    });
    dashItemSectionOne.forEach((el) => {
      el.style.setProperty("--dash-sec-one-color", "var(--desaturated-blue)");
    });
    dashItemSectionTwo.forEach((el) => {
      el.style.setProperty("--dash-sec-two-color", "var(--white)");
    });
    dashItemSectionThree.forEach((el) => {
      el.style.setProperty("--dash-sec-three-color", "var(--desaturated-blue)");
    });
    overvItemSectionOne.forEach((el) => {
      el.style.setProperty("--overv-sec-one-color", "var(--desaturated-blue)");
    });
    overvItemSectionTwo.forEach((el) => {
      el.style.setProperty("--overv-sec-two-color", "var(--white)");
    });
  } else {
    bgDiv.style.setProperty("--bck-div-bg", "var(--very-pale-blue)");
    body.style.setProperty("--body-bg", "var(--white)");
    switchText.style.setProperty(
      "--switch-text-color",
      "var(--dark-grayish-blue)"
    );
    switchText.style.borderColor = "black";
    switchOuter.style.setProperty("--switch-outer-bg", "var(--toggle-light)");
    switchInner.classList.remove("dark");
    headTitle.style.setProperty("--head-title-color", "var(--very-dark-blue)");
    subTitle.style.setProperty("--sub-title-color", "var(--dark-grayish-blue)");
    headTitleDesc.style.setProperty(
      "--head-desc-color",
      "var(--dark-grayish-blue)"
    );
    card.forEach((el) => {
      el.style.setProperty("--card-bg", "var(--light-grayish-blue)");
      el.style.setProperty("--card-bg-hvr", "#dfe1e7");
    });
    dashItemSectionOne.forEach((el) => {
      el.style.setProperty("--dash-sec-one-color", "var(--dark-grayish-blue)");
    });
    dashItemSectionTwo.forEach((el) => {
      el.style.setProperty("--dash-sec-two-color", "var(--very-dark-blue)");
    });
    dashItemSectionThree.forEach((el) => {
      el.style.setProperty(
        "--dash-sec-three-color",
        "var(--dark-grayish-blue)"
      );
    });
    overvItemSectionOne.forEach((el) => {
      el.style.setProperty("--overv-sec-one-color", "var(--dark-grayish-blue)");
    });
    overvItemSectionTwo.forEach((el) => {
      el.style.setProperty("--overv-sec-two-color", "var(--very-dark-blue)");
    });
  }
}
