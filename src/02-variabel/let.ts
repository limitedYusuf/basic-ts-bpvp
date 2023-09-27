let globalVar: number = 10;

function exampleFunction() {
  let functionVar: string = "Hello, Function Scope!";
  console.log(`Inside function: ${functionVar}`);

  if (true) {
    let blockVar: boolean = true;
    console.log(`Inside block: ${blockVar}`);
  }

  // globalVar dapat diakses di dalam fungsi
  console.log(`Inside function, accessing globalVar: ${globalVar}`);
}

exampleFunction();

// ga bisa
//console.log(`Outside function: ${functionVar}`); // bakal error

// kalau global bisa
console.log(`Outside function, accessing globalVar: ${globalVar}`);

// gak bisa di replace
// @ts-ignore
// let redeclaredVar: string = "Original Value";
// console.log(`Original Value: ${redeclaredVar}`);

// @ts-ignore
// let redeclaredVar: string = "New Value";
// console.log(`New Value: ${redeclaredVar}`);
