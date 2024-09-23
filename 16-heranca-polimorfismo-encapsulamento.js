class personagem {
    // Encapsulando os atributos com #, tornando-os privados.
    #nome;
    #classe;
    #nivel;
    #vida;
    #mana;

    //métodos construtor
    constructor(nome, classe, nivel, vida, mana) {
        this.#nome = nome;
        this.#classe = classe;
        this.#nivel = nivel;
        this.#vida = vida;
        this.#mana = mana;
    }

    // métodos Getters e Setters
    // métodos Getters e Setters para o atributos nome
    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }
    // métodos Getter e Setter para o atributos classe 
    get classe() {
        return this.#classe;
    }
    set classe(classe) {
        this.#classe = classe;
    }

    //Métodos
    //Simulando sobrecarga com rest parameter
    atacar(...args) {
        if (args.length === 0) {
            console,log(`${this.#nome} realizou um ataque normal!`);
        } else if (args.length === 1) {
            console.log(`${this.#nome} atacou com um poder de ${args[0]}!`);
        } else if (args.length === 2) {
            console.log(`${this.#nome} usou ${args[1]} e atacou com ${args[0]} de poder!`);
        } else {
            console.log("Número inválido de argumentos")
        }
    }

    defesa() {
        console.log(`${this.#nome} se defendeu com ${this.#nivel  * 2} pontos de defesa`);
    }

    receberDano(dano) {
        this.#vida -= dano;
        console.log(`${this.#nome} recebeu ${dano} de dano. Vida restante: ${this.#vida}`);
    }
}