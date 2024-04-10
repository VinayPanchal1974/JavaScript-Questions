// Find second largest number in the array.
// const input = [1, 2, -2, 11, 7, 1];
// const output = 7;
// const input1 = [1, 4, 7, 2, 4, 7];
// const output1 = 4;

console.log(`Question 25`);

// function secondLargest(arr) {
//   const nArr = [...new Set(arr)].sort((a, b) => {
//     return a - b;
//   });
//   return nArr[nArr.length - 2];
// }
// console.log(
//   `second largest number in array is ${secondLargest([1, 2, -2, 11, 7, 1])}`
// );
// console.log(
//   `second largest number in array is ${secondLargest([1, 4, 7, 2, 4, 7])}`
// );

// other approach
function secondLargest(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr
    .sort((a, b) => {
      return a - b;
    })
    .at(-2);
}
console.log(
  `second largest number in array is ${secondLargest([1, 2, -2, 11, 7, 1])}`
);
console.log(
  `second largest number in array is ${secondLargest([1, 4, 7, 2, 4, 7])}`
);
