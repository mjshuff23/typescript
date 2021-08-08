// Structural Type System
  // One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.
  // In a structural type system, if two objects have the same shape, they are considered to be of the same type.

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// Shape-matching only requires a subset of object's fields to match
const point = {x: 12, y: 16, a: 21}
const point2: Point = {x: 12, y: 26}
// logs "12, 16"
logPoint(point)

// There is no difference between how classes and objects conform to shapes:

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint: Point = new VirtualPoint(34, 45);
console.log(newVPoint);

logPoint(newVPoint);
