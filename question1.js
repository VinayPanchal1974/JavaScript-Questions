// Given a string reverse each word in the sentence.

// function revStr(str) {
//     const answer = str.split(" ").map(ele => ele.split("").reverse().join("")).join(" ")
//     return answer
// }
// const str = "my name is vinay"
// console.log(revStr(str))

// const name1 = 'my name is vinay';
// let finalName = '';
// let changeName = '';
// for (let i = 0; i < name1.length; i++) {
//     if(name1[i]!== " "){
//         changeName = name1[i] + changeName
//     }else{
//         finalName += changeName + " "
//         changeName = ""
//     }     
// }
// finalName = finalName + changeName;
// console.log(finalName);

// function reverseString(str) {
//     const arr = [];
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]!== " "){
//             arr[i].push(arr)
//         }else if(str[i] === " "){

//         }
//     }
//     return arr
// }
// const answer = reverseString("my name is vinay")
// console.log(answer);