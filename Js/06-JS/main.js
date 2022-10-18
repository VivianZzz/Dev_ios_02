/*2° exercício*/
var Array = ["html", 1993, "css",1996, "bootstrap",2011,"JS",1995,"REACT", 2013,"Java", 1995];
console.log(Array)

console.log(Array.length)

console.log(Array[6])

var ArrayS = Array.toString()

console.log(typeof ArrayS)

var V = Array.join(" / ")

console.log(V)

var w = Array.unshift('IOS')

console.log(Array)

/*3° exercício*/

console.clear()
var array =[
    ["html",1993,"css", 1996],
    ["bootstrap", 2011, 'js', 1995],
    ["react", 2013, "java",1955],
]

console.log(array)

console.log(array.length)

console.log(array[2][1])

array[1][2] = "js"

console.log(array)

delete array[2][2];

console.log(array)

var u = array.push('pipoca')

console.log(array)
