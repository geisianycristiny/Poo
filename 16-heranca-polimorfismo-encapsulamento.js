class Personagem {
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
// classe derivada - Assassina
class Assassino extends Personagem {
    constructor(nome, nivel, vida, mana, furtividade) {
        super(nome, "Assassino", nivel, vida,mana);
        this.furtividade = furtividade; // Atributos especifico
    }

    // Sobrescrevendo o método atacar
    atacar() {
        console.log(`${this.nome} atacar silenciosamente com dano adicional pela furtividade!`)
    }

    // Métodos especifico
    usarFurtividade() {
        console.log(`${this.nome}usa sua furtividade de nivel ${this.furtividade} para se esconder!`)
    }
}

//classe derivada - paladino
class Paladino extends Personagem {
    constructor(nome, nivel, vida, mana, fe) {
        super(nome, "paladino", nivel, vida, mana);
        this.fe = fe; //atributos especifico
    }

    // sobrescrevendo o método defesa
    defesa() {
        console.log(`${this.nome} se defendeu com o escudo sagrado, absorvendo mais dano com base na fé (${this.fe})!`);
    }

    //método especifico
    curar() {
        console.log(`${this.nome} usa sua fé para curar a si mesmo ou aliados!`);
    }
}
// classe derivada - mecanico
class Mecanico extends Personagem {
    constructor(nome, nivel, vida, mana, engenharia) {
        super(nome, "Mecanico", nivel, vida, mana);
        this.engenharia = engenharia; // atributos especifico
    }

    // sobrescrevendo o método receberDano
    receberDano(dano) {
        const danoReduzido = dano - this.engenharia;
        super.receberDano(danoReduzido);
        console.log(`${this.nome} usou sua engenharia para reduzir o dano em ${this.engenharia}.`);
    }

    // método especifico
    construirTorre() {
        console.log(`${this.nome} contruiu uma torre defensiva!`);
    }
}

//Criando instancia da classe derivada Assassino
const assassino = new Assassino("Luna Sombria", 10, 100, 50, 8);
//Chamando os métodos
assassino.atacar();
assassino.usarFurtividade();

//Criando instancia da classe derivada Paladino
const paladino = new Paladino("Sir Lancelot", 12, 120, 70, 15);
//Chamando os métodos
paladino.defesa();
paladino.curar();

//Criando instancia da classe derivada Mecanico
const mecanico = new Mecanico("Roberto das Engrenagens", 8, 90, 40, 5);
//Chamando os métodos
mecanico.receberDano(30);
mecanico.construirTorre();