document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    generateProjectGrid();
    registerEvents();
  }
};

function registerEvents() {
  document
    .querySelector(".filter-item.all")
    .addEventListener("click", filterAllItems);
  document
    .querySelector(".filter-item.newbie")
    .addEventListener("click", filterLevel1Items);
  document
    .querySelector(".filter-item.junior")
    .addEventListener("click", filterLevel2Items);
  document
    .querySelector(".filter-item.intermediate")
    .addEventListener("click", filterLevel3Items);
}

function filterAllItems(el) {
  clearAllFilters();
  el.currentTarget.classList.add("filter-selected");
  document.querySelectorAll(".portfolio-item").forEach((el) => {
    el.style.display = "block";
  });
}

function filterLevel1Items(el) {
  clearAllFilters();
  el.currentTarget.classList.add("filter-selected");
  document.querySelectorAll(".portfolio-item.newbie").forEach((el) => {
    el.style.display = "block";
  });
}

function filterLevel2Items(el) {
  clearAllFilters();
  el.currentTarget.classList.add("filter-selected");
  document.querySelectorAll(".portfolio-item.junior").forEach((el) => {
    el.style.display = "block";
  });
}

function filterLevel3Items(el) {
  clearAllFilters();
  el.currentTarget.classList.add("filter-selected");
  document.querySelectorAll(".portfolio-item.intermediate").forEach((el) => {
    el.style.display = "block";
  });
}

function clearAllFilters() {
  document.querySelectorAll(".filter-item").forEach((el) => {
    el.classList.remove("filter-selected");
  });

  document.querySelectorAll(".portfolio-item").forEach((el) => {
    el.style.display = "none";
  });
}

function generateProjectGrid() {
  const projectData = JSON.parse(JSON.stringify(data));
  let projectGridView = "";
  projectData.forEach((item) => {
    projectGridView += getGridItemHtmlText(item);
  });

  let container = document.querySelector("div.portfolio-container");
  container.innerHTML = projectGridView;
}

function getGridItemHtmlText(itemData) {
  return `
    <div class="portfolio-item ${itemData.level}">
        <div class="title">${itemData.title}</div>
        <div class="challenge-flex">
            <div class="item-level ${itemData.level}"></div>
            <div class="view-challenge-button">
                <a href="${itemData.frontEndMentorLink}" target="blank">
                    View challenge
                </a>
            </div>
        </div>
        <a href="${itemData.siteLink}">
            <div class="view-sol-button"> <i class="fas fa-link"></i> View solution</div>
        </a>
        <div class="view-code">
            <a href="${itemData.codeLink}" target="blank">
                <i class="fab fa-github fa-lg"></i>
            </a>
        </div>
    </div>
    `;
}
