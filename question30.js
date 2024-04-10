// write a javascript function thata takes an array of numbers and returns a new array with only the even unique numbers.
console.log(`Question30`);

function evenArray(arr){
return [...new Set(arr.filter(ele=>{
    return ele%2===0
}))]
}
console.log(evenArray([2,1,3,4,6,7,5,4,32,2,4,6,8,12]));