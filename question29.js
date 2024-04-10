// Find the max occurring character
// const str = 'This is JavaScript code and you to find max char'

console.log(`Question 29`);

const str = "This isJavaScriptcode andyou tofind max char";

function occurance(str) {
  const obj = {};
  str.split("").forEach((ele) => {
    if (obj.hasOwnProperty(ele)) {
      obj[ele]++;
    } else {
      obj[ele] = 1;
    }
  });
  return Object.keys(obj).reduce((a, b) => {
    return obj[a] > obj[b] ? a : b;
  });
}
console.log(`Max occuring character is ${occurance(str)}`);
