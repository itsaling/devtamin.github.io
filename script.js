// FUNCITON TO ANIMATE OPEN AND CLOSE MENU
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// FUNCTION TO ADD NAV BAR TO PAGE
function navBar() {
  $("#nav-placeholder").load("nav.html");
}
// FUNCTION TO ADD FOOTER TO PAGE
function footer() {
  $("#footer-placeholder").load("footer.html");
}
