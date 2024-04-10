// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
const num = 100;
let a = 0;
let b = 1;
let fn = a + b;
console.log(a);
while (num > fn) {
  console.log(fn);
  fn = a + b;
  a = b;
  b = fn;
}
