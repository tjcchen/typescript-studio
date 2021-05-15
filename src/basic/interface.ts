// Interfaces
// One of TypeScript's core principle is that type checking focuses on the shape that values have.
// This is something called "duck typing" or "structural subtyping"

//----------------
// First interface
//----------------
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = {
  size: 10,
  label: "Size 10 Object"
};

printLabel(myObj); // print out "Size 10 Object"

//------------------------
// rewrite first interface
//------------------------
interface LabeledValue {
  label: string;
}

function printLabel2(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

printLabel2(myObj); // print out "Size 10 Object"

//--------------------
// Optional properties
//--------------------
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare); // { color: 'black', area: 100 }