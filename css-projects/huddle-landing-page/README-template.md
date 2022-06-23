# Frontend Mentor - Four card feature section solution

This is a solution to the [Huddle landing page on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Four card feature section solution](#frontend-mentor---four-card-feature-section-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./images/ss.png)

### Links

- Solution URL: [GitHub](https://github.com/BelumS/frontend-mentor-challenges/tree/main/css-projects/huddle-landing-page)
- Live Site URL: [Netlify](https://legendary-faloodeh-fcae6d.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to use a 3x2 Grid for the desktop design. I also played around with `vw` anf `vh` measurements for responsiveness.

To see how you can add code snippets, see below:

Changing to a 3x2 Grid for a Desktop.

```scss
.container {
    ...
    @include mix.respond(desktop) {
        display: grid;
        align-items: center;
        justify-items: flex-start;
        grid-template-rows: repeat(2, min-content) 60px;
        grid-template-columns: repeat(2, 1fr);
    }
}
```

### Continued development

I want to continue focusing on Flexbox, CSS Grid, colors, positioning, alignments, and layouts.

### Useful resources

- [CSS Grid](https://cssreference.io/css-grid/) - This helped me with my grid development.

## Author

- Frontend Mentor - [@BelumS](https://www.frontendmentor.io/profile/BelumS)

