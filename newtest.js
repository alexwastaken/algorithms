function fact(number) {
    if (number === 1) {
        return 1;
    }
    return number * fact(number-1);
}

console.log(fact(4))