window.addEventListener("load", () => {
  main();
});

// Image array
const carousel_imgs = [
  "../images/slideshow/bronxille_cabinetry.jpg",
  "../images/slideshow/contemporary_white_kitchen.jpg",
  "../images/slideshow/hastings_kitchen_makeover.jpg",
  "../images/slideshow/home_design.jpg",
  "../images/slideshow/off_white_retro_red.jpg",
  "../images/slideshow/white_blue_brass_bronx.jpg",
];

let left_carousel_index = 0;
let right_carousel_index = 1;

function scroll_left(){
    // Carousel images
    let left_carousel_img = document.getElementById("left_carousel_img");
    let right_carousel_img = document.getElementById("right_carousel_img");
    // Shift the img indices
    left_carousel_index -= 1;
    right_carousel_index -= 1;
    if(left_carousel_index == -1) left_carousel_index = 5;
    if(right_carousel_index == -1) right_carousel_index = 5;
    // Re-assign the image srcs
    left_carousel_img.src = carousel_imgs[left_carousel_index];
    right_carousel_img.src = carousel_imgs[right_carousel_index];
}

function scroll_right(){
    console.log("Right");
    // Carousel images
    let left_carousel_img = document.getElementById("left_carousel_img");
    let right_carousel_img = document.getElementById("right_carousel_img");
    // Shift the img indices
    left_carousel_index += 1
    right_carousel_index += 1
    if(left_carousel_index == 6) left_carousel_index = 0;
    if(right_carousel_index == 6) right_carousel_index = 0;
    // Re-assign the image srcs
    left_carousel_img.src = carousel_imgs[left_carousel_index];
    right_carousel_img.src = carousel_imgs[right_carousel_index];
}

function main() {
  // Carousel Buttons
  const left_carousel_button = document.getElementById("left_carousel_button");
  const right_carousel_button = document.getElementById("right_carousel_button");
  // Carousel Left Button
  left_carousel_button.addEventListener('click', () => scroll_left());
  // Carousel Right Button
  right_carousel_button.addEventListener('click', () => scroll_right());

  // Automatic Carousel Scrolling
  setInterval(() => {scroll_right();}, 3500);
  


}
