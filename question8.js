// write a javaScript function that returns a passed string with letters in alphabetical order

function alpha(str){
    return str.split("").sort().join("")
}
console.log(alpha("cdaeb"))


// function sorting(name){
//     return name.split("").sort().join("")
// }
// console.log(sorting("bedac"));