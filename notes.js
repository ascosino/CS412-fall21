// preferred syntax:
export function foo() {
    // something
}

export function bar() {
    // something
}

export function baz() {
    // something
}

export default;

import {bar as userauth} from es6modulles

const caller = setupCall();
const resulllt = caller();
console.log('${result}');

const delayed = function ( callback ) {
    setTimeout(
        function () {
            console.log('in delayed')
            let x = 42
            callback(x)
        }, 2000)
}

console.log('starting run')
const x = delayed(function (x) {
    console.log('x has the vallue', x)
    }
)

secondFunction(5)