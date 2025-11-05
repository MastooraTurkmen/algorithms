// Module Patterns


var globalScopeVar = "I can be accessed anywhere";

var moduleName = (function (globalScopeVar) {
    // add private variables here
    var privateVar = "I cannot be accessed outside";
    // create the function
    function say(msg1, msg2) {
        var say1 = Math.floor(Math.random() * msg1.length);
        var say2 = Math.floor(Math.random() * msg2.length);
        return say1 > say2 ? say1 : say2;
    }
    globalScopeVar = `I don't change the outside scope`;
    // return only what you want the outside to access
    return {
        say: say
    };
})(globalScopeVar);


// ES6 Modules

import module1 from "module1";
import module2 from "module2";

export function name() { }


const privateVar = "I cannot be accessed outside this file";

export function name(msg1, msg2) {
    const say1 = Math.floor(Math.random() * msg1.length);
    const say2 = Math.floor(Math.random() * msg2.length);
    return say1 > say2 ? say1 : say2;
}


import { importFnName } from "./script.js";
// with a default function the {} are not needed
import name from "./script.js";
// both default and named function import
import name, { importFnName } from "./script.js";

export default function name(msg1, msg2) {
    const say1 = Math.floor(Math.random() * msg1.length);
    const say2 = Math.floor(Math.random() * msg2.length);
    return say1 > say2 ? say1 : say2;
}