# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Single price grid component solution](#frontend-mentor---single-price-grid-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![](./images/ss.png)

### Links

- Solution URL: [GitHub](https://github.com/BelumS/frontend-mentor-challenges/tree/main/single-price-grid)
- Live Site URL: [Netlify](https://deft-nougat-3caf96.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- SASS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

How to use Flexbox and Grid seamlessly:
```scss
.card {
    ...
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-around;
    ...
}
```

How to make a responsive grid:

```scss
.card-container {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    width: calc(var.$full - 70px);
    height: calc(var.$full - 150px);
    border-radius: 5px;
    overflow: hidden;

    @include mix.respond(tablet) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        width: 680px;
        height: 60vh;
    }
}

.card {
    ...
    &--1 {
        ...
        @include mix.respond(tablet) {
            grid-row: 1 / 2;
            grid-column: 1 / span 2;
        }
    }

    &--2 {
        ...
        @include mix.respond(tablet) {
            grid-row: 2 / 2;
            grid-column: 2 / 1;
        }
    }

    &--3 {
        ...
        @include mix.respond(tablet) {
            grid-row: 2 / 2;
            grid-column: 2 / 2;
        }
    }
...
}
```

### Continued development

I want to continue working with Flexbox and Grid, as well as Mobile-First Design. I am working my way towards making website layouts, 1 component at a time!

## Author

- Frontend Mentor - [@BelumS](https://www.frontendmentor.io/profile/BelumS)

