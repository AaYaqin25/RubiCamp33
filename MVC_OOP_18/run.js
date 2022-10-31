import readline from 'node:readline';
import fs from 'fs';
import { Home } from './views/Menu.js';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const users = JSON.parse(fs.readFileSync("username.json", "utf-8"));

console.log("========================================================================================");
console.log("Welcome to Universitas Pendidikan Indonesia");
console.log("Jl. Setiabudhi No.255");
console.log("========================================================================================");

rl.question("username: ", (input) => {
    users.forEach(item => {
        if (input === item.username) {
            rl.question("password: ", (answer) => {
                if (answer === item.password) {
                    console.log("========================================================================================");
                    console.log(`welcome yaqin role anda ${item.role}`);
                    console.log("========================================================================================");
                    Home.menu();
                }
            })
        }
    })
})