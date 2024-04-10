//  Create an array of sums : at any index put sum of all elements except that index element
// input => [2,7,11,4,-2]
// output => [20,15,11,18,24]

console.log(`Question 23`);

function newArr(input) {
  const data = [];
  input.forEach((ele, i) => {
    data[i] = input.reduce((a, b) => {
      return a + b;
    }) - ele;
  });
  return data;
}

console.log(newArr([2, 7, 11, 4, -2]));
