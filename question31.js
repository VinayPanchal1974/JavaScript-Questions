// write a javaScript program to calculate  the factorial of a given number .

console.log(`Question 31`);

function factorial(num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));
