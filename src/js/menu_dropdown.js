window.addEventListener("load", () => {
    menu_logic();
});

let menu_selected = true;

function scroll() {

}

function menu_logic() {
    // Identify Navigation Button Selectors
    const nav_buttons = document.getElementsByClassName("nav_button");

    // Menu Dropdown Selector
    const menu_button = document.getElementById("menu_dropdown");
    menu_button.addEventListener("click", () => {
        menu_selected = !menu_selected;
        if (menu_selected){
            
        } else{
            
        }
    });


    return;
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
