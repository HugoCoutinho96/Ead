import Erros from "@/constants/Erros"
import SenhaForte from "@/shared/SenhaForte"

test("Deve lançar erro com senha com apenas letras", () => {
    expect(() => new SenhaForte("asdfasdf")).toThrow(Erros.SENHA_FRACA)
})
test("Deve lançar erro com senhas com apenas caracteres especiais", () => {
    expect(() => new SenhaForte("@#$%¨&*")).toThrow(Erros.SENHA_FRACA)
})
test("Deve lançar erro com menos de 8 caracteres", () => {
    expect(() => new SenhaForte("asdfas")).toThrow(Erros.SENHA_FRACA)
})
test("Deve lançar erro com apenas numeros", () => {
    expect(() => new SenhaForte("12345678")).toThrow(Erros.SENHA_FRACA)
})
test("Deve lançar erro sem letras minusculas", () => {
    expect(() => new SenhaForte("ASDHFUSHDU@12")).toThrow(Erros.SENHA_FRACA)
})
test("Deve lançar erro ao passar senha vazia", () => {
    expect(() => new SenhaForte()).toThrow(Erros.SENHA_FRACA)
})
test("Deve criar senha forte", () => {
    const senha = "@Hhcoutinho123"
    expect(new SenhaForte(senha).valor).toBe(senha)
})