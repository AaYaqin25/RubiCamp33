import { Mahasiswa } from "../controllers/Mahasiswa.js";

export class ViewsMahasiswa {
    static isiMahasiswa() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Daftar Mahasiswa");
        console.log("[2] Cari Mahasiswa");
        console.log("[3] Tambah Mahasiswa");
        console.log("[4] Hapus Mahasiswa");
        console.log("[5] Kembali");
        Mahasiswa.menuMahasiswa();
    }
}


