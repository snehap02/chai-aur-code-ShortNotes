const score = 200; //implicitly defined

const balance = new Number(200); //explicitly defined
console.log(score);
console.log(balance);

//the only difference between these two values is that the first value will be printed as a number simply but as we defined the second value with a new keyword the desired output will be will be printed as an object. [Number:200]
//The new keyword is for creating new object instances


console.log(balance.toString().length); //as the value converted into a string now we can check its length

console.log(balance.toFixed(2))//gives you the precision value and the number inside the function should be from 0-20

let num = 13.3714;
console.log(num.toPrecision(3)); //The toPrecision() method formats a number to a specified length. Range between 1-21  


let hundereds = 1000000
console.log(hundereds.toLocaleString('en-US')) //this is by default in US standards
//to convert it into indian values
console.log(hundereds.toLocaleString('en-IN'));









/************************************* MATHS ***********************/


console.log(Math);
console.log(Math.abs(-2)); //absolute will only convert the negative value to a positive value . Positive will remain the same


console.log(Math.round(4.5));
console.log(Math.ceil(4.2)); //the output will round off to the greater value eg: 5

console.log(Math.floor(4.8)); //the output will round off to the lower value eg: 4

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25));


console.log(Math.random()); //random values b/w 0-1
console.log(Math.random() * 10); //random values b/w 0-10
console.log((Math.random() * 10) + 1); //random values b/w 1-9 if we add + 1 it will ignore the value 0

//to find the min--max value 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // here max-min will be the range for the value like here we want to fild numbers between 10-20 and the + 1 is to avaoid the value 0 and then + min is to specify that the minimum value should be 10
