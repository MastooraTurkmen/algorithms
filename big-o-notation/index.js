/*
 Suppose we want to write a function that calculates the
 sum of all numbers from 1 up to (and including) some number n.
*/

// First Way
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

let time1 = performance.now();
addUpTo(1000000000);
let time2 = performance.now()
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds`)
// console.log(addUpTo(2)) // 1 + 2 = 3
// console.log(addUpTo(3)) // 1 + 2 + 3 = 6
// console.log(addUpTo(4)) // 1 + 2 + 3 + 4 = 10



// Second Way
function addUpTo2(n) {
    return n * (n + 1) / 2
}
let t1 = performance.now();
addUpTo2(1000000000);
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)
// console.log(addUpTo2(2)) // 1 + 2 = 3
// console.log(addUpTo2(3)) // 1 + 2 + 3 = 6
// console.log(addUpTo2(4)) // 1 + 2 + 3 + 4 = 10