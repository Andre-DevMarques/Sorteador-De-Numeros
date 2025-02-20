let button = document.querySelector("#button");

button.addEventListener("click", function() {
    let PrimeiroInput = document.querySelector("#input1").value;
    let SegundoInput = document.querySelector("#input2").value;
    let resultado = document.querySelector("#resultado")

    let min = Math.min(PrimeiroInput);
    let max = Math.max(SegundoInput);

    if(max > min){
    let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    resultado.innerHTML = `Número sorteado: ${numeroSorteado}`;}else{

        alert("O valor MINIMO não pode ser maior do que o valor maximo")
    }
});

