'use strict';

const cardTop = document.querySelector('.card__top');
const upArrow = document.querySelector('.card__top-arrow-up');
const downArrow = document.querySelector('.card__top-arrow-down');

const accordionText = document.querySelector('.card__top-phrase');
const cardBottom = document.querySelector('.card__bottom');
const cardBottomText = document.querySelector('.card__bottom-text');

const borderBottomStyle = '1px solid hsl(240, 5%, 91%)';

const add = (element, className = 'selected') => element.classList.add(className);
const toggle = (element, className = 'selected') => element.classList.toggle(className);
const contains = (element, className = 'selected') => element.classList.contains(className);

upArrow.addEventListener('click', () => {
    toggle(upArrow);
    add(downArrow);

    if (contains(downArrow)) {
        accordionText.style.fontWeight = '600';
        accordionText.style.color = 'black';
        cardTop.style.paddingBottom = '3px';
        cardTop.style.border = 'none';
        add(cardBottom, 'active');

        cardBottom.style.paddingBottom = '10px';
        cardBottom.style.borderBottom = borderBottomStyle;
    } else {
        return;
    }
});

downArrow.addEventListener('click', () => {
    toggle(downArrow);
    add(upArrow);

    if (contains(upArrow)) {
        cardTop.style.paddingBottom = '10px';
        cardTop.style.borderBottom = borderBottomStyle;
        accordionText.style.fontWeight = '200';
        accordionText.style.color = 'hsl(240deg, 6%, 50%)';
        cardBottom.style.border = 'none';
        toggle(cardBottom, 'active');
    } else {
        return;
    }
});
