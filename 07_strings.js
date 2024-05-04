const name = "sneha"
const repoCount = 80
console.log(name + " " + repoCount);


//string interpolation (template literals)
console.log(`My name is ${name} and my repoCount is ${repoCount}`);




//Defining strings in javascript
//1
const str1 = "anyString"; //after consoling it gives you a string simply
//2
const str2 = new String('anyStr');
console.table([str1, str2]); //here if we define a string with new keyword it will treat tyhe string as an object like the value will be in the key value form of the object



//some functions and methods of obj under prototype
console.log(str1.toUpperCase()); //string is stored inside heap so the only copied value will change the original will remain the same

console.log(str1.length);

console.log(str1.charAt(4)); //always the given value is the index position to check what character is in that position

console.log(str1.indexOf("y"));//always the given value is the character to check what is the index of that character.

const newstr = new String("some_value");
const newVal = newstr.substring(0,4) //starting position upto the last-1 character , here 4-1

const newVal1 = newstr.slice(-8,6)
console.log(newVal1);
