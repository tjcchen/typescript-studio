// Basic typescript types
//-------------
// 1. Booelan
//-------------
var isDone = false;
//------------
// 2. Number
//------------
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// let big: bigint = 100n;
//------------
// 3. String
//------------
var color = 'blue';
color = 'red';
var fullname = 'Kobe Bryant';
var age = 37;
var sentence = "Hello, my name is " + fullname + "\n  I'll be " + (age + 1) + " years old next month.\n";
//-----------
// 4. Array
//-----------
// Approach1: use the type of element followed by [] to denote an array of that element type:
var list = [1, 2, 3];
// Approach2: use a generic array type, Array<elemType>:
var list1 = [1, 2, 3];
//-----------
// 5. Tuple
//-----------
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
//-----------
// 6. Enum
//-----------
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color["Blue"] = "blue"; // assign values to enum
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); // 4
var colorName = Color[2];
console.log(colorName); // 'Green'
console.log(Color.Blue); // blue
//-------------
// 7. unknown
//-------------
var notSure = 4;
notSure = 'maybe a string instead';
// ok, definitely a boolean
notSure = false;
console.log(notSure);
var str = getValue('myString');
console.log(str);
// Unlike unknown, variables of type any allow you to access arbitrary properties,
// even ones that don't exist. These properties include functions, and TypeScript
// will not check their existence or type.
// compare1:
var looselyTyped = 4;
// ok, ifItExists might exist at runtime
looselyTyped.ifItExists();
// ok, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
// compare2:
var strictlyTyped = 4;
// strictlyTyped.toFixed(); // Cast error on typechecking
// The 'any' will continue to propagate through your objects
// But remember that all the convenience of any comes at the cost of losing type safety.
// Type safety is one of the main motivations for using Typescript and you
// should try to avoid using 'any' when not necessary
var looselyTyped2 = {};
var d = looselyTyped2.a.b.c.d;
//--------------
// 8. void
//--------------
// void: the absence of having any type at all - no return type
function warnUser() {
    console.log('This is my warning message');
}
// declaring variables of type 'void' is not useful because you can only assign null or undefined to them.
var unusable = undefined;
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
var u = undefined;
var n = null;
// u = ''; // cast error
// union type
var unionType;
unionType = null;
//----------
// 10. never
//----------
// The 'never' type represents the type of values that never occur.
// eg: 'never' is the return type for a function expression or an arrow function expression
// that always throws an exception or one that never returns
// eg1: function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// eg2: Inferred return type is never
function fail() {
    return error('something failed');
}
// eg3: function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
// Enum Example
var Occupation;
(function (Occupation) {
    Occupation[Occupation["Teacher"] = 0] = "Teacher";
    Occupation[Occupation["Worker"] = 1] = "Worker";
    Occupation[Occupation["Driver"] = 2] = "Driver";
})(Occupation || (Occupation = {}));
;
console.log(Occupation[Occupation.Worker]); // obtain value from Occupation worker
console.log(Occupation.Driver);
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
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
// eg2: angle-bracket syntax - (<string>someValue)
var someValue2 = "this is another string";
var strLength2 = someValue2.length;
console.log(strLength2);
