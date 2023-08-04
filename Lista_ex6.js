let alturaEmCm = 186;

if (alturaEmCm >= 180) {
    if ((alturaEmCm >= 180) && (alturaEmCm <= 185)) {
        console.log(`Libero`);
    }
    if ((alturaEmCm >= 186) && (alturaEmCm <= 195)) {
        console.log(`Ponteiro`);
    }
    if ((alturaEmCm >= 196) && (alturaEmCm <= 205)) {
        console.log(`oposto`);
    }
    if (alturaEmCm > 205) {
        console.log(`central`);
    }

} else {
    console.log(`Reprovado na primeira fase`);
}