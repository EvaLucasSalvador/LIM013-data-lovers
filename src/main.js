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
      <p id="number-${element.num}">${element.num}</p>
      <p id="imgPoke-${element.num}"><img src=${element.img} alt="" class="imgPkm"></p>
      <p id="namePoke-${element.num}">${element.name.toUpperCase()}</p>
    </div>
  `;
     
    pokedex.appendChild(sectionElement);
  });
};

dataCards(data.pokemon);

const orderAlfabetic = document.querySelector('#order');
orderAlfabetic.addEventListener('change', () => {
  const orderSelect = orderAlfabetic.value;
  dataCards(orderData(data.pokemon, orderSelect));
});

const type = document.querySelector('#type');
type.addEventListener('change', () => {
  const orderSelect = type.value;

  dataCards(orderType(data.pokemon, orderSelect));
});


const generation = document.querySelector('#generation');
generation.addEventListener('change', () => {
  const orderSelect = generation.value;
  let nuevaData = orderGeneration(data.pokemon, orderSelect)
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
    console.log(mibusqueda)
    dataCards([mibusqueda])
  }else{
    dataCards(data.pokemon)
  } 
})















