// REmove loader when page has loaded
window.addEventListener("load", function () {
  const page = document.querySelector("body");
  const preloader = document.querySelector(".preloader");
  preloader.classList.remove("is-loading");
  page.style.overflow = "auto";
});

//
//###########################################
//

$(document).ready(function () {
  const navbarMenu = $(".js-menu");
  const navbarToggler = $(".js-menu-toggler");
  const mainHeader = $(".js-header");
  const propertyDetails = $(".js-details");
  const showMoreBtn = $(".js-expand-details");
  const page = $("body");

  /* 
        #Main header - Sticky Navbar
  */
  $(window).on("scroll", function () {
    if (window.scrollY > 100) {
      return mainHeader.addClass("is-active");
    }
    mainHeader.removeClass("is-active");
  });

  /* 
        #Click Event handler Module
  */

  function handleClickEvent(element, callbackFn) {
    element.on("click", function () {
      callbackFn($(this));
    });
  }

  /* 
        #Mobile navbar menu toggler
  */
  function toggleNavbarMenu(eventTarget) {
    let dataType = eventTarget.attr("data-type");

    if (dataType.toLowerCase() === "open") {
      page.css("overflow", "hidden");
      return navbarMenu.addClass("is-open");
    }
    navbarMenu.removeClass("is-open");
    page.css("overflow", "auto");
  }

  handleClickEvent(navbarToggler, toggleNavbarMenu);

  // close mobile navbar when link is clicked
  $(".navbar__link").on("click", function () {
    page.css("overflow", "auto");
    return navbarMenu.removeClass("is-open");
  });

  /* 
      #Expand or show all property about text
  */

  function detailsExpandHandler() {
    propertyDetails.toggleClass("has-expanded");
    // setTimeout(() => {
    if (propertyDetails.hasClass("has-expanded")) {
      return showMoreBtn.text("Show less");
    }
    return showMoreBtn.text("Show more");
    // }, 200);
  }

  handleClickEvent(showMoreBtn, detailsExpandHandler);
});
