const colors=require("colors")

const saludo01=dato=>{
    return `${dato}`.rainbow
}

const saludo02=dato=>{
    return `${dato}`.zebra
}

module.exports={saludo01, saludo02}