const numberArray = [1,4,6,3,2,4,1,6,3,2,1,1,5];

const count = {};

numberArray.forEach(element => {
    count[element]=(count[element] || 0) + 1
})

console.log(count)
