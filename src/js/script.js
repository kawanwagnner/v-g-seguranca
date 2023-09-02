$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  var typed = new Typed(".typing", {
    strings: ["Tecnologia.", "Inovação.", "Qualidade."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Tecnologia.", "Inovação.", "Qualidade."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".navbar").click(function () {
    $(".active").toggleClass("none");
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPauser: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

const btn = document.querySelector(".menu");
const linksNavBar = document.querySelectorAll('li a[href^="#"]');

btn.addEventListener("click", () => {
  function removeMenu() {
    const navbarActive = document.querySelector(".menu.active");
    navbarActive.classList.remove("active");
  }

  linksNavBar.forEach((link) => {
    link.addEventListener("click", (e) => removeMenu());
  });
});
