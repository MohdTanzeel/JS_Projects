// Write a function to get the length of the string?
// getLength is not a built in javascript method, it's a custom fucntion that demonstarate how to get the length of the string using the length property.
function getLength(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must b a string')
    }
    else {
        console.log(`original string is: ${str} \nLength of string: ${str.length}`);
    }
}

// getLength('Hello, World')

// write the use of findIndexOf
function findIndexOf(str, target) {
    console.log(`The index of ${target} in ${str} is ${str.indexOf(target)}`)
}

// findIndexOf('Hello, World', 'World')
// The same use of findLastIndexOf 
// write the use of includes
function includes(str,target) {
    console.log(`Does ${str} includes ${target}? \nAns: ${str.includes(target)}`)
}
// includes('Hello, World', 'World')

// write the use of startsWith
function startsWith(str, target) {
    console.log(`Does ${str} starts with ${target}? \nAns: ${str.startsWith(target)}`)
}
// startsWith('Hello, World', 'Hello')

// write the use of endsWith
function endsWith(str, target) {
    console.log(`Does ${str} ends with ${target}? \nAns: ${str.endsWith(target)}`)
}
// endsWith('Hello, World', 'World')

// Substring
function  substring(str, start, end) {
    console.log(`The substring of ${str} from ${start} to ${end} is ${str.substring(start, end)}`)
}
//  substring('Hello, World', 0, 10)

// write the use of split

function split(str, separator) {
    console.log(`The split of "${str}" using "${separator}" is`, str.split(separator));
}
// split('Hello World check the array', " ");

// write the use of repeat

function repeat(str, count) {
    console.log(`The repeat of "${str}" ${count} times is, ${str.repeat(count)}!`);
}
repeat(' Hello World', 2 );

// write the use of trim

// trim('   Hello, World   ')

// write the use of substring
