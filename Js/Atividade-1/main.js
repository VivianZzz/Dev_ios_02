function calcular(){
    var n1 = document.querySelectorAll('#vl1');   
var n2 = document.querySelectorAll('#vl2');
var valor1 = Number(n1.value);
var valor2 = Number(n2.value);
var med = (valor1 + valor2) / 2;
XPathResult.innerhtml = 'sua média: ${med}' ;
}



