import { orderData,orderType,orderGeneration  } from '../src/data.js';

const orderDataInput=[
  {"num":"001","name":"pikachu"},
  {"num":"001","name":"bulbasaur"},
  {"num":"002","name":"ivysaur"}
]
const orderDataOutputAZ=[
  {"num":"001","name":"bulbasaur"},
  {"num":"002","name":"ivysaur"},
  {"num":"001","name":"pikachu"}
] 
const orderDataOutputZA=[
  {"num":"001","name": "pikachu"},
  {"num":"002","name":"ivysaur"},
  {"num":"001","name": "bulbasaur"}
] 

const orderTypeInput=[
  { "name": "bulbasaur","type":["grass","poison"] },
  { "name": "ivysaur" , "type":["grass","poison"] },
  { "name": "charmeleon","type": ["fire"]}
]

const orderTypeGrass=[ 
  { "name": "bulbasaur","type":["grass","poison"] },
  { "name": "ivysaur" , "type":["grass","poison"] } 
]

const orderTypeFire=[
  { "name": "charmeleon","type": ["fire"]}
]


const orderGenerationInput=[
  {"name": "charmeleon","generation": {"num": "generation i","name": "kanto"}},
  {"name": "charizard","generation": {"num": "generation i","name": "kanto"}},
  {"name": "misdreavus","generation": {"num": "generation ii","name": "johto"}}
]

const orderGenerationOutput1=[
  {"name": "charmeleon","generation": {"num": "generation i","name": "kanto"}},
  {"name": "charizard","generation": {"num": "generation i","name": "kanto"}}
]

const orderGenerationOutput2=[
  {"name": "misdreavus","generation": {"num": "generation ii","name": "johto"}}
]


describe('orderData', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('Debe retornar los pokemones ordenados de a-z', () => {
    expect(orderData(orderDataInput,'a-z')).toEqual(orderDataOutputAZ);
  });

  it('Debe retornar los pokemones ordenados de z-a', () => {
    expect(orderData(orderDataInput,'z-a')).toEqual(orderDataOutputZA);
  });

});


describe('orderType', () => {
  it('is a function', () => {
    expect(typeof orderType).toBe('function');
  });

  it('Debe retornar los pokemones del tipo grass', () => {
    expect(orderType(orderTypeInput,'grass')).toEqual(orderTypeGrass);
  });

  it('Debe retornar los pokemones del tipo Fire', () => {
    expect(orderType(orderTypeInput,'fire')).toEqual(orderTypeFire);
  });

});


describe('orderGeneration', () => {
  it('is a function', () => {
    expect(typeof orderGeneration).toBe('function');
  });

  it('Debe retornar los pokemones del tipo grass', () => {
    expect(orderGeneration(orderGenerationInput,'kanto')).toEqual(orderGenerationOutput1);
  });

  it('Debe retornar los pokemones del tipo Fire', () => {
    expect(orderGeneration(orderGenerationInput,'johto')).toEqual(orderGenerationOutput2);
  });

});