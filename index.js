// Write your solution in this file!
const employee = {
    name: "Fridah Jacobs",
    streetAddress: "186 street"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the 'employee' object directly
    employee[key] = value;
    return employee; 
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the 'employee' object directly
    delete employee[key];
    return employee; 
}
