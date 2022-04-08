const listaargumento = process.argv.slice(2)

console.log('-------------------------executando um FOR--------------------------') //for é mais seguro que o while
for(let controladorFor = 0; controladorFor < listaargumento.length; controladorFor++){
    console.log(`Posição ${controladorFor} valor lido = ${listaargumento[controladorFor]}`);
}

console.log('-------------------------executando um WHILE--------------------------')
let controladorwhile = 0;
while(controladorwhile < listaargumento.length){
    console.log(`Posição ${controladorwhile} valor lido = ${listaargumento[controladorwhile]}`);
    controladorwhile++; //tem que colocar isso para não dar loop
} 


console.log('-------------------------executando um DO WHILE--------------------------') //excecuta antes de checar
let controladorDoWhile = 0;
do{
    console.log(`Posição ${controladorDoWhile} valor lido = ${listaargumento[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaargumento.length)

console.log('-------------------------executando um FOR OF--------------------------')
let controladorforof = 0
for (const argumento of listaargumento){
    console.log(`Posição ${controladorforof} valor lido = ${argumento}`)
    controladorforof++;
}

