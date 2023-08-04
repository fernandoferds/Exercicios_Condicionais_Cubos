let formaDePagamento = "pix";
let valorDoProduo = 30;

if (formaDePagamento === "credito") {
    console.log(`forma de pagamento ${formaDePagamento}, desconto de 5%, valor a pagar ${valorDoProduo - valorDoProduo * 0.05}`);
} else if (formaDePagamento === "cheque") {
    console.log(`forma de pagamento ${formaDePagamento}, desconto de 3%, valor a pagar ${valorDoProduo - valorDoProduo * 0.03}`);
} else if (formaDePagamento === "debito" || formaDePagamento === "dinheiro") {
    console.log(`forma de pagamento ${formaDePagamento}, desconto de 10%, valor a pagar ${valorDoProduo - valorDoProduo * 0.10}`);
} else {
    console.log(`forma de pagamento invalida`);
}