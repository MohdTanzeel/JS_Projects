function explainParseInt(value) {
    // console.log("Orginal Value is ", value)
    let result = parseInt(value);
    // console.log("After using parseInt, value is: ", result);
    // console.log("Type of result is: ", typeof result);
} // it takes an string an return integer not a floating point number.
explainParseInt("434.4343");
// console.log(typeof parseFloat("343.325"))// parseFloat takes string an return a floatig-point number.
// console.log (typeof "434.433");

// .push() => it push the content to the end of the array.
// A function that adds a value to the end of an array in JavaScript.
function push(array, value) {
    array[array.length] = value;
    return array;
}
let arr = [1, 2, 3, 4, 5];
// console.log(push(arr, 6));

// .pop() => it removes the last element from the array.
function pop(array) {
    let poppedElement = array[array.length - 1];
    // array.length = array.length - 1;
    return poppedElement;
}
let arr2 = [1, 2, 3, 4, 5];
console.log(pop(arr2));

// .shift() => it removes the first element from the array.
function shift(array) {
    let shiftedElement = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    return shiftedElement;
}