let idade = 11;
let possuiPatologia = false;
let alturaEmCm = 151;
let estudante = false;

if ((idade < 12) || (idade > 65) || (possuiPatologia) || (alturaEmCm < 150)) {
    console.log(`Não pode entrar`);
} else {
    if ((estudante) || (idade < 18)) {
        console.log(`Pague 10 reais`);
    } else {
        console.log(`pague 20 reais`);
    }

}