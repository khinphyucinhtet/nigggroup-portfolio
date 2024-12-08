// Open and close the popup form
const openFormButton = document.getElementById("openForm");
const popupForm = document.getElementById("popupForm");
const close = document.querySelector(".close");

openFormButton.addEventListener("click", () => {
  popupForm.style.display = "flex";
});

close.addEventListener("click", () => {
  popupForm.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    popupForm.style.display = "none";
  }
});
