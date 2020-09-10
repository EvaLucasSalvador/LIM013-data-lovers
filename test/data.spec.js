// import { example, anotherExample } from '../src/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });


import { orderData, } from '../src/data.js';

const input= [{
  "num": "001",
  "name": "pikachu",}
  ,{
  "num": "001",
  "name": "bulbasaur",}]

const outp= [{
      "num": "001",
      "name": "bulbasaur",}
      , {
        "num": "001",
        "name": "pikachu",}]   
  
describe('orderData', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('returns orderData a la z', () => {
    expect(orderData(input,'a-z')).toStrictEqual(outp);
  });
});