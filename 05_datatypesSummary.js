//Mainly datatypes are divided into two categories 1.primitive 2.non-primitive(reference types) datatypes

//primitive datatypes are (call by value ---- means whenever you are asking for any data you are given the copy of that data from the memory not the original data and whenever you are many any changes in that data the changes is made in the copy itself not on the original data) type - number, string, boolean, undefined, null, symbol.

//🟡Return Value
/*
Undefined ---> undefined
Null ------> object
Boolean ------> boolean
Number ----->number
String -------> string
Object --------> object
*/

//reference type -(the reference of the value is allocated to us from the memory) -------- array, objects, functions
//🟡Return value
/*
Array ------> function
object ------> function
function ------> function object
*/




// Primitive
var nameFirst = "Lucas"; 
var nameSecond = nameFirst; // nameSecond also becomes "Lucas"
nameFirst = "Anna"; // This change does not affect nameSecond
console.log(nameSecond); // It will still output "Lucas"

// Non-Primitive
var arrFirst = [1, 2, 3];  
var arrSecond = arrFirst;  // arrSecond now points to the same array as arrFirst
arrFirst[0] = 99; // Changing arrFirst also changes arrSecond since they reference the same memory location
console.log(arrSecond); // Output will be [99, 2, 3]

