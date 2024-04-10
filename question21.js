// Write a JavaScript function to check if a given number is prime. 
function primeChecker(num) {
    let isPrime = true;
    for (let i = 2; i < num ; i++){
        if(num % i===0){
            isPrime = false
        }
    }
    return isPrime
}
console.log(`is given number is a prime`,primeChecker(13))