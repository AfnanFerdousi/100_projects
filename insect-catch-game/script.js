const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
let seconds = 0
let score = 0
let s = 0;
let m = 0;
let selected_insect = {}

// to go to the second screen
start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

choose_insect_btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = {
            src,
            alt
        }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

// create insect
const createInsect = () => {
    const insect = document.createElement("div")
    insect.classList.add('insect')
    const { x, y } = randomLocation()

    insect.style.top = `${y}px`
    insect.style.left = `${x}px`

    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)
    game_container.appendChild(insect)
}
// random location
const randomLocation = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return {x, y}
}

// game start

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    
    m = Math.floor(`${seconds / 60}`)
    s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++

    if (m >= 1) {
        clearInterval(increaseTime)
        gameOver()
    }
}

// function to catch the insect
function catchInsect() {
    increaseScore()
    this.classList.add('caught')   
    setTimeout(() => this.remove(), 1000)
    addInsects()
}

// increase score
function increaseScore() {
    score++;
    scoreEl.innerText= `Score: ${score}`
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

// game over

function gameOver() {
    const overEl = document.createElement("div")
    overEl.innerHTML = `<h2>GAME OVER</h2>`

    game_container.appendChild(overEl)
}