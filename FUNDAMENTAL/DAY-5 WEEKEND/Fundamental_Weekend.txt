
// 1. Function utk hapus huruf vocal-------------------------------
let teks = "Anda lagi ngapain sih lukman?"
// teksnomor = ''
let inibaru = 0
let tekstanpavocal = []
// console.log(teks[0])
// console.log(teksnomor)
for (let i = 0; i < teks.length; i++) {
    if (teks[i] == 'A' || teks[i] == 'a' ||
        teks[i] == 'I' || teks[i] == 'i' ||
        teks[i] == 'U' || teks[i] == 'u' ||
        teks[i] == 'E' || teks[i] == 'e' ||
        teks[i] == 'O' || teks[i] == 'o' ||
        teks[i] == ' ') 
    {
        inibaru = inibaru
    }
    else
    {
        tekstanpavocal[inibaru] = teks[i]
        inibaru++
    }
}
console.log(tekstanpavocal)

// console.log(teks.replace(/[aiueo]/gi, ""))   


// 2. Function utk sort array string (A-Z dan Z-A)------------------
var mobil = ['Honda','BMW','Daihatsu','Toyota','Mitshubisi']
var urut_mobil = mobil.sort()
// console.log(urut_mobil)
var balik_mobil = urut_mobil.reverse()
// console.log(balik_mobil)
var mobil_baru =''
//A-Z -----------------------------------------------
for (let i = 0; i < mobil.length; i++) 
{
   for (let j = 0; j < mobil.length; j++) {
       if (mobil[i]<mobil[j]) 
       {
           mobilbaru = mobil[i]
           mobil[i] = mobil[j]
           mobil[j] = mobilbaru
       }
       else
       {
           mobil[i] = mobil[i]
       }
   }
}
console.log(mobil)
//Z-A-----------------------
for (let i = 0; i < mobil.length; i++) 
{
   for (let j = 0; j < mobil.length; j++) {
       if (mobil[i]>mobil[j]) 
       {
           mobilbaru = mobil[i]
           mobil[i] = mobil[j]
           mobil[j] = mobilbaru
       }
       else
       {
           mobil[i] = mobil[i]
       }
   }
}
console.log(mobil)
// 3. Function utk sort array integer (0-9 dan 9-0)------------------
var rupiah = [500,100,5000,2000,1000]

var urut_rupiah = rupiah.sort()
var rupiahbaru
// console.log(urut_rupiah)
var balik_rupiah = urut_rupiah.reverse()
// console.log(balik_rupiah)

// 0-9-------------------------------------
for (let i = 0; i < rupiah.length; i++) 
{
   for (let j = 0; j < rupiah.length; j++) {
       if (rupiah[i]<rupiah[j]) 
       {
           rupiahbaru = rupiah[i]
           rupiah[i] = rupiah[j]
           rupiah[j] = rupiahbaru
       }
       else
       {
           rupiah[i] = rupiah[i]
       }
   }
}
console.log(rupiah)
//9-0--------------------------------------
for (let i = 0; i < rupiah.length; i++) 
{
   for (let j = 0; j < rupiah.length; j++) {
       if (rupiah[i]>rupiah[j]) 
       {
           rupiahbaru = rupiah[i]
           rupiah[i] = rupiah[j]
           rupiah[j] = rupiahbaru
       }
       else
       {
           rupiah[i] = rupiah[i]
       }
   }
}
console.log(rupiah)

// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
let arrangka = [1,4,10,9,2,7]
let angka_kosong =[0]

for (let i = 0; i < arrangka.length; i++) 
{
    if (arrangka[i]>angka_kosong)
    {
        angka_kosong = arrangka [i]   
    }    
    else
    {
        angka_kosong = angka_kosong
    }
}
console.log(angka_kosong)

// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)

let arrlengkap = [1,'lukman',2,'mamah',3,'papah',4,'kakak']
let arrbaru = []
for (let i = 0; i < arrlengkap.length; i++) {
    if (typeof(arrlengkap[i]) == 'string')  
    {
        // delete arrlengkap[i]
        arrlengkap.splice(i,1)
        arrbaru = arrlengkap   
    }
    else
    {
        arrbaru = arrlengkap[i]
    }

}
console.log(arrbaru)   
// 6. Function untuk hapus huruf awal dan akhir saja 
let text = "lukman lagi ngapain sih"
let jumlah = ''
for (let i = 1; i < text.length-1; i++) {
   
   jumlah = jumlah + text[i]
}
console.log(jumlah)