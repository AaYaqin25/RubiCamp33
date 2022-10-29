import Table from 'cli-table';
import sqlite3 from 'sqlite3';
import path from 'path';
import readline from 'node:readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);
const users = JSON.parse(fs.readFileSync("username.json", "utf-8"));


export default function inputan(callback) {
rl.question("username: ", (input) => {
users.forEach(item => {
if (input === item.username) {
rl.question("password: ", (answer) => {
    if (answer === item.password) {
        console.log("========================================================================================");
        console.log(`welcome yaqin role anda ${item.role}`);
        console.log("========================================================================================");
        Home.menu();
        console.log
("========================================================================================");

        rl.question("masukan salah satu nomor dari opsi diatas : ", (pilih1) => {
console.log
    ("========================================================================================");
if (pilih1 === "1") {
    Mahasiswa.isiMahasiswa();
    console.log
        ("========================================================================================");
    rl.question("masukan salah satu nomor dari opsi diatas : ", (pilihDaftarMahasiswa) => {
        if (pilihDaftarMahasiswa === "1") {
db.all('SELECT * FROM mahasiswa', (err, rows) => {
    if (err) return console.log("gagal", err);

    var table = new Table({
        head: ["NIM", 'Nama', "Alamat", "Jurusan", "Umur"]
        , colWidths: [10, 30, 20, 30, 10]
    });
    rows.forEach(item => {
        table.push([item.nim, item.nama, item.alamat, item.jurusan, item.umur]
        );

    });

    console.log(table.toString());
    console.log
        ("============================================================================================================");
    Mahasiswa.isiMahasiswa();
    console.log
    ("============================================================================================================");
    rl.question("masukan salah satu nomor dari opsi diatas : ", (pilihCariMahasiswa) => {
        if (pilihCariMahasiswa === "2") {
rl.question("masukan NIM Mahasiswa: ", (isiNIM) => {
    let cariSalah = `SELECT nim FROM mahasiswa WHERE nim = '${isiNIM}'`
    db.all(cariSalah, (err, rows) => {
        if (err) return console.log("gagal", err);
        let i = 0
        if (isiNIM !== rows[i]) {
console.log(`Mahasiswa dengan nim ${isiNIM}, tidak terdaftar`);
i++;
console.log
("============================================================================================================");
rl.question("masukan salah satu nomor dari opsi diatas : ", (pilihLagi) => {
    if (pilihLagi === "2") {
        rl.question("masukan NIM Mahasiswa: ", (isiNIMLagi) => {
db.all('SELECT * FROM mahasiswa', (err, rows) => {
    if (err) return console.log("gagal", err);
    rows.forEach(value => {
        if (isiNIMLagi === value.nim) {
console.log("========================");
console.log(`Detail Mahasiswa dengan NIM ${isiNIMLagi} :\n NIM : ${value.nim}\n Nama : ${value.nama}\n Alamat : ${value.alamat}\n Jurusan : ${value.jurusan}`);
console.log
("============================================================================================================");
Mahasiswa.isiMahasiswa();
console.log
("============================================================================================================");
rl.question("masukkan salah satu nomor dari opsi diatas : ", (pilihTambahMahasiswa) => {
    if (pilihTambahMahasiswa === "3") {
        console.log("Lengkapi data dibawah ini : \n");

        db.all('SELECT * FROM mahasiswa', (err, rows) => {
if (err) return console.log("gagal", err);
        
var table = new Table({
    head: ["NIM", 'Nama', "Alamat", "Jurusan", "Umur"]
    , colWidths: [10, 30, 20, 30, 10]
});
rows.forEach(item => {
    table.push([item.nim, item.nama, item.alamat, item.jurusan, item.umur]
    );
        
});
        
console.log(table.toString());

rl.question("NIM :", (nimBaru) => {
rl.question("Nama :", (namaBaru) => {
rl.question("Alamat :", (alamatBaru) => {
rl.question("Jurusan :", (jurusanBaru) => {
rl.question("Umur :", (umurBaru) => {
let add = `INSERT INTO mahasiswa VALUES('${nimBaru}', '${namaBaru}', '${alamatBaru}', '${jurusanBaru}', '${umurBaru}')`;

db.run(add, (err) =>{
    if (err) {
        console.log("gagal", err);
    } else {
        console.log("Mahasiswa telah ditambahkan");
        db.all('SELECT * FROM mahasiswa', (err, rows) => {
if (err) return console.log("gagal", err);
        
var table = new Table({
    head: ["NIM", 'Nama', "Alamat", "Jurusan", "Umur"]
    , colWidths: [10, 30, 20, 30, 10]
});
rows.forEach(item => {
    table.push([item.nim, item.nama, item.alamat, item.jurusan, item.umur]
    );
        
});
        
console.log(table.toString());
console.log
("============================================================================================================");
Mahasiswa.isiMahasiswa();
console.log
("============================================================================================================");
rl.question("Masukan salah satu nomor dari opsi di atas : ", (pilihHapusMahasiswa) => {
    if (pilihHapusMahasiswa === "4") {
        rl.question("Masukan NIM Mahasiswa : ", (hapusMahasiswa) => {
let delMhs = `DELETE FROM mahasiswa WHERE nim = '${hapusMahasiswa}'`
db.run(delMhs, (err) => {
    if (err) {
        console.log("gagal", err);
    } else {
        console.log(`Data Mahasiswa ${hapusMahasiswa}, telah dihapus`);
        console.log
        ("============================================================================================================");
        Mahasiswa.isiMahasiswa();
        console.log
        ("============================================================================================================");
        rl.question("Masukan salah satu nomor dari opsi diatas : ", (kembali) => {
console.log
    ("============================================================================================================");
if (kembali === "5") {
    Home.menu();
    console.log
    ("============================================================================================================");
    rl.question("Masukan salah satu nomor dari opsi diatas : ", (pilihJurusan) => {
    console.log
    ("============================================================================================================");
    if (pilihJurusan === "2") {
        Jurusan.isiJurusan();
        rl.question("Masukan salah satu nomor dari opsi diatas : ", (pilihDaftarJurusan) => {
if (pilihDaftarJurusan === "1") {
    db.all('SELECT * FROM jurusan', (err, rows) => {
        if (err) return console.log("gagal", err);
    
        var table = new Table({
head: ["Kode Jurusan", "Nama Jurusan"]
, colWidths: [20,30]
        });
        rows.forEach(item => {
table.push([item.kodejurusan, item.namajurusan]
);
    
        });
        console.log(table.toString());
        console.log
        ("============================================================================================================");
        Jurusan.isiJurusan();
        rl.question("masukan salah satu nomor dari opsi diatas : ", (pilihCariJurusan) => {
if (pilihCariJurusan === "2") {
    rl.question("masukan Kode Jurusan: ", (isiKodeJurusan) => {
        db.all('SELECT * FROM jurusan', (err, rows) => {
if (err) return console.log("gagal", err);
rows.forEach(value => {
    if (isiKodeJurusan === value.kodejurusan) {
        console.log("========================");
        console.log(`Detail Jurusan dengan Kode ${isiKodeJurusan} :\n Kode Jurusan : ${value.kodejurusan}\n Nama Jurusan: ${value.namajurusan}\n`);
        console.log
        ("============================================================================================================");
        Jurusan.isiJurusan();
        console.log
        ("============================================================================================================");
        rl.question("Masukan salah satu nomor dari opsi diatas : ", (pilihTambahJurusan) => {
if (pilihTambahJurusan === "3") {
    console.log("Lengkapi data di bawah ini : \n");
    db.all('SELECT * FROM jurusan', (err, rows) => {
        if (err) return console.log("gagal", err);
    
        var table = new Table({
head: ["Kode Jurusan", "Nama Jurusan"]
, colWidths: [20,30]
        });
        rows.forEach(item => {
table.push([item.kodejurusan, item.namajurusan]
);
    
        });
        console.log(table.toString());

rl.question("Kode Jurusan :", (kodeJursanBaru) => {
rl.question("Nama Jurusan :", (namaJurusanBaru) => {

let tambahJursan = `INSERT INTO jurusan VALUES('${kodeJursanBaru}', '${namaJurusanBaru}')`;

db.run(tambahJursan, (err) =>{
    if (err) {
        console.log("gagal", err);
    } else {
        console.log("Jurusan telah di tambahkan ke database");
        console.log
        ("============================================================================================================");
        Jurusan.isiJurusan();
        console.log
        ("============================================================================================================");
      
        rl.question("Masukan salah satu nomor dari opsi di atas : ", (pilihHapusJurusan) => {
if (pilihHapusJurusan === "4") {
    rl.question("Masukan Kode Jurusan : ", (hapusKodeJurusan) => {
        let delJurusan = `DELETE FROM jurusan WHERE kodejurusan = '${hapusKodeJurusan}'`
        db.run(delJurusan, (err) => {
if (err) {
    console.log("gagal", err);
} else {
    console.log(`Data Jurusan ${hapusKodeJurusan}, telah dihapus`);
    console.log
    ("============================================================================================================");
    Jurusan.isiJurusan();
    console.log
    ("============================================================================================================");
    rl.question("Masukan salah satu nomor dari opsi diatas : ", (back) => {
        console.log
        ("============================================================================================================");
        if (back === "5") {
Kontrak.isiKontrak();
console.log
("============================================================================================================");      
rl.question("Masukan salah satu nomor dari opsi diatas : ", (pilihDaftarKontrak) => {
    if (pilihDaftarKontrak === "1") {
        
        db.all('SELECT * FROM kontrak', (err, rows) => {
if (err) return console.log("gagal", err);

var table = new Table({
    head: ["ID", "NIM", "Nama", "Mata Kuliah", "Dosen", "Nilai"]
    , colWidths: [5,10,20,20,20,7]
});
rows.forEach(item => {
    table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]
         );

});
console.log(table.toString());
console.log
("============================================================================================================");
Kontrak.isiKontrak();
console.log
("============================================================================================================");
rl.question("masukan salah satu nomor dari opsi diatas : ", (pilihCariKontrak) => {
    if (pilihCariKontrak === "2") {
        db.all('SELECT * FROM mahasiswajurusan', (err, rows) => {
if (err) return console.log("gagal", err);
        
var table = new Table({
    head: ["NIM", "Nama", "Umur", "Alamat", "Kode jurusan", "NamaJurusan"]
    , colWidths: [10,20,10,20,15,20]
});
rows.forEach(item => {
    table.push([item.nim, item.nama, item.umur, item.alamat, item.kodejurusan, item.namajurusan]
    );
        
});
console.log(table.toString());
rl.question("Masukkan NIM Mahsiswa : " , (cariKontrak) => {
    console.log(`Daftar kontrak mahasiswa dengan NIM ${cariKontrak} adalah :\n`);

    db.all(`SELECT * FROM nilaimahasiswa where nim = '${cariKontrak}'`, (err, rows) => {
        if (err) return console.log("gagal", err);
    
        var table = new Table({
head: ["ID", "NIM", "Kode Matakuliah", "NIP", "Nilai"]
, colWidths: [5,20,10,10,10]
        });
        rows.forEach(item => {
table.push([item.id, item.nim, item.kodematakuliah, item.iddosen, item.nilai]
);
    
});
console.log(table.toString());
console.log
("============================================================================================================");
Kontrak.isiKontrak();
console.log
("============================================================================================================");

rl.question("Masukan salah satu nomor dari opsi diatas : ", (pilihTambahKontrak) => {
if (pilihTambahKontrak === "3") {
    console.log("Lengkapi data dibawah ini : \n");

    db.all('SELECT * FROM mahasiswajurusan', (err, rows) => {
if (err) return console.log("gagal", err);
    
var table = new Table({
head: ["NIM", "Nama", "Umur", "Alamat", "Kode jurusan", "NamaJurusan"]
, colWidths: [10,20,10,20,15,20]
});
rows.forEach(item => {
table.push([item.nim, item.nama, item.umur, item.alamat, item.kodejurusan, item.namajurusan]
);
    
});
console.log(table.toString());
rl.question("Masukan NIM : ", (masukanNimKontrak) => {
let tambahNimKontrak = `INSERT INTO kontrak (nim) VALUES('${masukanNimKontrak}')`
db.run(tambahNimKontrak, (err) => {
if (err) {
    console.log("gagal", err);
} else {
    db.all('SELECT * FROM matakuliah', (err, rows) => {
if (err) return console.log("gagal", err);
    
var table = new Table({
head: ["Kode Matakuliah", "Nama Matakuliah", "SKS"]
, colWidths: [20,20,5]
});
rows.forEach(item => {
    table.push([item.kodematakuliah, item.nama, item.sks]
);

    });
    console.log(table.toString());

    rl.question("Masukan Kode Mata Kuliah : ", (masukanKodeMatakuliah) => {
let tambahKodeMatakulaih = `INSERT INTO kontrak (namamatakuliah) VALUES ('${masukanKodeMatakuliah}')`
db.run(tambahKodeMatakulaih, (err) => {
    if (err) {
console.log("gagal", err);
    } else {
db.all('SELECT iddosen, nama FROM dosen', (err, rows) => {
    if (err) return console.log("gagal", err);

    var table = new Table({
head: ["NIP", "Nama Dosen"]
, colWidths: [10,20]
    });
    rows.forEach(item => {
table.push([item.iddosen, item.nama]
);

    });
    console.log(table.toString());
    rl.question("Masukan NIP Dosen : ", (masukanNipDosen) => {
console.log("Kontrak telah ditambahkan \n");
let tambahNipDosen = `INSERT INTO kontrak (namadosen) VALUES ('${masukanNipDosen}')`
db.run(tambahNipDosen, (err) => {
    if (err) {
console.log("gagal", err);
    } else {
db.all('SELECT * FROM kontrak', (err, rows) => {
    if (err) return console.log("gagal", err);
    
    var table = new Table({
head: ["ID", "NIM", "Nama", "Mata Kuliah", "Dosen", "Nilai"]
, colWidths: [5,10,20,20,20,7]
    });
    rows.forEach(item => {
table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]);
    
    });
    console.log(table.toString());
    console.log
    ("============================================================================================================");
    Kontrak.isiKontrak();
    console.log
    ("============================================================================================================");
    rl.question("Masukan salah satu nomor dari opsi di atas : ", (pilihHapusKontrak) => {
if (pilihHapusKontrak === "4") {
    rl.question("Masukan ID Kontrak : ", (hapusIdKontrak) => {
let delIdKontrak = `DELETE FROM kontrakan WHERE id = '${hapusIdKontrak}'`
db.run(delIdKontrak, (err) => {
    if (err) {
console.log("gagal", err);
    } else {
console.log(`Data Kontrak dengan ID ${hapusIdKontrak}, telah dihapus`);
console.log
("============================================================================================================");
Kontrak.isiKontrak();
console.log
("============================================================================================================");
rl.question("Masukan salah satu nomor dari opsi diatas : ", (pilihUpdateNilai) => {
    if (pilihUpdateNilai === "5") {
        db.all('SELECT * FROM kontrak', (err, rows) => {
if (err) return console.log("gagal", err);

var table = new Table({
    head: ["ID", "NIM", "Nama", "Mata Kuliah", "Dosen", "Nilai"]
    , colWidths: [5,10,20,20,20,7]
});
rows.forEach(item => {
    table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]);

});
console.log(table.toString());

rl.question("Masukan nim Mahasiswa : ", (masukanNimUpdate) => {
console.log
("============================================================================================================");
console.log(`Detail mahasiswa dengan NIM ${masukanNimUpdate}`);
db.all(`SELECT *, namamatakuliah, nilai FROM kontrak WHERE nim = '${masukanNimUpdate}'`, (err, rows) => {
    if (err) return console.log("gagal", err);

    var table = new Table({
        head: ["ID", "Matakuliah", "Nilai"]
        , colWidths: [5,20,10]
    });
    rows.forEach(item => {
        table.push([item.id, item.namamatakuliah, item.nilai]
        );

    });
    console.log(table.toString());
    console.log
    ("============================================================================================================");
    rl.question("Masukan ID yang akan dirubah nilainya : " , (IdUpdate) => {
        console.log
        ("============================================================================================================");
        rl.question("tulis nilai yang baru : ", (nilaiUpdate) => {
console.log
("============================================================================================================");
let updateNilai = `UPDATE kontrak SET nilai = '${nilaiUpdate}' WHERE id = '${IdUpdate}'`
db.run(updateNilai, (err) => {
    if (err) {
        console.log("gagal", err);
    } else {
        console.log("Nilai telah diupdate \n");
        db.all("SELECT * FROM kontrak", (err, rows) => {
if (err) return console.log("gagal", err);
        
var table = new Table({
    head: ["ID","NIM", "Nama", "Matakuliah","Dosen" ,"Nilai"]
    , colWidths: [5,10,20,20,20,10]
});
rows.forEach(item => {
    table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]
    );
        
});
console.log(table.toString());
console.log
("============================================================================================================");
Kontrak.isiKontrak();
console.log
("============================================================================================================");
rl.question("Masukan salah satu nomor dari opsi diatas : ", (kembaliHome) => {
     console.log
    ("============================================================================================================");
    if (kembaliHome === "6") {
        Home.menu();
        console.log
        ("============================================================================================================");
        rl.question("masukan salah satu nomor dari opsi diata : ", (keluar) => {
console.log
("============================================================================================================");
if (keluar === "6") {
    console.log("Anda telah keluar");
    console.log
    ("============================================================================================================");
    console.log("Welcome to Universitas Pendidikan Indonesia");
    console.log("Jl. Setiabudhi No.255");
    console.log("========================================================================================");

}
        })
    }
})
        })

    }
})
        })
    })
})
        })
       
    })
    }
})
        }
    })
})
        }
    })
})
        }
    })
          })
        })
    }
})
        })
    })
}
        })
        })
    })
}
        })
    
    })  
})
        })
    }
})
        })
    }
})
        }
     })
}
         })
    })
 }
         })
    }
 })
         })
     })
    })

}
        })
     }
 })
         })
     })
 }
         })
      })
    }
 })
        }
     })
   }
          })
        }
    })
})
}
})

})
    }
})
    })
})
        })
    })
})
        })
    }
})

        }
    })
});
        })
    }
})
        }
    });
})
        }
    })
});
        }
    })
}
        })
    } else {
        console.log("password salah");
        rl.question("username: ", (input) => {
users.forEach(item => {
    if (input === item.username) {
        rl.question("password: ", (answer) => {
if (answer === item.password) {
    console.log("========================================================================================");
    console.log(`welcome yaqin role anda ${item.role}`);
    console.log("========================================================================================");
    Home.menu();
} else {
    console.log("Anda di blokir");
}
        })
    }
});
        })

    }
})
        } else {
console.log("username tidak terdaftar");
rl.question("username: ", (input) => {
    users.forEach(item => {
        if (input === item.username) {
rl.question("password: ", (answer) => {
    if (answer === item.password) {
        console.log("========================================================================================");
        console.log(`welcome yaqin role anda ${item.role}`);
        console.log("========================================================================================");
        Home.menu();
    } else {
        console.log("password salah");
    }
})
        } else {
console.log("Anda di blokir");
        }
    });
})
        }
    });
  
})



class Home {
    static menu() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Mahasiswa");
        console.log("[2] Jurusan");
        console.log("[3] Dosen");
        console.log("[4] Mata Kuliah");
        console.log("[5] Kontrak");
        console.log("[6] Keluar");
    }
}

class Mahasiswa {
    static isiMahasiswa() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Daftar Mahasiswa");
        console.log("[2] Cari Mahasiswa");
        console.log("[3] Tambah Mahasiswa");
        console.log("[4] Hapus Mahasiswa");
        console.log("[5] Kembali");
    }
}

class Jurusan {
    static isiJurusan() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Daftar Jurusan");
        console.log("[2] Cari Jurusan");
        console.log("[3] Tambah Jurusan");
        console.log("[4] Hapus Jurusan");
        console.log("[5] Kembali");
    }
}

class Kontrak {
    static isiKontrak() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Daftar Kontrak");
        console.log("[2] Cari Kontrak");
        console.log("[3] Tambah Kontrak");
        console.log("[4] Hapus Kontrak");
        console.log("[5] Update Nilai");
        console.log("[6] Kembali");
    }
}
    callback();
}