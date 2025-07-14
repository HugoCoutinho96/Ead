import Validador from "@/utils/Validador"

test("Deve retornar null com texto não nulo", () => {
    const erro = Validador.naoNulo("bom dia", "texto inválido")
    expect(erro).toBeNull()
})
test("Deve retornar erro com texto nulo", () => {
    const msgErro = "texto inválido"
    const erro = Validador.naoNulo(null, msgErro)
    expect(erro?.codigo).toBe(msgErro)
})
test("Deve retornar null com texto não vazio", () => {
    const erro = Validador.naoVazio("abc", "texto vazio")
    expect(erro).toBeNull()
})
test("Deve retornar erro com texto vazio", () => {
    const msgErro = "texto vazio"
    const e1 = Validador.naoVazio("", msgErro)
    expect(e1?.codigo).toBe(msgErro)
})
test("Deve retornar erro com texto null", () => {
    const msgErro = "texto vazio"
    const e1 = Validador.naoVazio(null, msgErro)
    expect(e1?.codigo).toBe(msgErro)
})
test("Deve retornar erro com texto undefined", () => {
    const msgErro = "texto vazio"
    const e1 = Validador.naoVazio(undefined, msgErro)
    expect(e1?.codigo).toBe(msgErro)
})
test("Deve retornar null com texto menor que o tamanho máximo", () => {
    const erro = Validador.tamanhoMenorQue("teste", 6, "erro")
    expect(erro).toBeNull()
})
test("Deve retornar erro com texto maior que o tamanho máximo", () => {
    const erro = Validador.tamanhoMenorQue("bom dia", 6, "erro")
    expect(erro?.codigo).toBe("erro")
})
test("Deve retornar null com texto maior que o tamanho minimo", () => {
    const erro = Validador.tamanhoMaiorQue("teste", 4, "erro")
    expect(erro).toBeNull()
})
test("Deve retornar erro com texto menor que o tamanho minimo", () => {
    const erro = Validador.tamanhoMaiorQue("bom dia", 10, "erro")
    expect(erro?.codigo).toBe("erro")
})
test("Deve validar via regex que só tem numeros", () => {
    const erro = Validador.regex("10947478400", /\d{11}/, "erro")
    expect(erro).toBeNull()
})
test("Deve retornar erro via validação de numeros", () => {
    const erro = Validador.regex("1094747840A", /\d{11}/, "erro")
    expect(erro?.codigo).toBe("erro")
})
test("Deve combinar erros", () => {
    const erros = Validador.combinar(
        Validador.naoVazio("", "erro1"),
        Validador.naoVazio("", "erro2"),
        Validador.naoVazio("", "erro3"),
        Validador.naoVazio("teste", "não erro 4"),
        Validador.naoVazio("", "erro5"),
    )
    expect(erros?.map(erro => erro.codigo).join(", ")).toBe("erro1, erro2, erro3, erro5")
})
test("Deve combinar sem erros", () => {
    const erros = Validador.combinar(
        Validador.naoVazio("bom dia", "erro1"),
        Validador.naoVazio("oi", "erro2"),
        Validador.naoVazio("teste", "não erro 4"),
    )
    expect(erros).toBeNull()
})