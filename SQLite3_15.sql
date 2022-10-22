CREATE DATABASE univeruty.db

CREATE TABLE mahasiswa (
    nim varchar(50) primary key not null,
    nama varchar(255) not null,
    alamat text,
    jurusan varchar(255) not null,
    umur integer not null
);

CREATE TABLE jurusan (
    kodejurusan varchar(50) primary key not null,
    namajurusan text not null
);

CREATE TABLE dosen (
    iddosen varchar(50) primary key not null,
    nama varchar(255) not null,
    alamat varchar(255)
);

CREATE TABLE matakuliah (
    kodematakuliah varchar(50) primary key not null,
    nama varchar(255) not null,
    sks varchar(255) not null
);

CREATE TABLE dosenmengajar(
    id integer primary key autoincrement,
    iddosen varchar(50) not null,
    nim varchar(50) not null,
    foreign key(iddosen) references dosen(iddosen),
    foreign key(nim) references mahasiswa(nim)

);

CREATE TABLE nilaimahasiswa (
    id integer primary key autoincrement,
    kodematakuliah varchar(50) not null,
    nim varchar(50) not null,
    nilai integer not null,
    foreign key(kodematakuliah) references matakuliah(kodematakuliah),
    foreign key(nim) references mahasiswa(nim)

);

CREATE TABLE jurusanMahaSiswa (
    id integer primary key autoincrement,
    kodejurusan varchar(50) not null,
    nim varchar(50) not null,
    foreign key(kodejurusan) references jurusan(kodejurusan),
    foreign key(nim) references mahasiswa(nim)

);


INSERT INTO mahasiswa VALUES 
    ("A001", "Ahmad Ainul Yaqin", "Bogor", "Teknik Informatika", 25),
    ("A002", "Tantowi Alif", "Cimahi", "Ekonomi", 24),
    ("A003", "Bagas Kara", "Bandung", "Psikolog", 19),
    ("A004", "Muhammad Fajar", "Purwakarta", "Akuntansi", 18);


INSERT INTO jurusan VALUES 
    ("H001", "Manajemen"),
    ("H002", "Teknik Informatika"),
    ("H003", "Akuntansi"),
    ("H004", "Ekonomi");



INSERT INTO dosen VALUES 
    ("P001", "Rubi Henjayaa", "Bandung"),
    ("P002", "Roberto Carlos", "Cimahi"),
    ("P003", "Ronaldinho", "Bogor"),
    ("P004", "Zidane", "Jakarta");


INSERT INTO matakuliah VALUES 
    ("Z001", "data mining", 3),
    ("Z002", "data mining", 3),
    ("Z003", "Bahasa Inggris", 3),
    ("Z004", "Matematika", 3);

INSERT INTO dosenmengajar (iddosen, nim) VALUES
    ("P001", "A001"),
    ("P002", "A002"),
    ("P003", "A003"),
    ("P004", "A004");

INSERT INTO nilaimahasiswa (kodematakuliah, nim, nilai) VALUES
    ("Z001", "A001", "A"),
    ("Z002", "A002", "D"),
    ("Z003", "A003", "E"),
    ("Z004", "A004", "B");


INSERT INTO jurusanMahaSiswa (kodejurusan, nim) VALUES
    ("H001", "A001"),
    ("H002", "A002"),
    ("H003", "A003"),
    ("H004", "A004");


-- 1
SELECT * FROM jurusanMahaSiswa join jurusan on jurusanMahaSiswa.kodejurusan = jurusan.kodejurusan join mahasiswa on jurusanMahaSiswa.nim = mahasiswa.nim;

-- 2 
SELECT * FROM mahasiswa where umur < 20;

-- 3 
SELECT * FROM nilaimahasiswa join matakuliah on nilaimahasiswa.kodematakuliah = matakuliah.kodematakuliah join mahasiswa on nilaimahasiswa.nim = mahasiswa.nim where nilaimahasiswa.nilai < "B";

-- 4
SELECT mahasiswa.nama, nilaimahasiswa.kodematakuliah, SUM(matakuliah.sks) FROM mahasiswa join nilaimahasiswa on mahasiswa.nim = nilaimahasiswa.nim join matakuliah on matakuliah.kodematakuliah = nilaimahasiswa.kodematakuliah
where matakuliah.sks > 10;

-- 5
SELECT * FROM nilaimahasiswa join matakuliah on nilaimahasiswa.kodematakuliah = matakuliah.kodematakuliah join mahasiswa on nilaimahasiswa.nim = mahasiswa.nim where matakuliah.nama = "data mining";

-- 6
SELECT dosenmengajar.nim, dosenmengajar.iddosen, COUNT(mahasiswa.nim) FROM dosenmengajar join mahasiswa on dosenmengajar.nim = mahasiswa.nim GROUP BY dosenmengajar.nim;

-- 7
SELECT * FROM mahasiswa ORDER BY umur;

-- 8
SELECT * FROM nilaimahasiswa join matakuliah on nilaimahasiswa.kodematakuliah = matakuliah.kodematakuliah join mahasiswa on nilaimahasiswa.nim = mahasiswa.nim where nilaimahasiswa.nilai > "B";

SELECT * FROM dosenmengajar join mahasiswa on dosenmengajar.nim = mahasiswa.nim join dosen on dosenmengajar.iddosen = dosen.iddosen;

