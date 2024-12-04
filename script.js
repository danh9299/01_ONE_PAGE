function openHeaderMenu() {
  const headerMenu = document.querySelector(".Header-items-menu");
  const headerNav = document.querySelector(".Header-items-navigations");
  const headerClose = document.querySelector(".Header-items__close");
  const headerModal = document.querySelector(".Header-items__modal");

  headerMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("Header-items__close");
    headerNav.classList.toggle("Header-items-navigations--show");
    headerModal.classList.toggle("Header-items__modal--show");
  });

  headerModal.addEventListener("click", () => {
    headerMenu.classList.toggle("Header-items__close");
    headerNav.classList.toggle("Header-items-navigations--show");
    headerModal.classList.toggle("Header-items__modal--show");
  });
}

function showWorkItemSquare() {
  const workItemsSquare = document.querySelectorAll(".Work-items-square");
  const workModal = document.querySelector(".Work-modal");
  const workModalContent = document.querySelector(".Work__content");
  const workModalClose = document.querySelector(".Work-modal__close");

  workItemsSquare.forEach((item) => {
    const initialBgColor = window.getComputedStyle(item).backgroundColor;
    item.addEventListener("click", () => {
      if (workModal.style.display !== "block") {
        workModal.style.display = "block";
        workModalContent.style.display = "block";
        workModalContent.style.backgroundColor = initialBgColor;
      }
    });
  });

  workModalClose.addEventListener("click", () => {
    workModal.style.display = "none";
    workModalContent.style.display = "none";
  });

  workModal.addEventListener("click", () => {
    workModal.style.display = "none";
    workModalContent.style.display = "none";
  });
}

function loadMoreWorkItems() {
  const workItemsHidden = document.querySelector(".Work-items--hidden");
  const workLoadmore = document.querySelector(".Work-loadmore__ttl");

  workLoadmore.addEventListener("click", () => {
    if (workItemsHidden.classList.contains("Work-items--hidden")) {
      workItemsHidden.classList.remove("Work-items--hidden");
      workLoadmore.textContent = "See less work";
    } else {
      workItemsHidden.classList.add("Work-items--hidden");
      workLoadmore.textContent = "Load more work";
    }
  });
}

function slideShow() {
  let slideIndex = 1;
  let startX = 0;
  let endX = 0;

  showSlides(slideIndex);

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("Testimonials-slider-container-slider");
    const dots = document.getElementsByClassName("Testimonials-slider-container-active__dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("selected", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " selected";
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  const slider = document.getElementById("slider");

  slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
  });

  slider.addEventListener("mouseup", (e) => {
    endX = e.clientX;
    handleSwipe();
  });

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const threshold = 50;
    if (endX - startX > threshold) {
      plusSlides(-1);
    } else if (startX - endX > threshold) {
      plusSlides(1);
    }
  }

  window.currentSlide = currentSlide;
}

document.addEventListener("DOMContentLoaded", () => {
  openHeaderMenu();
  showWorkItemSquare();
  loadMoreWorkItems();
  slideShow();
});
