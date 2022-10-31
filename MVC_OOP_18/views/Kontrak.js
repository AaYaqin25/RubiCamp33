import { Kontrak } from "../controllers/Kontrak.js";

export class ViewsKontrak {
    static isiKontrak() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Daftar Kontrak");
        console.log("[2] Cari Kontrak");
        console.log("[3] Tambah Kontrak");
        console.log("[4] Hapus Kontrak");
        console.log("[5] Update Nilai");
        console.log("[6] Kembali");
        Kontrak.menuKontrak();
    }
}



