class User {
  constructor(
    private firstName: string,
    private lastname: string,
  ) {}

  get fullName() {
    return this.firstName + " " + this.lastname;
  }
}

const max = new User("Max", "Schwarzmüller");
console.log(max.fullName);
