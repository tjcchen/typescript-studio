// Indexable types
// indexable types have an index signature that describe the types we can use to
// index into the object, along with the corresponding return types when indexing
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];
console.log(myStr); // Bob

// eg2:
interface Animal {
  name: string
};

interface Dog extends Animal {
  breed: string;
}

interface NotOkay {
  [x: number]: Animal;
  // [x: string]: Dog; // not okay, need to be consistent
}

// eg3:
interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  // name: string; // error, the type of 'name' is not a subtype of the index type
}

// eg4:
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

// eg5: make index signatures readonly in order to prevent assignment to their indices
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray1: ReadonlyStringArray = ['Alice', 'Bob'];
// myArray1[2] = 'james'; // error
