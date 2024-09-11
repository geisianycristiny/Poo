// Classe base Pessoa
class Pessoa {
    constructor(nome, idade, altura, peso) {
      // Atributos
      // Inicialização dos atributos
      this.nome = nome;
      this.idade = idade;
      this.altura = altura;
      this.peso = peso;
    }
    // Métodos
    mostrarDados() {
      console.log(`nome: ${this.nome}, idade: ${this.idade}, altura:${this.altura}, peso: ${this.peso}!`);
    }
  }
  
  //Classe Estudante que herda de Pessoa
  class Estudante extends Pessoa {
    constructor(nome, idade, altura, peso, curso) {
      super(nome, idade, altura, peso);
      this.curso = curso;
    }
    mostrarCurso() {
      console.log(`Meu curso é ${this.curso}!`);
    }
  }
  
  //Classe Funcionario que herda de Pessoa
  class Funcionario extends Pessoa {
    constructor(nome, idade, altura, peso, salario) {
      super(nome, idade, altura, peso);
      this.salario = salario;
    }
    mostrarSalario() {
      console.log(`Meu salario é ${this.salario}!`);
    }
  }
  
  //Classe Diretor que herda de Funcionario
  class Diretor extends Funcionario {
    constructor(nome, idade, altura, peso, salario) {
      super(nome, idade, altura, peso, salario);
    }
  
    }
  
  
  //Classe Professor que herda de Funcionario
  class Professor extends Funcionario {
    constructor(nome, idade, altura, peso, salario) {
      super(nome, idade, altura, peso, salario);
    }
  }
  
  // Criando objetos aluno, diretor e professor
  const aluno = new Estudante("João",16,1.7,70,"Programação de Jogos Digitais");
  aluno.mostrarDados(); 
  aluno.mostrarCurso();
  const diretor = new Diretor("Sérgio", 45, 1.65, 65, 3000);
  diretor.mostrarDados();
  diretor.mostrarSalario();
  const professor = new Professor("Wanderson", 40, 1.65, 70, 1000);
  professor.mostrarSalario();
  professor.mostrarDados();
  
