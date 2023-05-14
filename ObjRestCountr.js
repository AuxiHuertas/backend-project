const obj = require ('./pruebarefactorizar.json');

console.log(obj)

const name = obj.map(nombre => nombre.name.common)
// console.log(name)
const currencies  = obj.map(moneda => moneda.currencies.EUR.name)
//console.log(currencies)