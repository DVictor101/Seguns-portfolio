"strict";
const menuButton = document.querySelector(".nav-btn_div");
const sideBar = document.querySelector(".testmain");
const bodyBackground = document.querySelector(".body__close");
//BACKGROUND CLICK SCRIPT USED FOR OTHER SECTION NAVIGATION

const autoCorrectDisplay = function () {
  sideBar.style.display = "none";
  sideBar.classList.add("animate__slideOutLeft");
  sideBar.classList.remove("animate__rollIn");
  menuButton.classList.remove("animate__rotateIn");
  bodyBackground.classList.add("hidden");
};

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("animate__rotateIn");
  sideBar.style.display = "block";
  sideBar.classList.add("animate__rollIn");
  bodyBackground.classList.remove("hidden");
  sideBar.classList.remove("animate__slideOutLeft");
});
bodyBackground.addEventListener("click", function () {
  autoCorrectDisplay();
});

//SECTION NAVIGATION SCRIPT
const aboutMeButton = document.querySelector(".main--li--aboutme");
const aboutSection = document.querySelector(".aboutme__sec");
const skillButton = document.querySelector(".main--skill_li");
const skillSection = document.querySelector(".skill__sec");
const projectButton = document.querySelector(".main-li__projects");
const projectSection = document.querySelector(".project__sec");
const contactButton = document.querySelector(".main-list__contact");
const contactSection = document.querySelector(".footer__section");

//ABOUT ME
aboutMeButton.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
  autoCorrectDisplay();
});
skillButton.addEventListener("click", function () {
  skillSection.scrollIntoView({ behavior: "smooth" });
  autoCorrectDisplay();
});
projectButton.addEventListener("click", function () {
  projectSection.scrollIntoView({ behavior: "smooth" });
  autoCorrectDisplay();
});
contactButton.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
  autoCorrectDisplay();
});
