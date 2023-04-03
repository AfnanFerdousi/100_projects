let input = document.querySelector(".input");
let character = document.querySelector(".character");
let word = document.querySelector(".word");
let wordLimit = document.querySelector(".word-limit");
let readingTime = document.querySelector(".reading-time");
let WORD_LIMIT = 10;

input.addEventListener("keyup",countCharacters);
input.addEventListener("keyup",countWords);

function countCharacters(){
  character.innerHTML = input.value.length;
}

function countWords(){
  let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  if(words){
    word.innerHTML = words.length;
    wordLimit.innerHTML = WORD_LIMIT - words.length;
  }else{
    word.innerHTML = 0;
  }

  //   Reading time based on 225 words/min
  if(words){
    let secs = Math.floor((words.length * 60) / 225);
    if(secs > 59){
      let mins = Math.floor(secs/60);
      secs = secs - mins * 60;
      readingTime.innerHTML = mins + " Mins" + secs + " Secs"
    }else{
      readingTime.innerHTML = secs + " Secs"
    }
  }else{
    readingTime.innerHTML = "0 Secs"
  }
}