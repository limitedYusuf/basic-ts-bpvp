const PI: number = 3.14159265359;

function calculateCircleArea(radius: number): number {
  const area: number = PI * radius * radius;
  return area;
}

const radius: number = 5;
const circleArea: number = calculateCircleArea(radius);
console.log(`The area of a circle with radius ${radius} is ${circleArea}`);

// const PI: number = 3; // error

// area = 100; // error