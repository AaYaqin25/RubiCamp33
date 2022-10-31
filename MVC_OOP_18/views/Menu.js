import { MenuUtama } from "../controllers/MenuUtama.js";

export class Home {
    static menu() {
        console.log("silakan pilih opsi di bawah ini");
        console.log("[1] Mahasiswa");
        console.log("[2] Jurusan");
        console.log("[3] Dosen");
        console.log("[4] Mata Kuliah");
        console.log("[5] Kontrak");
        console.log("[6] Keluar");
        MenuUtama.isiMenuUtama();
    }
}
