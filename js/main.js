(function () {
  var btnMobileMenu = document.body.querySelector(".mobile-menu-btn"),
    mobileMenuWrapper = document.body.querySelector(".mobile-menu-wrapper"),
    mainMenuWrapper = document.querySelector(".main-menu-wrapper"),
    mainMenu = mainMenuWrapper.querySelector(".main-menu");

  if (getComputedStyle(mainMenuWrapper).display !== "none") {
    window.addEventListener("scroll", function () {
      var topPos = mainMenuWrapper.getBoundingClientRect().top;
      if (topPos <= 20) {
        mainMenu.classList.add("sticked");
      } else {
        mainMenu.classList.remove("sticked");
      }
    });
  }

  if (btnMobileMenu) {
    btnMobileMenu.addEventListener("click", function () {
      mobileMenuWrapper.classList.toggle("show");
      btnMobileMenu;
    });
  }
})();
