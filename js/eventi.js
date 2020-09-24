//Define how many items to show
if (window.matchMedia("(min-width: 1024px)").matches) {
  /* the viewport is at least 400 pixels wide */
  shown_items = 3;
} else if (window.matchMedia("(min-width: 600px)").matches) {
  shown_items = 2;
} else {
  /* the viewport is less than 400 pixels wide */
  shown_items = 1;
}

//Function need to add copies to the slider-container.. this var shows how many items need to be copied, according to shown_items(items to be shown)
var n_elmt_to_clone = shown_items;

var elmt_to_clone = document.querySelectorAll(".eventi-container-slider li");
var slider_container = document.querySelector(".eventi-container-slider");

//Define how many element are in the grid
var elements = elmt_to_clone.length;

//Function: clone items according to shown_items and append at the end of the container(need to change %width as well as grid_template)

function clone_items(slider_element, items_to_clone, slider) {
  for (i = 0; i < items_to_clone; i++) {
    var cln = slider_element[i].cloneNode(true);
    slider.appendChild(cln);
    console.log(slider_element[i]);
  }
}

clone_items(elmt_to_clone, n_elmt_to_clone, slider_container);

//Set new style to slider_container - new width% calc and addition of grid_template_columns

var elements_mod = elements + n_elmt_to_clone;

slider_container.style.gridTemplateColumns =
  "repeat(" + elements_mod + ", 1fr)";

//Define percentage to apply to ul(slider-container) width, in order to show -> shown_items n.

var percentage_width = (elements_mod / shown_items) * 100;

console.log(percentage_width);

//Select and set slider-container width

slider_container.style.width = percentage_width + "%";

//get single_percentage_translate

var single_percentage_translate = 100 / elements_mod;

//Create list with possible translate values, start from 0, to elements-1

var list_of_translate = [];

for (i = 0; i < elements + 1; i++) {
  list_of_translate.push(i * single_percentage_translate);
}

//set starting index of 0

starting_index = 0;

//select buttons

var button_right = document.querySelector(".button-right");
var button_left = document.querySelector(".button-left");

//addEventListener for buttons

button_right.addEventListener("click", function() {
  starting_index++;

  if (starting_index == elements) {
    slider_container.style.transform =
      "translateX(-" + list_of_translate[starting_index] + "%)";
    slider_container.style.transition = "transform 0.2s linear 0s";

    setTimeout(() => {
      starting_index = 0;
      slider_container.style.transform =
        "translateX(-" + list_of_translate[starting_index] + "%)";
      slider_container.style.transition = "transform 0s linear 0s";
      console.log(starting_index);
    }, 200);
  } else if (starting_index < elements + 1) {
    slider_container.style.transform =
      "translateX(-" + list_of_translate[starting_index] + "%)";
    slider_container.style.transition = "transform 0.2s linear 0s";

    console.log(starting_index);
  }
  //else {
  //     starting_index = 0
  //     slider_container.style.transform = "translateX(-" + list_of_translate[starting_index] + "%)"
  //     slider_container.style.transition = "transform 0s linear 0s";
  //     console.log(starting_index)
  // }
});

button_left.addEventListener("click", function() {
  starting_index--;

  if (starting_index == -1) {
    starting_index = elements;
    slider_container.style.transform =
      "translateX(-" + list_of_translate[starting_index] + "%)";
    slider_container.style.transition = "transform 0s linear 0s";
    starting_index--;

    setTimeout(() => {
      slider_container.style.transform =
        "translateX(-" + list_of_translate[starting_index] + "%)";
      slider_container.style.transition = "transform 0.2s linear 0s";
    }, 50);
  } else if (starting_index > -1) {
    slider_container.style.transform =
      "translateX(-" + list_of_translate[starting_index] + "%)";
    slider_container.style.transition = "transform 0.2s linear 0s";
    console.log(starting_index);
  }
});

//set slider interval change

setInterval(function() {
  starting_index++;

  if (starting_index == elements) {
    slider_container.style.transform =
      "translateX(-" + list_of_translate[starting_index] + "%)";
    slider_container.style.transition = "transform 0.2s linear 0s";

    setTimeout(() => {
      starting_index = 0;
      slider_container.style.transform =
        "translateX(-" + list_of_translate[starting_index] + "%)";
      slider_container.style.transition = "transform 0s linear 0s";
      console.log(starting_index);
    }, 200);
  } else if (starting_index < elements + 1) {
    slider_container.style.transform =
      "translateX(-" + list_of_translate[starting_index] + "%)";
    slider_container.style.transition = "transform 0.2s linear 0s";
  }
}, 10000);

//12345   123
//23456   234
//34567   671
//...
//71234   712

move_start = 0;
move_end = 0;

slider_container.addEventListener("touchstart", function(ev) {
  console.log(ev.touches[0].clientX);
  move_start = ev.touches[0].clientX;
});
slider_container.addEventListener("touchend", function(ev) {
  console.log(ev.changedTouches[0].clientX);
  move_end = ev.changedTouches[0].clientX;
  if (move_end > move_start && move_end - move_start > 40) {
    console.log("swipe left");
    starting_index--;

    if (starting_index == -1) {
      starting_index = elements;
      slider_container.style.transform =
        "translateX(-" + list_of_translate[starting_index] + "%)";
      slider_container.style.transition = "transform 0s linear 0s";
      starting_index--;

      setTimeout(() => {
        slider_container.style.transform =
          "translateX(-" + list_of_translate[starting_index] + "%)";
        slider_container.style.transition = "transform 0.2s linear 0s";
      }, 50);
    } else if (starting_index > -1) {
      slider_container.style.transform =
        "translateX(-" + list_of_translate[starting_index] + "%)";
      slider_container.style.transition = "transform 0.2s linear 0s";
      console.log(starting_index);
    }
  } else if (move_end < move_start && move_start - move_end > 40) {
    console.log("swipe right");
    starting_index++;

    if (starting_index == elements) {
      slider_container.style.transform =
        "translateX(-" + list_of_translate[starting_index] + "%)";
      slider_container.style.transition = "transform 0.2s linear 0s";

      setTimeout(() => {
        starting_index = 0;
        slider_container.style.transform =
          "translateX(-" + list_of_translate[starting_index] + "%)";
        slider_container.style.transition = "transform 0s linear 0s";
        console.log(starting_index);
      }, 500);
    } else if (starting_index < elements + 1) {
      slider_container.style.transform =
        "translateX(-" + list_of_translate[starting_index] + "%)";
      slider_container.style.transition = "transform 0.2s linear 0s";

      console.log(starting_index);
    }
  }
});
