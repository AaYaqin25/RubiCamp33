import {tampilanJurusan, tampilanJurusan2  } from "../views/Jurusan.js"
import {tampilanKontrak, tampilanKontrak2, tampilanKontrak3, tampilanKontrak4, tampilanKontrak5, tampilanKontrak6, tampilanKontrak7, tampilanKontrak8, tampilanKontrak9 } from "../views/Kontrak.js"
import { tampilanMahasiswa, tampilanMahasiswa2, tampilanMahasiswa3 } from "../views/Mahasiswa.js"
import inputan from "../models/CH_18.js"

inputan(function(data) {
   
    tampilanMahasiswa(data)
    tampilanMahasiswa2(data)
    tampilanMahasiswa3(data)
 
    tampilanJurusan(data)
    tampilanJurusan2(data)
 
    tampilanKontrak(data)
    tampilanKontrak2(data)
    tampilanKontrak3(data)
    tampilanKontrak4(data)
    tampilanKontrak5(data)
    tampilanKontrak6(data)
    tampilanKontrak7(data)
    tampilanKontrak8(data)
    tampilanKontrak9(data)
})