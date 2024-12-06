function openHeaderMenu() {
  document.addEventListener("DOMContentLoaded", () => {
    const headerItem = document.querySelector(".Header-item");
    const headerMenu = document.querySelector(".Header-item-menu");
    const headerModal = document.querySelector(".Header-item__modal");
    const body = document.body;

    const openMenu = () => {
      headerItem.classList.add("Header-item--open");
      body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      headerItem.classList.remove("Header-item--open");
      body.style.overflow = "auto";
    };

    headerMenu.addEventListener("click", () => {
      const isMenuOpen = headerItem.classList.contains("Header-item--open");
      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    headerModal.addEventListener("click", closeMenu);
  });
}

function showWorkItemSquare() {
  document.addEventListener("DOMContentLoaded", () => {
    const workItemsSquare = document.querySelectorAll(".Work-item-square");
    const workModal = document.querySelector(".Work-modal");
    const workModalContent = document.querySelector(".Work__content");
    const workModalClose = document.querySelector(".Work-modal__close");
    const body = document.body;

    const openModal = (bgColor) => {
      workModal.style.display = "block";
      workModalContent.style.display = "block";
      workModalContent.style.backgroundColor = bgColor;
      body.style.overflow = "hidden";
    };

    const closeModal = () => {
      workModal.style.display = "none";
      workModalContent.style.display = "none";
      body.style.overflow = "auto";
    };

    workItemsSquare.forEach((item) => {
      const initialBgColor = window.getComputedStyle(item).backgroundColor;
      item.addEventListener("click", () => openModal(initialBgColor));
    });

    workModalClose.addEventListener("click", closeModal);

    workModal.addEventListener("click", (event) => {
      if (event.target === workModal) {
        closeModal();
      }
    });
  });
}

function loadMoreWorkItems() {
  document.addEventListener("DOMContentLoaded", () => {
    const workItemsHidden = document.querySelector(".Work-item--hidden");
    const workLoadmore = document.querySelector(".Work-loadmore__ttl");

    workLoadmore.addEventListener("click", () => {
      if (workItemsHidden.classList.contains("Work-item--hidden")) {
        workItemsHidden.classList.remove("Work-item--hidden");
        workLoadmore.textContent = "See less work";
      } else {
        workItemsHidden.classList.add("Work-item--hidden");
        workLoadmore.textContent = "Load more work";
      }
    });
  });
}

function slideShow() {
  document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName(
        "Testimonial-slider-container-content"
      );
      const dots = document.getElementsByClassName(
        "Testimonial-slider-container-active__dot"
      );
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(
          "Testimonial-slider-container-active__dot--selected",
          ""
        );
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className +=
        " Testimonial-slider-container-active__dot--selected";
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    window.currentSlide = currentSlide;
  });
}

function countNumber() {
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(
      ".Number-item-info-descriptions__total"
    );
    const speed = 100;

    const countEffect = (counter) => {
      const target = parseInt(counter.getAttribute("data-target"), 10);
      counter.innerText = "0";

      const updateCount = () => {
        const count = parseInt(counter.innerText, 10);
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

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countEffect(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  });
}

openHeaderMenu();
showWorkItemSquare();
loadMoreWorkItems();
slideShow();
countNumber();
