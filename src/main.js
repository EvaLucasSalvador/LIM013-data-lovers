//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

import {orderData,} from './data.js';
import data from './data/pokemon/pokemon.js';

const pokedex = document.getElementById('pokedex');

const dataCards = (dataPokemon) => {
  pokedex.innerHTML = '';
  dataPokemon.forEach((element) => {
    const sectionElement = document.createElement('section');
    sectionElement.setAttribute('class', 'data1');
    sectionElement.innerHTML = `   
      <section id="poke-card-${element.num}" class="pokeCard">
        <p class="number" id="number-${element.num}">${element.num}</p>
        <p class="imgPoke" id="imgPoke"><img src=${element.img} alt="" class="imgPkm"></p>
        <p class="namePoke" id="namePoke">${element.name.toUpperCase()}</p>
      </section>
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