// class User {
//   name: string;
//   age: number;
//
//   constructor(n: string, a: number) {
//     // this.name = "Max";
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

const max = new User("Max", 36);
const fred = new User("Fred", 29);

console.log(max, fred);
