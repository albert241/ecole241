let max, nombre;
max = + prompt("Entrez le nombre 1 svp:");
for (let i = 1; i <= 5; i++) {
    nombre = + prompt(`Entrez le nombre ${i}`);
    if (nombre > max) {
        max = nombre;
    }
}
console.log(`Le plus grand est : ${max}`);
