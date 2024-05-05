//singleton - 
//When we craete object literals they don't form singleton
//when we craete object as a constructor then they form singleton

//🟡Object Literals
//2 types
//Object.create

const obj1 = {};


//accessing an objects value - types

const obj2 = {
    name: "Sneha",
    age: 20,
    address: {
        city: "Silchar",
        state: "Assam"
    }
}

console.log(obj2.name);

console.log(obj2["name"]); //behind the scene this name is treated as a string that is why we have to put the key inside ""
//the second type for accessing an object is useful when you have this type of key inside your object
const obj3 = {
    name: "Kunal",
    "currently studying" : "BTech"
}
//console.log(obj3."currently studying");
console.log(obj3["studying"]);






//🟡🔴 Important facts about SYMBOLS in objects
//Q. Craete a symbol and add the symbol as a key to the object
const sym = Symbol();

const obj4 = {
    name: "new",
    sym: "anyValue"
}
