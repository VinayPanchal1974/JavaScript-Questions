// 1. Write a JavaScript function to calculate the sum of two numbers.
// const sumOfTwoNumbers = (a, b) => {
//     return a + b
// }
// const result = sumOfTwoNumbers(1,99)
// console.log(result)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Write a JavaScript program to find the maximum number in an array.

// using plain javaScript
// function largest(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// const arr = [1000, 32000, 43, 76, 100, 34, 223, 990]
// console.log(`largest number is:`, largest(arr))

////////////////////////////////////////////OR////////////////////////////////////////////////

// using reduce() method
// function largest(arr) {
//     return arr.reduce(function (a, b) {
//         return a > b ? a : b
//     })
// }
// const arr = [100, 32, 43, 76, 100, 34, 223, 99]
// console.log(`largest number is:`, largest(arr))

////////////////////////////////////////////OR////////////////////////////////////////////////

// using sort() method
// function LargestElement(arr) {
//     arr.sort((a, b) => b - a);
//     return arr[0];
// }
// const arr = [22, 65, 1, 39];
// console.log("Largest in given array is " + LargestElement(arr));    /////????????????????????

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// By using a Naive Approach
// function is_palindrome(name) {
//     let palindrome = false;
//     let reverse = ""
//     for (let i = name.length - 1; i >= 0; i--) {
//         reverse += name[i]
//     }
//     if (reverse === name) {
//         return palindrome = true
//     }
// }
// const answer = is_palindrome("rammar")
// console.log(answer ? "passed name is a palindrome" : "passed name is not a palindrome")

////////////////////////////////////////////OR////////////////////////////////////////////////

// By split , reverse , join  Method
// function is_palindrome(name){
//  return name ===  name.split("").reverse().join("")
// }
// console.log("is palindrome :"  , is_palindrome("rar"))

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// 4. Write a JavaScript program to reverse a given string.

// const reverse = (name) => {
//     return name.split("").reverse().join("")
// }
// console.log(reverse("vinay"))

////////////////////////////////////////////OR////////////////////////////////////////////////

// const reverse = (name) => {
//     let reverse = ""
//     for (let i = name.length - 1; i >= 0; i--) {
//         reverse += name[i]
//     }
//     return reverse
// }
// console.log(reverse("vinay"))

////////////////////////////////////////////OR////////////////////////////////////////////////

// const str = "vinay"
// const reverse = str.split("").reduce((acc,char)=>char+acc)
// console.log(reverse)

////////////////////////////////////////////OR////////////////////////////////////////////////

// const str = "vinay"
// const reversed = [...str].reverse().join("")
// console.log(reversed)

////////////////////////////////////////////OR////////////////////////////////////////////////

// const str = "vinay"
// const reversed = Array.from(str).reverse().join("")
// console.log(reversed)

////////////////////////////////////////////OR////////////////////////////////////////////////

// const str = "vinay"
// const reversed = [...str].reduce((a,b)=>{
//     return b.concat(a)
// })
// console.log(reversed)

// ------------------------------------------------------------------------------------------------------------------------------------------------

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// const arr = [2, 43, 2, 3, 4, 5, 676, 5, 43, 45, 66, 88, 9, 86, 5, 4, 323, 56, 78, 7, 9, 57, 35, 1, 2, 1]
// const even_array = (arr) => {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(even_array(arr))

////////////////////////////////////////////OR////////////////////////////////////////////////

// const arr = [2, 43, 2, 3, 4, 5, 676, 5, 43, 45, 66, 88, 9, 86, 5, 4, 323, 56, 78, 7, 9, 57, 35, 1, 2, 1]
// let even = []
// arr.forEach((val, i) => {
//     if (val % 2 === 0) {
//         even.push(val)
//     }
// })
// console.log(even)

////////////////////////////////////////////OR////////////////////////////////////////////////

// const arr = [2, 43, 2, 3, 4, 5, 676, 5, 43, 45, 66, 88, 9, 86, 5, 4, 323, 56, 78, 7, 9, 57, 35, 1, 2, 1]
// let fun = arr.filter((val, i) => {
//     return val % 2 == 0
// })
// console.log(fun)

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 6. Write a JavaScript program to calculate the factorial of a given number.

// function factorial(num) {
//     let fact = 1;
//     for (let i = num; i > 0; i--) {
//         fact *= i
//     }
//     return fact
// }
// const num = 2
// console.log(`factorial of ${num} is :`, factorial(num))

////////////////////////////////////////////OR////////////////////////////////////////////////

// function factorial(num) {
//     if (num === 0 || num ===1) {
//         return 1
//     } else {
//        return num * factorial(num - 1)
//     }

// }
// const num = 0
// console.log(`factorial of ${num} is :`, factorial(num))

// ----------------------------------------------------------------------------------------------------------------------------------------

// 7. Write a JavaScript function to check if a given number is prime.

// --------------------------------------------------------------------------------------------------------------------------------------------

// 8. Write a JavaScript program to find the largest element in a nested array.

// const greatest = (arr) => {
//     const max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             return greatest(arr[i])
//         }
//     }
// }
// const arr = [10, 43, 65, 77, 23, 6, 9, 4, 2, 3, [87, 44, 2, 3, 5, 6, 77, 876, 2, 4], 55, 2, 1, 4, 6, [87, 45], [98, 7463, 56], 5672]
// console.log(`greatest number in this array is:`, greatest(arr))

////////////////////////////////////////////OR////////////////////////////////////////////////

// function findLargestElement(nestedArray) {
//     let largest = nestedArray[0][0];
//     for (let arr of nestedArray) {
//         for (let num of arr) {
//             if (num > largest) {
//                 largest = num;
//             }
//         }
//     }
//     return largest;
// }
// const nestedArray = [10, 43, 65, 77, 23, 6, 9, 4, 2, 3, [87, 44, 2, 3, 5, 6, 77, 876, 2, 4], , 55, 2, 1, 4, 6, [87, 45], [98, 7463, 56], 5672]
// console.log(`greatest number in this array is:`, findLargestElement(nestedArray))

// ------------------------------------------------------------------------------------------------------------------------------------------------

// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word)
// const capitalize = (str) => {
//     let newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {

//         }
//     }
//     return newStr;
// }
// const str = "my name is vinay kumar panchal."
// // console.log(str.length)
// console.log(`result string is :`, capitalize(str))

// -------------------------------------------------------------

// const str = "H : : i: : ) h: : )w : ) )))ar(((( e : ( y: : (o: : ) ((u : ) : )d:::oi )))n:g:: t: (o:da: : ::y 0 : )"
// function counter(str) {
//     const occurance = str.split(": )")
//     return occurance
// }

// console.log(str.split(": )").length-1)
// console.log(str.split(": )"))

// function sum(a,b){
//     function h(b){
//         return a+b
//     }h(b)
// }
// console.log(sum(2,3))
// console.log(sum(2)(3))

// var a = {},
//   b = { key: "b" },
//   c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// function max(arr){
//     let max = arr[1];
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(max([21,2,3,5,4,3,2,4,6,7,3,2,123]));

const num = 100;
let a = 0;
let b = 1;
let fn =  a+b
console.log(a);
while(num>fn){
    console.log(fn);
    fn = a+b
    a=b
    b=fn
}