

export const observe = (elementSelector: string): void => {
  if (typeof window !== 'undefined') {
    const element = document.querySelector(elementSelector);
    if (element) {
      const observer = new IntersectionObserver((entries) => {
        element.classList.toggle('hidden', !entries[0].isIntersecting);
      }, { threshold: [0.4] });
      observer.observe(element);
    }
  }
}