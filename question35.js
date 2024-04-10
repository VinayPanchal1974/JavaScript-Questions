// Write a recursive function to calculate the factorial of a given number.
// let fact = 1;
// function rec(n) {
//   if (n === 0) {
//     console.log(fact);
//     return;
//   }
//   fact = fact * n;
//   rec(n - 1);
// }
// rec(3)

let fact = 1;
function rec(n) {
  if (n === 0) {
    return fact;
  }
  fact = fact * n;
  return rec(n - 1);
}
console.log(rec(5));

// function dd(a){
//     console.log(a);
//     if(a==1){
//         console.log(a);
//         return ;
//     }
//     dd(a-1)
// }
// dd(10)
