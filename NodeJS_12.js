const fs = require('fs');
const readline = require('node:readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban: '
});

if (!process.argv[2]) {
    console.log("Tolong sertakan nama flie sebagai inputan soalnya\nMisalnya \'node solution.js data.json'\ ");
    process.exit(1);
}
let data = fs.readFileSync(process.argv[2], 'utf-8');
let soal = JSON.parse(data);

console.log(`Selamat datang di permainan Tebak Kata, silahkan isi jawaban yang benar ya!`);
let quest = 0;
let wrong = 1;
console.log(`Pertanyaan : ${soal[quest].definition}`);

rl.prompt();
rl.on('line', (answer) => {
    if (answer.trim().toLowerCase() == "skip") {
        soal.push(soal[quest]);
        quest++;
        console.log(`Pertanyaan : ${soal[quest].definition}`);

    } else {
        if (answer.trim().toLowerCase() == soal[quest].term) {
            quest++;
            console.log("Anda Beruntung!");
            wrong = 1;

            if (soal.length == quest) {
                rl.close();
                process.exit(0);

            } else {
                console.log(`Pertanyaan : ${soal[quest].definition}`);
            }
        } else {
            console.log(`Anda Kurang Beruntung! anda telah salah ${wrong} kali, silahkan coba lagi.`);
            wrong++;
        }
    }

    rl.prompt();

}).on('close', () => {
    console.log('Anda Berhasil!');
});
