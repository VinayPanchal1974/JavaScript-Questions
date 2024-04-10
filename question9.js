// Write a Javascript function that accepts a string as a parameter and converts the first letter of each word of string in upper case

function capatilize(str){
    const capatalized = str.split(" ").map((ele)=>{
        return ele.charAt(0).toUpperCase()+ele.substring(1)
    }).join(" ")
    return capatalized
}
console.log(capatilize("my name is vinay"))


// function capatalize(str) {
//     return str.split(" ").map((ele)=>{
//         return ele[0].toUpperCase() + ele.slice(1)
//     }).join(" ")
// }
// console.log(capatalize("my name is vinay"))