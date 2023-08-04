const caracter = "n";

if (isNaN(caracter)) {
    if (caracter === "a") {
        console.log(`Letra -a- minuscola`);
    } else if (caracter === "A") {
        console.log(`Letra -A- maiuscula`);
    } else if (caracter === "e") {
        console.log(`Letra -e- minuscola`);
    } else if (caracter === "E") {
        console.log(`Letra -E- maiuscula`);
    } else if (caracter === "i") {
        console.log(`Letra -i- minuscola`);
    } else if (caracter === "I") {
        console.log(`Letra -I- maiuscula`);
    } else if (caracter === "o") {
        console.log(`Letra -o- minuscola`);
    } else if (caracter === "O") {
        console.log(`Letra -O- maiuscula`);
    } else if (caracter === "u") {
        console.log(`Letra -u- minuscola`);
    } else if (caracter === "U") {
        console.log(`Letra -U- maiuscula`);
    } else {
        console.log(`é uma consoante`);
    }
}

if (!isNaN(caracter)) {
    console.log(`É um numero`);
}