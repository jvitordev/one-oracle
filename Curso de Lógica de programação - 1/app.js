let min = Math.ceil(1);
let max = Math.floor(101);
let numSecreto = Math.floor(Math.random() * (max - min) + min);
let chute;
let tentativas = 1;

console.log(numSecreto);


while (chute != numSecreto) {
    chute = prompt('Insira um número:');

    if (chute == numSecreto) {
        break;
    } else {
        tentativas++;
        if (chute > numSecreto) {
            alert(`O número ${chute} digitado é maior, tente novamente.`);
        } else {
            alert(`O número ${chute} digitado é menor, tente novamente.`);
        }
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o número secreto ${numSecreto} com ${tentativas} ${palavraTentativa}.`);