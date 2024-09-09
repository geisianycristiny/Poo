class Pessoa {
    constructor(nome, idade,altura, peso){ // Atributos
        this.nome =nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;

    }
    //Métodos
    falar() {
        console.log(`ola, meu nome é ${this.nome}!`);
    }

    falarIdade() {
        console.log(`ola, meu nome é ${this.idade}!`);
    }
}
// Objetos/Instancia "pessoa1" criada apartir da classe pessoa
const Pessoa1 = new Pessoa('geisiany', 40, 1.65, 70.0);
Pessoa1.falar(); // chamada do metodo falar()de classe pessoa
Pessoa1.falarIdade(); // chamada do metodo falar

const Pessoa2 = new Pessoa('geisiany', 40, 1.65, 70.0);
Pessoa2.falar(); // chamada do metodo falar()de classe pessoa
pessoa2.falarIdade(); // chamada do metodofalar(); // chamada do metodofa(); // chamada do metodo

const Pessoa3 = new Pessoa('geisiany', 40, 1.65, 70.0);
Pessoa3.falar(); // chamada do metodo falar()de classe pessoa 
Pessoa3.falarIdade();