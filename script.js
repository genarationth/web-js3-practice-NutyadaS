// Create function
function fnAdd(a, b) {
  return a + b;
}
result = fnAdd(1, 2);
console.log(result);

function fnSubtract(a, b) {
  return a - b;
}
result = fnSubtract(1, 2);
console.log(result);

function fnMultiply(a, b) {
  return a * b;
}
result = fnMultiply(1, 2);
console.log(result);

function fnDivide(a, b) {
  return a / b;
}
result = fnDivide(1, 2);
console.log(result);

// Create Function Inform
const myInfo = (firstName, location, hobby) => {
  console.log(
    "Hi, my name is " +
      firstName +
      " I live in " +
      location +
      " and enjoy " +
      hobby
  );
};
myInfo("Mai", "Chiang Mai", "learning Dutch.");
