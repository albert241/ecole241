let nombre;
do{
  nombre = + prompt("Entrez un nombre svp: ");
}while(Number .isNaN(nombre));
for(i = 1; i <= 10; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`)
}
