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

let img_index = 0;

function scroll(direction) {
  console.log("left");
  console.log(img_index + " " + (img_index + 7) % 6);
  // Carousel images
  let left_carousel_img = document.getElementById("left_carousel_img");
  let right_carousel_img = document.getElementById("right_carousel_img");
  // Shift the image indices
  img_index = (img_index + direction + 6) % 6;
  // Re-assign the image srcs
  left_carousel_img.src = carousel_imgs[img_index];
  right_carousel_img.src = carousel_imgs[(img_index + 7) % 6];
}

function main() {
  // Carousel Buttons
  const left_carousel_button = document.getElementById("left_carousel_button");
  const right_carousel_button = document.getElementById(
    "right_carousel_button",
  );
  // Carousel Left Button
  left_carousel_button.addEventListener("click", () => scroll(-1));
  // Carousel Right Button
  right_carousel_button.addEventListener("click", () => scroll(1));
  // Automatic Carousel Scrolling
  setInterval(() => {
    scroll(1);
  }, 3500);
}
