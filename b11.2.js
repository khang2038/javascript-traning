let text='{"employees":[{"firstName":"tran","lastName":"khang"}]}';
const obj=JSON.parse(text);
var obj1={employees:[{firstName:"Tran", lastName:"Khang"}
]}
let text1=JSON.stringify(obj1);
console.log(text1);
document.getElementById("demo").innerHTML =
obj.employees[0].firstName + " " + obj.employees[0].lastName;