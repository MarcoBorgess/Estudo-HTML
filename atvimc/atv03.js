function calcularIMC() {
    //alert("Entrei");
    var idade = parseInt( document.imcForm.inputidade.value);
    
    var altura = parseFloat( document.imcForm.inputaltura.value);
    var peso = parseFloat( document.imcForm.inputpeso.value);

    var quadrado = (altura*altura);
    var calculo = (peso/quadrado);
    var estado = " ";

    if (idade > 65) {
        //IDOSOS
        if (calculo > 1 && calculo <= 22) {   
            //abaixo do peso
            estado = "Abaixo do Peso";
        }else if (calculo >22 && calculo < 27) {
            //saudavel
            estado = "Saudável";
        }else if (calculo >= 27 && calculo < 500) {
            //peso em excesso
            estado = "Peso em excesso";
        }else {
            estado = "Valores Inválidos";
            calculo = 0;
        }
    }else {
        //NÃO IDOSO
        if (calculo > 1 && calculo <= 18.5) {
            //abaixo do peso
            estado = "Abaixo do Peso";
        }else if (calculo > 18.5 && calculo <= 24.9) {
            //saudável
            estado = "Saudável";
        }else if (calculo > 24.9 && calculo <=29.9) {
            //peso em excesso
            estado = "Peso em excesso";
        }else if (calculo > 29.9 && calculo <= 34.9) {
            //obesidade grau I
            estado = "Obesidade de Grau I";
        }else if (calculo > 34.9 && calculo <= 39.9) {
            //obesidade grau II
            estado = "Obesidade de Grau II";
        }else if (calculo > 39.9 && calculo < 500) {
            //obesidade grau III
            estado = "Obesidade de Grau III";
        }else {
            estado = "Valores Inválidos";
            calculo = 0;
        };
    };

    document.querySelector("#display").innerHTML = estado+" (IMC = "+Math.round(calculo)+")";

};