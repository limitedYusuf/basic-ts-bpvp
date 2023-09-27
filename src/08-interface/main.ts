interface Person {
   name: string;
   age: number;
   greet: () => void;
 }
 
 const john: Person = {
   name: "John Doe",
   age: 20,
   greet: function () {
     console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
   },
 };
 
 john.greet();
 
 interface Product {
   name: string;
   price: number;
 }
 
 const products: Product[] = [
   { name: "Laptop", price: 1000 },
   { name: "Smartphone", price: 500 },
   { name: "Tablet", price: 300 },
 ];
 
 console.log("\nList of Products:");
 products.forEach((product) => {
   console.log(`Product: ${product.name}, Price: $${product.price}`);
 });
 