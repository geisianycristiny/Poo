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


// classe derivada "Mago"
class Mago extends Personagem {
    constructor(nome, magia) {
        super(nome);
        this.magia = magia;
    }

    // Implementação dos metodos abstratos da classe Personagem
    atacar(){
        console.log(`${this.nome} lança a magia ${this.arma}`);
    }

    defender(){
        console.log(`${this.nome} usa um escudo magico para se defender!`);
    }
}

// criando instancia e testando o comportamento
try {
    const Personagem = new performance("Invalido"); // isso vai lançar um erro 
} catch (error) {
    console.log(error.message); // "nao e possivel instanciar a classe abstrata personagem diretamente"
}

const guerreiro = new Guerreiro("Thorin", "Espada");
guerreiro.atacar(); // "Thorin atacou com a Espada!"
guerreiro.defender(); // "Thorin levanta o escudo para se defender!"

const mago = new Mago("Gandalf", "Bola de fogo");
mago.atacar(); // "Gandalf lança a magia Bola de fogo!"
mago.defender(); // "Gandalf usa um escudo magico para se defender"