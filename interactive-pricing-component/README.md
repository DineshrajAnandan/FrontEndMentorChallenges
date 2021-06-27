# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/DineshrajAnandan/FrontEndMentorChallenges/tree/main/interactive-pricing-component](https://github.com/DineshrajAnandan/FrontEndMentorChallenges/tree/main/interactive-pricing-component)
- Live Site URL: [https://dineshrajanandan.github.io/FrontEndMentorChallenges/interactive-pricing-component/index.html](https://dineshrajanandan.github.io/FrontEndMentorChallenges/interactive-pricing-component/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

I have learned to edit CSS styles for native range input element for different browsers.

I have also added a workaround for setting custom background color for range track in webkit browsers with the following code.

```js
function calculatePrice(value) {
    var val = (+value-1)/(5-1)*100;
    document.body.style.setProperty(
        '--webkit-slider-background', 
        'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + val + '%, #eaeefb ' + val + '%, #eaeefb 100%)'
    );

    ...

}
```

### Continued development

Understand more on shadow DOM.

### Useful resources

- [https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) - This is an article which helped me understand working on custom range inputs.
- [https://css-tricks.com/sliding-nightmare-understanding-range-input/](https://css-tricks.com/sliding-nightmare-understanding-range-input/) - This is an article which helped me understand the caveats working on custom range inputs.

## Author

- Frontend Mentor - [@DineshrajAnandan](https://www.frontendmentor.io/profile/DineshrajAnandan)
- Twitter - [@Dineshraj_A](https://www.twitter.com/Dineshraj_A)
