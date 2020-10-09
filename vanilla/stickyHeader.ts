if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    if (header) {
      header.classList.toggle('sticky', window.scrollY > 10);
    }
  });
}

export {};