CREATE DATABASE univeruty.db

CREATE TABLE mahasiswa (
    nim varchar(50) primary key not null,
    nama varchar(255) not null,
    alamat text,
    jurusan varchar(255) not null,
    umur integer not null,
    nilai varchar(255) not null,
    SKS varchar(255) not null,
    matkul varchar(255) not null
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

INSERT INTO mahasiswa VALUES 
    ("A001", "Ahmad Ainul Yaqin", "Bogor", "Teknik Informatika", 25, "A", 11, "data mining"),
    ("A002", "Tantowi Alif", "Cimahi", "Ekonomi", 24, "D", 12, "data mining"),
    ("A003", "Bagas Kara", "Bandung", "Psikolog", 19, "B",13, "data mining"),
    ("A004", "Muhammad Fajar", "Purwakarta", "Akuntansi", 18, "E", 10, "sastra");


INSERT INTO jurusan VALUES 
    ("H001", "Manajemen"),
    ("H002", "Teknik Informatika"),
    ("H003", "Akuntansi"),
    ("H004", "Ekonomi");



INSERT INTO dosen VALUES 
    ("P001", "Rubi Henjayaa", "Bandung"),
    ("P002", "Roberto Carlos", "Cimahi"),
    ("P003", "Ronaldinho", "Bogor");


INSERT INTO matakuliah VALUES 
    ("Z001", "Matematika", 3),
    ("Z002", "Agama", 2),
    ("Z003", "Bahasa Inggris", 4);

INSERT INTO dosenmengajar (iddosen, nim) VALUES
    ("P001", "A001"),
    ("P002", "A002"),
    ("P003", "A003");

INSERT INTO nilaimahasiswa (kodematakuliah, nim, nilai) VALUES
    ("Z001", "A001", 80),
    ("Z002", "A002", 70),
    ("Z003", "A003", 85);

-- 1
SELECT nim, nama, jurusan FROM mahasiswa;

-- 2
SELECT * FROM mahasiswa where umur < 20;

-- 3 
SELECT nama,nilai FROM mahasiswa where nilai < "B";

-- 4
SELECT nama, SKS FROM mahasiswa where SKS > 10;

-- 5
SELECT nama, matkul FROM mahasiswa where matkul = "data mining";

-- 6
SELECT COUNT(nama) FROM mahasiswa;  

-- 7
SELECT * FROM mahasiswa ORDER BY umur;

-- 8
SELECT nilai FROM mahasiswa where nilai > "B";
SELECT * FROM dosenmengajar join mahasiswa on dosenmengajar.nim = mahasiswa.nim join dosen on dosenmengajar.iddosen = dosen.iddosen;