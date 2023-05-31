var carousel = document.getElementById('carousel');
var slides = carousel.querySelector('.slides');
var slideWidth = carousel.querySelector('.slide').offsetWidth;

var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

var currentPosition = 0;
var totalSlides = slides.childElementCount;

prevBtn.addEventListener('click', function() {
  currentPosition -= slideWidth;
  if (currentPosition < 0) {
    currentPosition = (totalSlides - 1) * slideWidth * -1;
  }
  slides.style.transform = `translateX(${currentPosition}px)`;
});

nextBtn.addEventListener('click', function() {
  currentPosition += slideWidth;
  if (currentPosition > (totalSlides - 1) * slideWidth) {
    currentPosition = 0;
  }
  slides.style.transform = `translateX(${currentPosition}px)`;
});
