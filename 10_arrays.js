const arr = [1,2,3,4,5,6];
console.log(arr)

const arr1 = new Array(1,2,4,5,6,7)
console.log(arr1)

//array methods

const arr2 = [1,2,3,4,5,6];
console.log(arr2.length);
console.log(arr2.push(7));
console.log(arr2);
console.log(arr2.pop());
console.log(arr2.unshift(7));
console.log(arr2.shift());

console.log(arr2.includes(4)); //always gives the output in boolean ...if includes then true otherwise false
console.log(arr.indexOf(3));


console.log(arr2.join()); //join will convert the array into a string (when we check its type it will show us a string type).


//🟡
const arr3 = [1,2,3,4,5,6];
console.log(arr3);
console.log(arr3.slice(1,4)); //returns a copy of the section of an array. slice will not change the original array.
console.log(arr3);
console.log(arr3.splice(1,4)); //from position 1 remove 4 items from the array
console.log(arr3)//splice will change the original array.
console.log(arr3.splice(1,4, "new", 8, 20)); //from position 1 remove 4 items and add new and 8 into the array
console.log(arr3)


//🔴🔴🔴🔴 Difference between slice and splice
/*
1. The first difference is that in SLICE the 2nd value (index no.) is not included but in case of SPLICE its just the opposite 
2. The second difference is that in SLICE the original array is not changed but in case of SPLICE the original array is changed.
3. In case of splice only the removed element is printed as  an output means the return value but to see the change in the original array you have to console.log again.
*/
