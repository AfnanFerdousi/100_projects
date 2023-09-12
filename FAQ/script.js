const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", toggleAccordion)
})

function toggleAccordion() {
  const desc = this.nextElementSibling;
  const allDesc = document.querySelectorAll(".desc");
  const activeAcc = document.getElementsByClassName("accordion active");

  if (desc.style.maxHeight > 0) {
    desc.style.maxHeight = 0;
    this.classList.remove("active")
  } else {
    for (let i = 0; i < activeAcc.length; i++) {
      activeAcc[i].classList.remove("active")
    }
    for (let i = 0; i < allDesc.length; i++) {
      allDesc[i].style.maxHeight = 0;

      desc.style.maxHeight = desc.scrollHeight + "px";
      this.classList.add("active")
    }

  }
}
