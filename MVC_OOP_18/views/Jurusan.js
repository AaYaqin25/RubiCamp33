import Table from 'cli-table';

export function tampilanJurusan(rows) {
        var table = new Table({
            head: ["Kode Jurusan", "Nama Jurusan"]
            , colWidths: [20, 30]
        });
        rows.forEach(item => {
            table.push([item.kodejurusan, item.namajurusan]
            );
    
        });
        console.log(table.toString());
    }
    
export function tampilanJurusan2(rows) {
        var table = new Table({
            head: ["Kode Jurusan", "Nama Jurusan"]
            , colWidths: [20, 30]
        });
        rows.forEach(item => {
            table.push([item.kodejurusan, item.namajurusan]
            );
    
        });
        console.log(table.toString());
    }
    

