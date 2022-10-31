import readline from 'node:readline';
import { DbMahasiswa } from '../models/Mahasiswa.js';
import { Home } from '../views/Menu.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export class Mahasiswa {
    static menuMahasiswa(){
       
        rl.question("Masukan salah satu opsi nomor dari pilihian di atas : \n", (input) => {
            switch (input) {
                case "1":
                    DbMahasiswa.read();
                    break;
                case "2":
                    DbMahasiswa.find();
                    break;
                case "3":
                    DbMahasiswa.add();
                    break;
                case "4":
                    DbMahasiswa.remove();
                default:
                    Home.menu();
                    break;
            }
        })
    }
}

Mahasiswa.menuMahasiswa()
