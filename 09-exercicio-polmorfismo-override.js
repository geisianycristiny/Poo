// Classe base
class Animal {
    constructor(nome, idade, cor, tamanho, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.tamanho = tamanho;
        this.tipo = tipo;
    }

    // Método que retorna uma descrição do animal
    descricao() {
        return `${this.nome} é um ${this.tipo} de ${this.idade} anos, cor ${this.cor} e tamanho ${this.tamanho}.`;
    }

    // Método que faz o animal emitir um som genérico
    emitirSom() {
        return `${this.nome} faz um som.`;
    }
}

// Classe derivada 1
class Cachorro extends Animal {
    constructor(nome, idade, cor, tamanho, raca) {
        super(nome, idade, cor, tamanho, 'Cachorro');
        this.raca = raca; // Atributo específico para Cachorro
        this.peloLongo = false; // Atributo específico para Cachorro
    }

    // Sobrescreve o método descricao
    descricao() {
        return `${super.descricao()} Ele é da raça ${this.raca}.`;
    }

    // Sobrescreve o método emitirSom
    emitirSom() {
        return `${this.nome} faz au au!`;
    }

    // Método específico para Cachorro
    adotar() {
        return `${this.nome} está disponível para adoção!`;
    }
}

// Classe derivada 2
class Gato extends Animal {
    constructor(nome, idade, cor, tamanho, peloCurtido) {
        super(nome, idade, cor, tamanho, 'Gato');
        this.peloCurtido = peloCurtido; // Atributo específico para Gato
        this.gostaDeBrincar = true; // Atributo específico para Gato
    }

    // Sobrescreve o método descricao
    descricao() {
        return `${super.descricao()} Tem pelo ${this.peloCurtido ? 'curtido' : 'longo'}.`;
    }

    // Sobrescreve o método emitirSom
    emitirSom() {
        return `${this.nome} faz miau!`;
    }

    // Método específico para Gato
    brincar() {
        return `${this.nome} está brincando com um novelo de lã.`;
    }
}

// Criação de uma instância de Cachorro
const meuCachorro = new Cachorro('Rex', 5, 'marrom', 'grande', 'Labrador');
console.log(meuCachorro.descricao()); // Rex é um Cachorro de 5 anos, cor marrom e tamanho grande. Ele é da raça Labrador.
console.log(meuCachorro.emitirSom()); // Rex faz au au!
console.log(meuCachorro.adotar()); // Rex está disponível para adoção!

// Criação de uma instância de Gato
const meuGato = new Gato('Mia', 3, 'preto', 'pequeno', true);
console.log(meuGato.descricao()); // Mia é um Gato de 3 anos, cor preto e tamanho pequeno. Tem pelo curtido.
console.log(meuGato.emitirSom()); // Mia faz miau!
console.log(meuGato.brincar()); // Mia está brincando com um novelo de lã.