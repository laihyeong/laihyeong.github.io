const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".logo-readium");

const onMenuClicked = () => {
  menu.classList.toggle('menu-open');
}

menuBtn.addEventListener("click", onMenuClicked);
