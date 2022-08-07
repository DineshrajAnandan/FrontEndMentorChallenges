document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    registerEvents();
  }
};

let showDarkMode = false;

let darkThemeProperties = {
  "--bck-div-bg": "var(--very-dark-blue-top)",
  "--body-bg": "var(--very-dark-blue)",
  "--switch-text-color": "var(--desaturated-blue)",
  "--switch-outer-bg": "var(--toggle-dark)",
  "--head-title-color": "var(--white)",
  "--sub-title-color": "var(--white)",
  "--head-desc-color": "var(--desaturated-blue)",
  "--card-bg": "var(--dark-desaturated-blue)",
  "--card-bg-hvr": "#373d58",
  "--dash-sec-one-color": "var(--desaturated-blue)",
  "--dash-sec-two-color": "var(--white)",
  "--dash-sec-three-color": "var(--desaturated-blue)",
  "--overv-sec-one-color": "var(--desaturated-blue)",
  "--overv-sec-two-color": "var(--white)",
};

let lightThemeProperties = {
  "--bck-div-bg": "var(--very-pale-blue)",
  "--body-bg": "var(--white)",
  "--switch-text-color": "var(--dark-grayish-blue)",
  "--switch-outer-bg": "var(--toggle-light)",
  "--head-title-color": "var(--very-dark-blue)",
  "--sub-title-color": "var(--dark-grayish-blue)",
  "--head-desc-color": "var(--dark-grayish-blue)",
  "--card-bg": "var(--light-grayish-blue)",
  "--card-bg-hvr": "#dfe1e7",
  "--dash-sec-one-color": "var(--dark-grayish-blue)",
  "--dash-sec-two-color": "var(--very-dark-blue)",
  "--dash-sec-three-color": "var(--dark-grayish-blue)",
  "--overv-sec-one-color": "var(--dark-grayish-blue)",
  "--overv-sec-two-color": "var(--very-dark-blue)",
};

function registerEvents() {
  document
    .querySelector(".switch-outer")
    .addEventListener("click", toggleDarkMode);
}

function toggleDarkMode() {
  showDarkMode = !showDarkMode;

  let switchText = document.querySelector(".mode-switch-wrap");
  let switchInner = document.querySelector(".switch-inner");

  if (showDarkMode) {
    switchInner.classList.add("dark");
    switchText.style.borderColor = "gray";
    applyBodyProperty(darkThemeProperties);
  } else {
    switchInner.classList.remove("dark");
    switchText.style.borderColor = "black";
    applyBodyProperty(lightThemeProperties);
  }
}

function applyBodyProperty(propObj) {
  let body = document.querySelector("body");
  for (let key in propObj) {
    if (propObj.hasOwnProperty(key)) body.style.setProperty(key, propObj[key]);
  }
}
