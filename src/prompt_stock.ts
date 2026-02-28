import PromptSync = require ("prompt-sync");

const prompt = PromptSync();

let op: number;
let stock: string[] = [];

do{
    op = Number(prompt(
        "Qual operação deseja executar ? \n [1] Adicionar item \n [2] Listar Itens \n [3] Remover item \n"));

    switch(op){
        case 0:
            console.log("Saindo...");
        break;

        case 1:
        let adicionar: string = prompt("Digite o produto que deseja adicionar: "); 
        stock.push(adicionar);
        console.log(`\nVocê adicionou ${adicionar}!\n`);
        break;

        case 2: 
        if(stock.length == 0){
            console.log("O estoque esta vazio");
        }else{
            console.log("\n Os itens do estoque sao: \n");
            console.log(`${stock}, \n`)
        }
        break;

        case 3:
            let remover = prompt("Qual item deseja remover do estoque ?\n")
            let index = stock.indexOf(remover) 
            //indexof procura o item digitado no vetor e diz a posição dele

            if(index != -1){
                stock.splice(index,1)//na posiçao que achou e remove 1 item
                console.log("Item removido do estoque com sucesso!")
            }else{
                console.log("Produto não encontrado")
            }
            break;

        default:
            console.log("Numero invalido!")
}
}while(op!=0)

