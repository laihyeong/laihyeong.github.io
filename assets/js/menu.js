const nav = document.querySelector("nav");
const menu = documenet.getElementsByClassName("menu");
const menuBtn = document.getElementsByClassName("logo-readium");

const onMenuClicked = () => {
  nav.classList.toggle('nav-open');
  menu.classList.toggle('menu-open');
  console.log("working");
}

menuBtn.addEventListener("click", onMenuClicked);
