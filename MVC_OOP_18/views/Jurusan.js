import { Jurusan } from "../controllers/Jurusan.js";

export class ViewsJurusan {
    static isiJurusan() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Daftar Jurusan");
        console.log("[2] Cari Jurusan");
        console.log("[3] Tambah Jusssrusan");
        console.log("[4] Hapus Jurusan");
        console.log("[5] Kembali");
        Jurusan.menuJurusan();
    }
}
