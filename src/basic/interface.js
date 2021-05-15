// Interfaces
// One of TypeScript's core principle is that type checking focuses on the shape that values have.
// This is something called "duck typing" or "structural subtyping"
//----------------
// First interface
//----------------
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabel(myObj); // print out "Size 10 Object"
function printLabel2(labeledObj) {
    console.log(labeledObj.label);
}
printLabel2(myObj); // print out "Size 10 Object"
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
