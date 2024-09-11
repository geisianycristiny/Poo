// claese base pessoa
class Pessoa {
    constructor(nome, idade, altura, peso) { // atributos 
        // Inicialização dos atributos
        this.nome =nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}

//clasee Estudante que herda de pessoa
class Estudante extends Pessoa {
    constructor(nome, idade, altura, peso, curso) {
        super(nome, idade, altura, peso);
        this.curso = curso;
    }

}

// classe funcionario que herda de pessoa
class Funcionario extends Pessoa {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso);
        this.salario = salario;
    }
}

// classe Diretor que herda de Funcionatio
class Diretor extends Funcionario {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso, salario);
    }
}


// classe Professor que herda de Funcionatio
class Professor extends Funcionario {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso, salario);
    }
}

// criando objetos aluno, diretor e professor
const aluno = new Estudante("joão", 16, 1.70, 70, "programação de jogos Digitais");
const diretor = new Diretor("sérgio", 45, 1.65, 65, 3000);
const professor = new Professor("wanderson", 40, 1.65, 70, 1000);

// Mostrando no console a saida 
console.log(aluno); // saida: Estudante {nome: 'joão', idade: 16, altura: 1.7, peso: 70, curso: 'programação de jogos Digitais'}
console.log(diretor); // Saída: Diretor (nome: 'Sérgio', idade: 45, altura: 1.65, peso: 65, salario: 3000 }
console.log(professor); // Saida: Professor {nome: 'Wanderson', idade: 40, altura: 1,65, po70, salario: 1000 ›