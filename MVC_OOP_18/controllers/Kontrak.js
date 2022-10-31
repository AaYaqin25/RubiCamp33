import readline from 'node:readline';
import { DbKontrak } from '../models/Kontrak.js';
import { Home } from '../views/Menu.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export class Kontrak {
    static menuKontrak(){
        rl.question("Masukan salah satu opsi nomor dari pilihian di atas : \n", (input) => {
            switch (input) {
                case "1":
                    DbKontrak.read();
                    break;
                case "2":
                    DbKontrak.find();
                    break;
                case "3":
                    DbKontrak.add();
                    break;
                case "4":
                    DbKontrak.remove();
                    break;
                case "5":
                    DbKontrak.update();
                    break;
                default:
                    Home.menu();
                    break;
            }
        })
    }
}


