const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2])
  checkEmail(email)
  checkLength(username, 5, 15)
  checkLength(password, 8, 16)
  matchPassword(password, password2)
})

const checkRequired = (inputAll) => {
  inputAll.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  });
}

const checkEmail = (input) => {
  const format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (format.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, `${getFieldName(input)} is not valid`)
  }
}


const checkLength = (input, min, max) => {
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be greater than ${min}`)
  }else if(input.value.length > min){
    showError(input, `${getFieldName(input)} must be lesser than ${max}`)
  }else{
    showSuccess(input)
  }
}

const matchPassword = (input1, input2) => {
  if(input1.value !== input2.value){
    showError(input2, `Passwords dont match`)
  }
}

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error"
  const small = formControl.querySelector("small")
  small.innerText = message;
}

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success"
}

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)

}