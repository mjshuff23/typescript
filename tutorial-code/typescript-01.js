// Declaring different types
let helloWorld = 'Hello World';
let myNum;
let myArray = [1, '3'];
let myObj;
myObj = { name: 'yey' };
let undeclared = 'Yo'; // TypeScript will infer types for you
undeclared = 1;
myNum = 42;
console.log(helloWorld);
console.log(myNum);
const myUser = {
    name: "john",
    id: 43345
};
// You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:
const user = {
    name: 'Michael',
    id: 50
};
// Can't do vvvv
// const user2: User = {
//   name: "John",
//   id: '50'
// }
console.log(user);
// Declaring an interface for classes
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const newUser = new UserAccount('Michael', 50000);
console.log(newUser);
// You can use interfaces to annotate parameters and return values to functions:
function getAdminUser() {
    return {
        name: "Joseph",
        id: 123
    };
}
function deleteUser(user) {
    return {
        user,
    };
}
console.log('test');
