function addNumbersX(a: number, b: number): number {
   return a + b;
 }
 
 // fungsi
 const sum: number = addNumbersX(5, 10);
 console.log(`Addition Result: ${sum}`);
 
 // anonim
 const multiply = function (x: number, y: number): number {
   return x * y;
 };
 
 // anonim
 const product: number = multiply(3, 7);
 console.log(`Multiplication Result: ${product}`);
 
 // fat
 const divide = (x: number, y: number): number => {
   return x / y;
 };
 
 // arrow
 const quotient: number = divide(20, 4);
 console.log(`Division Result: ${quotient}`);
 