let button = document.querySelector("#button");

button.addEventListener("click", function() {
    let PrimeiroInput = document.querySelector("#input1").value;
    let SegundoInput = document.querySelector("#input2").value;
    let resultado = document.querySelector("#resultado");

    // Define o valor mínimo e máximo para o sorteio
    let min = Math.min(PrimeiroInput, SegundoInput);
    let max = Math.max(PrimeiroInput, SegundoInput);

    // Gera o número aleatório entre o valor mínimo e máximo
    let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibe o número sorteado no parágrafo
    resultado.innerHTML = `Número sorteado: ${numeroSorteado}`;
});
