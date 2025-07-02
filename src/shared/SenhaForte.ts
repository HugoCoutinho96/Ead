import Erros from "@/constants/Erros"
import ErroValidacao from "@/error/ErroValidacao"

export default class SenhaForte {
    static readonly REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()[\]{}\-_=+<>?.,;:|\\/~`]).{8,}$/


    constructor(readonly valor?: string){
        if(!SenhaForte.isValida(valor ?? "")){
            ErroValidacao.lancar(Erros.SENHA_FRACA)
        }
    }

    static isValida(senha: string): boolean {
        return this.REGEX.test(senha)
    }
}