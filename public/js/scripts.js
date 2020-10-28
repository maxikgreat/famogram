//Singular WOW Aimation JavaScript
new WOW().init();

// Toggle JavaScript
document.querySelectorAll('.navbar-toggler').forEach(singularToggle => {
  singularToggle.addEventListener('click', ({target}) => {
    target.closest('body').classList.toggle('overflow');
  });
});