
function calculaTempoGestacao(dataInicial: Date, dataFinal: Date): number {
    const milissegundosPorDia = 24 * 60 * 60 * 1000; 
    // Pega a quantidade de Milissegundos em um dia
    const diferencaEmMilissegundos = Math.abs(dataFinal.getTime() - dataInicial.getTime());
        /* Pega a quantidade de Milissegundos entre as duas datas.
        O método "Math.abs" é usado para trazer o valor do resultado positivo (+) 
        independentemente da ordem de menor ou maior número.
        */
    const diferencaEmDias = Math.floor((diferencaEmMilissegundos / milissegundosPorDia)/7);
        /* 
        - O método "Math.floor" converte o valor do resultado, caso seja um número decimal, 
        para um número inteiro.
            Ex. 45,2225 => 45 ; 9,257 => 9
        */

    return diferencaEmDias;
  }
 
  // Pegar a data atual
  const dataAtual = new Date();
  
  // Definir outra data
  const outraData = new Date('2023-04-10'); // Substitua pela data desejada
  
  // Calcular a diferença em dias
  const diferencaEmDias = calculaTempoGestacao(dataAtual, outraData);
  
  console.log(`A gestação é de: ${diferencaEmDias} semanas`);
  
