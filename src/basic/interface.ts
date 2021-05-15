// Interfaces
// One of TypeScript's core principle is that type checking focuses on the shape that values have.
// This is something called "duck typing" or "structural subtyping"

// First interface
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = {
  size: 10,
  label: "Size 10 Object"
};

printLabel(myObj); // print out "Size 10 Object"