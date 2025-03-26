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