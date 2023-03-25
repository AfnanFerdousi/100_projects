let coupon = document.querySelector(".coupon");
let btn = document.querySelector(".btn");

btn.addEventListener("click", clickToCopy)

function clickToCopy(e){
  e.preventDefault();
  coupon.select();
  document.execCommand("copy");
  btn.textContent = "Copied";
  setInterval(() => {
    btn.textContent = "Copy";
  }, 2000)
}