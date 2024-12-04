function Slider() {
  const divs = $(".divs");

  for (let i = 0; i < divs.length; i++) {
    const nextItem = $(divs)[i];

    $(nextItem).click(function () {
      divs.removeClass("green"); // Remove from all divs
      $(nextItem).addClass("green");
      const icon = $(nextItem).find("ion-icon");
      let currentIcon = icon.attr("name");

      // First, collapse all other divs and reset their icons
      divs.not(nextItem).each(function () {
        const otherIcon = $(this).find("ion-icon");
        if (otherIcon.attr("name") === "remove-outline") {
          otherIcon.attr("name", "add-outline"); // Change to "add" when collapsed
        }
        $(this).next().slideUp(); // Slide up the content
      });

      // Now toggle the icon for the clicked div
      if (currentIcon === "add-outline") {
        icon.attr("name", "remove-outline"); // Change to "remove" when opened
      } else {
        icon.attr("name", "add-outline"); // Change to "add" when closed
      }

      // Toggle the content for the clicked div
      $(nextItem).next().slideToggle();
    });
    $(nextItem).removeClass("green");
  }
}
$("#menu").click(function () {
  $("#menu-nav").toggleClass("menu-ul");
  $(this).toggleClass("animate");
  $("html").toggleClass("overflow-hidden");
});
function Navli() {
  const navli = $(".nav-li");
  const currentPath = window.location.pathname;
  navli.each(function () {
    const href = $(this).attr("href");
    if (currentPath.includes(href)) {
      $(this).addClass("green-color");
    } else {
      $(this).removeClass("green-color");
    }
  });

  navli.off("click").on("click", function () {
    navli.removeClass("green-color");
    $(this).addClass("green-color");
  });
}

Navli();
Slider();

function scrollToSection(event) {
  event.preventDefault();
  document.querySelector("#solution-and-service").scrollIntoView({
    behavior: "smooth",
  });
}
document.querySelectorAll(".content-card").forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    const ripple = card.querySelector(".ripple");
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x - ripple.offsetWidth / 2}px`;
    ripple.style.top = `${y - ripple.offsetHeight / 2}px`;

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = `${size * 4}px`;
    ripple.style.height = `${size * 4}px`;

    ripple.style.transform = "scale(0)";
    setTimeout(() => {
      ripple.style.transform = "scale(1)";
    }, 0);
  });

  card.addEventListener("mouseleave", () => {
    const ripple = card.querySelector(".ripple");
    ripple.style.transform = "scale(0)";
  });
});

document.querySelectorAll(".content-card").forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    const ripple = card.querySelector(".ripple");
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x - ripple.offsetWidth / 2}px`;
    ripple.style.top = `${y - ripple.offsetHeight / 2}px`;

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = `1500px`;
    ripple.style.height = `1500px`;

    ripple.style.backgroundColor = "#242424";

    ripple.style.transform = "scale(0)";
    setTimeout(() => {
      ripple.style.transform = "scale(1)";
    }, 500);
  });

  card.addEventListener("mouseleave", () => {
    const ripple = card.querySelector(".ripple");
    ripple.style.transform = "scale(0)";
  });
});

$(window).on("scroll", function () {
  const logo = $("#logo");
  if ($(this).scrollTop() > 40) {
    $("#nav").addClass("scrolled");
  } else {
    $("#nav").removeClass("scrolled");
  }
});
$(".BOXES").click(function () {
  $("#BOXES").css("display", "flex");
  $("#FLEXIBLE").css("display", "none");
  $("#DYNAMIC").css("display", "none");
  console.log(".PRECISION");
});
$(".FLEXIBLE").click(function () {
  $("#BOXES").css("display", "none");
  $("#FLEXIBLE").css("display", "flex");
  $("#DYNAMIC").css("display", "none");
  console.log(".NEXT-GEN");
});
$(".DYNAMIC").click(function () {
  $("#BOXES").css("display", "none");
  $("#FLEXIBLE").css("display", "none");
  $("#DYNAMIC").css("display", "flex");
});

