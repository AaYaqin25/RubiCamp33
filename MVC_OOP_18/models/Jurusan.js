import { ViewsJurusan } from '../views/Jurusan.js';
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


export class DbJurusan {
    static read() {
        console.log('=================================');
        db.all("SELECT * FROM jurusan", (err, rows) => {
            if (err) return console.log(err);

            var table = new Table({
                head: ["Kode Jurusan", "Nama Jurusan"]
                , colWidths: [20, 20]
            });
            rows.forEach(item => {
                table.push([item.kodejurusan, item.namajurusan]);

            });
            console.log(table.toString());
            console.log('=================================');
            ViewsJurusan.isiJurusan();
        })
    }
    static find() {
        const findJurusan = `SELECT * FROM jurusan WHERE jurusan.kodejurusan = ?`;
        console.log('=================================');
        rl.question('Masukan Kode Jurusan:', (input) => {
            db.all(findJurusan, [input], (err, rows) => {
                if (err) {
                    return console.log(err);
                }
                rows.forEach(item => {
                    if (input == item.kodejurusan) {
                        console.log("=================================");
                        console.log(`Detail Jurusan dengan Kode: ${input} : \n`)
                        console.log(`Kode Jurusan : ${item.kodejurusan} \nNama Jurusan : ${item.namajurusan}`);
                    }
                    else {
                        console.log('=================================');
                        console.log(`Jurusan dengan Kode ${input} tidak terdaftar`)
                    }
                })
                console.log('=================================');
                ViewsJurusan.isiJurusan();
            })
        });
    }
    static add() {
        const addJurusan = `INSERT INTO Jurusan (kodejurusan, namajurusan) values (?,?)`;
        console.log('=================================');
        console.log('Lengkapi data di bawah ini :');
        rl.question('Kode Jurusan :', (kodejurusan) => {
            rl.question('Nama Jurusan:', (namajurusan) => {
                db.run(addJurusan, [kodejurusan, namajurusan], (err) => {
                    if (err) {
                        throw err
                    } else {
                        console.log('=================================');
                        console.log("Jurusan telah ditambahkan ke database");
                        console.log('=================================');
                        ViewsJurusan.isiJurusan();
                    }
                })
            });
        });
    }
    static remove() {
        const removeJurusan = `DELETE FROM jurusan WHERE jurusan.kodejurusan = ?`;
        console.log('=================================');
        rl.question(`Masukan Kode Jurusan :`, (input) => {
            db.run(removeJurusan, [input], (err) => {
                if (err) {
                    return console.log(err);
                } else {
                    console.log('=================================');
                    console.log(`Data jurusan: ${input}, telah dihapus`);
                    console.log('=================================');
                    ViewsJurusan.isiJurusan();
                }
            });
        });
    }
}


