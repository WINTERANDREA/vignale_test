const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // On click get new initial and final indexes of selected slider's tab
    selezionato = index;
    fff = conta_slide(selezionato, listona_slider);

    const target = document.querySelector(tab.dataset.tabTarget);

    //Remove tab content
    tabContents.forEach(tabContent => {
      tabContent.classList.remove("active");
    });

    // Set slider_active class
    all_sliders = document.querySelectorAll(".slider");
    all_sliders.forEach(slider => {
      slider.classList.remove("slider_active");
    });
    target.querySelector(".slider").classList.add("slider_active");

    // Set active button
    next = document.querySelector(".slider_active");
    next = next.nextElementSibling.querySelector("#next");
    prev = document.querySelector(".slider_active");
    prev = prev.nextElementSibling.querySelector("#prev");

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");
    target.classList.add("active");

    // Set current slide based on first slide element of new slider
    slides.forEach(slide => {
      slide.classList.remove("current");
    });
    slides[fff[0]].classList.add("current");

    next.addEventListener("click", nextSlide);

    prev.addEventListener("click", prevSlide);
  });
});
