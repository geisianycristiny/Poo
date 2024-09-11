class Carro {
    constructor(marca, modelo, ano, ano, cor, velocidadeMaxima){ // Atributos
        this.marca =marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    //Métodos
    marca() {
        console.log(`marca ${this.marca}!`);
    }
    modelo() {
        console.log(`modelo ${this.modelo}!`);
    }
    cor() {
        console.log(`cor ${this.cor}!` );
    }
}