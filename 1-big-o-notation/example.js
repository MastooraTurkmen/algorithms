function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

logAtLeast5(7)


function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

logAtMost5(12)



// Arrays

let names = ["Micheal", "Melissa", "Andrea"]

// Big O of Arrays
// Insertion - It depends... 
// Removal - It depends...
// Searching - O(n)
// Access - O(1)