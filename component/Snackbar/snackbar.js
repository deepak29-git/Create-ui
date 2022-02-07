const btn = document.querySelectorAll('.btn');
const snackbarContainer = document.querySelector(".snackbar-container");
const crossIcon = document.querySelector(".cross-icon");
const leadingSnackbar = document.querySelector(".leading-snackbar");
const leadingCross = document.querySelector(".leading-cross");
const stackedSnackbar = document.querySelector(".stacked-snackbar");
const stackedCross = document.querySelector(".stacked-cross");
const retryBtn = document.querySelector(".retry-btn")
const undoBtn = document.querySelector(".undo-btn")
const labelBtn = document.querySelector(".label-btn")

// baseline js

btn[0].addEventListener('click', () => {
    snackbarContainer.style.visibility = "visible";
    snackbarContainer.style.position = "fixed";
    snackbarContainer.style.bottom = "10px";
    snackbarContainer.style.zIndex = "1";

});

retryBtn.addEventListener("click", () => {
    snackbarContainer.style.visibility = "hidden";
})

crossIcon.addEventListener("click", () => {
    snackbarContainer.style.visibility = "hidden";

})

// leading js


btn[1].addEventListener("click", () => {
    leadingSnackbar.style.visibility = "visible";
    leadingSnackbar.style.position = "fixed";
    leadingSnackbar.style.bottom = "0";
    leadingSnackbar.style.zIndex = "1";
})

undoBtn.addEventListener("click", () => {
    leadingSnackbar.style.visibility = "hidden";
})

leadingCross.addEventListener("click", () => {
    leadingSnackbar.style.visibility = "hidden"
})

// stacked js


btn[2].addEventListener("click", () => {
    stackedSnackbar.style.visibility = "visible";
    stackedSnackbar.style.position = "fixed";
    stackedSnackbar.style.bottom = "10px";
    stackedSnackbar.style.zIndex = "3";

})

labelBtn.addEventListener("click", () => {
    stackedSnackbar.style.visibility = "hidden"
})


stackedCross.addEventListener("click", () => {
    stackedSnackbar.style.visibility = "hidden"
})