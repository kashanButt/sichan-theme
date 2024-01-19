function changeLogoDisplay() {
  elem = document.getElementById("displayLogo");
  if (window.scrollY > 3010 && window.scrollY < 4100) {
    elem.style.position = "fixed";
  }
}
