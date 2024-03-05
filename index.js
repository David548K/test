/* ---------- Loop For */
let soma = 0, k = 0;
const button = document.getElementById("buttonInput");
let text;

button.onclick = function(){
    text = document.getElementById("numInput").value;

    for(i = text; k < i; k++){
        soma = soma + k;
    }

    document.getElementById("pInput").textContent = soma;
}


/* ---------- Fibonacci */
const fibonacciButton = document.getElementById("fibonacciButton");
const fibonacciInput = document.getElementById("fibonacciInput").value;
const fibonacciText = document.getElementById("p1");
let num = fibonacciInput;

fibonacciButton.onclick = function(){
    let a = 0;
    let b = 1;
    let f = 1;

    while(f < num){
        f = a + b;
        a = b;
        b = f;
    }
    if(f == num || num == 0){
        fibonacciText.textContent = `O número ${num} faz parte da sequência fibonacci`;
    }
    else{
        fibonacciText.textContent = `O número ${num} NÃO faz parte da sequência fibonacci`;
    }
}


/* ---------- Inverter String */
const stringButton = document.getElementById("stringButton");
const stringInput = document.getElementById("stringInput").value;
const stringText = document.getElementById("p2");

stringButton.onclick = function(){
    function inverterString(str){
        return str.split('').reverse().join('');
    }
    console.log(inverterString(stringInput))
    stringText.textContent = "Verifique em consola";
}
