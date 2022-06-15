const pizzas = [
    {id: 1, 
    nombre: "Mozzarella", 
    ingredientes: ["Mozzarella"], 
    precio: 500},
    {id: 2, 
    nombre: "Fugazzetta", 
    ingredientes: ["Mozzarella", "Cebolla"], 
    precio: 600},
    {id: 3, 
    nombre: "Napolitana", 
    ingredientes: ["Tomate", "Mozzarella", "Anchoas", "Orégano", "Alcaparras"], 
    precio: 700},
    {id: 4, 
    nombre: "Hawaiana", 
    ingredientes: ["Tomate", "Jamon", "Queso fundido"], 
    precio: 800},
];


// <---------------------------------------------------------------------------------->
// a)
function idPizzas(pizza){
    return pizza
    .filter(function(obj){
        return obj.id % 2 !== 0;
    })
    .map(function(obj){
        return obj.nombre;
    })
};
console.log(`Las pizzas con id impares son: ${idPizzas(pizzas).join(", ")}`);

// <---------------------------------------------------------------------------------->
// b)
function pizzaBarata(pizza){
    return pizza
    .filter(function(obj){
        return obj.precio < 600;
    })
    .map(function(obj){
        return obj.nombre;
    })
};

console.log(`¿Pizzas por menos de $600?, Si tenemos la: ${pizzaBarata(pizzas).toString()}`);


// <---------------------------------------------------------------------------------->
// c)
let nombrePizzas = (pizzas.map((pizza) => pizza.nombre));
console.log(`Las pizzas que tenemos son ${nombrePizzas.join(", ")}`);


// <---------------------------------------------------------------------------------->
// d)
let precioPizzas = (pizzas.map((pizza) => `$${pizza.precio}`));
console.log(`Los precios de las pizzas son: ${precioPizzas.join(", ")}`);


// <---------------------------------------------------------------------------------->
// e)
let nombrePrecioPizzas = (pizzas.map((pizza) => `${pizza.nombre} $${pizza.precio}`));
console.log(`Las pizzas que tenemos con su precio son ${nombrePrecioPizzas.join(", ")}`);

// let array = [1, 2, 3 ,4];
// for(let x of array){
//     console.log(x);
// }