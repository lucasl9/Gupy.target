// 5) Escreva um programa que inverta os caracteres de um string.

function inverteString(str) {
    let stringInvertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

const stringOriginal = "Exemplo de String";
const stringInvertida = inverteString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
