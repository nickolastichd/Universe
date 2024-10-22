const launchDiv = document.getElementById('launchDiv');
const spaceportDiv = document.getElementById('spaceportDiv')
const capsuleDiv = document.getElementById('capsuleDiv');

const firstOptn = document.getElementById('firstOptn')
const secondOptn = document.getElementById('secondOptn')
const thirdOptn = document.getElementById('thirdOptn')

const launchImg = document.getElementById('launchImg')
const spaceportImg = document.getElementById('spaceportImg')
const capsuleImg = document.getElementById('capsuleImg')

firstOptn.addEventListener('click', () => {
    launchDiv.style.display = 'flex'
    launchImg.style.display = 'flex'

    spaceportDiv.style.display = 'none'
    spaceportImg.style.display = 'none'

    capsuleDiv.style.display = 'none'
    capsuleImg.style.display = 'none'
})

secondOptn.addEventListener('click', () => {
    launchDiv.style.display = 'none'
    launchImg.style.display = 'none'

    spaceportDiv.style.display = 'flex'
    spaceportImg.style.display = 'flex'

    capsuleDiv.style.display = 'none'
    capsuleImg.style.display = 'none'
})

thirdOptn.addEventListener('click', () => {
    launchDiv.style.display = 'none'
    launchImg.style.display = 'none'

    spaceportDiv.style.display = 'none'
    spaceportImg.style.display = 'none'

    capsuleDiv.style.display = 'flex'
    capsuleImg.style.display = 'flex'
})