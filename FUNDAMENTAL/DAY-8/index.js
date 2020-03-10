//arrow function

// function alphavalue(param1,param2) {
//     return (param1+param2)
// }
// alphavalue()

// const alphavalue = (param1,param2) => param1 + param2


const alphavalue = (str) =>{
    let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let result = 0
    for (let i = 0; i < str.length; i++) {
        // result += (alpArray.indexOf(str[i]) +1)
        if (alpArray.indexOf(str[i])%2 ==0) {
            result += (alpArray.indexOf(str[i])+1)
        }
    }
    return result
}
console.log(alphavalue('abc'))
let dede = [1,2,3,4,5]
// console.log(dede.indexOf(4))
// const alphavalue = (str) =>{
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//         result = result.toString() + (alpArray.indexOf(str[i])+1)
        
//     }
//     return result
// }
// console.log(alphavalue('abcd'))

class product{
    constructor(Nama,Harga,Stok){
        this.Nama = Nama
        this.Harga = Harga
        this.Stok = Stok
    }
}

let arr = [
    new product('apel',5000,5),
    new product('apuse kokondao',10000,5),
    new product('bapake',7000,5),
    new product('mangga',9000,5),
    new product('Amazone',90000,5),
    new product('Tikus',10000,5)
]

const searchname = str =>{
    let hasil =  arr.filter(({Nama}) => Nama.toLowerCase().includes(str.toLowerCase()))
    return hasil
}


const searchprice = (min,max) =>{
    let hasil = arr.filter(({Harga}) =>Harga >= min && Harga<=max)
    return hasil
}
// console.log(searchprice(5000,9000))
// filterproductharga(5000,10000)
let a = {
    nama : "Lukman",
    asal : "Indonesia",
    kontak : {
        rumah : 'bumi',
        kota : 'papua'
    }
}
let {nama,asal,kontak:{rumah,kota}} = a

const tampilnama = ({nama,asal}) =>{
    return nama,asal
}
// console.log(kota)
// tampilnama(a)


let total1 = 0
let total2 = 0
const latihan=Number =>{
    for (let i = 0; i < Number.length; i++) {
        if (Number[i]<0) 
        {
            total1 += Number[i]
        }
        else if (Number[i]>0) 
        {
            total2 += Number[i]    
        }
    }
    console.log([total2,total1])
}
latihan([-7,5,2,-2,1,-13])

// const alphavalue = (str) =>{
//     let result = []
//     for (let i = 0; i < arrAngka.length; i++) {
//         // result += (alpArray.indexOf(str[i]) +1)
//         if (arrAngka[i]<0) {
//             result  = result + arrAngka[i]
//         }
//         else if (arrAngka[i]>0) {
            
//         }
//     }
//     return result
// }
// console.log(alphavalue('abc'))