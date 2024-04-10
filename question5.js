// make this work:
// duplicate([1,2,3,4,5])  // [1,2,3,4,1,2,3,4]

// function adder(arr){
//     let str = arr.join("")
//     let data = str.concat(str).split("")
//     return data
// }
// const arr = [1,2,3,4,5]
// console.log(adder(arr))


function adder(arr){
    return arr.join("").repeat(2).split("")
}
const arr = [1,2,3,4,5]
console.log(adder(arr))


// const arr = [1,2,3,4]

// const dup = arr.concat(arr)
// console.log(dup)

// function duplicate(arr) {
//     return arr.join("").repeat(2).split("")
// }
// console.log(duplicate([1, 2, 3, 4]))
