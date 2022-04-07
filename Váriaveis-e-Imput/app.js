//testando a línguagem
/*const piloto ="primeira const"
console.log(piloto)*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
//readline no C# era mais fácil xD
let captura;
readline.question('digite qualquer coisa:' , input => { 
    captura = input
    console.log(`o usuário digitou ${captura}`) 
})