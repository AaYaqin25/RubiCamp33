import { inputanMahasiswa } from "./controllers/Mahasiswa.js"
import { inputanJurusan } from "./controllers/Jurusan.js"
import { inputanKontrak } from "./controllers/Kontrak.js"
import { inputanDosen } from "./controllers/Dosen.js"
import { inputanMatakuliah } from "./controllers/Matakuliah.js"
// import { dosenDB } from "../models/Dosen.js"
import { jurusanDB } from "../models/Jurusan.js"
import { kontrakDB } from "../models/Kontrak.js"
import { mahasiswaDB } from "../models/Mahasiswa.js"
import { mataKuliahDB } from "../models/Matakuliah.js"
import { tampilanDosen } from "../views/Dosen.js"
import { tampilanJurusan } from "../views/Jurusan.js"
import { tampilanKontrak } from "../views/Kontrak.js"
import { tampilanMahasiswa } from "../views/Mahasiswa.js"
import { tampilanMatakuliah } from "../views/Matakuliah.js"
import { tampilanMenu } from "./views/Menu.js"



function all() {
    inputanMahasiswa(function() {
        inputanJurusan()
        inputanKontrak()
        inputanDosen()
        inputanMatakuliah();
        dosenDB(data)
        jurusanDB(data)
        kontrakDB(data)
        mahasiswaDB(data)
        mataKuliahDB(data)
        tampilanDosen(data)
        tampilanJurusan(data)
        tampilanKontrak(data)
        tampilanMahasiswa(data)
        tampilanMatakuliah(data)
        tampilanMenu()
    })
    
}    

console.log(all());

all();