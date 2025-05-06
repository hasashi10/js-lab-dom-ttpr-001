function toggleDarkMode() {
    // This function should toggle the dark mode class on the body
    // comment out the alert below and replace it with your code
    document.body.classList.toggle("dark");
    //alert("change color in this function");
  /*
    TODO: Replace the alert above with code that toggles
    the 'dark' class on <body>.
  */
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);