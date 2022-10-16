const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini >'
});

rl.prompt();


rl.on('line', function (sentence) {
    let str = sentence.split(" ");
    let result = [];

    let i = 0;
    while (i < str.length) {
        let j = 0;
        if (str[i][j] === "a" || str[i][j] === "i" || str[i][j] === "u" || str[i][j] === "e" || str[i][j] === "o") {
            result.push(str[i]);
        } else {
            result.push(str[i].substring(1) + str[i][j] + "nyo");
        }
        i++;
    }
    console.log(`hasil konversi:`, result.join(" "));
    rl.prompt();
}).on('close', () => {
    console.log(' Good bye!');
    process.exit(0);
});

