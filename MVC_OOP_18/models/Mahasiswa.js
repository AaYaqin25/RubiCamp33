import { ViewsMahasiswa } from "../views/Mahasiswa.js";
import Table from "cli-table";
import sqlite3 from 'sqlite3';
import path from 'path';
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);

export class DbMahasiswa {
    static read() {
        console.log("=================================")
        db.all("SELECT * FROM mahasiswa", (err, rows) => {
            if (err) return console.log(err);

            var table = new Table({
                head: ["NIM", 'Nama', "Alamat", "Jurusan", "Umur"]
                , colWidths: [10, 30, 20, 30, 10]
            });
            rows.forEach(item => {
                table.push([item.nim, item.nama, item.alamat, item.jurusan, item.umur]);

            });
            console.log(table.toString());
            console.log('=================================');
            ViewsMahasiswa.isiMahasiswa();
        })
    }

    static find() {
        const findMahasiswa = `SELECT * FROM mahasiswa WHERE mahasiswa.nim = ?`
        console.log('=================================');
        rl.question('Masukan NIM:', (input) => {
            db.all(findMahasiswa, [input], (err, rows) => {
                if (err) {
                    return console.log(err);
                }
                rows.forEach(item => {
                    if (input == item.nim) {
                        console.log("=================================");
                        console.log(`detail mahasiswa dengan NIM: ${input} \nNIM : ${item.nim} \nNama : ${item.nama} \nAlamat : ${item.alamat} \nJurusan : ${item.umur}`);
                    }
                    else {
                        console.log('=================================');
                        console.log(`Mahasiswa dengan NIM ${input} tidak terdaftar`)
                    }
                })
                console.log('=================================');
                ViewsMahasiswa.isiMahasiswa();
            })
        })
    }
    static add() {
        const addMahasiswa = `INSERT INTO mahasiswa (nim, nama, umur, jurusan, alamat) values (?,?,?,?,?)`
        console.log('=================================');
        console.log('Lengkapi data di bawah ini :');
        rl.question('NIM :', (Nim) => {
            rl.question('Nama_Mahasiswa :', (namaMahasiswa) => {
                rl.question('Umur :', (Umur) => {
                    rl.question('Jurusan :', (Jurusan) => {
                        rl.question('Alamat :', (Alamat) => {
                            db.run(addMahasiswa, [Nim, namaMahasiswa, Umur, Jurusan, Alamat], (err) => {
                                if (err) {
                                    throw err
                                }
                                else {
                                    console.log("Mahasiswa telah di tambahkan");
                                    db.all("SELECT * FROM mahasiswa", (err, rows) => {
                                        if (err) return console.log(err);

                                        var table = new Table({
                                            head: ["NIM", 'Nama', "Alamat", "Jurusan", "Umur"]
                                            , colWidths: [10, 30, 20, 30, 10]
                                        });
                                        rows.forEach(item => {
                                            table.push([item.nim, item.nama, item.alamat, item.jurusan, item.umur]);

                                        });
                                        console.log(table.toString());
                                        console.log('=================================');
                                        ViewsMahasiswa.isiMahasiswa();
                                    })
                                }
                            })
                        })

                    })
                })
            })
        })
    }
    static remove() {
        const removeMahasiswa = `DELETE FROM mahasiswa WHERE mahasiswa.nim = ?`
        console.log('=================================');
        rl.question(`Masukan NIM Mahasiswa :`, (input) => {
            db.run(removeMahasiswa, [input], (err) => {
                if (err) {
                    return console.log(err);
                } else{
                    console.log('=================================');
                    console.log(`Data Mahasiswa dengan NIM: ${input} telah dihapus`)
                    console.log('=================================');
                    ViewsMahasiswa.isiMahasiswa();
                }
            
            })
        })
    }
}


