class Buah {
    constructor(nama,harga,stok,input){
        this.nama = nama
        this.harga = harga
        this.stok = stok
        this.input = input
    }
}
let tokobuah = [
    new Buah('Apel',4000,5,0),
    new Buah('Mangga',5000,5,0),
    new Buah('Jeruk',2500,5,0),
    new Buah('Kelengkeng',1500,5,0)
]
console.log(tokobuah[0].nama)