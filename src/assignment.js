// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/* Challenge - 1 */
function sumOfNumbers(arrayOfNumbers) {
    
  let sum = 0;

  for(let i = 0; i < arrayOfNumbers.length; i++){
    sum += arrayOfNumbers[i];
  }
    return sum;
}
assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;
}
// assignment.countEvenNumbers = countEvenNumbers;

/* Challenge - 3 */
function celsiusToFahrenheit(arrayOfNumbers) {
      let fahrenheitArray = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let fahrenheit = Math.floor(arrayOfNumbers[i] * (9/5) + 32);
    fahrenheitArray.push(fahrenheit);
  }
    return fahrenheitArray;
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

