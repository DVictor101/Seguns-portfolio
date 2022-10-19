"strict";
const btnDiv = document.querySelector(".nav-btn_div");
//.classList.add("animate__lightSpeedInLeft");
//switching between on and off

//variables
const mainTest = document.querySelector(".testmain");
const mainCorrect = document.querySelector(".maincorrect");
const shadowBody = document.querySelector(".body__close");
//function

const shadowTestSlide = function () {
  const slide = shadowBody.classList.toggle("hidden");
  return slide;
};

//orders
btnDiv.addEventListener("click", function () {
  mainTest.classList.toggle("hidden");
  mainTest.classList.toggle("animate__rollIn");
  shadowTestSlide();
  shadowBody.classList.toggle("animate__fadeIn");
  btnDiv.classList.toggle("animate__rotateIn");
});
//SHADOWBODY CLICK CORRECTION TO THE MAIN TEST
shadowBody.addEventListener("click", function () {
  shadowTestSlide();

  mainTest.classList.toggle("animate__slideOutLeft");
});

//THE SCOOL TO SCRIPT CONTENT
const aboutMeButton = document.querySelector(".main--li--aboutme");
const aboutSection = document.querySelector(".aboutme__sec");
const skillButton = document.querySelector(".main--skill_li");
const skillSection = document.querySelector(".skill__sec");
const projectButton = document.querySelector(".main-li__projects");
const projectSection = document.querySelector(".project__section");
const contactButton = document.querySelector(".main-list__contact");
const contactSection = document.querySelector(".footer__section");
//programs
aboutMeButton.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
  mainTest.classList.toggle("hidden");
  shadowTestSlide();
});
//*****skills */
skillButton.addEventListener("click", function () {
  skillSection.scrollIntoView({ behavior: "smooth" });
  mainTest.classList.toggle("hidden");
  shadowTestSlide();
});
//PROJECTS
projectButton.addEventListener("click", function () {
  projectSection.scrollIntoView({ behavior: "smooth" });
  mainTest.classList.toggle("hidden");
  shadowTestSlide();
});
//CONTACTS
contactButton.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
  mainTest.classList.toggle("hidden");
  shadowTestSlide();
});
