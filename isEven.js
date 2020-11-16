function isEven(num) {
    let isEven = false;
    if (num % 2 === 0) {
        isEven = true
    }
    console.log(`Number ${num} is even: ${isEven}`)
}

isEven(6);