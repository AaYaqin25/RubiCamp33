import { ViewsKontrak } from "../views/Kontrak.js";
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


export class DbKontrak {
    static read() {
      console.log('=================================');
      db.all("SELECT * FROM kontrak", (err,rows) => {
          if (err) return console.log(err);

          var table = new Table({
            head: ["ID", "NIM", "Nama", "Mata Kuliah", "Dosen", "Nilai"]
            , colWidths: [5, 10, 20, 20, 20, 7]
        });
        rows.forEach(value => {
            table.push([value.id, value.nim, value.namamahasiswa, value.namamatakuliah, value.namadosen, value.nilai]
            );
    
        });
            console.log(table.join().split(" "));
            console.log('=================================');
            ViewsKontrak.isiKontrak();
      })
    };
    
    static find() {
      const findKontrak = `SELECT * FROM kontrak WHERE kontrak.nim = ?`;
      console.log('=================================');
      rl.question('Masukan Nim Mahasiswa :', (input) => {
        db.all(findKontrak, [input], (err, rows) => {
            if (err) {
                return console.log(err);
            }
            rows.forEach(item => {
                if (input == item.nim) {
                    console.log("=================================");
                    console.log(`Daftar kontrak mahasiswa dengan NIM: ${input} adalah \n`)
                    console.log(`ID : ${item.id}\nNIM : ${item.nim} \nNama : ${item.namamahasiswa} \nNama Matakuliah : ${item.namamatakuliah} \nNama Dosen: ${item.namadosen} \nNilai : ${item.nilai}`);
                }
                else {
                    console.log('=================================');
                    console.log(`Mahasiswa dengan NIM ${input} tidak terdaftar`)
                }
            })
            console.log('=================================');
            ViewsKontrak.isiKontrak();
        })
      });
    }
    static add() {
      const addKontrak = `INSERT INTO kontrak (nim, namamahasiswa, namadosen, namamatakuliah) values (?,?,?,?)`;
      console.log('=================================');
      console.log('Lengkapi data di bawah ini :');
      rl.question('Nim :', (nim) => {
        rl.question('Nama:', (namamahasiswa) => {
          rl.question('Nama Dosen :', (namadosen) => {
            rl.question('Nama Matakuliah :', (namamatakuliah) => {
                db.run(addKontrak, [nim, namamahasiswa, namadosen, namamatakuliah], (err) => {
                    if (err) {
                        throw err
                    }
                    else {
                        console.log("Kontrak telah di tambahkan");
                        db.all("SELECT * FROM kontrak", (err, rows) => {
                            if (err) return console.log(err);

                            var table = new Table({
                                head: ["ID","NIM", 'Nama', "Mata kuliah", "Dosen", "Nilai"]
                                , colWidths: [10, 10, 25, 25, 25, 10]
                            });
                            rows.forEach(item => {
                                table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]);

                            });
                            console.log(table.join().split(" "));
                            console.log('=================================');
                            ViewsKontrak.isiKontrak();
                        })
                    }
                })
            });
          });
        });
      });
    }
    static remove() {
      const removeKontrak = `DELETE FROM kontrak WHERE kontrak.id = ?`;
      console.log('=================================');
      rl.question(`Masukan ID kontrak :`, (input) => {
        db.run(removeKontrak, [input], (err) => {
          if (err) {
            return console.log(err);
        } else {
            console.log('=================================');
            console.log(`Daftar kontrak dengan ID ${input}, telah dihapus`);
            ViewsKontrak.isiKontrak();
        }
        });
      });
    }

    static update() {
        rl.question("Masukan ID yang akan dirubah nilainya : ", (IdUpdate) => {
        console.log
        ("============================================================================================================");
        rl.question("tulis nilai yang baru : ", (nilaiUpdate) => {
        const updateNilai = `UPDATE kontrak SET nilai = ? WHERE id = ?`
        db.run(updateNilai, [nilaiUpdate, IdUpdate], (err)  => {
            if (err) {
            console.log("gagal", err);
            } else {
            console.log("Nilai telah diupdate \n");

            db.all("SELECT * FROM kontrak", (err, rows) => {
            if (err) return console.log("gagal", err);

            var table = new Table({
                head: ["ID","NIM", 'Nama', "Mata kuliah", "Dosen", "Nilai"]
                , colWidths: [10, 10, 25, 25, 25, 10]
            });
            rows.forEach(item => {
                table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]);

            });
            console.log(table.join().split(" "));
            ViewsKontrak.isiKontrak();

            }) 
           } 
         })
       })
     })
  }
}
