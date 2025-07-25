import Aula, { AulaProps } from "@/curso/Aula";
import NomesAula from "./NomesAula";
import { faker } from "@faker-js/faker"

export default class AulaBuilder {
    private constructor(public props: AulaProps){}

    static criar(nome?: string): AulaBuilder {
        return new AulaBuilder({
            nome: nome ?? NomesAula.aleatorio(),
            duracao: faker.number.int({min: 90, max: 3600}),
            videoUrl: faker.internet.url(),
            ordem: faker.number.int({min: 1, max: 100})
        })
    }

    static criarListaCom(qtde: number): Aula[] {
        return Array.from({length: qtde}).map((valor, i) => AulaBuilder.criar().comOrdem(i + 1).agora())
    }

    comDuracao(duracao: number): AulaBuilder{
        this.props.duracao = duracao
        return this
    }

    semDuracao(): AulaBuilder{
        this.props.duracao = undefined
        return this
    }

    comId(id: string): AulaBuilder {
        this.props.id = id
        return this
    }

    comNome(nome: string): AulaBuilder {
        this.props.nome = nome
        return this
    }

    semNome(): AulaBuilder {
        this.props.nome = undefined
        return this
    }

    comOrdem(ordem: number): AulaBuilder {
        this.props.ordem = ordem
        return this
    }

    semOrdem(): AulaBuilder {
        this.props.ordem = undefined
        return this
    }

    agora(): Aula {
        return new Aula(this.props)
    }
}