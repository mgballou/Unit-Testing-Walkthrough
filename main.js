// this is where we will have our JS functionality

// given a number, determine if that number is even
function isEven(num) {
    return num % 2 == 0;
  }

  function divide(a, b) {
    return a / b;
  }

  function isPositive (num) {
    return num >= 0
  }

// maintained by node.JS 
// module.exports is going to be an opject which exports functions we can access anywhere throughout our poject/file structureZ

module.exports = {
    isEven,
    divide,
    isPositive
}