var navbar = document.getElementById('navbar');
var topPx  = navbar.offsetTop;

window.onscroll = function scroll() {
  if (window.pageYOffset >= topPx) {
    navbar.classList.add('fixnavbar');
  } else {
    navbar.classList.remove('fixnavbar');
  }
}