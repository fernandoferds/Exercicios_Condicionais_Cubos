const nota = 10;

if ((nota >= 0) && (nota <= 10)) {
    if ((nota >= 9) && (nota <= 10)) {
        console.log(`Nota A`);
    }

    if ((nota >= 8) && (nota <= 8.9)) {
        console.log(`Nota B`);
    }

    if ((nota >= 6) && (nota <= 7.9)) {
        console.log(`Nota C`);
    }

    if ((nota >= 4) && (nota <= 5.9)) {
        console.log(`Nota D`);
    }

    if ((nota >= 0) && (nota < 4)) {
        console.log(`Nota E`);
    }
} else {
    console.log(`valor invalido`);
}

