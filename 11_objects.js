//singleton - 
//When we craete object literals they don't form singleton
//when we craete object as a constructor then they form singleton

//2 types --- literals, constructor

//🟡Object Literals
//Object.create --- this is how a constructor is created

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

console.log(obj2["name"]); //behind the scene this name (all the keys of objects are treated as a string) is treated as a string that is why we have to put the key inside ""
//the second type for accessing an object is useful when you have this type of key inside your object
const obj3 = {
    name: "Kunal",
    "currently studying" : "BTech"
}
//console.log(obj3."currently studying");
console.log(obj3["studying"]);






//🟡🔴 Important facts about SYMBOLS in objects
//Q. Create a symbol and add the symbol as a key to the object
const sym = Symbol(); //the type is symbol here

const obj4 = {
    name: "new",
    [sym]: "anyValue" //but if we check the type of obj.sym it will be string because itis detecting only the values type here but we want to make the whole as a symbol to do so we have to wrap the key inside []
} 
console.log(obj4.sym);
console.log(typeof sym);
console.log(obj4[sym]);