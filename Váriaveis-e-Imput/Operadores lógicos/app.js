const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("Checar se é maior de idade e tem habilitação para dirigir")
console.log("Depois será checado se está no horarário da lista de presença")

readline.question('Qual o ano do seu nascimento?', ano =>{
    if(ano > 2004){
        console.log('Você não tem 18 anos')
        return
    }else{
        readline.question('você tem habilitação? (Sim/Não)', temhabilitação => {
            if(!(temhabilitação.toUpperCase() === "SIM")){
                console.log("você não possui habilitação para dirigir")
            }else{
                readline.question("qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('Bem vindo Douglas')
                            break
                        case 'João' :
                            console.log('Bem vindo João')
                            break
                        default:
                            console.log('Seu nome não foi identificado na lista de presença')
                    }
                })
            }
        })        
    }
})