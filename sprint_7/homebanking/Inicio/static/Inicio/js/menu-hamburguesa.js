const nav = document.querySelector("#nav");
const btnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector("#btn-close");

btnOpen.addEventListener("click", () => {
  nav.classList.add("visible");
});

btnClose.addEventListener("click", () => {
  nav.classList.remove("visible");
});
