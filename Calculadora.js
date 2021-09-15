const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('display1').value;
    const altura = document.getElementById('display2').value;
    const peso = document.getElementById('display3').value;
    const resultado = document.getElementById('resultado');

if(nome !== "" && altura !== "" && peso !== ""){

    const conta = (peso / (altura * altura)).toFixed(1)

    let classificacao = "";

    if (conta < 18.5){
        classificacao = 'abaixo do peso.';
    }else if (conta < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
    }else if (conta < 30){
        classificacao = 'levemente acima do peso.';
    }else if (conta < 35){
        classificacao = 'com obesidade grau I.';
    }else if (conta < 40){
        classificacao = 'com obesidade grau II';
    }else {
        classificacao = 'com obesidade grau III. Cuidado!!';
    }

    resultado.textContent = `${nome} seu IMC é ${conta} e você está ${classificacao}`;
}
else{
    resultado.textContent = 'Preencha todos os dados!'
}


}
calcular.addEventListener('click', imc);


