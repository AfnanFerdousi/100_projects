const arr = ['yes','no','yes','no', "yes"];
let yesArr = 0;
let noArr = 0;

for(let i of arr){
    if(i === 'yes'){
        yesArr++
    }
    else if(i === 'no'){
        noArr ++
    }
}

console.log("this is yes =>>> ",yesArr);
console.log("this is no =>>> ",noArr)
Create a function that will return an array with words inside a text
