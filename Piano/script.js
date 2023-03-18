const keys = document.querySelectorAll(".key")
const note = document.querySelector(".key-pressed")

window.addEventListener("keydown", playNote)

function playNote(e){
  const audio = document.querySelector(`audio[data-key="${e?.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e?.keyCode}"]`)

  if(!key) return;

  key.classList.add("playing")
  audio.currentTime = 0;
  audio.play()
}

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition)
})
function removeTransition(e){
  if(e?.propertyName !== "transform") return;
  this.classList.remove("playing")
}