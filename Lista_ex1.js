let jogada1 = "papel";
let jogada2 = "papel";

if (jogada1 === "pedra") {
    if (jogada2 === "tesoura") {
        console.log(`Pedra vence Tesoura`);
    } else if (jogada2 === "papel") {
        console.log(`Papel vence tesoura`);
    } else {
        console.log(`Empate`)
    }
}

if (jogada1 === "tesoura") {
    if (jogada2 === "pedra") {
        console.log(`Pedra vence tesoura`);
    } else if (jogada2 === "papel") {
        console.log(`tesoura vence papel`);
    } else {
        console.log(`Empate`)
    }
}

if (jogada1 === "papel") {
    if (jogada2 === "pedra") {
        console.log(`papel vence pedra`);
    } else if (jogada2 === "tesoura") {
        console.log(`tesoura vence papel`);
    } else {
        console.log(`Empate`)
    }
}