import { ViewsDosen } from '../views/Dosen.js';
import Table from 'cli-table';
import sqlite3 from 'sqlite3';
import path from 'path';
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);


export class DbDosen {
    static read() {
        console.log('=================================');
        db.all("SELECT * FROM dosen", (err, rows) => {
            if (err) return console.log(err);

            var table = new Table({
                head: ["ID Dosen", "Nama", "Alamat"]
                , colWidths: [20, 20, 20]
            });
            rows.forEach(item => {
                table.push([item.iddosen, item.nama, item.alamat]);

            });
            console.log(table.toString());
            console.log('=================================');
            ViewsDosen.isiDosen();
        })
    }
    static find() {
        const findDosen = `SELECT * FROM dosen WHERE dosen.iddosen = ?`;
        console.log('=================================');
        rl.question('Masukan ID Dosen:', (input) => {
            db.all(findDosen, [input], (err, rows) => {
                if (err) {
                    return console.log(err);
                }
                rows.forEach(item => {
                    if (input == item.iddosen) {
                        console.log("=================================");
                        console.log(`Detail Jurusan dengan Kode: ${input} : \n`)
                        console.log(`Kode Jurusan : ${item.iddosen} \nNama Jurusan : ${item.nama}\nAlamat : ${item.alamat}`);
                    }
                    else {
                        console.log('=================================');
                        console.log(`Jurusan dengan Kode ${input} tidak terdaftar`)
                    }
                })
                console.log('=================================');
                ViewsDosen.isiDosen();
            })
        });
    }
    static add() {
        const addDosen = `INSERT INTO dosen (iddosen, nama) values (?,?)`;
        console.log('=================================');
        console.log('Lengkapi data di bawah ini :');
        rl.question('ID Dosen :', (kodedosen) => {
            rl.question('Nama Dosen:', (namadosen) => {
                db.run(addDosen, [kodedosen, namadosen], (err) => {
                    if (err) {
                        throw err
                    } else {
                        console.log('=================================');
                        console.log("Dosen Baru telah ditambahkan ke database");
                        console.log('=================================');
                        ViewsDosen.isiDosen();
                    }
                })
            });
        });
    }
    static remove() {
        const removeDosen = `DELETE FROM dosen WHERE dosen.iddosen = ?`;
        console.log('=================================');
        rl.question(`Masukan ID Dosen :`, (input) => {
            db.run(removeDosen, [input], (err) => {
                if (err) {
                    return console.log(err);
                } else {
                    console.log('=================================');
                    console.log(`ID Dosen: ${input}, telah dihapus`);
                    console.log('=================================');
                    ViewsDosen.isiDosen();
                }
            });
        });
    }
}
