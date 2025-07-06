import Entidade, { EntidadeProps } from "@/shared/Entidade";
import Aula, { AulaProps } from "./Aula";
import NomeSimples from "@/shared/NomeSimples";
import Ordem from "@/shared/Ordem";
import ErroValidacao from "@/error/ErroValidacao";
import Erros from "@/constants/Erros";
import Duracao from "@/shared/Duracao";

export interface CapituloProps extends EntidadeProps{
    nome?: string
    ordem?: number
    aulas?: AulaProps[]
}

export default class Capitulo extends Entidade<Capitulo, CapituloProps> {
    readonly nome: NomeSimples
    readonly ordem: Ordem
    readonly aulas: Aula[]

    constructor(props: CapituloProps){
        super({...props, aulas: Capitulo.ordenarAulas(props.aulas ?? [])})
        this.nome = new NomeSimples(props.nome!, 3, 50)
        this.ordem = new Ordem(props.ordem)

        if(!this.props.aulas!.length) ErroValidacao.lancar(Erros.CAPITULO_SEM_AULAS)
        this.aulas = this.props.aulas!.map(a => new Aula(a))
    }

    adicionarAulas(aula: Aula, posicao?: number): Capitulo {
        const novasAulas = posicao !== undefined ? [...this.aulas.slice(0, posicao), aula, ...this.aulas.slice(posicao)] : [...this.aulas, aula]
        const aulas = Capitulo.reatribuirOrdens(novasAulas).map(a => a.props)
        return this.clone({aulas})
    }

    removerAula(selecionada: Aula): Capitulo {
        const outrasAulas = this.aulas.filter(a => a.diferente(selecionada))
        const aulas = Capitulo.reatribuirOrdens(outrasAulas).map(a => a.props)
        return this.clone({aulas})
    }

    moverAula(selecionada: Aula, posicao: number): Capitulo {
        return this.removerAula(selecionada).adicionarAulas(selecionada, posicao)
    }

    get quantidadeDeAulas(): number {
        return this.aulas.length
    }

    get primeiraAula() {
        return this.aulas[0]
    }

    get ultimaAula() {
        return this.aulas[this.quantidadeDeAulas - 1]
    }

    get duracao(): Duracao {
        return this.aulas.reduce((duracaoTotal: Duracao, aula: Aula) => {
            return duracaoTotal.somar(aula.duracao)
        }, new Duracao(0))
    }

    private static ordenarAulas(aulasProps: AulaProps[]): AulaProps[] {
        const aulas = aulasProps.map(props => new Aula(props))
        const aulasOrdenadas = aulas.sort(Ordem.ordenar)
        return Capitulo.reatribuirOrdens(aulasOrdenadas).map(a => a.props)
    }

    private static reatribuirOrdens(aulas: Aula[]): Aula[] {
        return aulas.map((aula, i) => aula.clone({ordem: i + 1}))
    }
}