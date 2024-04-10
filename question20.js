// Write a javascript program to compute the union of two arrays sample 
// data : console.log(union([1,2,3],[100,2,1,10]));
// [1,2,3,10,100]

function union(a,b){

const newArr = [...a,...b]
return [...new Set(newArr)]
}
const ar1 = [1,2,3]
const ar2 = [100,2,1,10]
console.log(union(ar1,ar2))