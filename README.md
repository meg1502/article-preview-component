# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](https://github.com/user-attachments/assets/378a86cc-fde5-473a-8721-b8b1aedded5e)

### Links

- Live Site URL: [https://article-preview-component-mu-ten.vercel.app/](https://article-preview-component-mu-ten.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I learned how to handle interactive elements that change behavior based on screen size. Specifically, the share popup behaves differently on mobile (covering the author info) versus desktop (appearing as a popup bubble).

Managing the state of the share button and its associated elements was achieved with a simple event listener:

```js
shareButton.addEventListener('click', function() {
    this.classList.toggle('active');
    sharePopup.classList.toggle('active');
    authorInfo.classList.toggle('active');
    cardFooter.classList.toggle('show-share');
});
```

This ensures that all necessary classes are toggled to control the visibility and styling of the share component.

## Author

- Frontend Mentor - [@meg1502](https://www.frontendmentor.io/profile/meg1502)
