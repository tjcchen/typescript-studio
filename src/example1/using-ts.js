var button = document.querySelector('#btn');
var input1 = document.querySelector('#num1');
var input2 = document.querySelector('#num2');
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
}, false);
