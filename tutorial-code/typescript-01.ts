/**************************************** DECLARATIONS  *******************************************/
// Declaring different types
let helloWorld: string = 'Hello World';
let myName: string = "Michael Shuff";
let myAge: number = 33;
let myNum: number;

// With arrays, declare the <type> or use <any>
let myArrayOfNums: Array<number> = [ 1, 5 ];
let myArray: Array<any> = [ 1, '3' ];

// TypeScript will infer types for you
let age = 50;

// Declaring a variable of dynamic type
let undeclared: any = 'Yo';
undeclared = 1;

myNum = 42;

console.log(helloWorld);
console.log(myNum);


// Object declaration
let myObj: Object;
myObj = { name: 'yey' };

const myRobot: Object = {
  name: "John",
  age: 10000
};

const myUser = {
  name: "john",
  id: 43345
};


/**************************************** INTERFACES  *******************************************/
// Creating an interface for objects

interface User {
  name: string;
  id: number;
}

// You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:
const user: User = {
  name: 'Michael',
  id: 50
};

// Can't do vvvv
// const user2: User = {
//   name: "John",
//   id: '50'
// }

console.log(user);

// Creating an interface for classes
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const newUser: User = new UserAccount('Michael', 50000);

console.log(newUser);

// You can use interfaces to annotate parameters and return values to functions:
function getAdminUser(): User {
  return {
    name: "Joseph",
    id: 123
  };
}

// // Can't do
// function getUserName(): string {
//   return 41;
// }

function deleteUser(user: User) {
  return {
    user,
  };
}
deleteUser(newUser);

// // Can't do
// deleteUser(12);


/**************************************** UNKNOWN  *******************************************/
// Unknown is one of those types that once it clicks, you
// can find quite a lot of uses for it. It acts like a sibling
// to the any type. Where any allows for ambiguity - unknown
// requires specifics.

// A good example would be in wrapping a JSON parser. JSON
// data can come in many different forms and the creator
// of the json parsing function won't know the shape of the
// data - the person calling that function should.

const jsonParser = (jsonString: string) => JSON.parse(jsonString);

const myAccount = jsonParser(`{ "name": "Dorothea" }`);

myAccount.name;
myAccount.email;
console.log(myAccount);

// If you hover on jsonParser, you can see that it has the
// return type of any, so then does myAccount. It's possible
// to fix this with Generics - but it's also possible to fix
// this with unknown.

const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);

// const myOtherAccount = jsonParserUnknown(`{ "name": "Samuel" }`);

// myOtherAccount.name;

// The object myOtherAccount cannot be used until the type has
// been declared to TypeScript. This can be used to ensure
// that API consumers think about their typing up-front:


type UnknownUser = { name: string; };
const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;
console.log(myUserAccount.name);

// Unknown is a great tool, to understand it more read these:
// https://mariusschulz.com/blog/the-unknown-type-in-typescript
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
