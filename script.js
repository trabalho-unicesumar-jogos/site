let currentSlide = 1;

function showSlide(index) {
  const slides = document.querySelectorAll(".slides img");
  const totalSlides = slides.length;

  if (index > totalSlides) currentSlide = 1;
  else if (index < 1) currentSlide = totalSlides;
  else currentSlide = index;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[currentSlide - 1].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

showSlide(currentSlide);
