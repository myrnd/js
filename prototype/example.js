function Person() { //constructor function
    this.name = "Anil";
    this.getName = function() {
        return this.name;
    }
}

// var person = new Person();
// var name = person.getName();
// console.log(name);


function Employee() {
    this.empno = 1;
    this.getEmpno = function() {
        return this.empno;
    }
}

var employee = new Employee();
var nme = employee.getName();
var empno = employee.getEmpno();
console.log(empno, nme);