import ProgressoAula, { ProgressoAulaProps } from "@/progresso/ProgressoAula";
import Id from "@/shared/Id";
import { faker } from "@faker-js/faker";
import NomesAula from "./NomesAula";

export default class ProgressoAulaBuilder {
    private constructor(public props: ProgressoAulaProps){}

    static criar(): ProgressoAulaBuilder {
        const iniciado = faker.datatype.boolean()
        const concluido = faker.datatype.boolean()
        return new ProgressoAulaBuilder({
            id: Id.novo.valor,
            nomeAula: NomesAula.aleatorio(),
            duracao: faker.number.int({ min: 90, max: 3600}),
            dataInicio: iniciado ? faker.date.recent() : undefined,
            dataConclusao: iniciado ? faker.date.recent() : undefined
        })
    }

    comId(id: string): ProgressoAulaBuilder {
        this.props.id = id
        return this
    }

    semId(): ProgressoAulaBuilder {
        this.props.id = undefined
        return this
    }

    comNomeAula(nome: string): ProgressoAulaBuilder {
        this.props.nomeAula = nome
        return this
    }

    semNomeAula(): ProgressoAulaBuilder {
        this.props.nomeAula = undefined
        return this
    }

    comDuracao(duracao: number): ProgressoAulaBuilder {
        this.props.duracao = duracao
        return this
    }

    semDuracao(): ProgressoAulaBuilder {
        this.props.duracao = undefined
        return this
    }

    comDataInicio(data: Date): ProgressoAulaBuilder {
        this.props.dataInicio = data
        return this
    }

    comDataConclusao(data: Date): ProgressoAulaBuilder {
        this.props.dataConclusao = data
        return this
    }

    iniciado(): ProgressoAulaBuilder {
        this.props.dataInicio = new Date()
        return this
    }

    naoIniciado(): ProgressoAulaBuilder {
        this.props.dataInicio = undefined
        return this
    }

    concluido(): ProgressoAulaBuilder {
        this.props.dataConclusao = new Date()
        return this
    }

    naoConcluido(): ProgressoAulaBuilder {
        this.props.dataConclusao = undefined
        return this
    }

    agora(): ProgressoAula {
        return new ProgressoAula(this.props)
    }
}