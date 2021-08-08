// Declaring different types
let helloWorld: string = 'Hello World';
let myNum: number;

myNum = 42;

console.log(helloWorld);
console.log(myNum);

// Creating an interface for objects
interface User {
  name: string;
  id: number;
}

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
