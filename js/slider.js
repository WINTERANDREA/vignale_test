const slides = document.querySelectorAll(".slide");
const auto = false;
const intervalTime = 5000;
let slideInterval;

// Select all slider container
listona_slider = document.querySelectorAll(".slider_count");

// Active slider starting value
selezionato = 0;

// Get first and last .slide index of active slider
function conta_slide(sel, counter) {
  posizione = 0;

  for (i = 0; i < sel; i++) {
    a = counter[i].childElementCount;
    posizione += a;
  }
  current_element = counter[sel].childElementCount;

  pos_final = posizione + current_element - 1;

  return [posizione, pos_final];
}

// Array with initial and final elements index of active slider
fff = conta_slide(selezionato, listona_slider);

// Init buttons of slider active
next = document.querySelector(".slider_active");
next = next.nextElementSibling.querySelector("#next");
prev = document.querySelector(".slider_active");
prev = prev.nextElementSibling.querySelector("#prev");

//NEXT
const nextSlide = () => {
  // Get current class
  current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[fff[0]].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// PREV
const prevSlide = () => {
  // Get current class
  current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[fff[1]].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", nextSlide);

prev.addEventListener("click", prevSlide);

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
