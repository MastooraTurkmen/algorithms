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