const suma=(...sumandos)=>{
    if(sumandos.some(n=>typeof n!="number")) return "error"
    return sumandos.reduce((acum, n)=>acum+=n, 0)
}

module.exports={suma}