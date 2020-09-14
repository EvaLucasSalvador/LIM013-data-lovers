export const orderData = (data, condition) => {
  let result;
  if (condition === 'a-z') {
    result = data.sort((a, b) => {
      if (a.name > b.name) {
       return 1;
      }
       return -1;
    });
    } 
    else {
    result = data.sort((a, b) => {
      if (a.name < b.name) {
      return 1;
      }
      return -1;
    });
  }
  return result;
};

export const orderType = (data,condition) => {
  const pokeType = data.filter(a => (a.type[0] === condition || a.type[1] === condition));
  return pokeType;
};


export const orderGeneration = (pokemones,condition) => {
  const pokeGeneration = pokemones.filter(pokemon => (pokemon.generation.name === condition ));
  return pokeGeneration;
};


export const buscarPor = {
  porNombre:function(nombre,data){
      for (const item of data) {
        if (item.name===nombre) {
           return item
        }
      }
      return []
  }
};