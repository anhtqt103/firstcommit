let displayColors = function(msg: string, ...colors: string[]) {
    console.log(colors);
    console.log(msg);
}

let msg = 'hello';
displayColors(msg, 'red');
displayColors(msg, 'red', 'green');
displayColors(msg, 'red', 'green', 'blue');