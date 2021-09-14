const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const font = document.querySelector(".fa");

burger.addEventListener("click", () => {
  navList.classList.toggle("nav-list-active");
  font.classList.toggle("fa-bars");
  font.classList.toggle("fa-times");
});
