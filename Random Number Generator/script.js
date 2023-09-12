const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

// WAY 1 //

// const generateRandomNumber = () => {
//   const random = Math.floor(Math.random() * 1000)

//   number.innerHTML = random;
// }
// btn.addEventListener('click', generateRandomNumber)

// generateRandomNumber()

// WAY 2

btn.addEventListener('click', () => {
  const random = Math.floor(Math.random() * 1000)

    number.innerHTML = random;
})