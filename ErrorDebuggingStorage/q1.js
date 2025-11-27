// Q1. Throw Custom Error
// Write validateAge(age) that throws InvalidAgeError if age < 0.


function validateAge(age) {
  if (age <= 0) {
    throw new Error("InvalidAgeError: Age must be greater than 0");
  }
  console.log("Age is valid:", age);
}

try {
  validateAge(-3);
} catch (error) {
  console.error(error.message);
}