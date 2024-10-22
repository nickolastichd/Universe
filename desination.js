const moonImg = document.getElementById("moonImg");
const marsImg = document.getElementById("marsImg");
const europaImg = document.getElementById("europaImg");
const titanImg = document.getElementById("titanImg");

const moonBtn = document.getElementById("moonBtn");
const marsBtn = document.getElementById("marsBtn");
const europaBtn = document.getElementById("europaBtn");
const titanBtn = document.getElementById("titanBtn");

const moonDiv = document.getElementById("moonDiv");
const marsDiv = document.getElementById("marsDiv");
const europaDiv = document.getElementById("europaDiv");
const titanDiv = document.getElementById("titanDiv");

moonBtn.addEventListener("click", () => {
    moonDiv.style.display = "flex";
    moonImg.style.display = "flex";

    marsDiv.style.display = "none";
    marsImg.style.display = "none";

    europaDiv.style.display = "none";
    europaImg.style.display = "none";

    titanDiv.style.display = "none";
    titanImg.style.display = "none";
});

marsBtn.addEventListener("click", () => {
    moonDiv.style.display = "none";
    moonImg.style.display = "none";

    marsDiv.style.display = "flex";
    marsImg.style.display = "flex";

    europaDiv.style.display = "none";
    europaImg.style.display = "none";

    titanDiv.style.display = "none";
    titanImg.style.display = "none";
});

europaBtn.addEventListener("click", () => {
    moonDiv.style.display = "none";
    moonImg.style.display = "none";

    marsDiv.style.display = "none";
    marsImg.style.display = "none";

    europaDiv.style.display = "flex";
    europaImg.style.display = "flex";

    titanDiv.style.display = "none";
    titanImg.style.display = "none";
});

titanBtn.addEventListener("click", () => {
    moonDiv.style.display = "none";
    moonImg.style.display = "none";

    marsDiv.style.display = "none";
    marsImg.style.display = "none";

    europaDiv.style.display = "none";
    europaImg.style.display = "none";

    titanDiv.style.display = "flex";
    titanImg.style.display = "flex";
});


