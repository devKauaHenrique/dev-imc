let nome;
let peso;
let altura;
let imc;
let resultadoImc = document.getElementById('resultado-imc');
let textImc = document.getElementById('text-imc');

function calcular(event){
    event.preventDefault();

    nome = document.getElementById('nome').value;
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    if(imc < 17){
        resultadoImc.innerHTML = `${nome} seu IMC é: ${imc.toFixed(2)}`;
        textImc.innerHTML = 'Você está muito abaixo do peso ideal';
    }
    else if(imc >= 17 & imc < 18.5){
        resultadoImc.innerHTML = `${nome} seu IMC é: ${imc.toFixed(2)}`;
        textImc.innerHTML = 'Você está abaixo do peso ideal';
    }
    else if(imc >= 18.5 & imc < 25){
        resultadoImc.innerHTML = `${nome} seu IMC é: ${imc.toFixed(2)}`;
        textImc.innerHTML = 'Você está no peso ideal';
    }
    else if(imc >= 25 & imc < 30){
        resultadoImc.innerHTML = `${nome} seu IMC é: ${imc.toFixed(2)}`;
        textImc.innerHTML = 'Você está acima do peso ideal';
    }
    else{
        resultadoImc.innerHTML = `${nome} seu IMC é: ${imc.toFixed(2)}`;
        textImc.innerHTML = 'Cuidado, você está na obesidade, isso é muito grave!';
    }

    document.getElementById('nome').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}