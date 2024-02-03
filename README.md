
Introduction
----------------
.map () is a method of an Array. .map(), in Javascript is used to create a new array from calling a function for every array element.

Here is a further breakdown of .map():

Syntax:

````

array.map(function(currentValue, index, arr), thisValue)

````

Parameters:

function() - The function to be run.
currentValue - The value of the current element.

Index - The index of the element.
arr - The array of the element.
thisValue - Default value, undefined. 

function() and currentValue are required. Index, arr, and thisValue are optional.


Algorithm Description
----------------
Here is our code:

````
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);

````

This is how we break it down.

````
// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];
````
This line creates a list of numbers.

````
const doubledNumbers = numbers.map(num => num * 2);
````
In this line we use the .map () function. The .map goes through this line of code and doubles it. The result is stored in ‘doubledNumbers’.


````
console.log(doubledNumbers);

````
In this line, the doubled numbers are displayed.

Use Cases
----------------
.map() should be used in your code when you want to make a new array. 

Edge Cases and Concerns
----------------
.map() shouldn’t be used

Citations
-------------




