export const createElement = async (selector, markup) => {
    const element = document.querySelector(selector);
    if (element)
      element.innerHTML = await markup; 
  };