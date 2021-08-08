// With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with Unions, and with Generics.

// With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:
type MyBool = true | false;

// A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:
type WindowStates = "open" | "closed" | "minimized"
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj: string | string[]) {
  return obj.length
}

console.log(getLength(['test','test']));
console.log(getLength('1231231231'));

// You can make a function return different values depending on whether it is passed a string or an array:

function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
  }
  return obj;
}

console.log(wrapInArray('test'));
