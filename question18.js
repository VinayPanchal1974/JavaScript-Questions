// Write a javascript program to find the most frequent item of an Array. 

// function frequent(arr) {
//     const freq = {}
//     arr.forEach(elem => {
//         if (freq.hasOwnProperty(elem)) freq[elem]++
//         else freq[elem] = 1
//     });
//     var max = Object.keys(freq).reduce((acc, num) => {
//         return freq[acc] > freq[num] ? acc : num
//     })
//     console.log(max);

// }
// frequent([11, 1, 2, 1, 2, 44, 3,2, 3, 6, 4, 3, 4, 7, 9, 7, 4, 2, 5, 6, 8, 0, 8, 7, 5, 3, 4, 6, 9])



function frequent(arr) {
    const freq = {}
    arr.forEach(elem => {
        if (freq.hasOwnProperty(elem)) {
            freq[elem]++
        } else {
            freq[elem] = 1
        }
    });
    console.log(freq);

    return Object.keys(freq).reduce((a, b) => {
        return freq[a] > freq[b] ? a : b
    })
}
console.log(frequent([11, 1, 2, 1, 2, 2, 44, 3, 4, 4, 2, 3, 6, 4, 3, 4, 7, 9, 7, 4, 2, 5, 6, 8, 0, 8, 7, 5, 3, 4, 6, 9]));