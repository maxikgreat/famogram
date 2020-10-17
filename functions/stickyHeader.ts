export const stickyHeader = () => {
  if (typeof window !== 'undefined') {
    const main = document.querySelector('main');
    main?.addEventListener('scroll', () => {
      let header = document.querySelector('header');
      if (header) {
        header.classList.toggle('sticky', main?.scrollTop > 10);
      }
    });
  }
};