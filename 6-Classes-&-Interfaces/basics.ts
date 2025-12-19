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
  hobbies: string[] = []; // public by default

  constructor(
    public name: string,
    private age: number,
  ) {}

  greet() {
    console.log("My age: " + this.age);
  }
}

const max = new User("Max", 36);
const fred = new User("Fred", 29);

console.log(max, fred);
