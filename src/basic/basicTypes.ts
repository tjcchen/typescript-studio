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

//--------------
// 8. void
//--------------
// void: the absence of having any type at all - no return type
function warnUser(): void {
  console.log('This is my warning message');
}

// declaring variables of type 'void' is not useful because you can only assign null or undefined to them.
let unusable: void = undefined;
// ok if `--strictNullChecks` is not given
unusable = null;

//---------------------
// 9. null and undefined
//---------------------
// Much like void, they are not extremely useful on their own.
// However, when using the --strctNullChecks flag, null and undefined are only 
// assignable to unknown, any and their respective types. This helps avoid many common errors.

// As a note: we encourage the use of --strictNullChecks when possible, but for the purposes
// of this handbook, we will assume it is turned off.

let u: undefined = undefined;
let n: null = null;

// u = ''; // cast error

// union type
let unionType: string | null | undefined;
unionType = null;

//----------
// 10. never
//----------
// The 'never' type represents the type of values that never occur.
// eg: 'never' is the return type for a function expression or an arrow function expression
// that always throws an exception or one that never returns

// eg1: function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// eg2: Inferred return type is never
function fail() {
  return error('something failed');
}

// eg3: function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

// Enum Example
enum Occupation {
  Teacher,
  Worker,
  Driver
};

console.log(Occupation[Occupation.Worker]); // obtain value from Occupation worker
console.log(Occupation.Driver);

//---------
// 11. Object
//---------
// With object type, Apis like Object.create() can be better represented:
declare function create(o: object | null): void;

// ok
create({ prop: 0 });
create(null);
// undefined is not a subtype of null
create(undefined);
// create(42);

//--------------------
// 12. type assertions
//--------------------
// eg1: as syntax - (someValue as string), jsx need to utilize this approach
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);

// eg2: angle-bracket syntax - (<string>someValue)
let someValue2: unknown = "this is another string";
let strLength2: number = (<string>someValue2).length;
console.log(strLength2);

// utilize number, string, boolean, object, symbol in ts
function reverse(s: string): string {
  return s.split('').reverse().join('');
}