export const createElement = (selector, markup) => {
    const element = document.querySelector(selector);
    element.innerHTML = markup;
  };