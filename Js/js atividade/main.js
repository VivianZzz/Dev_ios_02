// filter - amazena em uma nova variavel o valor que você busca no array

// var nomes = [ 'Maria', 'Eduarda', 'joao']
// var novonome = nomes.filter((nome)=> {
//     return nome == 'Maria';
// });

// console.log(novonome);

//exemplos de alert

// window.alert('Olá alunos');
// alert('Olá alunos2');
// 149
// window.open('Abra Uma nova Página');
// window.confirm('Abre uma nova pagina');

// document.title = 'Brasil Escola'
// let heading = document.createElement('H1');
// heading.innerHTML = 'BEM VINDO!';
// document.body.appendChild(heading);


// var titulo1 = document.getElementById(titulo);
//alterando o conteudo do elemento
// titulo.innerHTML = "Bem Vindo!"
// config o estilo css do element 
// titulo.style.backgroundcolor = 'blueviolet';
// titulo.style.borderbottom = 'solid 3px #000';
// titulo.style.margin = '30px'
// titulo.style.textAlign = 'center';
// titulo.style.backgroundColor = '#CCCCC9';
// titulo.style.borderBottom = 'solid 3px #000';
// titulo.style.margin = '20px';


//GetElementbyid

// let titulo = document.getElementById('titulo');
// titulo.style.backgroundcolor = 'blueviolet';
//GetElementbyClassName


// let items = document.getElementsByClassName('item');
// items[0].style.backgroundcolor= 'red';
// items[1].style.backgroundcolor= 'yellow';
// items[2].style.backgroundcolor= 'green';
// items[2].innerHTML ='─=≡Σ((( つ◕ل͜◕)つ';
// items[2].innerHTML ='	༼ つ ◕_◕ ༽つ'
// items[2].innerHTML ='	༼つಠ益ಠ༽つ ─=≡ΣO))'

// items[0].style.backgroundColor = 'yellow';
// items[2].style.backgroundColor = 'pink';
// items[0].style.backgroundColor = 'red';
// items[2].textContent= 'ʕっ•ᴥ•ʔっ'
// items[0].textContent = '( ͡° ͜ʖ ͡°)'
// items[2].textContent= '(｡◕‿‿◕｡)'

let items = document.getElementsByClassName('items');
for (let i= 0; i <items.length; i++){
    items[i].style.backgroundcolor = '#4B0082';
    items[i].style.color = '#EE82EE';
    items[i].style.fontsize = '30px';
    items[i].style.borderbottom = '2px solid black';
}

let remove = document.getElementsByClassName('item');
remove[2].remove();

let paragrafo = document.querySelector('p');
paragrafo.style.backgroundColor = '#FBBEBA';

let par2 = document.querySelector('p.exemplo')
par2.style.backgroundColor = 'blue' ;
par2.style.color = 'silver' ;

let par3 = document.querySelector('div.myclass')
par3.style.backgroundColor = '#80489C' ;
par3.style.color = '#FF8FB1' ;

let par4 = document.querySelector('#my-span')
par4.style.backgroundColor = '7DE5ED' ;
par4.style.color = '81C6E8' ;
