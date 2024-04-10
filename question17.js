// Write a javascript function toget the last element of an array. passing a parameter "n" will return the last "n" elements of the array. 

function retrive(arr, n = 1) {
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            console.log(arr[arr.length -1 -i]);
        }
    } else {
        console.log(`${n} elements are not in the array`);
    }
}
retrive([1, 2, 3, 4, 5], 3)