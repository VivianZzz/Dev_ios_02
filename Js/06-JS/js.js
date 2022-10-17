/*Criando um Array unidimensional*/

var Array1 = ['marcelo', 15, 'collin', 47, true];
console.log(Array1);
console.log(Array1[2]);
console.clear();
Array1[3] = 80;
console.log(Array1);

/*array bidimensional*/

var array = [
    ['pipoca', 10, false],
    ['string', 20, true],
    ['margarina', 12, false],
];
console.log(array);
console.log(array[2], [0]);
console.clear();
array[1][0] = 'salsicha';
console.log(array);

console.clear();
/*array de objeto carro*/
var carro = ['uno', 1998, '0km', false, 2];
var x = carro.toString();
console.log(typeof x);
console.log(typeof carro);


console.clear()
var y = carro.join(" ? ")
console.log(carro)
console.log(x)
console.log(y)
/*retira um elemento no final da array*/
//console.log(carro.length)
//console.clear()
//var t = carro.pop()
//console.log(carro)
//console.log(t)
/*inserir uma informação no final do array*/
console.clear()
var u = carro.push('lego');
console.log(carro)
console.log(u)

/*Shift*/
console.clear()
var p = carro.shift();
console.log(carro)
console.log(p)


/*unshift*/

console.clear();
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)

/*apagando um elemento array em uma posição pré selecionada*/

console.clear();
delete carro[1]
console.log(carro)







