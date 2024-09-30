// Classe base "Personagem" simulando uma classe abstrata
class Personagem {
    constructor(nome) {
        if (new.target === Personagem) {
            throw new Error("Não é possivel instanciar a classe abstrata Personagem diretamente");
        }
        this.nome = nome;
    }
    // Metodo abstrato simulado
    atacar() {
        throw new Error("0 metodo atacar() dever ser implementado pela classe derivada");
    }

    // Metodo abstrato simulado
    defender() {
        throw new Error("0 metodo defender() dever ser implementado pela classe derivada");
    }
}

// classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    constructor(nome, arma) {
        super(nome);
        this.arma = arma;
    }

    // Implementação dos metodos abstratos da classe Personagem
    atacar(){
        console.log(`${this.nome} atacou com a ${this.arma}`);
    }

    defender(){
        console.log(`${this.nome} levanta o escudo para se defender!`);
    }
}