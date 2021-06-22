# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

I have learned the smooth scroll option in JavaScript. I achieved it with the following code.

```js
document.querySelector('#grid-section').scrollIntoView({
    behavior: 'smooth',
  });
```

Also, I have learned to create CSS triangles like the following.

```css
.css-triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 3em 2em;
  border-color: transparent transparent var(--app-White) transparent;

}
```

### Useful resources

- [how-to-remove-ignore-hover-css-style-on-touch-devices](https://stackoverflow.com/questions/23885255/how-to-remove-ignore-hover-css-style-on-touch-devices) - This helped me understand to fix hover effects issues with touch devices.
- [https://css-tricks.com/snippets/css/css-triangle/](https://css-tricks.com/snippets/css/css-triangle/) - This is an article which helped me understand how to create CSS triangles.
- [fetoolkit.io](https://www.fetoolkit.io/widget/css-triangle) - This tool helped me to build CSS triangle of my requirement.


## Author

- Frontend Mentor - [@DineshrajAnandan](https://www.frontendmentor.io/profile/DineshrajAnandan)
- Twitter - [@Dineshraj_A](https://www.twitter.com/Dineshraj_A)
