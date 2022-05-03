const nav = document.querySelector("nav");
const menu = documnet.querySelector("menu");
const menuBtn = document.querySelector(".logo-readium");

const onMenuClicked = () => {
  nav.classList.toggle('nav-open');
  menu.classList.toggle('menu-open');
}

menuBtn.addEventListener("click", onMenuClicked);
