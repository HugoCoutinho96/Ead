import Erros from "@/constants/Erros"
import SenhaHash from "@/shared/SenhaHash"

test("Deve lançar erro com senha apenas com letras", () => {
    expect(() => new SenhaHash("aasdfasdf")).toThrow(Erros.SENHA_HASH_INVALIDA)
})
test("Deve lançar erro com senha apenas com numeros", () => {
    expect(() => new SenhaHash("12345678")).toThrow(Erros.SENHA_HASH_INVALIDA)
})
test("Deve lançar erro com senha apenas com caracteres especiais", () => {
    expect(() => new SenhaHash("@#$%&*()")).toThrow(Erros.SENHA_HASH_INVALIDA)
})
test("Deve lançar erro com senha com menos de 8 caracteres", () => {
    expect(() => new SenhaHash("asd123@")).toThrow(Erros.SENHA_HASH_INVALIDA)
})
test("Deve criar um hash", () => {
    const hashs = [
        '$2a$12$EbT3IoEbYDMsR0AiGlfvY.AEq0z0t8RU4KUv79iYbZDlwEVqLvSWO',
        '$2a$12$G8w1labQjR2uMh8uMzie/OBWp/tJXg/JjcWs1B5Re8XWbShJSMcC.',
        '$2a$12$t9XtKOO0.bjeTpVn9NRKIu1PHBLkm6rAmpY3yE9akhAV7NKYJIkSy',
    ]
    expect(new SenhaHash(hashs[0])).toBeDefined()
    expect(new SenhaHash(hashs[1])).toBeDefined()
    expect(new SenhaHash(hashs[2])).toBeDefined()
})