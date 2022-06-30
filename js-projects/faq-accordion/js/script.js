'use strict';

const cardAccordions = document.querySelectorAll('.card__accordion');

const borderBottomStyle = '1px solid hsl(240, 5%, 91%)';

const add = (element, className = 'selected') => element.classList.add(className);
const remove = (element, className = 'selected') => element.classList.remove(className);
const toggle = (element, className = 'selected') => element.classList.toggle(className);
const contains = (element, className = 'selected') => element.classList.contains(className);

cardAccordions.forEach(accordion => {
  const cardTop = accordion.firstElementChild;
  const accordionText = cardTop.firstElementChild;
  const arrows = cardTop.lastElementChild;
  const upArrow = arrows.firstElementChild;
  const downArrow = arrows.lastElementChild;
  const cardBottom = accordion.lastElementChild;

  downArrow.addEventListener('click', () => {
    toggle(downArrow);
    add(upArrow);

    accordionText.style.fontWeight = '600';
    accordionText.style.color = 'black';

    cardTop.style.paddingBottom = '3px';
    cardTop.style.border = 'none';

    add(cardBottom, 'active');
    cardBottom.style.paddingBottom = '10px';
    cardBottom.style.borderBottom = borderBottomStyle;
  });

  upArrow.addEventListener('click', () => {
      toggle(upArrow);
      add(downArrow);

      cardTop.style.paddingBottom = '10px';
      cardTop.style.borderBottom = borderBottomStyle;

      accordionText.style.fontWeight = '200';
      accordionText.style.color = 'hsl(240deg, 6%, 50%)';

      cardBottom.style.border = 'none';
      toggle(cardBottom, 'active');
  });
});
