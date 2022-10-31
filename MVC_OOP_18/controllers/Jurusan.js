import readline from 'node:readline';
import { DbJurusan } from '../models/Jurusan.js';
import { Home } from '../views/Menu.js';
// import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// const users = JSON.parse(fs.readFileSync("username.json", "utf-8"));

export class Jurusan {
    static menuJurusan(){
        rl.question("Masukan salah satu opsi nomor dari pilihian di atas : \n", (input) => {
            switch (input) {
                case "1":
                    DbJurusan.read();
                    break;
                case "2":
                    DbJurusan.find();
                    break;
                case "3":
                    DbJurusan.add();
                    break;
                case "4":
                    DbJurusan.remove();
                    break;
                default:
                    Home.menu();
                    break;
            }
        })
    }
}
    

