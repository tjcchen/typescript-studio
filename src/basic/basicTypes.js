// Basic typescript types
// 1. Booelan
var isDone = false;
// 2. Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// let big: bigint = 100n;
// 3. String
var color = 'blue';
color = 'red';
var fullname = 'Kobe Bryant';
var age = 37;
var sentence = "Hello, my name is " + fullname + "\n  I'll be " + (age + 1) + " years old next month.\n";
// 4. Array
// Approach1: use the type of element followed by [] to denote an array of that element type:
var list = [1, 2, 3];
// Approach2: use a generic array type, Array<elemType>:
var list1 = [1, 2, 3];
// 5. Tuple
// Tuple types allow you to express an array with a fixed number of elements whose types are known,
// but need not be the same
// eg1: a value as a pair of a string and a number
var x;
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
