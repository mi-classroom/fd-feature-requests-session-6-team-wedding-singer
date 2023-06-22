let slideIndex = 0;
showSlide(slideIndex);

function prevImage() {
  showSlide(slideIndex -= 1);
}

function nextImage() {
  showSlide(slideIndex += 1);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slideshow li');
  
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  }
  
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  
  slides[slideIndex].style.display = 'block';
}
