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
  let span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    dialogo.style.display = "none";
  }
}
dataCards(data.pokemon);



const orderAlfabetic = document.querySelector('#order');
orderAlfabetic.addEventListener('change', () => {
  dataCards(orderData(data.pokemon, orderAlfabetic.value));
});

const type = document.querySelector('#type');
type.addEventListener('change', () => {
  dataCards(orderType(data.pokemon, type.value));
});


const generation = document.querySelector('#generation');
generation.addEventListener('change', () => {
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