// Reverse the string like this:
// const input = "This is JavaScript Code"
// const output = "sihT si tpircSavaJ edoC"

console.log(`Question 28`)

const str = "This is JavaScript Code";

function revStr(str){
    const data =  str.split(" ").map((ele)=>{
        return ele.split("").reverse().join("")
    }).join(" ")
    return data

}
console.log(revStr(str))