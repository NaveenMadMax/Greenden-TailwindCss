// Selecting Side navbar, menuicon

let sidenav = document.getElementById("sidenav");
let menubar = document.getElementById("menuicon");
let closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

