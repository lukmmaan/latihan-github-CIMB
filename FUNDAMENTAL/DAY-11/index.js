// const pangkat = (arr,cb) =>{
//     let arrResult =[]
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             arrResult[i] =1
//         }
//         else{
//             arrResult[i] =0
//         }
        
//     }
//     return arrResult
// }
const pangkat = (arr,cb) =>{
    const test = (val)=>{
        return val *2
    }

    let arrResult =[]
    for (let i = 0; i < arr.length; i++) {
        // arrResult[i] =cb(arr[i])
        arrResult.push(cb(arr[i]))
    }
    return arrResult
}


// let arr_parm = [3,7,4,7,1,2]
let arr_parm=[1,2,3,4]

// console.log(pangkat(arr_parm, (val)=>{
//     if (val %2!==0) {
//         return 1
//     }
//     else{
//         return 0
//     }
// }))
console.log(pangkat(arr_parm, (val)=>{
    return val*2
}))

console.log(arr_parm.map(val=>{
    return val*3
}))