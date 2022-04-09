const produtosdisponiveis = [
    'Pão',
    'Café',
    'Abacaxi',
    'Batata',
    'Papel',
    'Refrigerante'
]

const listaargs = process.argv.slice(2)

const listaprodutosdispon = produtosdisponiveis.filter(produto =>{
    return listaargs.find(argumento => argumento === produto)
})
listaprodutosdispon.forEach(produto => `Este produtos nós temos ${produto}`)

const listaprodutosnaodisponiveis = listaargs.filter(argumento => {
    return !listaprodutosdispon.find(produto => produto !== args)
})  
listaprodutosnaodisponiveis.forEach(`argumento este produto nós não temos ${argumento}`)