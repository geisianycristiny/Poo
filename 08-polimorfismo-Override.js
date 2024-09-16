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

// Classe mago que herda de personagem
class mago extends personagem {
    constructor(nome, vida, feitico) {
       super(nome, vida);
       this.feitico = feitico;
    }
    atacar() {
        console.log(`${this.nome} lança ${this.feitico}!`); 
    }
}

//classe Arqueiro que herde de personagem
class Arqueiro extends personagem {
    constructor(nome, vida, tipoFlecha) {
        super(nome, vida);
        this.tipoFlecha = tipoFlecha;
    }

    atacar() {
        console.log(`${this.nome} dispara flechas ${this.tipoFlecha}!`);
    }
}

// Criando instâncias de Guerreiro, Mago e Arqueiro
const guerreiro = new Guerreiro("Arthur", 100, "espada");
guerreiro.atacar (); // Saída: Arthur ataca com a espada!
guerreiro. receberDano(20); // Saída: Arthur recebeu 20 de dano. Vida restante: 80

const mago = new Mago("Merlin", 80, "bola de fogo");
mago.atacar(); // Saída: Merlin lança bola de fogo!
mago.receberDano (15); // Saida: Merlin recebeu 15 de dano. Vida restante: 65

const arqueiro = new Arqueiro ("Legolas", 90, "explosiva");
arqueiro.atacar(); // Saída: Legolas dispara flechas explosiva!
arqueiro.receberDano (10); // Saida: Legolas receber de dano. Vida restante: 80