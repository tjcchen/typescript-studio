// Interfaces
// One of TypeScript's core principle is that type checking focuses on the shape that values have.
// This is something called "duck typing" or "structural subtyping"
// First interface
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabel(myObj);
