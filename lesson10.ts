var getBonus = function(value = 10, tax = value*0.1) {
    console.log(value + tax);
    console.log(arguments.length);
}

getBonus();