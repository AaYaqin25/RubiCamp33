import readline from 'node:readline';
import { ViewsMahasiswa } from '../views/Mahasiswa.js';
import { ViewsJurusan } from '../views/Jurusan.js';
import { ViewsDosen } from '../views/Dosen.js';
import { ViewsMatakuliah } from '../views/Matakuliah.js';
import { ViewsKontrak } from '../views/Kontrak.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export class MenuUtama {
    static isiMenuUtama() {
        rl.question("Masukan salah satu opsi nomor dari pilihian di atas : \n", (input) => {
            switch (input) {
                case "1":
                    ViewsMahasiswa.isiMahasiswa();
                    break;
                case "2":
                    ViewsJurusan.isiJurusan();
                    break;
                case "3":
                    ViewsDosen.isiDosen();
                    break;
                case "4":
                    ViewsMatakuliah.isiMatakuliah();
                    break;
                case "5":
                    ViewsKontrak.isiKontrak();
                    break;
                case "6":
                    console.log("Anda telah keluar");
                    rl.close();
                    break;
                default:
                    console.log("Input yang anda masukan tidak ada");
                    break;
            }
        })
    }
}
