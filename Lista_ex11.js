const rendaDoAluno = 2100;
let totalPago = 0;
let totalDeMeses = 0;
let ultimaParcela = 0;
let valorDaParcela = rendaDoAluno * 0.18;
const debitoTotal = 18000;

if (rendaDoAluno >= 2000) {


    for (let i = 0; i <= 59; i++) {

        if (totalPago > 18000) {
            ultimaParcela = 18000 - (totalPago - valorDaParcela);
            totalPago = debitoTotal;
            totalDeMeses = i;
            i = 59;

        } else {
            totalPago = totalPago + (rendaDoAluno * 0.18);
            totalDeMeses++;

        }

    }
    console.log(`Valor da parcela = ${valorDaParcela} \n Valor da ultima parcela ${ultimaParcela}`);
} else {
    console.log(`Aluno não possui renda minima para pagar a parcela`);
}

console.log(` total pago ${totalPago} Total de meses ${totalDeMeses}`);