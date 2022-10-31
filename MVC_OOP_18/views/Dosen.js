import { Dosen } from "../controllers/Dosen.js";

export class ViewsDosen {
    static isiDosen() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Daftar Dosen");
        console.log("[2] Cari Dosen");
        console.log("[3] Tambah Dosen");
        console.log("[4] Hapus Dosen");
        console.log("[5] Kembali");
        Dosen.menuDosen();
    }
}
