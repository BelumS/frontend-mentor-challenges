# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Profile card component solution](#frontend-mentor---profile-card-component-solution)
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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot
![](./screenshot.jpg)

### Links
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with
- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- SASS

### What I learned
This is my first, I would say successful attempt at a Mobile-First responsive design.
* I had to learn how to style everything from the perspective of 375px using Chrome's DevTools.
* I am most proud of the CSS Snippets for the Background Image, and Card Colors.

The only way I knew how to have 2 background colors for the top of the card, was by splitting the element in half.
* Into the classes `.card__top--upper` and `.card__top--lower`

```html
      <div class="card__top">
        <div class="card__top--upper">&nbsp;</div>

        <div class="card__top--lower">
          <img src="images/image-victor.jpg" alt="An image of Victor" class="card__img"/>
          <h2 class="card__title card__major-detail">Victor Crest<span class="card__age">26</span></h2>
          <span class="card__location">London</span>
        </div>
      </div>
```

The background image positioning was brand new to me, so I went to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) and figured out the values.

```css
.body {
    background-color: var.$color-dark-cyan;
    background-image: url("../images/bg-pattern-top.svg"), url("../images/bg-pattern-bottom.svg");
    background-position: top -40vh left 170%, bottom -40vh right 170%;
    background-repeat: no-repeat, no-repeat;
    background-size: cover, cover;
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development
I want to focus on components, positioning, alignments, flexbox, background images, and linear gradient stylings.

### Useful resources
- [Linear Gradient](https://cssgradient.io/blog/gradient-patterns/) - I didn't have to use the information, but it was there just in case.'
- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/)

## Author
- Frontend Mentor - [@BelumS](https://www.frontendmentor.io/profile/BelumS)