$(document).ready(function () {
  const $blogCardContainer = $("#blog-container");
  const $blogCards = $(".blog-card");
  const blogCardCount = $blogCards.length;
  const blogCardsToShow = 1;
  let blogCurrentIndex = 0;

  const $dotsContainer = $("section > span");
  const $prevButton = $("#prev");
  const $nextButton = $("#next");
  $dotsContainer.each(function (index) {
    $(this).attr("data-index", index);
  });

  const $dots = $("section > span");

  function updateBlogScroll() {
    const blogCardWidth = $blogCards.outerWidth(true);
    const blogScrollPosition = blogCardWidth * blogCurrentIndex;
    $blogCardContainer.scrollLeft(blogScrollPosition);
    updateDots();
  }

  function updateDots() {
    $dots.removeClass("active");
    $dots.eq(blogCurrentIndex).addClass("active");
  }

  function showNextBlogCard() {
    if (blogCurrentIndex < blogCardCount - blogCardsToShow) {
      blogCurrentIndex++;
    } else {
      blogCurrentIndex = 0;
    }
    updateBlogScroll();
  }

  function showPrevBlogCard() {
    if (blogCurrentIndex > 0) {
      blogCurrentIndex--;
    } else {
      blogCurrentIndex = blogCardCount - 1;
    }
    updateBlogScroll();
  }

  $nextButton.on("click", function () {
    showNextBlogCard();
  });
  $prevButton.on("click", function () {
    showPrevBlogCard();
  });
  $dots.on("click", function () {
    blogCurrentIndex = $(this).data("index");
    updateBlogScroll();
  });
  updateBlogScroll();
});
$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".product-slides");
  // const dots = $(".dot");
  const slideCount = slides.length;
  function showSlide(index) {
    slides.removeClass("active1");
    // dots.removeClass("active1");
    $(slides[index]).addClass("active1");
    $(dots[index]).addClass("active1");
    const translateValue = `-${index * 100}%`;
    $(".home-page-feedback-content-slides").css(
      "transform",
      `translateX(${translateValue})`
    );
  }
  // function autoSlide() {
  //   currentSlide = (currentSlide + 1) % slideCount;
  //   showSlide(currentSlide);
  // }
  // let autoSlideInterval = setInterval(autoSlide, 1000);
  // dots.on("click", function () {
  //   clearInterval(autoSlideInterval);
  //   currentSlide = $(this).data("slide");
  //   showSlide(currentSlide);
  //   autoSlideInterval = setInterval(autoSlide, 1000);
  // });
});
$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".service-slide");
  const slideCount = slides.length;

  function showSlide(index) {
    slides.removeClass("active1");
    $(slides[index]).addClass("active1");

    const translateValue = `-${index * 100}%`;
    $(".home-page-service-cards > div").css(
      "transform",
      `translateX(${translateValue})`
    );
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
  }
  $("#service-next").on("click", nextSlide);

  showSlide(currentSlide);
});

function ClientSlider() {
  $(document).ready(function () {
    const ClientSlider = $("#client-slider");
    const ClientSlides = $(".client-slide");
    const ClientSlidesCount = ClientSlides.length;
    const ClientSliderToShow = 5;
    let ClientCurrentIndex = 0;
    const ClientIntervalTime = 3000;

    function ClientSliderScroll() {
      // console.log("client");
      const ClientSlidesWidth = ClientSlides.outerWidth(true);
      const ClientScrollPosition = ClientSlidesWidth * ClientCurrentIndex;
      ClientSlider.scrollLeft(ClientScrollPosition);
    }

    function showNextClient() {
      if (ClientCurrentIndex < ClientSlidesCount - ClientSliderToShow) {
        ClientCurrentIndex++;
      } else {
        ClientCurrentIndex = 0;
      }
      ClientSliderScroll();
    }

    setInterval(showNextClient, ClientIntervalTime);
  });
}
ClientSlider();
$(document).ready(function () {
  const ListItem = $(".li");
  ListItem.click(function () {
    ListItem.removeClass("list");
    // Add the class "list" to the clicked <li> element
    $(this).addClass("list");
  });
});
function mobile() {
  document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(".slider-wrapper-mobile");
    const slides = document.querySelectorAll(".slide-mobile");
    const totalSlides = slides.length;

    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const currentIndexSpan = document.getElementById("currentIndex");
    const totalIndexSpan = document.getElementById("totalIndex");

    let currentIndex = 0;

    totalIndexSpan.textContent = totalSlides.toString().padStart(2, "0");

    const updateSlider = () => {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      currentIndexSpan.textContent = (currentIndex + 1)
        .toString()
        .padStart(2, "0");
    };

    // Event listeners for buttons
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalSlides - 1;
      }
      updateSlider();
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlider();
    });

    updateSlider();
  });
}
function FormValue() {
  $(document).ready(function () {
    $("#countryCode").on("change", function () {
      const countryCode = $(this).val(); // Get selected country code
      const phoneInput = $("#phoneNumber"); // Phone number input field
      const currentPhone = phoneInput.val().replace(/^\+\d+/, ""); // Remove existing country code if any
      phoneInput.val(countryCode + currentPhone); // Set new value with country code
    });

    // Form submission handler
    $("#myForm").on("submit", function (e) {
      e.preventDefault(); // Prevent form submission

      let isValid = true;

      // Hide all error messages initially
      $(".error-message").hide();

      // Validate Full Name
      if (!$("input[name='full-name']").val().trim()) {
        $("input[name='full-name']").next(".error-message").show();
        isValid = false;
      }

      // Validate Phone Number (must be at least 10 digits excluding the country code)
      const phone = $("#phoneNumber").val().trim();
      if (
        !phone ||
        phone.length <= 3 ||
        phone.slice(phone.indexOf("+") + 1).length < 10
      ) {
        $("#phoneNumber").next(".error-message").show();
        isValid = false;
      }

      // Validate Email Address
      const email = $("input[name='email-address']").val().trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email)) {
        $("input[name='email-address']").next(".error-message").show();
        isValid = false;
      }

      // Validate Company
      if (!$("input[name='company']").val().trim()) {
        $("input[name='company']").next(".error-message").show();
        isValid = false;
      }

      // Validate Message
      if (!$("textarea[name='message']").val().trim()) {
        $("textarea[name='message']").next(".error-message").show();
        isValid = false;
      }

      // If form is valid, prepare data for submission
      if (isValid) {
        const formData = {
          name: $("input[name='full-name']").val().trim(),
          phone: phone,
          email: email,
          company: $("input[name='company']").val().trim(),
          message: $("textarea[name='message']").val().trim(),
        };
        fetch("https://synergiapac.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.ok) {
              alert("Form submitted successfully!");
              $("#myForm")[0].reset(); // Clear form fields
            } else {
              alert("Failed to submit the form. Try again later.");
            }
          })
          .catch(() => {
            alert("An error occurred during submission.");
          });
      }
    });
  });
}

