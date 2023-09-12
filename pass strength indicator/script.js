let state,
  password = document.getElementById("password"),
  showPass = document.querySelector(".show-pass"),
  eyeIcon = document.getElementById("eye"),
  passStrength = document.getElementById("password-strength"),
  lowUpperCase = document.querySelector(".low-upper-case"),
  number = document.querySelector(".number"),
  specialChar = document.querySelector(".special-char"),
  eightChar = document.querySelector(".eight-char");

showPass.addEventListener("click", toggle)
eyeIcon.addEventListener("click", toggleEye)
password.addEventListener("keyup", () => {
  let pass = password.value;
  passwordStrength(pass)
})

function toggle() {
  if (state) {
    password.setAttribute("type", "password");
    state = false;
  } else {
    password.setAttribute("type", "text");
    state = true;
  }
}

function toggleEye() {
  eyeIcon.classList.toggle("fa-eye-slash")
}

function passwordStrength(password) {
  let strength = 0;

  // lower upper char
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    addCheck(lowUpperCase)
  } else {
    removeCheck(lowUpperCase)
  }

  // num
  if (password.match(/([0-9])/)) {
    strength += 1;
    addCheck(number)
  } else {
    removeCheck(number)
  }

  // special char
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    strength += 1;
    addCheck(specialChar)
  } else {
    removeCheck(specialChar)
  }

  // eight char

  if (password.length > 7) {
    strength += 1;
    addCheck(eightChar)
  } else {
    removeCheck(eightChar)
  }

  if(strength == 1){
    removePassStrenght()
    passStrength.classList.add("pb-danger");
    passStrength.style = "width : 25%"
  }else if(strength == 2){
    removePassStrenght()
    passStrength.classList.add("pb-warning");
    passStrength.style = "width : 50%"
  }else if(strength == 3){
    removePassStrenght()
    passStrength.classList.add("pb-primary");
    passStrength.style = "width : 75%"
  }else if(strength == 4){
    removePassStrenght()
    passStrength.classList.add("pb-success");
    passStrength.style = "width : 100%"
  }
}


function addCheck(charReq) {
  charReq.classList.remove("fa-circle");
  charReq.classList.add("fa-check")
}
function removeCheck(charReq) {
  charReq.classList.add("fa-circle");
  charReq.classList.remove("fa-check")
}

function removePassStrenght(){
  passStrength.classList.remove(
    "pb-danger",
    "pb-warning",
    "pb-primary",
    "pb-success"
  )
}