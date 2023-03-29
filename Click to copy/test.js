const arr = [23, 45, 21, 56, 70];
let max = arr[0];

for(let i = 1; i <= arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(max)