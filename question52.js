// reverse a string without build in method.
const input = "my name is vinay";
const output = "vinay is name my";

console.log(`Question 52`);

function re(input) {
 return input.split(" ").reverse().join(" ")
}
console.log(re(input))
