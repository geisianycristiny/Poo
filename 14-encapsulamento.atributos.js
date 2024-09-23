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
}