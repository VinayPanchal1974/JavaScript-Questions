// Write a Javascript function to get the number of occurance of each letter in specified string.
function occurance(str){
    let obj={}
    for(let i = 0 ; i<str.length;i++){
        if(obj.hasOwnProperty(str[i]) === false){
           obj[str[i]] = 1
        }else{
            obj[str[i]]++
        }
    }
    return obj
    
}
console.log(occurance("my name is vinay"))


// function occ(str) {
//     const occurance = {};
//     const arr = str.split(" ").map((ele) => {
//         const a1 = ele.split("")
//         a1.forEach((ele) => {
//             if (occurance.hasOwnProperty(ele)) {
//                 occurance[ele]++
//             } else {
//                 occurance[ele] = 1
//             }
//         })
//     })
//     return occurance
// }
// console.log(occ("my name is vinay"))