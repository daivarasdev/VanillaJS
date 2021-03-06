"use strict";

// new Glide(".glide").mount();
new Glider(document.querySelector(".glider"), {
  slidesToShow: 2,
  draggable: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  dots: ".dots",
});
// Pop-Up Modal
const modal = document.getElementById("popUp-Modal");
// Get the button element that closes the modal
const modalButton = document.getElementById("popUp-ModalButton");
// Close the modal once the button is pressed
modalButton.addEventListener("click", function () {
  if (typeof modal.style !== "undefined") {
    modal.classList.add("modal-content-active");
    setTimeout(function () {
      modal.classList.remove("modal-content-active");
      modal.style.display = "none";
    }, 150);
  }
});

// If user clicks anywhere outside of the window, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    if (typeof modal.style !== "undefined") {
      modal.classList.add("modal-content-active");
      setTimeout(function () {
        modal.classList.remove("modal-content-active");
        modal.style.display = "none";
      }, 150);
    }
  }
};
