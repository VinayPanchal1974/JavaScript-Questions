// write a javaScript function that checks whether a passed string is a palindrome or not. 
function isPalindrome(str){
    const rev = str.split("").reverse().join("")
    return str===rev
}
console.log(isPalindrome("vinay"))
console.log(isPalindrome("nitin"))


// function palindrome(name) {
//     return (name.split("").reverse().join("") === name )? "palindrome" : "not palindrome"
// }
// console.log(palindrome("vinay"))
// console.log(palindrome("nitin"))


// function palindrome(name) {
//     let rev = "";
//     for (let i = name.length - 1; i >= 0; i--) {
//         rev = rev + name[i]
//     }
//     return rev === name
// }
// console.log(palindrome("vinay"))
// console.log(palindrome("nitin"))