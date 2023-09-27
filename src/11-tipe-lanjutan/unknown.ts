let userInput: unknown;

userInput = 5; // Benar
userInput = "Hello"; // Benar

// let userName: string = userInput; // Salah
if (typeof userInput === "string") {
  let userName: string = userInput; // Benar
  console.log(`Hello, ${userName}`);
}
