// Operator as Assertion Tipe
let someValue: unknown = "Hello, TypeScript";
let strLength: number = (someValue as string).length;

console.log(`Length: ${strLength}`);

// Non-null Assertion Operator !
let value: string | null = "Hello, TypeScript";
let lengths: number = value!.length;

console.log(`Length: ${lengths}`);
