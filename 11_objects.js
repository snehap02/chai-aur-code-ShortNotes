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
const sym = Symbol("symbolKey"); //the type is symbol here

const obj4 = {
    name: "new",
    [sym]: "anyValue" //but if we check the type of obj.sym it will be string because it is detecting only the values type here but we want to make the whole as a symbol to do so we have to wrap the key inside []
} 
console.log(obj4.sym);
console.log(typeof sym);
console.log(obj4[sym]);






//🔴🔴To freez an object

const obj5 = {
    name: "Sneha",
    age: 20,
    address: {
        city: "Silchar",
        state: "Assam"
    }
}

obj5.name = "Kunal",
console.log(obj5)
Object.freeze(obj5); //always remember to unfreez the object if you are further using that object in any other segmnet of code. Otherwise the output will show undefined.
obj5.name = "Sneha"
console.log(obj5);





//🔴🔴Functions in an object

const obj6 = {
    name: "New Girl",
}

obj6.greet = function () {
    console.log("Hello");
}
obj6.greetAgain = function(){
    console.log(`Hello ${this.name}`);
}

console.log(obj6.greet())
console.log(obj6.greetAgain());
console.log(obj6.greet)
console.log(obj6.greetAgain);
console.log(obj6);









//🟡using constructor
//in object literals we create an empty object as (const empObj = {}) -------- just the difference is object literals are singleton objects and objects with constructors are non-singleton objects
//here
const tinderUser = new Object();   //with the new keyword