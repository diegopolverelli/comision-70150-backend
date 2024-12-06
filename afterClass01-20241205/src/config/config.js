process.loadEnvFile("./src/.env")  // funciona para versiones de Node superiores a 20.12.0

export const config={
    PORT: process.env.PORT, 
    MONGO_URL: process.env.MONGO_URL, 
    DB_NAME: process.env.DB_NAME, 
    SECRET: process.env.SECRET
}