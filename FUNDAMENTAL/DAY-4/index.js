let arr = ['Bagas     ','Pandji',3,true,undefined,null] // panjang 6, index array 5
// console.log(arr)
// console.log(arr.length)
// console.log(arr.length +1)
arr.push('Nobita') //masuin data baru ke dalam array dan di array menjadi number
// console.log(arr[1].trim(),arr[0].toUpperCase())
arr[6] = 'Suneo'
arr[arr.length] = 'giant'
// console.log(arr.length)
//arr[8] = 'Musuhnya Nobita'
// console.log(arr)
//------------------------------------------------------//


//--------------PERTAMBAHAN SEMUA ARRAY-----------------//
// let total = 0
// let arrnumbers = [3,7,6,9,5]
// for (let i = 0; i < arrnumbers.length; i++) 
// {
//     total = arrnumbers[i] +total // total += arrnumbers[i]
// }


// arrnumbers.forEach(function(val) 
// {
//     total = total+val
// })


// for (let i of arrnumbers){
//     console.log(i)
// }

// console.log(arrnumbers.reduce((a,b) => a+b))

// console.log(total)

//-----------------------STRING KE ARRAY---------------------------//

// let string = 'Udin Makan Sate Ayam'
// let arrstring = string.split(' ')
// console.log(arrstring)

let array = ['bagas', 'makan', 'ayam']
let tulisan = array.indexOf('makan')
// console.log(tulisan)

string = array.toString()
// console.log(string)
let splice = array.splice(3,1)
console.log(splice)

//-----------------------METHODE TEXT------------------------------//
// let text = 'udin suka daging kelelawar \n'
// //motong text
// //console.log(text.slice(0,4)) 
// //trim motong spasi atau enter
// console.log(text.trim().toUpperCase())