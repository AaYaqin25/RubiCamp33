CREATE DATABASE university.db

CREATE TABLE mahasiswa (
    nim varchar(50) primary key not null,
    nama varchar(255) not null,
    alamat text,
    jurusan varchar(255) not null
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

INSERT INTO mahasiswa VALUES 
    ("A001", "Ahmad Ainul Yaqin", "Bogor", "Teknik Informatika"),
    ("A002", "Tantowi Alif", "Cimahi", "Ekonomi"),
    ("A003", "Bagas Kara", "Bandung", "Psikolog"),
    ("A004", "Muhammad Fajar", "Purwakarta", "Akuntansi");


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
