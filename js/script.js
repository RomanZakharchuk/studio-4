"use strict";
let offSet = 0;
const sliderLine1 = document.querySelector('.slider-line');
const sliderLine2 = document.querySelector('.our-services__slider-line');

document.querySelector('.portfolio-button-prev').addEventListener('click', function () {
  offSet += 360;

  if (offSet > 720) {
    offSet = 0;
  }

  sliderLine1.style.left = -offSet + 'px';
})

document.querySelector('.portfolio-button-next').addEventListener('click', function () {
  offSet -= 360;

  if (offSet < 0) {
    offSet = 720;
  }

  sliderLine1.style.left = -offSet + 'px';
})

document.querySelector('.services-button-prev').addEventListener('click', function () {
  offSet += 458;

  if (offSet > 916) {
    offSet = 0;
  }

  sliderLine2.style.left = -offSet + 'px';
})

document.querySelector('.services-button-next').addEventListener('click', function () {
  offSet -= 458;

  if (offSet < 0) {
    offSet = 916;
  }

  sliderLine2.style.left = -offSet + 'px';
})
