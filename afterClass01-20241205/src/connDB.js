import mongoose from "mongoose"

export const conectaDB=async(uri, db)=>{
    try {
        await mongoose.connect(
            uri,
            {
                dbName: db
            }
        )
        console.log(`DB online!`)
    } catch (error) {
        console.log(`Error al conectar a DB: ${error.message}`)
        process.exit()
    }
}