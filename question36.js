// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

// function sortArray(arr1, arr2) {
//   const arr3 = [...new Set([...arr1, ...arr2])];
// //   [1, 3, 5, 7, 9, 2, 4, 6, 8]
//   for (let i = 0; i < arr3.length; i++) {
//     for (let j = 1; j < arr3.length; j++) {
//       if (arr3[i] > arr3[j]) {
//         arr3[i] = arr3[j];
//       }
//     }
//   }
//   return arr3;
// }
// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [2, 4, 6, 8, 9];
// console.log(sortArray(arr1, arr2));

function mergeArrays(arr1, arr2, arr3) {
  var i = 0,
    j = 0,
    k = 0;

  // traverse the arr1 and insert its element in arr3
  while (i < arr1.length) {
    arr3[k++] = arr1[i++];
  }

  // now traverse arr2 and insert in arr3
  while (j < arr2.length) {
    arr3[k++] = arr2[j++];
  }

  // sort the whole array arr3
  arr3.sort();
}
var arr1 = [1, 3, 5, 7];
var arr2 = [2, 4, 6, 8];
var arr3 = new Array(n1 + n2);
mergeArrays(arr1, arr2,arr3);

console.log("Array after merging");
for (var i = 0; i < n1 + n2; i++) console.log(arr3[i] + " ");
