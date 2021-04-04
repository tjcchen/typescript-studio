// Basic typescript types

//-------------
// 1. Booelan
//-------------
let isDone: boolean = false;

//------------
// 2. Number
//------------
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n;

//------------
// 3. String
//------------
let color: string = 'blue';
color = 'red';

let fullname: string = 'Kobe Bryant';
let age: number = 37;
let sentence: string = `Hello, my name is ${fullname}
  I'll be ${age + 1} years old next month.
`;

//-----------
// 4. Array
//-----------
// Approach1: use the type of element followed by [] to denote an array of that element type:
let list: number[] = [1, 2, 3];
// Approach2: use a generic array type, Array<elemType>:
let list1: Array<number> = [1, 2, 3];

//-----------
// 5. Tuple
//-----------
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

//-----------
// 6. Enum
//-----------
enum Color {
  Red = 1, // default index is 0
  Green,
  Blue = 'blue' // assign values to enum
};

let c: Color = Color.Blue;
console.log(c); // 4
let colorName: string = Color[2];
console.log(colorName); // 'Green'
console.log(Color.Blue); // blue

//-------------
// 7. unknown
//-------------
let notSure: unknown = 4;
notSure = 'maybe a string instead';

// ok, definitely a boolean
notSure = false;
console.log(notSure);

// // Eg2:
// // narrow down to more specific type checking
// declare const maybe: unknown;
// // Error: 'maybe' can be a string, object, boolean, undefined, or other type
// // const aNumber: number = maybe;

// if (maybe === true) {
//   // TypeScript knows that maybe is a boolean now
//   const aBoolean: boolean = maybe;
//   // So, it cannot be a string
//   // const aString: string = maybe; // Error: Type 'boolean' is not assignable to type 'string'.
// }

// if (typeof maybe === 'string') {
//   // Typescript knows that maybe is a string
//   const aString: string = maybe;
//   // So, it cannot be a boolean
//   // const aBoolean: boolean = maybe; // Error: Type 'string' is not assignable to type 'boolean'.
// }

//----------
// 8. Any
//----------
// eg：we are not sure about the return value of getValue()
declare function getValue(key: string): any;
const str: string = getValue('myString');
console.log(str);

// Unlike unknown, variables of type any allow you to access arbitrary properties,
// even ones that don't exist. These properties include functions, and TypeScript
// will not check their existence or type.
// compare1:
let looselyTyped: any = 4;
// ok, ifItExists might exist at runtime
looselyTyped.ifItExists();
// ok, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

// compare2:
let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed(); // Cast error on typechecking

// The 'any' will continue to propagate through your objects
// But remember that all the convenience of any comes at the cost of losing type safety.
// Type safety is one of the main motivations for using Typescript and you
// should try to avoid using 'any' when not necessary
let looselyTyped2: any = {};
let d = looselyTyped2.a.b.c.d;