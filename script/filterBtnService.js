/* const filterButtons = document.querySelectorAll(".filterButtons .filter-btn");
const filtterableServivces = document.querySelectorAll(
  ".subServicesSection .sevicesBox"
);

const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filtterableServivces.forEach((service) => {
    service.classList.add("hide");

    //Hide remove when data-name matches
    if (
      service.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      service.classList.remove("hide");
    }
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
); */

/*  */

function filterServices() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const serviceBoxes = document.querySelectorAll(".servicesBox");

  serviceBoxes.forEach((box) => {
    const serviceName = box.getAttribute("data-name").toLowerCase();
    const serviceTitle = box
      .querySelector(".serviceItem")
      .textContent.toLowerCase();

    // Show the box if it matches the search query, otherwise hide it
    if (
      serviceName.includes(searchValue) ||
      serviceTitle.includes(searchValue)
    ) {
      box.style.display = "flex";
    } else {
      box.style.display = "none";
    }
  });
}
