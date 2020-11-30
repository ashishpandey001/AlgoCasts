// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const nArr = Array.from(new Array(n), (x, i) => i + 1);
  for (const nArrElem of nArr) {
    const isDivisibleBy3 = nArrElem % 3 === 0;
    const isDivisibleBy5 = nArrElem % 5 === 0;
    let output = '';
    if(isDivisibleBy5 && isDivisibleBy3) {
      output = 'fizzbuzz';
    } else if (isDivisibleBy5) {
      output = 'buzz';
    } else if (isDivisibleBy3) {
      output = 'fizz';
    } else {
      output = nArrElem;
    }
    console.log(output);
  }
}

module.exports = fizzBuzz;
