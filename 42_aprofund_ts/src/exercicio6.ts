/*  EXERCÍCIO 6
    CADASTRAR NOVO PRODUTO EM CARDÁPIO DE RESTAURANTE.
*/
type Cardapio = 
    {
        nome:string,
        custo:number,
        valorDeVenda:number,
        ingredientes:string[]  

    }


enum PratosDoCardapio {
    MACARRONADA = "Macarronada",
    LASANHA = "Lasanha",
    HAMBURGUER = "Hamburguer",
    PEIXEFRITO = "Peixe Frito"
}

const pratos:Cardapio[] = [];

const cadastrarNovoProduto = (nome:string, custo:number, valorDeVenda:number, ingredientes:string[]) => {
     const novoPrato: Cardapio = {nome, custo, valorDeVenda, ingredientes}
     pratos.push(novoPrato)
     console.log(`O produto ${nome} foi cadastrado com sucesso!`)
}

cadastrarNovoProduto("Lasanha", 25.50, 55.50, ['Massa', 'Recheio', 'Molho'])
console.log("Cardápio:", pratos)

