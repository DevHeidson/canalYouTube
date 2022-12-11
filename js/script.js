// Passo a passo para resolver o problema proposto
// Calcular o IMC
// Peso ok
// Altura ok
// Realizar o cálculo do IMC ok
// Mostrar o resultado do cálculo IMC --> ok

// Construindo a função que realiza o cálculo do IMC e adiciona na página HTML o resultado
function calcularIMC(){
    let peso = Number(document.querySelector("#peso").value);
    let altura = Number(document.querySelector("#altura").value);
    let imc = peso / (altura * altura);
    document.querySelector("#resultado").value = imc.toFixed(2);
}

// Selecionando a tag h2 da página HTML
let h2 = document.querySelector("h2");
h2.addEventListener("click", calcularIMC)

// Realizei o clone do projeto canalYouTube Devheidson

