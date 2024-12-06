export class UsuariosDTO{
    constructor(usuario){
        this.nombre=usuario.first_name
        this.email=usuario.email
        this.role=usuario.role
        this.username=usuario.username
    }
}