import { Matakuliah } from "../controllers/Matakuliah.js";

export class ViewsMatakuliah {
    static isiMatakuliah() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Daftar Matakuliah");
        console.log("[2] Cari Matakuliah");
        console.log("[3] Tambah Matakuliah");
        console.log("[4] Hapus Matakuliah");
        console.log("[5] Kembali");
        Matakuliah.menuMatakuliah();
    }
}