FormValue();
$(".service-page-qoute").load("index.html .home-page-content-qoute");
$(".service-page-client-logo").load(
  "index.html .home-page-content-client-logo",
  function () {
    ClientSlider();
  }
);
$(".service-page-contact").load(
  "index.html .home-page-content-contact",
  function () {
    FormValue();
  }
);
$(".service-page-footer").load("index.html .home-page-footer");

// Industries page
$(".industries-page-qoute").load("index.html .home-page-content-qoute");
$(".industries-page-client-logo").load(
  "index.html .home-page-content-client-logo",
  function () {
    ClientSlider();
  }
);
$(".industries-page-contact").load(
  "index.html .home-page-content-contact",
  function () {
    FormValue();
  }
);
$(".industries-page-footer").load("index.html .home-page-footer");
$(".industries-page-nav").load("service.html .service-page-nav", function () {
  Navli();
  MobileResponsive(); // Initialize after content is loaded
});

// About page
$(".about-page-qoute").load("index.html .home-page-content-qoute");
$(".about-page-client-logo").load(
  "index.html .home-page-content-client-logo",
  function () {
    ClientSlider();
  }
);
$(".about-page-contact").load(
  "index.html .home-page-content-contact",
  function () {
    FormValue();
  }
);
$(".about-page-footer").load("index.html .home-page-footer");
$(".about-page-nav").load("service.html .service-page-nav", function () {
  MobileResponsive(); // Initialize after content is loaded
  Navli();
});

// Sustainability page
$(".sustainability-page-qoute").load("index.html .home-page-content-qoute");
$(".sustainability-page-client-logo").load(
  "index.html .home-page-content-client-logo",
  function () {
    ClientSlider();
  }
);
$(".sustainability-page-contact").load(
  "index.html .home-page-content-contact",
  function () {
    FormValue();
  }
);
$(".sustainability-page-footer").load("index.html .home-page-footer");
$(".sustainability-page-nav").load(
  "service.html .service-page-nav",
  function () {
    MobileResponsive(); // Initialize after content is loaded
    Navli();
  }
);

$(".contact-page-footer").load("index.html .home-page-footer");
$(".contact-page-nav").load("service.html .service-page-nav", function () {
  MobileResponsive(); // Initialize after content is loaded
  Navli();
});

// Blog pages
$(".blog1-page-nav").load("service.html .service-page-nav", function () {
  MobileResponsive(); // Initialize after content is loaded
});
$(".blog1-page-footer").load("index.html .home-page-footer");

$(".blog2-page-nav").load("service.html .service-page-nav", function () {
  MobileResponsive(); // Initialize after content is loaded
});
$(".blog2-page-footer").load("index.html .home-page-footer");

$(".blog3-page-nav").load("service.html .service-page-nav", function () {
  MobileResponsive(); // Initialize after content is loaded
});
$(".blog3-page-footer").load("index.html .home-page-footer");

// MobileResponsive function without $(document).ready()
function MobileResponsive() {
  $("#menu").click(function () {
    $("#menu-nav").toggleClass("menu-ul");
    $(this).toggleClass("animate");
    $("html").toggleClass("overflow-hidden");
  });
}

