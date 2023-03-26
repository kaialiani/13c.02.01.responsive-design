var prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("container_nav");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-320px";
  }
  prevScrollpos = currentScrollPos;
};
