// make an object which has only property/value which are common in input object
// const input1 = {a:1,b:2,c:3,d:10,e:12}
// const input2 = {a:2,e:12,f:6,d:10}
// const output = { d: 10, e: 12 };
console.log(`Question 24`);

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, d: 10, f: 6 };

function common(a, b) {
  const obj = {};
  for (let i in a) {
    for (let j in b) {
      if (i === j && a[i] === b[j]) {
        obj[i] = a[i];
      }
    }
  }
  return obj;
}
console.log(common(input1, input2));

// other approach
function common(input1, input2) {
  const obj = {};
  for (let i in input1) {
    if (input1[i] === input2[i]) {
      obj[i] = input1[i];
    }
  }
  return obj;
}
console.log(common(input1, input2));