// MobileResponsive();
// $(".service-page-qoute").load("index.html .home-page-content-qoute");
// $(".service-page-client-logo").load(
//   "index.html .home-page-content-client-logo",
//   function () {
//     ClientSlider();
//   }
// );
// $(".service-page-contact").load("index.html .home-page-content-contact",function(){
//   FormValue()
// });
// $(".service-page-footer").load("index.html .home-page-footer");

// // Industries page
// $(".industries-page-qoute").load("index.html .home-page-content-qoute");
// $(".industries-page-client-logo").load(
//   "index.html .home-page-content-client-logo",
//   function () {
//     ClientSlider();
//   }
// );
// $(".industries-page-contact").load("index.html .home-page-content-contact",function(){
//   FormValue()
// });
// $(".industries-page-footer").load("index.html .home-page-footer");
// $(".industries-page-nav").load("service.html .service-page-nav", function () {
//   Navli()
//   MobileResponsive();
// });

// // about page
// $(".about-page-qoute").load("index.html .home-page-content-qoute");
// $(".about-page-client-logo").load(
//   "index.html .home-page-content-client-logo",
//   function () {
//     ClientSlider();
//   }
// );
// $(".about-page-contact").load("index.html .home-page-content-contact",function(){
//   FormValue()
// });
// $(".about-page-footer").load("index.html .home-page-footer");
// $(".about-page-nav").load("service.html .service-page-nav", function () {
//   MobileResponsive();
//   Navli()
// });
// // sustainability-page
// $(".sustainability-page-qoute").load("index.html .home-page-content-qoute");
// $(".sustainability-page-client-logo").load(
//   "index.html .home-page-content-client-logo",
//   function () {
//     ClientSlider();
//   }
// );
// $(".sustainability-page-contact").load("index.html .home-page-content-contact",function(){
//   FormValue()
// });
// $(".sustainability-page-footer").load("index.html .home-page-footer");
// $(".sustainability-page-nav").load(
//   "service.html .service-page-nav",
//   function () {
//     MobileResponsive();
//     Navli()
//   }
// );
// $(".contact-page-footer").load("index.html .home-page-footer");
// $(".contact-page-nav").load("service.html .service-page-nav",function(){
//   MobileResponsive()
//   Navli()
// });

// // blog1-page
// $(".blog1-page-nav").load("service.html .service-page-nav", function () {
//   MobileResponsive();

// });
// $(".blog1-page-footer").load("index.html .home-page-footer");
// // blog2-page
// $(".blog2-page-nav").load("service.html .service-page-nav", function () {
//   MobileResponsive()
// });
// $(".blog2-page-footer").load("index.html .home-page-footer");
// // blog3-page
// $(".blog3-page-nav").load("service.html .service-page-nav", function () {
//   MobileResponsive()
// });
// $(".blog3-page-footer").load("index.html .home-page-footer");

// Update the video source on window resize
window.addEventListener("resize", updateVideoSrc);
$(document).ready(function () {
  $(".toggle-btn").click(function () {
    var content = $(this).next(".collapsible-content");
    content.slideToggle();
    var icon = $(this).find(".toggle-icon");
    if (icon.text() === "+") {
      icon.text("-");
    } else {
      icon.text("+");
    }
    $(".collapsible-content").not(content).slideUp();
    $(".toggle-icon").not(icon).text("+");
  });
});

function goToSection(event, sectionId) {
  event.preventDefault();
  const targetUrl = `service.html#${sectionId}`;
  window.location.href = targetUrl;
  window.addEventListener("load", () => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const viewportHeight = window.innerHeight;
      const sectionHeight = targetElement.offsetHeight;
      const centerPosition =
        elementPosition - viewportHeight / 2 + sectionHeight / 2;
      window.scrollTo({
        top: centerPosition,
        behavior: "smooth",
      });
    }
  });
}

mobile();
function updateVideoSrc() {
  const video = document.getElementById("bg-video");

  // Check screen width
  if (window.innerWidth <= 425) {
    // Adjust the width as needed
    video.src = "mobile-video.mp4"; // Mobile version of the video
  } else {
    video.src = "synergic-pac-video.mp4"; // Default video for larger screens
  }
}

// Call the function on page load
updateVideoSrc();
// function goToSection(event, sectionId) {
//     event.preventDefault(); // Prevent default anchor behavior
//     window.location.href = 'service.html'; // Load the page

//     // Wait until the page fully loads
//     window.onload = () => {
//         const targetElement = document.getElementById(sectionId);
//         if (targetElement) {
//             // Adjust for any fixed or sticky headers
//             const offset = 400; // Change this value if you have a sticky header height
//             const elementPosition = targetElement.offsetTop - offset;

//             window.scrollTo({
//                 top: elementPosition,
//                 behavior: 'smooth' // Smooth scrolling
//             });
//         }
//     };
// }
