// export const suma=(a, b)=>{
//     if(typeof a !="number" || typeof b!="number") return "error"
//     return a+b
// }


// export const suma=(...sumandos)=>{   // ... op rest
//     let error=false
//     sumandos.forEach(n=>{
//         if(typeof n!="number"){
//             error=true
//             return 
//         }
//     })

//     if(error){
//         return "error"
//     }

//     let resultado=0
//     sumandos.forEach(n=>{
//         resultado+=n
//     })
//     return resultado
// }

// export const suma=(...sumandos)=>{
//     let resultado=0
//     let error=false
//     sumandos.forEach(n=>{
//         if(typeof n!="number"){
//             error=true
//             return 
//         }else{
//             resultado+=n
//         }
//     })

//     if(error) return "error"
//     return resultado
// }

export const suma=(...sumandos)=>{
    if(sumandos.some(n=>typeof n!="number")) return "error"
    return sumandos.reduce((acum, n)=>acum+=n, 0)
}