const test = require("../test.js")
class Factorial {
    constructor(){
        
    };

    factorialShort(n) {
        if (n < 0) {
            throw new Error(`Negative number!`);
        }
        if (n == 0) {
            return 1;
        }
        return (n !== 1) ? n * this.factorialShort(n - 1) : 1;
    };

    factorialSimple(n) {
        if (n < 0) {
            throw new Error(`Negative number!`);
        }
        if (n == 0) {
            return 1;
        }
        if (n !== 1) {
            return n * this.factorialShort(n-1);
        } else {
            return 1;
        }
    };
};

module.exports = Factorial;
