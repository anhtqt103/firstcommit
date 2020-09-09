let displayColors1 = function(msg: string, ...colors: string[]) {
    for (let i in colors) {
        console.log(colors[i]);
    }
}

let msg1 = 'hello';
let colors = ['red', 'green', 'blue'];
displayColors1(msg1, ...colors);