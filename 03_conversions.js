//so the datatype conversion is important to know , suppose you are handling a file which is giving to you by a frontend developer and when you started handling the data there are some datatype suppose number written as 
//🟡const {score} = req.body; //taking a request for the datatype score from a frontend body
//here inside score we know there is a value but we dont know excatly its type
const scores = 22
//to know the type
console.log(typeof(scores));

//suppose you are given a string which you dont want you want that to be number 
let str = "22"
let valueInNumber = Number(str);
console.table([str, valueInNumber]);


//but suppose you are given a value which you dont want to be number but still it is converting as a number
let newVal = "12abcd"; 
let val = Number(newVal); //after converting it to a number it becomes NaN
console.log(typeof (val)); //but NaN type is number 


//BOOLEAN
let someVal = 1; //0 means false, 1 means true
let convertToBoolean = Boolean(someVal);

console.log(convertToBoolean);



//STRING
let someNewVal = 22;
let convertToString = String(someNewVal);
console.log(convertToString);
console.log(typeof (convertToString));