import {orderData} from './data.js';

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



const orderAlfabetic = document.querySelector('#order');
orderAlfabetic.addEventListener('change', () => {
  const orderSelect = orderAlfabetic.value;
  dataCards(orderData(data.pokemon, orderSelect));
});


// variable <= objecto HTML llamado busqueda 
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


//pasar a data 
let  buscarPor = {
  porNombre:function(nombre,data){
      for (const item of data) {
        if (item.name===nombre) {
           return item
        }
      }
      return []
  }

}



console.log(data.pokemon)

const todosTipos = ["grass", "poison", "fire",
 "flying", "water", "bug", "normal",
  "electric", "ground", "fighting", "psychic",
   "rock", "ice", "ghost", "dragon", "fairy",
    "dark", "steel"]
