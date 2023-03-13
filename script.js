// Create function
function fnAdd(a, b) {
  let result = a + b;
  return result;
}
function fnSubtract(a, b) {
  let result = a - b;
  return result;
}
function fnMultiply(a, b) {
  let result = a * b;
  return result;
}
function fnDivide(a, b) {
  let result = a / b;
  return result;
}

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
