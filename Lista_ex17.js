const valoDoProduto = 1000;
const valorPago = 900;
const quantidadeDeParcelas = 10;
const valorDaparcela = valoDoProduto / quantidadeDeParcelas;
const debitoAtual = valoDoProduto - valorPago;
const parcelasRestantes = debitoAtual / valorDaparcela;

if (valoDoProduto === valorPago) {
    console.log(`Todas as parcelas foram pagas`);

} else {
    console.log(`Valor do produto ${valoDoProduto}`);
    console.log(`Parcelado em ${quantidadeDeParcelas}x de ${valorDaparcela}`);
    console.log(`Restam ${parcelasRestantes} parcelas de ${valorDaparcela}`);
    console.log(`Total pago até o momento = ${valorPago}, Debito atual ${debitoAtual}`);
}

