'use strict';

//RATING CARD
const ratingCard = document.querySelector('.card--rating');
const submitBtn = document.querySelector('.card__btn');
const ratings = document.querySelectorAll('.card__rating');

// THANK YOU CARD
const thanksCard = document.querySelector('.card--thanks');
const thanksMessage = document.querySelector('.card__score-text');

let count = 0;

ratings.forEach(r => {
    r.addEventListener('click', () => {
        r.classList.toggle('selected');
        count++;
    });
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    ratings.forEach(r => {
        if(r.classList.contains('selected')) {
            thanksCard.classList.add('active');
            ratingCard.classList.remove('active');
            thanksMessage.textContent = `You selected ${count} out of 5`;
        } else {
            return;
        }
    });
});