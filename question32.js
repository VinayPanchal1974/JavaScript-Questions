// write a function whick can run on both call

// function sum(a, b) {
//     if(b===undefined){
//         return function(b){
//             return a+b
//         }
//     }else{
//         return a+b
//     }
// }
// console.log(sum(1,2));
// console.log(sum(1)(2));

// function sum2(a, b, c) {
//   if (b === undefined && c === undefined) {
//     return (b, c) => {
//       if (c === undefined) {
//         return (c) => {
//           return a + b + c;
//         };
//       } else {
//         return a + b + c;
//       }
//     };
//   } else {
//     return a + b + c;
//   }
// }
// console.log(sum2(1, 2, 3));
// console.log(sum2(1)(2)(3));


// function infiniteCurrying(a){
//   return function(b){
//     if(b) return infiniteCurrying(a+b)
//     return a
//   }
    
// }
// console.log(infiniteCurrying(1)(2)(3)());


function curr(a){
  return function(b){
    return function(c){
      return a*b*c
    }
  }
}
console.log(curr(1)(2)(3));