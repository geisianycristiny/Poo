// Classe base Personagem class Personagem (
    class personagem {
        constructor(nome, vida){
            this.nome = nome;
            this.vida = vida;
        }

        atacar() {
            console.log(`${this.nome} realizar um ataque básico`);
        }

        receberDano(dano) {
            this.vida -= dano;
            console.log(`${this.nome}recebeu ${dano} de dano. Vida restante: ${this.vida}`);
        }
    }
   

//classe Guerreiro que herda de Personagem
class Guerreiro extends personagem {
    constructor(nome, vida, arma) {
        super(nome, vida);
        this.arma = arma;
    }

    atacara() {
        console.log(`${this.nome} atcar com a ${this,arma}!`);
    }
}