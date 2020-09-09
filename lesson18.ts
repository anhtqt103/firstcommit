class Person1 {
    name: string;
    constructor(name: string) {
        this.name = name;

        console.log(this.name + " constructor");
    }

    static talk() {
        console.log("this static method is talking");
    }

    run() {
        console.log("running");
    }

}

let p2 = new Person1('tedu');
Person1.talk();
p2.run();