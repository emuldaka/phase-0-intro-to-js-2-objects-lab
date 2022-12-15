// Follow the steps below, running learn test as you go to get additional information from the tests.

// Let's say we are working on a program that will keep track of a company's employees. We want to store each employee as an Object. We're starting small, so to begin with we'll only keep track of the employee's name and street address.

// To start, assign an employee variable to an Object containing name and streetAddress keys; you can use whatever values you like. Use literal syntax to create your Object. Various updates will be applied to this variable (destructively and non-destructively) in this lab.

// Once you've initialized the employee Object, you'll need to create the following four functions:

// updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
// destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
// deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
// destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
let employee = { name: "", streetAddress: "" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let cloneEmp = { ...employee };
  cloneEmp[key] = value;
  return cloneEmp;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  let cloneEmp = { ...employee };
  cloneEmp[key] = undefined;
  return cloneEmp;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  employee[key] = undefined;
  return employee;
}
