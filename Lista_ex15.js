const primeiroNome = "fernando";
const segundoNome = "Silva";
const apelido = "Ferds";

if (primeiroNome) {
    if (apelido) {
        console.log(`apelido: ${apelido}`);
    } else if ((primeiroNome) && (segundoNome)) {
        console.log(`Nome completo: ${primeiroNome} ${segundoNome}`);
    } else {
        console.log(`Primeiro nome: ${primeiroNome}`);
    }
} else {
    console.log(`Primeiro nome não informado`);
}