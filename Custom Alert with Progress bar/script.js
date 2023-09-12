const main = document.querySelector(".main");
const alertBox = document.querySelector(".alert");
const icon1 = document.querySelector(".fa-exclamation-circle");
const msg = document.querySelector(".msg");
const closeBtn = document.querySelector(".close-btn");
const closeIcon = document.querySelector(".fa-times");
const progress = document.querySelector(".progress");

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    showAlert("#f8d7da", "#d1281f", "#721c24", "Alert: This is a dangerous alert!");
  } else if (e.target.classList.contains("btn-warning")) {
    showAlert("#ffdb9b", "#ffa502", "#ce8500", "Alert: This is a Warning alert!");
  }
})

const showAlert = (state, borderColor, color, message) => {
  alertBox.style.background = state;
  alertBox.style.borderColor = borderColor;
  msg.textContent = message;
  msg.style.color = color;
  icon1.style.color = color;
  closeIcon.style.color = color;

  alertBox.classList.add("show")
  alertBox.classList.remove("hide")
  setTimeout(() => {
    alertBox.classList.remove("show")
    alertBox.classList.add("hide")
  }, 5000);
  startProgressBar()
  closeBtn.addEventListener("click", () => {
    alertBox.classList.remove("show")
    alertBox.classList.add("hide")
  })

}

const startProgressBar = () => {
  let width = 0;
  const timeInterval = setInterval(fill, 50)

  function fill() {
    if (width >= 100) {
      clearInterval(timeInterval)
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }
}