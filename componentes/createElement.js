export const createElement = (selector, markup) => {
    const element = document.querySelector(selector);
    if (element)
      element.innerHTML = markup;
  };