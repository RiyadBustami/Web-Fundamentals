function pizzaOven(crustType,sauceType,cheeses,toppings){
    let pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;
}

let pizza1 = pizzaOven('deep dish','traditional','mozzarella',['pepperoni','sausage']);
let pizza2 = pizzaOven('hand tossed','marinara',['mozzarella','feta'],['mushrooms','olives','onions']);
let pizza3 = pizzaOven('stuffed crust','white garlic sauce',['mozzarella','parmesan'],['chicken','green pepper','onions']);
let pizza4 = pizzaOven('thin crust','buffalo sauce',['goat cheese','gouda'],['chicken','mushrooms','onions','green pepper']);


let crustTypes=['Stuffed Crust','Cracker Crust','Flat Bread Crust','Thin Crust','Cheese Crust','Thick Crust','Wrapping It Up'];
let sauceTypes=['Traditional','Garlic White Sauce','Pesto','Garlic Ranch Sauce','Buffalo Sauce','Marinara','Barbeque'];
let cheeseTypes=['Mozzarella','Cheddar','Parmesan','Gouda','Goat Cheese','Ricotta','Feta'];
let toppingTypes=['Pepperoni','Mushrooms','Onions','Black Olives','Sausage','Extra Cheese','Fresh Garlic','Green Pepper'];

function randomInteger(max){
    return Math.floor(Math.random()*max);
}
console.log(randomInteger(6));
function randomPizza(crustType,sauceType,cheeses,toppings){
    let pizza={};
    pizza.crustType=crustTypes[randomInteger(7)];
    pizza.sauceType=sauceTypes[randomInteger(7)];
    pizza.cheeses=[cheeseTypes[randomInteger(7)],cheeseTypes[randomInteger(7)]];
    pizza.toppings=[toppingTypes[randomInteger(7)],toppingTypes[randomInteger(7)],toppingTypes[randomInteger(7)]];
    return pizza;
}

let pizza5 = randomPizza();
console.log(pizza5);