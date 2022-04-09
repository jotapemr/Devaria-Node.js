try{
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
        return !listaprodutosdispon.find(produto => produto === argumento)
    })  
    listaprodutosnaodisponiveis.forEach(argumento => console.log(`Este produto nós não temos ${argumento}`))
    
    const listadeprodutosordenados = listaprodutosdispon.sort(produto => produto)
    listadeprodutosordenados.forEach(produto => console.log(`Este produto está disponível ${produto}`))
    
}catch{
    console.log("Não foi possível executar pedido de compra")
}



