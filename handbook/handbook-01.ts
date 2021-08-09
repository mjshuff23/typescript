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
