// BMI - kg/m2
// Normal - 18.5 -24.9
// Underweight - < 18.5
// Overweight -  25 - 29.9
// Obese -  30 and above
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")
const reset = document.querySelector(".reset")

btn.addEventListener("click", calculateBMI)

function calculateBMI(e){
  e.preventDefault()
  let height = document.querySelector(".height").value
  let weight = document.querySelector(".weight").value

  // error handling
  if(height === "" || isNaN(height)){
    return(result.innerHTML= "Please provide a valid height")
  }else if(weight === "" || isNaN(weight)){
    return(result.innerHTML= "Please provide a valid Weight")
  }else{
    height = height /100;
    let bmi = (weight / Math.pow(height, 2)).toFixed(2)
     //   Categorize result
     if (bmi < 18.5) {
      result.innerHTML = `Underweight: <span>${bmi}</span>`      
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerHTML = `Normal: <span>${bmi}</span>`
    } else if (bmi >= 25.0 && bmi < 29.9) {
      result.innerHTML = `OverWeight: <span>${bmi}</span>`
    } else {
      result.innerHTML = `Obese: <span>${bmi}</span>`
    }
  }
  reset.style.display= "block"
}
function reseting(e){
  document.querySelector("form").reset();
  reset.style.display= "none"
  result.style.display= "none"
}

reset.addEventListener("click", reseting)