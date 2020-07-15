// (function () {
//
var btnMobileMenu = document.body.querySelector(".mobile-menu-btn"),
  mobileMenuWrapper = document.body.querySelector(".mobile-menu-wrapper");

if (btnMobileMenu) {
  btnMobileMenu.addEventListener("click", function () {
    mobileMenuWrapper.classList.toggle("show");
    btnMobileMenu;
  });
}
// })();
