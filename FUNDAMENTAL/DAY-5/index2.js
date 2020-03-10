/*
UMUR
PEKERJAAN
JUMLAH ORANG = 5
TAMPILKAN NAMA DAN UMUR SETIAP ORANG 
*/

let arrumur = [20,30,40,60,100]
let arrnama = ['Lukman', 'Bahar', 'Bagas', 'Ilham','Faras']
let arrpekerjaan = ['Barbershop','Pengusaha', 'Nelayan','Pilot','Pelaut']
let arrnomor = ['020','021',['099','032'],'023',['024','034']]
let arrbaru = [arrnama,arrumur,arrpekerjaan]
// let arrbaru = [arrnama,arrumur,arrpekerjaan]
// let baru = [['Lukman',20,'Barbershop'],
//             ['Bahar',30,'Pengusaha'],
//             ['Bagas',80,'Nelayan'],
//             ['Ilham',50,'Pilot'],
//             ['Faras',100,'Pelaut']]
let databaru
//  console.log(arrnomor)
// let arrnomor2 = ['', '', '032','','034']
let tulisan

tulisan = ''

for (let i = 0; i < arrbaru.length; i++)
{   databaru = ''
    for (let j = 0; j <arrbaru[i].length; j++) {
        databaru += arrbaru[i][j] + ' '
        
    }
    console.log(databaru) 
}




let mobil = {
    warna : 'merah',
    tahun : '2012',
    merk  : 'honda'

}

mobil.tipe = 'sedan'
mobil.warna = 'putih'
mobil['tipeban'] = 'offroad'
let inputanuser = 'warna'

// console.log(mobil)

let karyawan = {
    nama : "Lukman",
    Umur : 22,
    pekerjaan : "tukang cukur",
    kontak : {
        alamat : 'GOP 9',
        NomorHP : ['081','082']
    }
}
// console.log(karyawan.kontak.NomorHP[1])