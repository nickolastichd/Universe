// Menu Dropdown

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

const moonImg = document.getElementById('moonImg');
const marsImg = document.getElementById('marsImg');
const europaImg = document.getElementById('europaImg');
const titanImg = document.getElementById('titanImg');

const moonBtn = document.getElementById('moonBtn');
const marsBtn = document.getElementById('marsBtn');
const europaBtn = document.getElementById('europaBtn');
const titanBtn = document.getElementById('titanBtn');

const moonDiv = document.getElementById('moonDiv');
const marsDiv = document.getElementById('marsDiv');
const europaDiv = document.getElementById('europaDiv');
const titanDiv = document.getElementById('titanDiv');

moonBtn.addEventListener('click', () => {
    moonDiv.style.display = 'flex'
    moonImg.style.display = 'flex'

    marsDiv.style.display = 'none'
    marsImg.style.display = 'none'

    europaDiv.style.display = 'none'
    europaImg.style.display = 'none'

    titanDiv.style.display = 'none'
    titanImg.style.display = 'none'
})

marsBtn.addEventListener('click', () => {
    moonDiv.style.display = 'none'
    moonImg.style.display = 'none'

    marsDiv.style.display = 'flex'
    marsImg.style.display = 'flex'

    europaDiv.style.display = 'none'
    europaImg.style.display = 'none'

    titanDiv.style.display = 'none'
    titanImg.style.display = 'none'
})

europaBtn.addEventListener('click', () => {
    moonDiv.style.display = 'none'
    moonImg.style.display = 'none'

    marsDiv.style.display = 'none'
    marsImg.style.display = 'none'

    europaDiv.style.display = 'flex'
    europaImg.style.display = 'flex'

    titanDiv.style.display = 'none'
    titanImg.style.display = 'none'
})

titanBtn.addEventListener('click', () => {
    moonDiv.style.display = 'none'
    moonImg.style.display = 'none'

    marsDiv.style.display = 'none'
    marsImg.style.display = 'none'

    europaDiv.style.display = 'none'
    europaImg.style.display = 'none'

    titanDiv.style.display = 'flex'
    titanImg.style.display = 'flex'
})
