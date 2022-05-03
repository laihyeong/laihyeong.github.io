const menu = document.querySelector("#menu");

const onMenuClicked = () => {
  menu.innerHTML = "<h1>It work!</h1>";
}

menu.addEventListener("click", onMenuClicked);
