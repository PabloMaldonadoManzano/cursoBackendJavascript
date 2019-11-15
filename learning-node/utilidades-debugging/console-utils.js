const util = require("util")
//%s = string
//%d = numero
//%j JSON
/*console.log("Un %s y un %s", "perrito", "gatito")

console.info("hello world")
console.warn("hello warn")

console.assert(42 == "42")
console.assert(42 === "42")

console.trace("hello")*/

//util

const debuglog = util.debuglog("foo")

debuglog("Hello from foo")