const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(typeof boolean1);
console.log(boolean2);

console.log(boolean1 == boolean3); // false
console.log(boolean1 === boolean3); // false

const boolean4 = new Boolean(true);
console.log(boolean4); // true
console.log(typeof boolean4); // object
