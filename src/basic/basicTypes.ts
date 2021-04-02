// Basic typescript types

// 1. Booelan
let isDone: boolean = false;

// 2. Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n;

// 3. String
let color: string = 'blue';
color = 'red';

let fullname: string = 'Kobe Bryant';
let age: number = 37;
let sentence: string = `Hello, my name is ${fullname}
  I'll be ${age + 1} years old next month.
`;

// 4. Array
// Approach1: use the type of element followed by [] to denote an array of that element type:
let list: number[] = [1, 2, 3];
// Approach2: use a generic array type, Array<elemType>:
let list1: Array<number> = [1, 2, 3];

// 5. Tuple
// Tuple types allow you to express an array with a fixed number of elements whose types are known,
// but need not be the same
// eg1: a value as a pair of a string and a number
let x: [string, number];
// initialize it
x = ['hello', 10]; // ok
// initialize it incorrectly, this will cast error
// x = [10, 'hello']; // Error

// ok
console.log(x[0].substring(1)); // print out 'ello'
// error - Property 'substring' does not exist on type 'number'.
// console.log(x[1].substring(1));

// Accessing an element outside the set of known indices fails with an error
// error: Tuple type '[string, number]' of length '2' has no element at index '3'.
// x[3] = 'world';
// error: Tuple type '[string, number]' of length '2' has no element at index '5'.
// console.log(x[5].toString());

// 6. Enum
enum Color {
  Red = 1, // default index is 0
  Green,
  Blue = 'blue' // assign values to enum
};

let c: Color = Color.Blue;
console.log(c); // 4
let colorName: string = Color[2];
console.log(colorName); // 'Green'
console.log(Color.Blue);