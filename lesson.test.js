// import functions from main.JS
const { number } = require('yargs')
const modules = require('./main')
console.log(modules)

// semantic naming for the function you've imported
const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive

// this is where all of our test cases belong
//test case for isEven
test("It should return true when called with an even number", () => {
    expect(isEven(4)).toBe(true)
})


// test case for divide

test("It should return a number when called", () => {
    expect(typeof divide(4, 2)).toBe("number")
})

test("It should return true when passed a positive number and 0", () => {
    expect(isPositive(3)).toBe(true);
    expect(isPositive(0)).toBe(true);
  })