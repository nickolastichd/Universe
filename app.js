const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerBtnDropout = document.getElementById("hamburgerBtnDropout");
const headerDiv = document.getElementById("headerDiv");
const heroDiv = document.getElementById("heroDiv");
const hamburgerMenu = document.getElementById("hamburgerMenu");

hamburgerBtn.addEventListener("click", () => {
    headerDiv.style.display = "none";
    heroDiv.style.display = "none";
    hamburgerMenu.style.display = "flex";

    hamburgerMenu.classList.add("hamburgerDropin");
    hamburgerMenu.classList.remove("hamburgerDropout");

    hamburgerMenu.addEventListener(
        "animationend",
        () => {
            hamburgerMenu.classList.remove("hamburgerDropin");
        },
        { once: true }
    );
});
hamburgerBtnDropout.addEventListener("click", () => {
    headerDiv.style.display = "flex";
    heroDiv.style.display = "flex";
    hamburgerMenu.classList.add("hamburgerDropout");
    hamburgerMenu.addEventListener(
        "animationend",
        () => {
            hamburgerMenu.style.display = "none";
            hamburgerMenu.classList.remove("hamburgerDropout");
        },
        { once: true }
    );
});

// Desination Picker

