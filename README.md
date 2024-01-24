Independent Learning Project - Maps

Introduction
----------------

A map is just a set of key value pairs. Maps have a key and a value. (Remember:  A key in the Map is unique as that can only occur once! ) With maps, you can easily store, access, and iterate over data based on distinct keys, making them a versatile and widely used feature in JavaScript for handling collections of data.

Algorithm description
--------------------------
Here we have the code:

````
```

// We use a 'Map' called 'favoriteColors' to store the favorite colors of Alice, Bob and Charlie.
let favoriteColors = new Map();

// Here we are using 'set' to add entries. Associating each color to a name.
favoriteColors.set('Alice', 'Blue');
favoriteColors.set('Bob', 'Green');
favoriteColors.set('Charlie', 'Red');

// Listed below is how we get and print the favorite colors of Alice, Bob and Charlie.
let aliceColor = favoriteColors.get('Alice');
console.log("Alice's favorite color is " + aliceColor);

let bobColor = favoriteColors.get('Bob');
console.log("Bob's favorite color is " + bobColor);

let charlieColor = favoriteColors.get('Charlie');
console.log("Charlie's favorite color is " + charlieColor);

// You're done! This is how we use the 'Map' function.

```
````

Big O evaluation
----------------

````
```

// O(1) - Adding entries using 'set' individually
favoriteColors.set('Alice', 'Blue');
favoriteColors.set('Bob', 'Green');
favoriteColors.set('Charlie', 'Red');

// O(1) - Retrieving and printing Alice's favorite color
let aliceColor = favoriteColors.get('Alice');
console.log("Alice's favorite color is " + aliceColor);

// O(1) - Retrieving and printing Bob's favorite color
let bobColor = favoriteColors.get('Bob');
console.log("Bob's favorite color is " + bobColor);

// O(1) - Retrieving and printing Charlie's favorite color
let charlieColor = favoriteColors.get('Charlie');
console.log("Charlie's favorite color is " + charlieColor);

// Overall time complexity: O(n), where n is the number of entries in the Map

```
````


Cases
------

 The `map()` function in JavaScript helps us change each item in a list and create a new list with those new changes. For example, let’s say we have a list of numbers and we want to double them. You can use `map()` like this: `const doubledNumbers = originalNumbers.map(num => num * 2);`. This gives us a new list called `doubledNumbers`. The numbers from the previous list are now doubled!


Edge Cases and Concerns
------------------------

While map is a very useful function, it may not be suitable for non-iterable objects. Also, if the callback function provided to map() has side effects or relies on external state, this might lead to unexpected issues within the code, so it's essential to ensure the proper use of this function to prevent the code from messing up.


Citations
-----------
[](put link here)
[](put link here)
[](put link here)
