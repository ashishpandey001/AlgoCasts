// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   return str.split(' ').map((i) => (`${i[0].toUpperCase()}${i.slice(1)}`)).join(' ');
// }

function capitalize(str) {
  let idx = 1;
  let newStr = str[0].toUpperCase();
  while (idx < str.length) {
    const isPrevSpace = str[idx - 1] === ' ';
    newStr += isPrevSpace ? str[idx].toUpperCase() : str[idx];
    idx++;
  }
  return newStr;
}

module.exports = capitalize;
