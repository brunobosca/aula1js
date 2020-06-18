/*
let numero1 = Number(window.prompt('Digite o número 1'));

let numero2 = Number(window.prompt('Digite o número 2'));

if(numero1 > numero2) {
    alert('O número é maior é ' + numero1)
} else {
    alert('O número maior é ' + numero2)
}
*/

function minhaFuncao() {
    let numero1 = document.getElementById('numero1');
    let numero1Value = numero1.value;
    numero1Value = Number(numero1Value);


    let numero2;
    numero2 = document.getElementById('numero2'); //'<input id="abc" />' => pega o elmento html
    let numero2Value = numero2.value;
    numero2Value = Number(numero2Value);

    let resultado = document.getElementById('resultado');

    if(numero1Value > numero2Value) {
        resultado.innerHTML = 'O número 1 é maior';
    } else {
        resultado.innerHTML = 'O número 2 é maior';
    }

    // event.preventDefault();
}
    