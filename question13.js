// In an array of numbers and strings , only add those members which are not strings.

const arr = [3,"vinay","nikhil",1,"ramu",2,"shamu",4,"hwu",5]
let sum = 0;
arr.forEach(elem =>{
    if(typeof elem === "number"){
        sum += elem
    }
})
console.log(sum);

// const arr = [3, "vinay", "nikhil", 1, "ramu", 2, "shamu", 4, "hwu", 5]
// let sum1 = 0;
// function sum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'number'){
//             sum1 += arr[i]
//         }
//     }
//     return sum1
// }
// console.log(sum(arr));

// const arr = [3, "vinay", "nikhil", 1, "ramu", 2, "shamu", 4, "hwu", 5]
// let sum1 = 0;
// function sum(arr) {
//     arr.forEach(e => (typeof e == 'number') ? sum1 += e : "")
//     return sum1
// }
// console.log(sum(arr));