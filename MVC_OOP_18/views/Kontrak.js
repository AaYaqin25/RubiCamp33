import Table from 'cli-table';

export function tampilanKontrak(rows) {
    var table = new Table({
        head: ["ID", "NIM", "Nama", "Mata Kuliah", "Dosen", "Nilai"]
        , colWidths: [5, 10, 20, 20, 20, 7]
    });
    rows.forEach(item => {
        table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]
        );

    });
    console.log(table.toString());
}

export function tampilanKontrak2(rows) {
    var table = new Table({
        head: ["NIM", "Nama", "Umur", "Alamat", "Kode jurusan", "NamaJurusan"]
        , colWidths: [10, 20, 10, 20, 15, 20]
    });
    rows.forEach(item => {
        table.push([item.nim, item.nama, item.umur, item.alamat, item.kodejurusan, item.namajurusan]
        );

    });
    console.log(table.toString());
}

export function tampilanKontrak3(rows) {
    var table = new Table({
        head: ["ID", "NIM", "Kode Matakuliah", "NIP", "Nilai"]
        , colWidths: [5, 20, 10, 10, 10]
    });
    rows.forEach(item => {
        table.push([item.id, item.nim, item.kodematakuliah, item.iddosen, item.nilai]
        );

    });
    console.log(table.toString());
}

export function tampilanKontrak4(rows) {
    var table = new Table({
        head: ["Kode Matakuliah", "Nama Matakuliah", "SKS"]
        , colWidths: [20, 20, 5]
    });
    rows.forEach(item => {
        table.push([item.kodematakuliah, item.nama, item.sks]
        );

    });
    console.log(table.toString());
}

export function tampilanKontrak5(rows) {
    var table = new Table({
        head: ["NIP", "Nama Dosen"]
        , colWidths: [10, 20]
    });
    rows.forEach(item => {
        table.push([item.iddosen, item.nama]
        );

    });
    console.log(table.toString());
}

export function tampilanKontrak6(rows) {
    var table = new Table({
        head: ["ID", "NIM", "Nama", "Mata Kuliah", "Dosen", "Nilai"]
        , colWidths: [5, 10, 20, 20, 20, 7]
    });
    rows.forEach(item => {
        table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]);

    });
    console.log(table.toString());
}

export function tampilanKontrak7(rows) {
    var table = new Table({
        head: ["ID", "NIM", "Nama", "Mata Kuliah", "Dosen", "Nilai"]
        , colWidths: [5, 10, 20, 20, 20, 7]
    });
    rows.forEach(item => {
        table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]);

    });
    console.log(table.toString());
}

export function tampilanKontrak8(rows) {
    var table = new Table({
        head: ["ID", "Matakuliah", "Nilai"]
        , colWidths: [5, 20, 10]
    });
    rows.forEach(item => {
        table.push([item.id, item.namamatakuliah, item.nilai]
        );

    });
    console.log(table.toString());
}

export function tampilanKontrak9(rows) {
    var table = new Table({
        head: ["ID", "NIM", "Nama", "Matakuliah", "Dosen", "Nilai"]
        , colWidths: [5, 10, 20, 20, 20, 10]
    });
    rows.forEach(item => {
        table.push([item.id, item.nim, item.namamahasiswa, item.namamatakuliah, item.namadosen, item.nilai]
        );

    });
    console.log(table.toString());
}


