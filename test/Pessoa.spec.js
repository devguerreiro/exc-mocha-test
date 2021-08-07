const assert = require("assert")
const Pessoa = require("../Pessoa")

describe("Classe Pessoa", () => {
  it('deve retornar verdadeiro se uma pessoa for maior de idade', () => {
    const Fulano = new Pessoa("Fulano", 19)

    assert.equal(Fulano.ehAdulta(), true)
  });

  it('deve retornar falso se uma pessoa for menor de idade', () => {
    const Siclano = new Pessoa("Siclano", 17)

    assert.equal(Siclano.ehAdulta(), false)
  });

  it('a idade da pessoa deve ser maior ou igual a 18', () => {
    const Fulano = new Pessoa("Fulano", 19)

    assert.equal(Fulano.idade >= 18, true)
  });
})