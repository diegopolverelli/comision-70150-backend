console.time("demora:")
let contador=0
for (let i=0; i<10000; i++){
    contador++
    console.log(contador)
}
console.log(contador)
console.timeEnd("demora:")