//concat()
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];

console.log(arr1.concat(arr2));
// output:
// [ 'Cecile', 'Lone', 'Emil', 'Tobias', 'Linus' ]

//push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);
//output:
// [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//pop()
fruits.pop();
console.log(fruits);
//output:
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]

//sort()
fruits.sort();
console.log(fruits);
// output:
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]

//slice()
let slicedFruits = fruits.slice(0,2);
console.log(slicedFruits);
//output:
// [ 'Apple', 'Banana' ]

//unshift()
let array1 = [1,2,3];
array1.unshift(4,5);
console.log(array1);
//output:
// [ 4, 5, 1, 2, 3 ]


//shift()
let array2 = [1,2,3];
array2.shift();
console.log(array2);
// output:
// [ 2, 3 ]

//splice()
let months = ["December", "January", "February", "July", "November"];
months.splice(1, 3, "August");
console.log(months);
//output:
// [ 'December', 'August', 'November' ]