// Write your solution in this file!
let employee = {
 name: "Daniel",
 streetAddress: "1320 Stuy Town",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
 const newObj = {...obj};
 newObj[key] = value;
 return newObj
}

const newEmployee = updateEmployeeWithKeyandValue(obj, "name", "Jazzy");

console.log(obj)
console.log(newEmployee)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
 obj[key] = value;
 return employee;
}

function deleteFromEmployeeByKey(employee, key) {
 const deleteKey = {...employee}
 delete deleteKey[key]
 return deleteKey

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
 delete employee[key];
 return employee;
}