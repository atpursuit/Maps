````

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

````
