const slides = document.querySelectorAll(".slide")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const autoScroll = true;
let slideInterval;
let intervalTime = 3000;

next.addEventListener("click", () => {
  nextSlide()
  if (autoScroll) {
    clearInterval(slideInterval)
    auto()
  }
})

prev.addEventListener("click", () => {
  prevSlide()
  if (autoScroll) {
    clearInterval(slideInterval)
    auto()
  }
})


const nextSlide = () => {
  const current = document.querySelector(".current")
  current.classList.remove("current")

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current")
  } else {
    slides[0].classList.add("current")
  }
}

const prevSlide = () => {
  const current = document.querySelector(".current")
  current.classList.remove("current")

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current")
  } else {
    slides[slides.length - 1].classList.add("current")
  }
}

