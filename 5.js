function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const stringOriginal = 'Olá mundo :)';
const stringInvertida = inverterString(stringOriginal);
console.log('String Original:', stringOriginal);
console.log('String Invertida:', stringInvertida);