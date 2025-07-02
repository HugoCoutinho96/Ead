import Erros from "@/constants/Erros"
import Id from "@/shared/Id"

test("Deve criar um novo id válido", () => {
    const id = Id.novo
    expect(id.valor).toHaveLength(36)
    expect(id.novo).toBeTruthy()
})
test("Deve lançar erro ao tentar criar id inválido", () => {
    expect(() => new Id("123")).toThrow(Erros.ID_INVALIDO)
})
test("Deve criar um novo id válido a partir de um id existente", () => {
    const valor = Id.novo.valor
    const id = new Id(valor)
    expect(id.valor).toHaveLength(36)
    expect(id.novo).toBeFalsy()
})
test("Deve comparar dois ids iguais", () => {
    const id1 = new Id()
    const id2 = new Id(id1.valor)
    expect(id2.igual(id1)).toBeTruthy()
    expect(id2.diferente(id1)).toBeFalsy()
})
test("Deve comparar dois ids diferentes", () => {
    const id1 = new Id()
    const id2 = new Id()
    expect(id2.igual(id1)).toBeFalsy()
    expect(id2.diferente(id1)).toBeTruthy()
})