function isFibonacci(num) {
    let a = 0;
    let b = 1;

    while (b <= num) {
        if (b === num) {
            return true;
        }
        const temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}

const num = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

if (isFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}