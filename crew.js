const commanderDiv = document.getElementById("commanderDiv");
const missionDiv = document.getElementById("missionDiv");
const pilotDiv = document.getElementById("pilotDiv");
const engineerDiv = document.getElementById("engineerDiv");

const firstCircle = document.getElementById("firstCircle");
const secondCircle = document.getElementById("secondCircle");
const thirdCircle = document.getElementById("thirdCircle");
const fourthCircle = document.getElementById("fourthCircle");

const firstImg = document.getElementById("firstImg");
const secondImg = document.getElementById("secondImg");
const thirdImg = document.getElementById("thirdImg");
const fourthImg = document.getElementById("fourthImg");

firstCircle.addEventListener("click", () => {
    commanderDiv.style.display = "flex";
    missionDiv.style.display = "none";
    pilotDiv.style.display = "none";
    engineerDiv.style.display = "none";

    firstImg.style.display = "flex";
    secondImg.style.display = "none";
    thirdImg.style.display = "none";
    fourthImg.style.display = "none";
});

secondCircle.addEventListener("click", () => {
    commanderDiv.style.display = "none";
    missionDiv.style.display = "flex";
    pilotDiv.style.display = "none";
    engineerDiv.style.display = "none";

    firstImg.style.display = "none";
    secondImg.style.display = "flex";
    thirdImg.style.display = "none";
    fourthImg.style.display = "none";
});

thirdCircle.addEventListener("click", () => {
    commanderDiv.style.display = "none";
    missionDiv.style.display = "none";
    pilotDiv.style.display = "flex";
    engineerDiv.style.display = "none";

    firstImg.style.display = "none";
    secondImg.style.display = "none";
    thirdImg.style.display = "flex";
    fourthImg.style.display = "none";
});

fourthCircle.addEventListener("click", () => {
    commanderDiv.style.display = "none";
    missionDiv.style.display = "none";
    pilotDiv.style.display = "none";
    engineerDiv.style.display = "flex";

    firstImg.style.display = "none";
    secondImg.style.display = "none";
    thirdImg.style.display = "none";
    fourthImg.style.display = "flex";
});
