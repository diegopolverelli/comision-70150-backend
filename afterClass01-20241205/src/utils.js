import bcrypt from "bcrypt"

export const generaHash=pass=>bcrypt.hashSync(pass, 10)
export const validaPass=(pass, hash)=>bcrypt.compareSync(pass, hash)