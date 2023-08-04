let quantidadeEmLitros = -1;

if ((quantidadeEmLitros >= 0) && (quantidadeEmLitros <= 1.5)) {
    console.log(`Risco alto`);
} else if ((quantidadeEmLitros >= 1.5) && (quantidadeEmLitros <= 3)) {
    console.log(`Risco moderado`);
} else if (quantidadeEmLitros > 3) {
    console.log(`Risco Baixo`);
} else {
    console.log(`valor invalido`);
}