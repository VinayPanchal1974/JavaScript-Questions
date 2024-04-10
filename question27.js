// find first missing odd number in the series
// const input = [5,7,9,11,15,17]
// output = 13

console.log(`Question 27`);

const input = [5, 7, 9, 11, 15, 17];
for (let i = 0; i < input.length; i++) {
  let it = input[i + 1];
  if (input[i] + 2 !== it) {
    console.log(input[i] + 2);
    break;
  }
}

// other method
// const input = [5, 7, 9, 11, 15, 17];
// for (let i = 0; i < input.length; i++) {
//   let it = input[i + 1];
//   if (input[i] + 2 === it) {
//     continue;
//   } else {
//     console.log(input[i] + 2);
//     break;
//   }
// }
