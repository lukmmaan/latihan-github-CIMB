let motor = {
    Tahun : 2020,
    Merk : 'Astrea',
    Harga: 10000
}
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arrbaru = [...arr1,...arr2]
let arrbaru2 = [arr1,arr2]
// console.log(...arr1)
// console.log(arr1)
console.log(arrbaru)
// console.log(...arrbaru)
// console.log(arrbaru2)

let motor2 = {...motor,jumlahJok:5}
// console.log(motor2)