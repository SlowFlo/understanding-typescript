const userName = "Max";
// userName = "Maximilian";
let age = 30;

age = 29;

function add(a: number, b: number) {
  let result; // scope is the same for var => only global and function scopes
  result = a + b;
  return result;
}

// if (age > 20) {
//   let isOld = true;
// }
//
// console.log(isOld);
