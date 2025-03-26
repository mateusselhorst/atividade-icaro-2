//11º Questão

function verificarSinal(num) {
    if (num === 0) {
        console.log('O número é exatamente igual a zero')
    }
    else if (num < 0) {
        console.log('O número é negativo')
    }
    else if (num > 0) {
        console.log('O número é positivo')
    }
}
verificarSinal(-12);

//14º Questão

function atividade14(){

    console.log("Substituir palavras Azul por Vermelho")

    let texto = prompt('Digite uma frase ou texto com a palavra azul: ')

    console.log(texto.replace(/azul/g, "vermelho"))
}

//21º Questão

function atividade21(){

    console.log("Soma dos Elementos de um Array");

    let valores = prompt("Digite números separados por vírgula: ").split(",").map(Number);

    console.log("Soma:", valores.reduce((acc, val) => acc+val, 0));
}

//24º Questão

function atividade24() {
    console.log("Capitalizar a Primeira Letra");
    let texto = prompt('Digite uma palavra:')
    console.log(texto.charAt(0) . toUpperCase() + texto.slice(1));
}