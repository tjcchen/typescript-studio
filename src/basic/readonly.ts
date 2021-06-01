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

//----------------------------------------------------------
// note: variables use const whereas properties use readonly
//----------------------------------------------------------

//-----------
// example1
//-----------
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string, area: number } {
  return {
    color: config.color || 'red',
    area: config.width ? config.width * config.width : 20
  };
}
// 'colour' fails silently
// let mySquare = createSquare({ colour: 'red', width: 100 });

// Fix approach1: note: as syntax can fix above problem simply
let mySquare = createSquare({ colour: 'red', width: 100 } as SquareConfig);

console.log(mySquare);

// Fix approach2: index signature
// SquareConfig2 can have any number of properties
interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}
function createSquare2(config: SquareConfig2): { color: string, area: number } {
  return {
    color: config.color || 'red',
    area: config.width ? config.width * config.width : 20
  };
}
let squareOptions = { colour: 'black', width: 200 };
let yourSquare = createSquare2(squareOptions);
console.log(yourSquare);