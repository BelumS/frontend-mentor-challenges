# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Fylo data storage component solution](#frontend-mentor---fylo-data-storage-component-solution)
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

![](./ss.png)

### Links

- Solution URL: [GitHub](https://github.com/BelumS/frontend-mentor-challenges/tree/main/css-projects/fylo-data-storage)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to create a custom slider using CSS:
```scss
    &__slider {
        width: 81.5%;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        cursor: pointer;
        border: none;
        z-index: 2;

        &:focus {
            outline: none;

            &::-webkit-slider-thumb {
                outline: 3px solid var.$color-blue-dark-1;
                outline-offset: 0.1rem;
            }
        }

        ...

        &::-webkit-slider-runnable-track {
            background: var.$theme-primary;
            height: .97rem;
            border-radius: 1rem;
            z-index: 2;
        }

        &::-moz-range-track {
            background: var.$theme-primary;
            height: 1rem;
            border-radius: 1rem;
        }

        &::-webkit-slider-thumb {
            appearance: none;
            -webkit-appearance: none;
            position: relative;
            top: 2px;
            @include mix.box(.75rem);
            border-radius: 50%;
            background-color: white;
            cursor: pointer;
            z-index: 2;
        }

        &::-moz-range-thumb {
            appearance: none;
            -moz-appearance: none;
            position: relative;
            top: 1px;
            @include mix.box(.8rem);
            border-radius: 50%;
            background-color: white;
        }
    }
```

I learned how to use the `::after` pseudo-element to create a fillable container for the slider:
```scss
&__slider {
        ...
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: -3px;
            left: 0;
            width: 100%;
            height: 1.4rem;
            border-radius: 1rem;
            background-color: var.$color-blue-dark-2;
            opacity: 0.5;
            z-index: 1;
        }
}
```

I learned how to use `::after` and `clip-path` to create a speech bubble part:
```scss
@include mix.respond(laptop) {
  position: absolute;
  max-height: 70px;
  top: -50px;
  right: 45px;
  bottom: 40px;
  padding: 10px;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 40px;
    background-color: white;
    position: absolute;
    bottom: -20px;
    right: 0;
    clip-path: polygon(100% 0, 31% 0, 100% 100%);
  }
}
```

### Continued development

I want to continue learning and refining my CSS, creating components and working my way up to styling whole layouts.

### Useful resources

- [Custom Range Slider 1](https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/) - This helped me style the range slider.
- [Custom Range Slider 2](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) - This also helped me style the range slider.
- [Custom Range Slider 3](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html) - Unfortunately, in -webkit browsers, you cannot move the newly styled slider without adding JS.
- [Clippy](https://bennettfeely.com/clippy/) - I used this to generate the `clip-path`.


## Author

- Frontend Mentor - [@Bemsa](https://www.frontendmentor.io/profile/bemsa)
