const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*=-_";

const pLength = document.getElementById("p-length"),
  upperCase = document.getElementById("p-uppercase"),
  lowerCase = document.getElementById("p-lowercase"),
  pNumber = document.getElementById("p-number"),
  pSymbol = document.getElementById("p-symbol"),
  submit = document.getElementById("submit"),
  password = document.getElementById("password"),
  copy = document.getElementById("copy");

let initialPass = ""

submit.addEventListener("click", checkReq);
copy.addEventListener("click", click2copy);

function checkReq() {
  upperCase?.checked ? (initialPass += uCase) : "";
  lowerCase?.checked ? (initialPass += lCase) : "";
  pNumber?.checked ? (initialPass += number) : "";
  pSymbol?.checked ? (initialPass += symbol) : "";

  password.value = generatePass(initialPass, pLength?.value)
}

function generatePass(initialPass, l) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initialPass.charAt(Math.floor(Math.random() * initialPass.length))
  }
  return pass;
}

function click2copy(){
  if(password == ""){
    alert("Please Generate a password first")
  }else{
    password.select();
    document.execCommand("copy");
    alert("Password has been copied")
  }
}