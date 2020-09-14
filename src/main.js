//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

import {orderData,orderType,orderGeneration,buscarPor} from './data.js';
import data from './data/pokemon/pokemon.js';

const pokedex = document.getElementById('pokedex');

const dataCards = (dataPokemon) => {
  pokedex.innerHTML = '';
  dataPokemon.forEach((element) => {
    const sectionElement = document.createElement('section');
    sectionElement.setAttribute('class', 'data1');

    sectionElement.innerHTML = `   
    <div id="card-${element.num}" class="card">
      <p id="number-${element.num}" class="number">${element.num}</p>
      <p id="imgPoke-${element.num}"><img src=${element.img} alt="" class="imgPkm"></p>
      <p id="namePoke-${element.num}">${element.name.toUpperCase()}</p>
    </div>
  `; 

    sectionElement.addEventListener('click',()=>{
      abrir(element)
      });
   
    pokedex.appendChild(sectionElement);
   
  });
};

function abrir(element){
  let dialogo = document.querySelector('#dialogo');
  dialogo.style.display = 'block';
  dialogo.innerHTML = '';
  const divCreado = document.createElement('data1');
  // divCreado.setAttribute('class', 'data1');
  divCreado.classList.add('data1')
  divCreado.innerHTML = `
  <span class="close" style="">×</span>
      <div id="card-${element.num}" class="card2">
      <p id="number-${element.num}" class="number2">${element.num}</p>
      <p id="imgPoke-${element.num}"><img src=${element.img} alt="" class="imgPkm2"></p>
      <p id="namePoke-${element.num}" class="name2">${element.name.toUpperCase()}</p>
      <div >
        <p id="generation-${element.num}" class="generation">Generación: ${element.generation.name}</p>
        <p id="size-${element.num}" class="size">Altura:${element.size.height}- Peso:${element.size.weight}</p>
        <p id="type-${element.num}" class="type">Tipo:${element.type}</p>
        <p id="resistant-${element.num}" class="resistant">Resistencia:${element.resistant}</p>
        <p id="weaknesses-${element.num}" class="weaknesses">Debilidades:${element.weaknesses}</p>
        <p id="egg-${element.num}" class="egg">Huevo:${element.egg}</p>
      </div>
    </div>
  `;
  dialogo.appendChild(divCreado);
 /*  let nombre = dialogo.querySelector('#nombre')
  nombre.innerText = pokemon.name
  let img = dialogo.querySelector('#img')
  img.src = pokemon.img
  console.log(pokemon.name) */
  let span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    dialogo.style.display = "none";
  }
}
dataCards(data.pokemon);



const orderAlfabetic = document.querySelector('#order');
orderAlfabetic.addEventListener('change', () => {
  //const orderSelect = orderAlfabetic.value;
  //dataCards(orderData(data.pokemon, orderSelect));
  dataCards(orderData(data.pokemon, orderAlfabetic.value));
});

const type = document.querySelector('#type');
type.addEventListener('change', () => {
  //const orderSelect = type.value;
  //dataCards(orderType(data.pokemon, orderSelect));
  dataCards(orderType(data.pokemon, type.value));
});


const generation = document.querySelector('#generation');
generation.addEventListener('change', () => {
  //const orderSelect = generation.value;
  //let nuevaData = orderGeneration(data.pokemon, orderSelect)
  let nuevaData = orderGeneration(data.pokemon, generation.value);
  if(type.value){
    dataCards(orderType(nuevaData, type.value));
  }else{
    dataCards(nuevaData);
  }
  
});

let busqueda = document.getElementById('busqueda') //document.querySelector('#busqueda')
let buscar = document.querySelector('#buscar') // asignamos a la lupita
buscar.addEventListener('click',()=>{
  let pokemon = busqueda.value // texto que has escrico en la caja de texto 
  if(pokemon){
    let mibusqueda  = buscarPor.porNombre(pokemon,data.pokemon)
    //document.getElementById('mensaje-busqueda').innerText = mibusqueda
    //console.log(mibusqueda)
    dataCards([mibusqueda])
  }else{
    dataCards(data.pokemon)
  } 
});

const resetear = document.querySelector('#resetear') // asignamos a la lupita
resetear.addEventListener('click',()=>{
  //const orderSelect = 
  orderAlfabetic.options.selectedIndex =0
  type.options.selectedIndex =0
  generation.options.selectedIndex =0
  dataCards(data.pokemon);
});


/*
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  const nombrePokemones =  ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'];
  const poderesPokemones =  ['2004/05',  165,      938,         522,             998,           450,      614.6];
  var data = google.visualization.arrayToDataTable([
   nombrePokemones,
  poderesPokemones
   
  ]);

  var options = {
    title : 'Monthly Coffee Production by Country',
    vAxis: {title: 'Cups'},
    hAxis: {title: 'Month'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}*/