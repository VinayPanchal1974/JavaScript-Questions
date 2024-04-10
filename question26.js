// rotate array by 2 places : like this
const input = [2, 7, 11, 4, -2];
const output = [11, 4, -2, 2, 7];

console.log(`Question 26`);

function rotateArray(input) {
  for (let i = 0; i < 2; i++) {
    let temp = input[0];
    for (let i = 0; i < input.length - 1; i++) {
      input[i] = input[i + 1];
    }
    input[input.length - 1] = temp;
  }
  console.log(input);
}
rotateArray(input);
