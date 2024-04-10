// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.

const arr = [
  {
    name: "vinay",
    key: 93,
  },
  {
    name: "jatin",
    key: 27,
  },
  {
    name: "sumit",
    key: 24,
  },
  {
    name: "aman",
    key: 46,
  },
  {
    name: "nikhil",
    key: 41,
  },
  {
    name: "vinay",
    key: 40,
  },
];
function arrSort(arr) {
  return arr.sort((a, b) => {
    if (a["key"] > b["key"]) {
      return 1;
    } else if (a["key"] < b["key"]) {
      return -1;
    } else {
      return 0;
    }
  });
}
console.log(arrSort(arr));
