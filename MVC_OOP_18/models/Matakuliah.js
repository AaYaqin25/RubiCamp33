import { ViewsMatakuliah } from "../views/Matakuliah.js";
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

export class DbMataKuliah {
    static read() {
      console.log('=================================');
      db.all("SELECT * FROM matakuliah", (err, rows) => {
        if (err) return console.log(err);

        var table = new Table({
            head: ["Kode Mata Kuliah", "Nama Mata Kuliah", "SKS"]
            , colWidths: [20, 20, 10]
        });
        rows.forEach(item => {
            table.push([item.kodematakuliah, item.nama, item.sks]);

        });
        console.log(table.toString());
        console.log('=================================');
        ViewsMatakuliah.isiMatakuliah();
    })
    }
    static find() {
      const findMataKuliah = `SELECT * FROM matakuliah WHERE matakuliah.kodematakuliah = ?`;
      console.log('=================================');
      rl.question('Masukan Kode Mata Kuliah:', (input) => {
        db.all(findMataKuliah, [input], (err, rows) => {
            if (err) {
                return console.log(err);
            }
            rows.forEach(item => {
                if (input == item.kodematakuliah) {
                    console.log("=================================");
                    console.log(`detail Mata kuliah dengan Kode: ${input} \n`)
                    console.log(`Kode Mata Kuliah: ${item.kodematakuliah} \nNama Mata Kuliah: ${item.nama} \nSKS : ${item.sks}`);
                }
                else {
                    console.log(`Matakuliah dengan Kode ${input} tidak terdaftar`)
                    console.log('=================================');
                }
            })
            console.log('=================================');
            ViewsMatakuliah.isiMatakuliah();
        })
      });
    }
    static add() {
      const addMataKuliah = `INSERT INTO matakuliah (kodematakuliah, nama, sks) values (?,?,?)`;
      console.log('=================================');
      console.log('Lengkapi data di bawah ini :');
      rl.question('Kode MataKuliah :', (kodeMatakuliah) => {
        rl.question('Nama Mata Kuliah:', (nama) => {
          rl.question('SKS :', (sks) => {
            db.run(addMataKuliah, [kodeMatakuliah, nama, sks], (err) => {
                if (err) {
                    throw err
                }
                else {
                    console.log("Matakuliah telah di tambahkan");
                    db.all("SELECT * FROM matakuliah", (err, rows) => {
                        if (err) return console.log(err);

                        var table = new Table({
                            head: ["Kode Mata Kuliah", "Nama Mata Kuliah", "SKS"]
                            , colWidths: [20, 20, 10]
                        });
                        rows.forEach(item => {
                            table.push([item.kodematakuliah, item.nama, item.sks]);
                
                        });
                        console.log(table.toString());
                        console.log('=================================');
                        ViewsMatakuliah.isiMatakuliah();
                    })
                }
            })
          });
        });
      });
    }
    static remove() {
      const removeMataKuliah = `DELETE FROM matakuliah WHERE matakuliah.kodematakuliah = ?`;
      console.log('=================================');
      rl.question(`Masukan Kode Mata Kuliah yang akan dihapus :`, (input) => {
        db.run(removeMataKuliah, [input], (err) => {
          if (err) {
            return console.log(err);
        } else {
              console.log('=================================');
              console.log(`Mata Kuliah dengan Kode Mata Kuliah: ${input} telah dihapus`);
              ViewsMatakuliah.isiMatakuliah();
          }
        });
      });
    }
  }

