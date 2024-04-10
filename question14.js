//  loop an array of objects and remove all objects which don't have gender's value male.

// const arr = [
//     {name:"vinay",gender:"male"},
//     {name:"jatin",gender:"male"},
//     {name:"neeraj",gender:"male"},
//     {name:"tanu",gender:"female"},
//     {name:"sumit",gender:"male"},
//     {name:"riya",gender:"female"},
//     {name:"rupa",gender:"other"}
// ]
// const newArr = arr.filter((elem)=>{
//     return elem.gender === "male"
// })
// console.log(newArr);

// other way
// let arr = [
//     { name: "vinay", gender: "male" },
//     { name: "jatin", gender: "male" },
//     { name: "neeraj", gender: "male" },
//     { name: "tanu", gender: "female" },
//     { name: "sumit", gender: "male" },
//     { name: "riya", gender: "female" },
//     { name: "rupa", gender: "other" }
// ]
// let count = 0;
// arr.forEach(elem => {
//     if (elem.gender !== "male") {
//         count++
//     }
// })
// for (let i = 1; i <= count; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j].gender !== "male") {
//             arr.splice(j, 1)
//         }
//     }
// }
// console.log(arr);

//  loop an array of objects and remove all objects which don't have gender's value male.

// let arr = [
//     { name: "vinay", gender: "male" },
//     { name: "jatin", gender: "male" },
//     { name: "neeraj", gender: "male" },
//     { name: "tanu", gender: "female" },
//     { name: "sumit", gender: "male" },
//     { name: "riya", gender: "female" },
//     { name: "rupa", gender: "other" }
// ]

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]["gender"] !== "male") {
//         count++
//     }
// }
// console.log(count);
// for (let i = 1; i <= count; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j].gender !== "male") {
//             arr.splice(j, 1)
//         }
//     }
// }
// console.log(arr);

