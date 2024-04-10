// Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case.

function palindrome(str) {
  let isPln = false;
  const st1 = str.toUpperCase();
  let st2 = "";
  if (typeof str === "string") {
    for (let i = st1.length - 1; i >= 0; i--) {
      st2 = st2 + st1[i];
    }
    if (st1 === st2) {
      isPln = true;
      return isPln;
    } else {
      return isPln;
    }
  } else {
    return isPln;
  }
}
console.log(palindrome("Nihhnin"));
