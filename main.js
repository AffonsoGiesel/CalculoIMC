function calcularIMC() {

    var formulario = document.getElementById("formulario");

    var kilos = +formulario.kilos.value;
    var altura = +formulario.altura.value;
    altura = altura * altura;
    var imc = kilos / altura;

    formulario.imc.value = imc;

    if (imc <= 17) {
        var resultado = "Você está muito abaixo do peso ideal!";
        } else if (imc > 17 && imc <= 18.5) {
        var resultado =  "Você está abaixo do peso ideal! Parabéns!";
    } else if (imc > 18.5 && imc <= 25) {
        var resultado = "Você está no peso ideal!";
    } else if (imc > 25 && imc <= 30) {
        var resultado = "Você está com sobrepeso!";
    } else if (imc > 30 && imc <= 35) {
        var resultado = "Você está com obesidade I";
    } else if (imc > 35 && imc <= 40) {
        var resultado = "Você está com obesidade II (severa)!";
    } else if (imc > 40) {
        var resultado = "Você está com obesidade III (mórbida)!";
    } else {
        var resultado = "Acima do peso!";
    }
    mytextarea.value = resultado;
}
