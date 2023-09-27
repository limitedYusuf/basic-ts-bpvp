abstract class Animal {
   protected name: string;

   constructor(name: string) {
      this.name = name;
   }

   abstract makeSound(): void;

   getInfo(): void {
      console.log(`Name: ${this.name}`);
   }
}

class Dog extends Animal {
   constructor(name: string) {
      super(name);
   }

   makeSound(): void {
      console.log(`${this.name} says Woof!`);
   }
}

class Cat extends Animal {
   constructor(name: string) {
      super(name);
   }

   makeSound(): void {
      console.log(`${this.name} says Meow!`);
   }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound();
dog.getInfo();

cat.makeSound();
cat.getInfo();
