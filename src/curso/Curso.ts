import Entidade, { EntidadeProps } from "@/shared/Entidade";
import Capitulo, { CapituloProps } from "./Capitulo";
import Duracao from "@/shared/Duracao";
import NomeSimples from "@/shared/NomeSimples";
import Ordem from "@/shared/Ordem";
import ErroValidacao from "@/error/ErroValidacao";
import Erros from "@/constants/Erros";

export interface CursoProps extends EntidadeProps {
    nome?: string,
    data?: Date,
    capitulos?: CapituloProps[],
    duracao?: number,
    quantidadeDeAulas?: number
}

export default class Curso extends Entidade<Curso, CursoProps> {
    readonly nome: NomeSimples
    readonly data: Date
    readonly capitulos: Capitulo[]
    readonly duracao: Duracao
    readonly quantidadeDeAulas: number

    constructor(props: CursoProps) {
        super({
            ...props, 
            ...Curso.calcularNumerosDoCurso(props),
            data: props.data ?? new Date(),
            capitulos: Curso.ordenarCapitulos(props.capitulos ?? [])
        }),

        this.nome = new NomeSimples(props.nome!, 3, 50)
        this.data = props.data!
        this.capitulos = props.capitulos!.map(c => new Capitulo(c))
        this.duracao = new Duracao(props.duracao)
        this.quantidadeDeAulas = props.quantidadeDeAulas!

        const {duracao, quantidadeDeAulas} = this.props
        if(!duracao || duracao <= 0) ErroValidacao.lancar(Erros.CURSO_SEM_DURACAO, duracao)
        if(quantidadeDeAulas! <= 0) ErroValidacao.lancar(Erros.CURSO_SEM_AULAS)
    }

    adicionarCapitulo(capitulo: Capitulo, posicao?: number): Curso {
        const novosCapitulos = posicao !== undefined ? [...this.capitulos.slice(0, posicao), capitulo, ...this.capitulos.slice(posicao)] : [...this.capitulos, capitulo]
        const capitulos = Curso.reatribuirOrdens(novosCapitulos).map(a => a.props)
        return this.clone({capitulos})
    }

    get primeiroCapitulo() {
        return this.capitulos[0]
    }

    get ultimoCapitulo() {
        return this.capitulos[this.quantidadeDeAulas - 1]
    }

    private static calcularNumerosDoCurso(props: CursoProps) {
        if(!props.capitulos) {
            return {
                duracao: props.duracao ?? 0,
                quantidadeDeAulas: props.quantidadeDeAulas ?? 0
            }
        }

        const capitulos = props.capitulos.map(props => new Capitulo(props))
        const duracao = capitulos.reduce((t, c) => t + c.duracao.segundos, 0)
        const quantidadeDeAulas = capitulos.reduce((t, c) => t + c.quantidadeDeAulas, 0)

        return {
            duracao,
            quantidadeDeAulas
        }
    }

    private static ordenarCapitulos(capitulosProps: CapituloProps[]): CapituloProps[] {
        const capitulos = capitulosProps.map(props => new Capitulo(props))
        const capitulosOrdenadas = capitulos.sort(Ordem.ordenar)
        return Curso.reatribuirOrdens(capitulosOrdenadas).map(c => c.props)
    }
    
    private static reatribuirOrdens(capitulos: Capitulo[]): Capitulo[] {
        return capitulos.map((cap, i) => cap.clone({ordem: i + 1}))
    }
}
