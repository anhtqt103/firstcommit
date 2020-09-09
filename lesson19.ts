class Person19 {
    constructor(name: string) {
        console.log(name + " constructor");
    }

    getId() {
        return 10;
    }
}

class Employee extends Person19 {
    constructor(name: string) {
        super(name);//phan sd lai tu parent class // inherit here
        console.log(name + "employee constructor"); // overwrite here
    }

    getid() {
        return super.getId(); // inherit from parent class
    }
}

var emp = new Employee('abe');
console.log(emp.getid());