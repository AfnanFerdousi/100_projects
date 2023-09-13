// https://icanhazdadjoke.com

const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");


const getJokeFunc = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    }
  }

  const res = await fetch("https://icanhazdadjoke.com", config)
  const data = await res.json();
  console.log(data)

  // Ternary Operator:
  // data.joke ? <h1>{ data?.joke}</h1> : <h1>kichu nai</h1>

  // Optional Chaining:
  jokeText.textContent = data?.joke;
}

// async function getJokeFunc() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     }
//   }

//   const res = await fetch("https://icanhazdadjoke.com", config)
//   const data = await res.json();

//   jokeText.textContent = data?.joke;
// }

getJokeFunc()
jokeBtn.addEventListener("click", getJokeFunc);






// baba - synchronous
// ammu - asychronous

// vaat
// murgi
// murgi ranna

// vaat + await murgi +  murgi ranna

// kheye felbo 
// pet vore gese 
