// Readonly properties
// 1. Some properties should only be modifiable when an object is first created.
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// Error: Cannot assign to 'x' because it is a read-only property
// p1.x = 5;

// 2. ReadonlyArray<T> makes sure you don't change your arrays after creation
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// ro[0] = 12; // error
// ro.push(5); // error
// ro.length = 200; // error

// a = ro; // error, assigning the ReadOnlyArray back to a normal array is illegal
a = ro as number[]; // but you can still override it with a type assertion

console.log(ro);