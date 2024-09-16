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
   

