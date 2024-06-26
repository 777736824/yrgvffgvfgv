function calcularIMC() {
    
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (peso && altura) {
        var imc = peso * (altura / 2);

      
        var resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = `<h3>Seu IMC é: ${imc.toFixed(2)}</h3>`;

        resultadoElement.classList.add('resultado');
    } else {
        alert('Por favor, preencha o peso e a altura para calcular o IMC.');
    }
}
