const cardNumber = document.querySelector("#number")
const cardValidity = document.querySelector("#valid")
const cardCvv = document.querySelector("#cvv")



const formatCardNumber = (e) => {
  cardNumber.maxLength = "19";
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  if (cardNumber.value.length == 19) {
    formatCardValidity()
  }
}

const formatCardValidity = (e) => {
  cardValidity.focus()
  cardValidity.maxLength = "5";

  if (cardValidity.value.length < 5) {
    cardValidity.value = cardValidity.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/[^\da-z]/g, "")
      .replace(/(.{2})/g, "$1/")
      .trim();
  } else {
    formatCvv()
  }

}

const formatCvv = (e) => {
  cardCvv.focus();
  cardCvv.maxLength = "3";
  cardCvv.value = cardCvv.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .trim();
}

cardNumber.addEventListener("input", formatCardNumber)
cardValidity.addEventListener("input", formatCardValidity)
cardCvv.addEventListener("input", formatCvv)