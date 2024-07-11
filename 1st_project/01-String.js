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
split('Hello World check the array', " "); // it split the string into an array by given a delemeter.

// write the use of repeat

function repeat(str, count) {
    console.log(`The repeat of ${str} ${count} times is, ${str.repeat(count)}!`);
}
// repeat(' Hello World', 2 );

// write the use of trim
function trim(str) {
    console.log(`The trim of "${str}" is, ${str.trim()}`);
}// it trim out the extra spaces only in the beginning and at the end.
// trim('   Hello, World   ') 

// write the use of substring
function substring(str, start, end) {
    console.log(`The substring of ${str} from ${start} to ${end} is ${str.substring(start, end)}`)
} // negative value treat as 0; if start > end, swap the value and extract accordingly.
// substring('Hello, World', 2, 5)

// write the use of substr
function substr(str, start, length) {
    console.log(`The substr of ${str} from ${start} for ${length} characters is ${str.substr(start, length)}`)
} 
// substr('Hello, World', 2, 5)

// write the use of slice
function slice(str, start, end) {
    console.log(`The slice of ${str} from ${start} to ${end} is ${str.slice(start, end)}`)
} // negative value acceptable, if start > end, return empty value.
// slice('Hello, World', 2, 5)


function cutIt(str, statrtIndex, endIndex) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= statrtIndex && i <= endIndex) {
            newStr += str[i];
        }
    }
    return newStr;
}

// console.log(cutIt("Hello, World", 2, 5));

// write the use of replace
function replaceString(str, target, replacement) {
    console.log(`The replace of ${target} in ${str} with ${replacement} is ${str.replace(target, replacement)}`)
}
replaceString('Hello World', 'World', 'Universe')

// write the use of toLowerCase
function toLowerCase(str) {
    console.log(`The toLowerCase of ${str} is ${str.toLowerCase()}`)
}
// toLowerCase('Hello, World')

// write the use of toUpperCase
function toUpperCase(str) {
    console.log(`The UpperCase of ${str} is ${str.toUpperCase()}`)
}
toUpperCase('Hello, World')

// write the use of concat
