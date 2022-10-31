import readline from 'node:readline';
import { DbMataKuliah } from '../models/Matakuliah.js';
import { Home } from '../views/Menu.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export class Matakuliah {
    static menuMatakuliah(){
        rl.question("Masukan salah satu opsi nomor dari pilihian di atas : \n", (input) => {
            switch (input) {
                case "1":
                    DbMataKuliah.read();
                    break;
                case "2":
                    DbMataKuliah.find();
                    break;
                case "3":
                    DbMataKuliah.add();
                    break;
                case "4":
                    DbMataKuliah.remove();
                    break;
                default:
                    Home.menu();
                    break;
            }
        })
    }
}