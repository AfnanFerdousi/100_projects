const imgLarge = document.getElementById("large-img")
const productImages = document.querySelectorAll(".img-small img")

productImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    let src = e.target.getAttribute("src")
    imgLarge.src = src
  })
})