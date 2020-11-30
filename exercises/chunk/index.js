// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const result = [];
//   for (const i of array) {
//     const last = result[result.length - 1];
//     if (!last || last.length === size) {
//       result.push([i]);
//     } else {
//       last.push(i);
//     }
//   }
//   return result;
// }

function chunk(array, size) {
  const result = [];
  let idx = 0;
  while (idx < array.length) {
    result.push(array.slice(idx, idx + size));
    idx += size;
  }
  console.log(result, array, size);
  return result;
}

module.exports = chunk;
