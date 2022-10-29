import Table from 'cli-table';

export function tampilanMahasiswa(rows) {
    var table = new Table({
        head: ["NIM", 'Nama', "Alamat", "Jurusan", "Umur"]
        , colWidths: [10, 30, 20, 30, 10]
    });
    rows.forEach(item => {
        table.push([item.nim, item.nama, item.alamat, item.jurusan, item.umur]);

    });
    console.log(table.toString());

}

export function tampilanMahasiswa2(rows) {
    var table = new Table({
        head: ["NIM", 'Nama', "Alamat", "Jurusan", "Umur"]
        , colWidths: [10, 30, 20, 30, 10]
    });
    rows.forEach(item => {
        table.push([item.nim, item.nama, item.alamat, item.jurusan, item.umur]
        );

    });

    console.log(table.toString());
}

export function tampilanMahasiswa3(rows) {
    var table = new Table({
        head: ["NIM", 'Nama', "Alamat", "Jurusan", "Umur"]
        , colWidths: [10, 30, 20, 30, 10]
    });
    rows.forEach(item => {
        table.push([item.nim, item.nama, item.alamat, item.jurusan, item.umur]
        );

    });

    console.log(table.toString());
}
