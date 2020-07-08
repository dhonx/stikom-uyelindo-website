(function () {
  "use strict";
  var brandHeader = document.querySelector(".brand-header");

  var mainMenuWrapper = document.querySelector(".main-menu-wrapper");
  // homeMenu = mainMenuWrapper.querySelector(".home-menu");

  window.addEventListener("scroll", function () {
    var topPos = mainMenuWrapper.getBoundingClientRect().top;
    if (topPos == 0) {
      console.log(topPos);
      mainMenuWrapper.classList.add("sticked");
    } else {
      console.log(topPos);
      mainMenuWrapper.classList.remove("sticked");
    }
  });

  brandHeader
    .querySelector(".menu-toggle")
    .addEventListener("click", function () {
      var mainMenu = brandHeader.querySelector(".main-menu");
      mainMenu.classList.toggle("toggled");
    });
})();
