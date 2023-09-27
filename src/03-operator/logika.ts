const isTrue: boolean = true;
const isFalse: boolean = false;

const andResult: boolean = isTrue && isFalse;
const orResult: boolean = isTrue || isFalse;
const notResult: boolean = !isTrue;

console.log(`Logical AND: ${isTrue} && ${isFalse} = ${andResult}`);
console.log(`Logical OR: ${isTrue} || ${isFalse} = ${orResult}`);
console.log(`Logical NOT: !${isTrue} = ${notResult}`);