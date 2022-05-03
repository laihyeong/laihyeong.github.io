const menu = document.querySelector("#menu");
const menuBtn = document.querySelector(".logo-readium");

const onMenuClicked = () => {
  menu.style.left = "0px";
}

menuBtn.addEventListener("click", onMenuClicked);
