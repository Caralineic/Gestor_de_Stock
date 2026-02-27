import PromptSync = require ("prompt-sync");

const prompt = PromptSync();

const op: number = Number(prompt("Qual operação deseja executar ? \n [1] Adicionar item \n [2] Listar Itens \n [3] Remover item \n"));
let stock: string[] = [''];

do{
switch(op){
    case 1:
    const adicionar: string = prompt("Digite o produto que deseja adicionar: "); 
    stock.unshift(adicionar);
    console.log(`Você adicionou ${adicionar}!`);
}
}while(op!=0)

