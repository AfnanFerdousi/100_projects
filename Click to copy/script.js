function getUniqueValues(arr) {
  return arr.reduce((result, value) => {
    if (!result.includes(value)) {
      result.push(value);
    }
    return result;
  }, []);
}
let myArray = [3, 6, 2, 3, 9, 2, 6, 7];
let uniqueArray = getUniqueValues(myArray);
console.log(uniqueArray);