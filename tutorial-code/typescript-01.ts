// Declaring different types
let helloWorld: string = 'Hello World';
let myNum: number;
let myArray: Array<any> = [1, '3'];
let myObj: Object;
myObj = { name: 'yey' }

let undeclared: any = 'Yo' // TypeScript will infer types for you
undeclared = 1;

myNum = 42;

console.log(helloWorld);
console.log(myNum);

const myUser = {
  name: "john",
  id: 43345
}

// Creating an interface for objects
interface User {
  name: string;
  id: number;
}

// You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:
const user: User = {
  name: 'Michael',
  id: 50
}

// Can't do vvvv
// const user2: User = {
//   name: "John",
//   id: '50'
// }

console.log(user);

// Declaring an interface for classes
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const newUser: User = new UserAccount('Michael', 50000)

console.log(newUser);

// You can use interfaces to annotate parameters and return values to functions:
function getAdminUser(): User {
  return {
    name: "Joseph",
    id: 123
  };
}

function deleteUser(user: User) {
  return {
    user,
  }
}

console.log('test')
