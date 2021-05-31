var p1 = { x: 10, y: 20 };
// Error: Cannot assign to 'x' because it is a read-only property
// p1.x = 5;
// 2. ReadonlyArray<T> makes sure you don't change your arrays after creation
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; // error
console.log(ro);
