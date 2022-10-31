import readline from 'node:readline';
import { DbDosen } from '../models/Dosen.js';
import { Home } from '../views/Menu.js';

// import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// const users = JSON.parse(fs.readFileSync("username.json", "utf-8"));


export class Dosen {
    static menuDosen(){
        rl.question("Masukan salah satu opsi nomor dari pilihian di atas : \n", (input) => {
            switch (input) {
                case "1":
                    DbDosen.read();
                    break;
                case "2":
                    DbDosen.find();
                    break;
                case "3":
                    DbDosen.add();
                    break;
                case "4":
                    DbDosen.remove();
                    break;
                default:
                    Home.menu();
                    break;
            }
        })
    }
}