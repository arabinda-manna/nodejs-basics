function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


Employee.prototype.getName = function() {
    return this.firstName + " " + this.lastName;
};

let employee1 = new Employee("Arabinda", "Manna");
console.log(employee1.getName());