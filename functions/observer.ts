



export const observe = (elementSelector: string): void => {
  if (typeof window !== 'undefined') {
    const element = document.querySelector(elementSelector);
    if (element) {
      const observer = new IntersectionObserver((entries) => {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        element.classList.toggle('hidden', !entries[0].isIntersecting);
        // if(entries[0].isIntersecting === true) {
        //   element.classList.remove('hidden');
        // } else {

        // }
      }, { threshold: [0.4] });
      observer.observe(element);
    }
  }
}