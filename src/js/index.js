console.log('------------- #3')
let counter = {
    i: 0,
    up: function () {
        this.i += 1
    },
    down: function () {
        this.i -= 1
    },
    showStep: function () {
        return this.i
    }
}

counter.up();
counter.up();
console.log(counter.showStep())

console.log('------------- #4')
function Calculator() {
    this.sum = function (a) {
        let result = a
        return function (b) {
            return result += b
        }
    }
    this.multiply = function (a) {
        let result = a
        return function (b) {
            return result *= b
        }
    }
    this.subtract = function (a) {
        let result = a
        return function (b) {
            return result -= b
        }
    }
    this.divide = function (a) {
        let result = a
        return function (b) {
            return result /= b
        }
    }
}
let calculator = new Calculator();
console.log(calculator.sum(1)(2));
console.log(calculator.multiply(2)(2));
console.log(calculator.subtract(4)(2));
console.log(calculator.divide(8)(2));