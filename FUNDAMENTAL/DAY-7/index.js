// let orang = {
//     nama : 'Lukman',
//     tahunlahir : 'parungpanjang',
//     asal : 'cisauk'
// }
// let developer = {
//     nama : 'badung',
//     tahunlahir : 'tangerang',
//     asal : 'maling',
//     hobi : 'nyuri sendal'
// }

// // let arrkaryawan = [lukman,]
// class Person{
//     constructor(Parameter_nama,Parameter_tahunlahir,Parameter_asal){   /*properti = konstruktor */
//         this.nama = Parameter_nama
//         this.tahunlahir = Parameter_tahunlahir
//         this.asal = Parameter_asal
//     }
// }

// let a = new Person('Jarjit','1997','Badung')
// let b = new Person('Upin', '1998','Malayse')

// // console.log(a,'\n',b)

// class developer_ extends Person {
//     constructor(a,b,c,Parameter_speciality,Parameter_pengalaman){
//         super(a,b,c)
//         this.speciality = Parameter_speciality
//         this.pengalaman = Parameter_pengalaman
//     }
// }


// class product {
//     constructor(nama,price,stock,qty,merk,ukuran){
//         this.nama = nama
//         this.price = price
//         this.stock = stock
//         this.qty = qty
//         this.exp = "2010"
//         this.merk = merk
//         this.ukuran = ukuran
//     }
// }
// let x = new baru('sepatu','consina','xl','2011')

// class clothing extends product{
//     constructor(nama,price,stock,qty,size){
//         super(nama,price,stock)
//         this.qty = qty
//         this.size = size
//     }
// }

// let c = new clothing ('Eiger','200000','10','15','XL')
// console.log(x)


if (klik_elektronik && tokoelektronik[klik_elektronik_index].Garansi == 'Bergaransi') {
    inputjumlahelektronik = prompt(jumlah_elektronik)
    if (inputjumlahelektronik > tokoelektronik[klik_elektronik_index].Stok || inputjumlahelektronik == '' || inputjumlahelektronik < 0) {
        alert('Stok ' + tokoelektronik[klik_elektronik_index].Nama + ' habis')
        kondisimenu = true
    }
    else {
        tokoelektronik[klik_elektronik_index].input += parseInt(inputjumlahelektronik)
        kondisimenu = true
        tokoelektronik[klik_elektronik_index].Stok -= parseInt(inputjumlahelektronik)
    }
}
else {
    let konfirmasi = confirm('beneran mau beli, Barangnya ga ada garansi niih?')
    if (konfirmasi) {
        inputjumlahelektronik = prompt(jumlah_elektronik)
        if (inputjumlahelektronik > tokoelektronik[klik_elektronik_index].Stok || inputjumlahelektronik == '' || inputjumlahelektronik < 0) {
            alert('Stok ' + tokoelektronik[klik_elektronik_index].Nama + ' habis')
            kondisimenu = true
        }
        else {
            tokoelektronik[klik_elektronik_index].input += parseInt(inputjumlahelektronik)
            kondisimenu = true
            tokoelektronik[klik_elektronik_index].Stok -= parseInt(inputjumlahelektronik)
        }
    }
    else {
        kondisimenu = true
    }
}