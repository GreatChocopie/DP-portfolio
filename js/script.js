var topMenu = document.querySelector(".header");
var menuButton = topMenu.querySelector(".header__menu-button");
var menuOpen = topMenu.querySelector(".header__top-menu-wrapper");
var menuLogo = topMenu.querySelector(".header__logo");
var body = document.querySelector("body");





menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.toggle("header__top-menu-wrapper--open");
  topMenu.classList.toggle("header__top-menu--open");
  menuLogo.classList.toggle("header__logo--white");
  menuButton.classList.toggle("header__menu-button--white");
  body.classList.toggle("modal-open");
});