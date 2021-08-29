// Declaring arrays
let myNumArray: number[] = [ 1, 2, 3 ];
let myStringArray: string[] = [ 'hey', 'my', 'string', 'array' ];
let myObjArray: object[] = [ { num: 1 }, { num: 2 }, { num: 3 }, ];
let myArrayArray: number[][] = [ [ 1, 2, 3 ], [ 1, 2, 3 ] ];

let myDynamicVariable: any = 'hey';


// Parameter Type Annotations
// When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:
function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
}

greet("michael", new Date());

// Return Type Annotations
// You can also add return type annotations.Return type annotations appear after the parameter list:
function getFavoriteNumber(): number {
  return 26;
}

// Anonymous Functions
// Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.
const names = [ 'Warren', 'Mike', 'Mark' ];

names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => console.log(s.toUpperCase()));

// Object Types

// The parameter's type annotation is an object type
function printCoordinates(pt: { x: number; y: number; }) {
  console.log(`x: ${pt.x}`);
  console.log(`y: ${pt.y}`);
}

printCoordinates({ x: 12, y: 15 });

// Optional Properties
// Object types can also specify that some or all of their properties are optional.To do this, add a ? after the property name:
function printName(obj: { first: string; last?: string; }) {
  // obj.last ? console.log(`${obj.first} ${obj.last}`) : console.log(`${obj.first}`);
  console.log(`${obj.first} ${obj.last ? obj.last : ''}`);
}

printName({ first: "Michael" });
printName({ first: "Michael", last: "Shuff" });


// Union Types
// a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

function printId(id: number | string) {
  console.log(`Your id is ${id}`);
}


printId(202);
printId('2123');

/* Allows you to do things with the union if that thing is valid for every member of the union. For
    example, if you have the union string | number, you can’t use methods that are only
    available on string:

  function printId(id: number | string) {
    console.log(id.toUpperCase());
    Property 'toUpperCase' does not exist on type 'string | number'.
    Property 'toUpperCase' does not exist on type 'number'.
  }

   Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
 */

function welcomePeople(x: string[] | string) {
  Array.isArray(x) ? console.log(`Hello, ${x.join(" and ")}`) : console.log(`Welcome lone traveler, ${x}`);
}

welcomePeople("john");
welcomePeople([ "john", "mike", "joe" ]);

/*
  Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing:
*/

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

console.log(getFirstThree([ 1, 2, 3 ]));
console.log(getFirstThree("1 2 3"));

/*                            Aliases
  Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing:
*/
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoords(pt: Point) {
  console.log(`x: ${pt.x}`);
  console.log(`y: ${pt.y}`);
}

printCoordinates({ x: 100, y: 100 });

/*
  You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:
*/
type ID = number | string;
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = "new input";


/*                                    Interfaces
    An interface declaration is another way to name an object type:
*/
