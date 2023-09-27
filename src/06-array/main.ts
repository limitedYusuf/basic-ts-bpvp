const fruits: string[] = ["apple", "banana", "cherry", "date", "fig"];

console.log("Accessing Array Elements:");
console.log(`First Fruit: ${fruits[0]}`);
console.log(`Second Fruit: ${fruits[1]}`);
console.log(`Last Fruit: ${fruits[fruits.length - 1]}`);

// Operasi array
console.log("\nArray Operations:");

// Menambahkan elemen ke akhir array
fruits.push("grape");
console.log("After push:", fruits);

// Menghapus elemen dari akhir array
const poppedFruit: string | undefined = fruits.pop();
console.log(`Popped Fruit: ${poppedFruit}`);
console.log("After pop:", fruits);

// Menambahkan elemen ke awal array
fruits.unshift("apricot");
console.log("After unshift:", fruits);

// Menghapus elemen dari awal array
const shiftedFruit: string | undefined = fruits.shift();
console.log(`Shifted Fruit: ${shiftedFruit}`);
console.log("After shift:", fruits);

// Menghapus elemen dan menambahkannya kembali
const removedFruits: string[] = fruits.splice(2, 2, "blueberry", "kiwi");
console.log(`Removed Fruits: ${removedFruits}`);
console.log("After splice:", fruits);

// salinan (slice) array
const slicedFruits: string[] = fruits.slice(1, 4);
console.log(`Sliced Fruits: ${slicedFruits}`);

// array dengan forEach
console.log("\nIterating Array with forEach:");
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

// array baru dengan map
console.log("\nCreating a New Array with map:");
const upperCaseFruits: string[] = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercase Fruits:", upperCaseFruits);

// array baru dengan filter
console.log("\nFiltering Array Elements:");
const longFruits: string[] = fruits.filter((fruit) => fruit.length > 5);
console.log("Fruits with more than 5 letters:", longFruits);

// nilai dengan reduce
console.log("\nCalculating Array Sum with reduce:");
const numbers: number[] = [1, 2, 3, 4, 5];
const sums: number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers:", sums);

// array dengan for...of
console.log("\nIterating Array with for...of:");
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}
