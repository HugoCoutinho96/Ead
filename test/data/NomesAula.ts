export default class NomesAula {
    static aleatorio(): string {
        const indice = Math.floor(Math.random() * NomesAula.nomes.length)
        return NomesAula.nomes[indice]
    }

    static readonly nomes = [
        'Introdução à Lógica de Programação',
        'Variáveis e Tipos de Dados',
        'Operadores Aritméticos e Lógicos',
        'Estruturas Condicionais (if, else)',
        'Estruturas de Repetição (for, while)',
        'Funções e Escopo',
        'Arrays e Objetos',
        'Manipulação de Strings',
        'Entrada e Saída de Dados',
        'Depuração e Erros Comuns',
        'Conceitos de Classes e Objetos',
        'Construtores e Métodos',
        'Encapsulamento, Getters e Setters',
        'Herança e Polimorfismo',
        'Abstração e Interfaces',
        'Classes Estáticas e Métodos Estáticos',
        'Modificadores: public, private, protected',
        'Objetos de Valor e Entidades',
        'Composição vs Herança',
    ]
}