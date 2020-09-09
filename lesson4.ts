function greetPerson1(name: string) {
    let greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there";
    }
    console.log(greet);
}

greetPerson1("Chandler");