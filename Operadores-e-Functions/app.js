const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarnumeroinformado = numero => {
        const resultado = Number.parseFloat(numero);
        if(!resultado){
            console.log(`numero informado nao e valido`);
        }
        return resultado
}

const validaroperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('operador informado e inválido');
            return null;        
    }
}

readLine.question('Favor informar um número:', (numero1) => {
    const numerovalidado1 = validarnumeroinformado(numero1);

    if(numerovalidado1){
        readLine.question('Favor informar outro número:', (numero2) => {
            const numerovalidado2 = validarnumeroinformado(numero2);

            if(numerovalidado2){
                readLine.question('Favor informar o operador:', (operador) => {
                    const operadorvalidado = validaroperador(operador);
                    if(operadorvalidado){
                        switch(operadorvalidado){
                            case '+' : console.log(`operador selecionado adicao resultado ${numerovalidado1} + ${numerovalidado2} = ${numerovalidado1 + numerovalidado2}`);
                                break;
                            case '-' : console.log(`operador selecionado subtracao resultado ${numerovalidado1} - ${numerovalidado2} = ${numerovalidado1 - numerovalidado2}`);
                                break;
                            case '*' : console.log(`operador selecionado multiplicacao resultado ${numerovalidado1} * ${numerovalidado2} = ${numerovalidado1 * numerovalidado2}`);
                                break;
                            case '/' : console.log(`operador selecionado divisao resultado ${numerovalidado1} / ${numerovalidado2} = ${numerovalidado1 / numerovalidado2}`);
                                break;
                            case '%' : console.log(`operador selecionado modulo resultado ${numerovalidado1} % ${numerovalidado2} = ${numerovalidado1 % numerovalidado2}`);
                                break;
                            default: break;
                        }
                    }
                });
            }
        });
    }
})
