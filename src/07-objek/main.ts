const person: { name: string; age: number } = {
   name: "John Doe",
   age: 30,
 };
 
 console.log("Object Properties and Methods:");
 console.log(`Name: ${person.name}`);
 console.log(`Age: ${person.age}`);
 
 const student: { name: string; info: { grade: string; school: string } } = {
   name: "Alice",
   info: {
     grade: "A",
     school: "XYZ School",
   },
 };
 
 console.log("\nNested Object:");
 console.log(`Name: ${student.name}`);
 console.log(`Grade: ${student.info.grade}`);
 console.log(`School: ${student.info.school}`);
 
 console.log("\nIterating Object Properties:");
 
 const car: { make: string; model: string; year: number } = {
   make: "Toyota",
   model: "Camry",
   year: 2022,
 };
 
 for (const key in car) {
   if (Object.hasOwnProperty.call(car, key)) {
     const value = car[key];
     console.log(`${key}: ${value}`);
   }
 }
 