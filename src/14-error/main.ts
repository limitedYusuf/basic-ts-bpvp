try {
   let x: number = 10;
   let y: number = 0;
   let result: number = x / y;
   console.log(`Result: ${result}`);
} catch (error) {
   console.error(`An error occurred: ${error.message}`);
} finally {
   console.log("Finally block executed");
}
