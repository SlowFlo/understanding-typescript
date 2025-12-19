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

class UserBasic {
  readonly hobbies: string[] = []; // public by default

  constructor(
    public name: string,
    private readonly age: number,
  ) {}

  greet() {
    console.log("My age: " + this.age);
  }
}

const maxBasic = new UserBasic("Max", 36);
const fred = new UserBasic("Fred", 29);

// maxBasic.hobbies = ["Sports"];

console.log(maxBasic, fred);
