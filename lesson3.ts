function greetPerson(name: string) {
    var greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there";
    }
    console.log(greet);
}

greetPerson("Chandler");