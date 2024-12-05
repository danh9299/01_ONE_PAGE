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
      dots[i].className = dots[i].className.replace("Testimonials-slider-container-active__dot--selected", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " Testimonials-slider-container-active__dot--selected";
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  window.currentSlide = currentSlide;
}

function countNumber() {
  const counters = document.querySelectorAll(".Numbers-items-info-descriptions__total");
  const speed = 100;
  const intervalTime = 3000; 

  const countEffect = (counter) => {
    const target = +counter.getAttribute("data-target");
    counter.innerText = "0";

    const updateCount = () => {
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target; 
      }
    };

    updateCount();
  };

  counters.forEach(counter => {
    countEffect(counter);
    setInterval(() => countEffect(counter), intervalTime);
  });
};


document.addEventListener("DOMContentLoaded", () => {
  openHeaderMenu();
  showWorkItemSquare();
  loadMoreWorkItems();
  slideShow();
  countNumber();
});
