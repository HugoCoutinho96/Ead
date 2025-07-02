import Erros from "@/constants/Erros"
import Email from "@/shared/Email"

test("Deve criar email válido", () => {
    const email = new Email("hugocoutinho@email.com")
    expect(email.valor).toBe("hugocoutinho@email.com")
})
test("Deve retornar o nome do usuario", () => {
    const email = new Email("hugocoutinho@email.com")
    expect(email.usuario).toBe("hugocoutinho")
})
test("Deve retornar o dominio", () => {
    const email = new Email("hugocoutinho@email.com")
    expect(email.dominio).toBe("email.com")
})
test("Deve lançar erro", () => {
    expect(() => new Email()).toThrow(Erros.EMAIL_INVALIDO)
    expect(() => new Email("")).toThrow(Erros.EMAIL_INVALIDO)
    expect(() => new Email("hugo")).toThrow(Erros.EMAIL_INVALIDO)
    expect(() => new Email("hugo@email")).toThrow(Erros.EMAIL_INVALIDO)
})