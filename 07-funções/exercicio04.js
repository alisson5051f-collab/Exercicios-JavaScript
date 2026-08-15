function somarPares(vetor) {
    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            soma += vetor[i];
        }
    }

    return soma;
}

let numeros = [1, 2, 3, 4, 5, 6];

console.log("Soma dos pares:", somarPares(numeros));
