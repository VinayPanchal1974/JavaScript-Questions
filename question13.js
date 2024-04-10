// In an array of numbers and strings , only add those members which are not strings.

const arr = [3,"vinay","nikhil",1,"ramu",2,"shamu",4,"hwu",5]
let sum = 0;
arr.forEach(elem =>{
    if(typeof elem === "number"){
        sum += elem
    }
})
console.log(sum);