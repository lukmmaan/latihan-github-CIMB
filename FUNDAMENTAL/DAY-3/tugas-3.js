// let hasil = ''
// for (let k = 6; k > 0; k--) 
// {
//     for (let l = 6; l > k; l--) 
//     {
//         hasil+= '*'
//     }
//     hasil+="\n" 

// }
// console.log(hasil)

// let hasil = ''
// for (let i = 0; i < 6; i++) 
// {
//     for (let j = 6; j > i; j--) 
//     {
//         hasil+= '*'
//     }
//     hasil+="\n" 

// }
// console.log(hasil)
let hasil = ''
for (let i = 0; i <5; i++) 
{
    hasil+='*'
    for (let j = 0; j < 5; j++) //nulis bintang kesamping. jika J=0, *. J=1,**. J=2,***. J=3,****. J=4,*****
    {
       if (i == j) {
           break
       }
       hasil+='*'
    }
    hasil+='\n'
}
console.log(hasil)