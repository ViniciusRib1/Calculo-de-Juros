function JurosSimples() {
    
    const Capital = parseFloat(document.getElementById("capital").value); 
    const JurosTaxa = parseFloat(document.getElementById("juros").value);
    const Tempo = parseFloat(document.getElementById("tempo").value); 
    let resultado = document.getElementById("resultado");

    if (isNaN(Capital) || isNaN(JurosTaxa) || isNaN(Tempo)) {
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const jurosdecimal = JurosTaxa / 100;

    const JurosS = Capital * jurosdecimal * Tempo; 

    resultado.innerHTML = `O valor do juros deu: R$ ${JurosS.toFixed(2)}`; 
}

function JursosComposto() {
    const Capital = parseFloat(document.getElementById("capital").value); 
    const JurosTaxa = parseFloat(document.getElementById("juros").value);
    const Tempo = parseInt(document.getElementById("tempo").value); 
    
    if (isNaN(Capital) || isNaN(JurosTaxa) || isNaN(Tempo)) {
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }
    
    const jurosdecimal = JurosTaxa / 100;
    
    const montante = Capital * Math.pow((1 + jurosdecimal), Tempo);
    
    const jurosCompostos = montante - Capital;
    
    resultado.innerHTML = `O montante total é: R$ ${montante.toFixed(2)} e os juros compostos são: R$ ${jurosCompostos.toFixed(2)}`;
    
}
