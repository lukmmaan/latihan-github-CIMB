var letters = 'abcdefghijklmnopqrstuvsxyz'
// Buat sebuah function yang menerima sebuah string S dan number N ( N >= 0 )
// Output functionnya adalah sebuah string dengan setiap huruf
// dari S bergeser sebanyak N posisi dalam urutan alphabet
const caesarCipher = (hurup, angka) => {
    let baru = ''
    for (i = 0; i < hurup.length; i++) {
        if (angka < letters.length) {
            baru += letters[angka]
            angka++
        } else {
            baru += letters[angka - letters.length]
            angka++
        }
    }
    return baru
}
// console.log(caesarCipher('abc', 1))
// console.log(caesarCipher('abc', 28))


// Buat sebuah function yang menerima sebuah array of numbers
// Output functionnya adalah hasil dari setiap angka dari
// array ditambah atau dikurang dengan index berikutnya secara bergantian.
// Maaf penjelasannya gak jelas hehe


const latihan = arr => {
    let kosong = 0
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            kosong = arr[i]
            result += arr[i]
        }
        else if (i % 2 == 0) {
            kosong -= arr[i]
            result += ' + ' + arr[i]
        }
        else{
            kosong += arr[i]
            result += ' - ' + arr[i]
        }

    }
    return result + ' = ' + kosong
}
// console.log(latihan([1, 1, 1, 1, 1]))
// console.log(latihan([1, 2, 3, 4]))



// Buat sebuah function yang menerima sebuah string
// Function ini akan mengecek apakah string ini sebuah palindrome

// Sebuah palindrome adalah sebuah kata atau kalimat yang jika dibalik,
// akan memiliki urutan huruf yang sama dengan kata atau kalimat aslinya

// Return true jika kata atau kalimat tersebut sebuah palindrome
// return false sebaliknya

// Function harus case insensitive
const latihan2 = hurup => {
    hurup = hurup.toLowerCase().replace(/ /g, '')
    console.log(hurup)
    var hurup_split = hurup.split("")
    console.log(hurup_split)
    var hurup_reverse = hurup_split.reverse()
    // console.log(hurup_reverse)
    var hurup_reverse_join = hurup_reverse.join("")
    // console.log(hurup_reverse_join)
    if (hurup_reverse_join == hurup) {
        return true

    } else {
        return false
    }
}

console.log(latihan2('NuRsES ruN'))