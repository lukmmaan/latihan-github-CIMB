class Orang{
    constructor(nama,pekerjaan,umur,pic){
        this.nama=nama
        this.pekerjaan=pekerjaan
        this.umur = umur
        this.pic = pic
    }
}
let dataOrang = [
    new Orang('Candil','Kuliah',23,'https://cdnx2.kincir.com/production/2019-08/original_1366/6f847a97c1e8982de2b7c0dd18d3c3c6091baaa8.png'),
    new Orang('Bahar','Magang',40,'https://i.insider.com/59c387d3ba785e34910e27b4?width=1100&format=jpeg&auto=webp'),
    new Orang('Zako','PNS',100,'https://ih0.redbubble.net/image.131322905.5528/st,small,507x507-pad,600x600,f8f8f8.u5.jpg'),
    new Orang('Sandy','Ilmuan',20,'data:image/png;base64,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')
]
let kosong = []
for (let i = 0; i < dataOrang.length; i++) {
    
    kosong.push(dataOrang[i].nama + dataOrang[i].pekerjaan +dataOrang[i].umur)   

}
console.log(kosong.sort()) 