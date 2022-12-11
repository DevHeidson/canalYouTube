// Calcular o IMC
// Peso ok
// Altura ok
// Realizar o cálculo do IMC ok
// Mostrar o resultado do cálculo IMC --> ok

function calcularIMC(){
    let peso = Number(document.querySelector("#peso").value);
    let altura = Number(document.querySelector("#altura").value);
    let imc = peso / (altura * altura);
    document.querySelector("#resultado").value = imc.toFixed(2);
}

let h2 = document.querySelector("h2");
h2.addEventListener("click", calcularIMC)

