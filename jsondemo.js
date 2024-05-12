let text = '{"employees":[' +
'{"firstName":"Paani","lastName":"Dandu" },' +
'{"firstName":"Indra","lastName":"Gandikota" },' +
'{"firstName":"Ravi","lastName":"rami reddy" }]}';

const obj = JSON.parse(text);
console.log(obj.employees[0].firstName + " " + obj.employees[0].lastName);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
console.log(obj.employees[2].firstName + " " + obj.employees[2].lastName);