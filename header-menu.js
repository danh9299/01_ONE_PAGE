document.addEventListener("DOMContentLoaded", () => {
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
});
