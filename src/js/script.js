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

  // Inicialize os Waypoints para cada seção que deseja animar
  $(
    ".text, .title, p, .text-1, .text-2, .text-3, .btn-about, .logo, .head, .sub-title"
  ).waypoint(
    function (direction) {
      if (direction === "down") {
        // Adicione suas animações aqui
        $(this.element).addClass("animate__animated animate__slideInLeft");

        $(this.element).addClass("block");
        $(this.element).removeClass("none");
      }
    },
    {
      offset: "70%",
    }
  );

  // Inicialize os Waypoints para cada seção que deseja animar
  $("ul, .container-lines").waypoint(
    function (direction) {
      if (direction === "down") {
        // Adicione suas animações aqui
        $(this.element).addClass("animate__animated animate__slideInRight");

        $(this.element).addClass("block");
        $(this.element).removeClass("none");
      }
    },
    {
      offset: "70%",
    }
  );

  // ---------------------------------- <<Teste>>

  // Inicialize os Waypoints para as linhas de animação
  $(".line").waypoint(
    function (direction) {
      if (direction === "down") {
        // Adicione a classe de animação correspondente
        $(this.element).addClass("animate__slideInLeft");

        // Determine a animação com base na classe da linha
        if ($(this.element).hasClass("html")) {
          $(this.element).css("animation", "animationLine100 2s forwards");
        } else if ($(this.element).hasClass("css")) {
          $(this.element).css("animation", "animationLine90 3s forwards");
        } else if ($(this.element).hasClass("js")) {
          $(this.element).css("animation", "animationLine90 3s forwards");
        } else if ($(this.element).hasClass("php")) {
          $(this.element).css("animation", "animationLine100 3s forwards");
        } else if ($(this.element).hasClass("mysql")) {
          $(this.element).css("animation", "animationLine80 3s forwards");
        }
      }
    },
    {
      offset: "70%", // Ajuste esse valor conforme necessário para controlar quando a animação ocorrerá
    }
  );

  // ---------------------------------- <<Teste>>

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

// Pop Up

$(function () {
  $(".pop-up").hide();
  $(".pop-up").fadeIn(1000);

  $(".close-button").click(function (e) {
    $(".pop-up").fadeOut(700);
    $("#overlay").removeClass("blur-in");
    $("#overlay").addClass("blur-out");
    e.stopPropagation();
  });
});
