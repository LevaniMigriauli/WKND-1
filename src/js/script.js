"use strict";

// account sign up
const account = document.querySelector(".account-logo");
const accountModal = document.querySelector(".account-modal");
const btnClose = document.querySelector(".btn-close");

account.addEventListener("click", function () {
  accountModal.classList.remove("hidden");
  accountModal.classList.add("display");
});

const closeModal = function () {
  accountModal.classList.remove("display");
  accountModal.classList.add("hidden");
};

btnClose.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  e.key === "Escape" && closeModal();
});

// search input
const btnSearch = document.querySelector(".nav img");
const inputSearch = document.querySelector(".nav input");

btnSearch.addEventListener("click", function () {
  inputSearch.textContent = ".visibility";
  inputSearch.innerText = "";
  inputSearch.classList.toggle("visibility");
  inputSearch.classList.toggle("animation");
});

// scroll to certain section
const btnAdventures = document.querySelector(".hero--text-box button");
const sectionNextAdv = document.querySelector(".section-next-adventure");
btnAdventures.addEventListener("click", function () {
  sectionNextAdv.scrollIntoView({
    behavior: "smooth",
  });
});

// slider
const slider = function () {
  const slides = document.querySelectorAll(".last-article");
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  //functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button> `
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  //EventListener
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    e.key === "ArrowLeft" && prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// validation
const signUpContainer = document.querySelector(".sign-up");
const inputValidation = document.querySelector(".sign-up input");
const btnSignUp = document.querySelector(".sign-up button");

btnSignUp.addEventListener("click", function () {
  inputValidation.value.includes("@")
    ? signUpContainer.insertAdjacentHTML(
        "beforeend",
        `<img
      class="email-status"
      src="../images/content/success-icon.svg"
      alt=""
    />`
      )
    : signUpContainer.insertAdjacentHTML(
        "beforeend",
        `<img
class="email-status"
src="../images/content/unsuccess-icon.svg"
alt=""
/>`
      );
});
