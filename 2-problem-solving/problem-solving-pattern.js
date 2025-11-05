// Problem solving pattern
// 1. Understand the problem
// 2. Break it down
// 3. Solve subproblems
// 4. Refactor

// Example: Reverse a string

function reverseString(str) {
    // Step 1: Understand the problem
    // We need to take a string and return a new string with the characters in reverse order.

    // Step 2: Break it down
    // - Convert the string into an array of characters.
    // - Reverse the array.
    // - Join the array back into a string.

    // Step 3: Solve subproblems
    const charArray = str.split(''); // Convert string to array
    const reversedArray = charArray.reverse(); // Reverse the array
    const reversedString = reversedArray.join(''); // Join array back to string

    return reversedString; // Return the reversed string
}


// Step 4: Refactor
function reverseStringRefactored(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseStringRefactored("hello")); // Output: "olleh"
console.log(reverseStringRefactored("JavaScript")); // Output: "tpircSavaJ"




// Example: Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has its corresponding value squared in the second array.
// The frequency of values must be the same.


function same(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }

    for (let i = 0; i < arrayOne.length; i++) {
        let correctIndex = arrayTwo.indexOf(arrayOne[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arrayTwo.splice(correctIndex, 1)
    }
    return true;
}


console.log(same([1, 2, 3, 2], [9, 4, 1, 4,])) // true
console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false



// Refactored version - Time Complexity O(n)
function sameRefactor(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let value of arr1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }

    for (let value of arr2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true;
}