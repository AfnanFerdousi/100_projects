let count = document.getElementById("countdown");
let time = 1;
let promoTime = time * 60;

function startCountDown(){
  let promoTimer = setInterval(() => {
    if(promoTime <= 0){
      clearInterval(promoTimer)
      count.innerHTML = "Time is Up"
    }else{
      promoTime--;
      let hours = Math.floor(promoTime / 3600) % 24;
      let min = Math.floor(promoTime / 60) % 60;
      let sec = Math.floor(promoTime % 60);
      count.innerHTML = `Time: ${format(hours)}hr : ${format(min)}min : ${format(sec)} `
    }
  }, 1000)

}

function format(t){
  return t < 10 ? `0${t}` : t;
}
startCountDown()