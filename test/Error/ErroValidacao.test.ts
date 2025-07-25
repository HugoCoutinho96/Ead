import Erros from "@/constants/Erros"
import ErroValidacao from "@/error/ErroValidacao"

test("Deve lançar erro", () => {
    expect(() => ErroValidacao.lancar("Erro", "Valor")).toThrow("Erro")
})
test("Deve criar um erro com código e valor", () => {
    const erro = new ErroValidacao({
        codigo: Erros.EMAIL_INVALIDO,
        valor: "gustavo@"
    })
    expect(erro.codigo).toBe(Erros.EMAIL_INVALIDO)
    expect(erro.valor).toBe("gustavo@")
})
test("Deve criar um erro com código, valor e extras", () => {
    const erro = new ErroValidacao({
        codigo: Erros.NOME_PEQUENO,
        valor: "pedro",
        extras: {min: 6}
    })
    expect(erro.codigo).toBe(Erros.NOME_PEQUENO)
    expect(erro.valor).toBe("pedro")
    expect(erro.extras.min).toBe(6)
})
test("Deve criar um erro sem código", () => {
    const e1 = ErroValidacao.novo()
    const e2 = new ErroValidacao()
    expect(e1.codigo).toBe(Erros.DESCONHECIDO)
    expect(e2.codigo).toBe(Erros.DESCONHECIDO)
})