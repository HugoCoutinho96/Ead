import Erros from "@/constants/Erros"
import NomePessoa from "@/shared/NomePessoa"

test("Deve lançar erro ao tentar criar nome vazio", () => {
    expect(()=> new NomePessoa("")).toThrow(Erros.NOME_VAZIO)
    expect(()=> new NomePessoa(undefined)).toThrow(Erros.NOME_VAZIO)
})
test("Deve lançar erro ao tentar criar nome menor que 4 caracteres", () => {
    expect(()=> new NomePessoa("Li Z")).toThrow(Erros.NOME_PEQUENO)
})
test("Deve lançar erro ao tentar criar nome maior que 120 caracteres", () => {
    const nomeGrande = `pedro de alcantara joao carlos borges miguel da silva pereira de oliveira melo lima barros coutinho
     salvador bibiano leopoldo vinicius pereira de oliviera melo barros lima`
    expect(()=> new NomePessoa(nomeGrande)).toThrow(Erros.NOME_GRANDE)
})
test("Deve lançar erro ao tentar criar nome sem sobrenome", () => {
    expect(()=> new NomePessoa("guilherme")).toThrow(Erros.NOME_SEM_SOBRENOME)
})
test("Deve lançar erro ao tentar criar nome com caracteres especiais", () => {
    expect(()=> new NomePessoa("guilherme @000joao")).toThrow(Erros.NOME_CARACTERES_ESPECIAIS)
})
test("Deve criar nome e dois sobrenome", () => {
    const nome = new NomePessoa("Hugo de Lira Coutinho")
    expect(nome.completo).toBe("Hugo de Lira Coutinho")
    expect(nome.primeiroNome).toBe("Hugo")
    expect(nome.sobrenomes).toEqual(["de", "Lira", "Coutinho"])
    expect(nome.ultimoSobrenome).toBe("Coutinho")
})