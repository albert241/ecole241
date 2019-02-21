let max, nbre;
max = + prompt("Entrez le nombre 1 svp:");
for (let i = 1; i <= 5; i++) {
    nbre = + prompt(`Entrez le nombre ${i}`);
    if (nbre > max) {
        max = nbre;
    }
}
console.log(`Le plus grand est : ${max}`);
