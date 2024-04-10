// Write a javascript function to get the first element of an array. passing a parameter "n" will return the first "n" elements of the array. 

function retrieve(arr, n = 1) {
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            console.log(arr[i])
        }
    } else {
        console.log(`${n} elements are not there`)
    }
}
retrieve([1, 20, 3, 21, 6], 2)