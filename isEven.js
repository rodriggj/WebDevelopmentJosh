function isEven(num) {
    let isEven = false;
    let even = num % 2 === 0; 
    if (num/2 ==  even) {
        isEven = true
    }
    console.log(`Number ${num} is even: ${isEven}`)
}

isEven(6);