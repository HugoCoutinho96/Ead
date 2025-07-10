export default class NomesCurso {
    static aleatorio(): string {
        const indice = Math.floor(Math.random() * NomesCurso.nomes.length)
        return NomesCurso.nomes[indice]
    }

    static readonly nomes = [
        'Introdução à Programação para Iniciantes',
        'Curso Completo de JavaScript Moderno',
        'Desenvolvimento Web com React.js',
        'Fundamentos de Python para Ciência de Dados',
        'Programação Orientada a Objetos com Java',
        'Algoritmos e Estruturas de Dados Essenciais',
        'Desenvolvimento Mobile com Flutter',
        'Banco de Dados Relacionais com SQL',
        'Automação de Testes com Selenium',
        'DevOps: Integração Contínua e Entrega Contínua',
        'Introdução à Inteligência Artificial',
        'Desenvolvimento Backend com Node.js',
        'Programação Funcional com Haskell',
        'Construção de APIs RESTful',
        'Segurança em Aplicações Web',
        'Programação em C para Sistemas Embarcados',
        'Introdução ao Desenvolvimento de Jogos',
        'Machine Learning Aplicado com Python',
        'Análise de Dados com R',
    ]
}