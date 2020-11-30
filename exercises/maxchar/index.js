// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxCharIndexValue = 0;
  let maxChar = null;
  for(const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (const char in charMap) {
    if (charMap[char] > maxCharIndexValue) {
      maxChar = char;
      maxCharIndexValue = charMap[char];
    }
  }
  return maxChar;
}

module.exports = maxChar;
