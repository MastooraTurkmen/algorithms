throw new Error();

// synchronous try/catch/finally block
function fail() {
    try {
        console.log("this works");
        throw new Error("oopsie!!!");
    } catch (error) {
        console.log("we have made an oopsie", error);
    } finally {
        console.log("still good");
    }
}

fail();
// this works // because it goes line by line
// we have made an oopsie Error: oopsie at fail
// still good

// asynchronous .catch()
Promise.resolve("asyncfail")
    .then(response => {
        console.log(response);
        return response;
    })
    .catch(error => {
        console.log(err);
    });

(async function () {
    try {
        await Promise.resolve("oopsie #1");
        await Promise.reject("oopsie #2");
    } catch (err) {
        console.log(err);
    }
    console.log("is this still good?");
})();

// Promise {} // Promise resolved
// ooopsie #2
// is this still good?


const myError = new Error("oopsie");

myError.name; // "Error"
myError.message; // "oopsie"
myError.stack; // "Error: oopsie at <anonymous>:1:17

function a() {
    const b = new Error("uh oh");
    return b;
}

b(); // b().stack
// Error: uh oh
// at a (<anonymous>:2:12)
// at <anonymous>:1:1


class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthenticationError";
        this.message = "authentication problem";
        this.fix = "please log in";
    }
}

const err = new AuthenticationError("oopsie");
err; // authenticationError: "authentication problem" stack trace
err.fix; // please log in