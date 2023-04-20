const toggleDarkMode = document.querySelector(".toggle-darkmode")
const toggleText = document.querySelector(".toggle-text")

let darkmode = localStorage.getItem("darkMode");

toggleDarkMode.addEventListener("click", () => {
  let darkmode = localStorage.getItem("darkMode");
  if(darkmode !== "enabled"){
    enableDarkMode()
  }else{
    disableDarkMode()
  }
})

function enableDarkMode() {
  document.body.classList.add("darkmode");
  toggleText.textContent = "Light";
  localStorage.setItem("darkMode", "enabled")
}

function disableDarkMode(){
  document.body.classList.remove("darkmode");
  toggleText.textContent = "Dark";
  localStorage.setItem("darkMode", null)
}

if(darkmode === "enabled"){
  enableDarkMode()
}

