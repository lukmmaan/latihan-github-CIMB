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
let nomorbaru = ''
//  console.log(arrnomor)
// let arrnomor2 = ['', '', '032','','034']
let tulisan

tulisan = ''

for (let i = 0; i < arrbaru.length; i++)
{   
    tulisan = tulisan + (i+1) +'.Nama Anda : ' + arrbaru[0][i] + ' Umur Anda ' + arrbaru[1][i] + ' Pekerjaan Anda Adalah ' + arrbaru[2][i] + '\n'
}

console.log(tulisan)
