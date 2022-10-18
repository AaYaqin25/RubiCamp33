const fs = require('fs');
const readline = require('node:readline');

let data = fs.readFileSync('data.json', 'utf-8');
let res = JSON.parse(data);

console.log(`Selamat datang di permainan Tebak Kata, silahkan isi jawaban yang benar ya!`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: '
});
let quest = 0;

console.log(`Pertanyaan : ${res[quest].definition}`)

rl.prompt();
rl.on('line', (line) => {
    if (quest < res.length - 1) {
        if (line.trim().toLowerCase() == res[quest].term) {
            quest++;
            console.log("Selamat Anda Benar");
            console.log(`Pertanyaan : ${res[quest].definition}`);
        } else {
            console.log("wkwkwk anda kurang beruntung");
        }
    } else if (line.trim().toLowerCase() == res[quest].term) {
        rl.close();
        process.exit(0);
    } else {
        console.log("wkwkwk anda kurang beruntung");
    }
    rl.prompt();
}).on('close', () => {
    console.log('Hore Anda Menang!');
});