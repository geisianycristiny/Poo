
// Classe Base: Atleta
class Atleta {
    constructor(nome, idade, altura, peso, esporte, nacionalidade, nivel, treinosPorSemana, vitorias, derrotas) {
        this._nome = nome;
        this._idade = idade;
        this._altura = altura;
        this._peso = peso;
        this._esporte = esporte;
        this._nacionalidade = nacionalidade;
        this._nivel = nivel;
        this._treinosPorSemana = treinosPorSemana;
        this._vitorias = vitorias;
        this._derrotas = derrotas;
    }

    // Getters
    get nome() { return this._nome; }
    get idade() { return this._idade; }
    get altura() { return this._altura; }
    get peso() { return this._peso; }
    get esporte() { return this._esporte; }
    get nacionalidade() { return this._nacionalidade; }
    get nivel() { return this._nivel; }
    get treinosPorSemana() { return this._treinosPorSemana; }
    get vitorias() { return this._vitorias; }
    get derrotas() { return this._derrotas; }

    // Setters
    set nome(nome) { this._nome = nome; }
    set idade(idade) { this._idade = idade; }
    set altura(altura) { this._altura = altura; }
    set peso(peso) { this._peso = peso; }
    set esporte(esporte) { this._esporte = esporte; }
    set nacionalidade(nacionalidade) { this._nacionalidade = nacionalidade; }
    set nivel(nivel) { this._nivel = nivel; }
    set treinosPorSemana(treinos) { this._treinosPorSemana = treinos; }
    set vitorias(vitorias) { this._vitorias = vitorias; }
    set derrotas(derrotas) { this._derrotas = derrotas; }

    // Método básico
    competir() {
        console.log(`${this._nome} está competindo no esporte ${this._esporte}!`);
    }

    // Método sobrecarregado (polimorfismo)
    treinar(intensidade = "normal") {
        console.log(`${this._nome} está treinando com intensidade ${intensidade}.`);
    }
}

// Classe derivada 1: Jogador de Futebol
class JogadorDeFutebol extends Atleta {
    constructor(nome, idade, altura, peso, nacionalidade, nivel, treinosPorSemana, vitorias, derrotas, posicao, golsMarcados) {
        super(nome, idade, altura, peso, "Futebol", nacionalidade, nivel, treinosPorSemana, vitorias, derrotas);
        this._posicao = posicao;
        this._golsMarcados = golsMarcados;
    }

    // Método específico
    marcarGol() {
        console.log(`${this._nome}, que joga como ${this._posicao}, marcou um gol!`);
        this._golsMarcados++;
    }

    // Sobrescrevendo o método treinar
    treinar(intensidade = "intensa") {
        console.log(`${this._nome} está treinando para melhorar suas habilidades de ${this._posicao} com intensidade ${intensidade}.`);
    }
}

// Classe derivada 2: Corredor
class Corredor extends Atleta {
    constructor(nome, idade, altura, peso, nacionalidade, nivel, treinosPorSemana, vitorias, derrotas, distanciaPreferida, recorde) {
        super(nome, idade, altura, peso, "Corrida", nacionalidade, nivel, treinosPorSemana, vitorias, derrotas);
        this._distanciaPreferida = distanciaPreferida;
        this._recorde = recorde;
    }

    // Método específico
    correr() {
        console.log(`${this._nome} está correndo na distância de ${this._distanciaPreferida} metros.`);
    }

    // Sobrescrevendo o método treinar
    treinar(intensidade = "moderada") {
        console.log(`${this._nome} está treinando para melhorar seu recorde com intensidade ${intensidade}.`);
    }
}

// Classe derivada 3: Nadador
class Nadador extends Atleta {
    constructor(nome, idade, altura, peso, nacionalidade, nivel, treinosPorSemana, vitorias, derrotas, estiloPreferido, medalhasGanhas) {
        super(nome, idade, altura, peso, "Natação", nacionalidade, nivel, treinosPorSemana, vitorias, derrotas);
        this._estiloPreferido = estiloPreferido;
        this._medalhasGanhas = medalhasGanhas;
    }

    // Método específico
    nadar() {
        console.log(`${this._nome} está nadando no estilo ${this._estiloPreferido}.`);
    }

    // Sobrescrevendo o método treinar
    treinar(intensidade = "alta") {
        console.log(`${this._nome} está treinando para melhorar suas habilidades de natação no estilo ${this._estiloPreferido}.`);
    }
}

// Classe derivada 4: Lutador
class Lutador extends Atleta {
    constructor(nome, idade, altura, peso, nacionalidade, nivel, treinosPorSemana, vitorias, derrotas, categoria, knockouts) {
        super(nome, idade, altura, peso, "Luta", nacionalidade, nivel, treinosPorSemana, vitorias, derrotas);
        this._categoria = categoria;
        this._knockouts = knockouts;
    }

    // Método específico
    lutar() {
        console.log(`${this._nome}, lutando na categoria ${this._categoria}, está em combate!`);
    }

    // Sobrescrevendo o método treinar
    treinar(intensidade = "extrema") {
        console.log(`${this._nome} está treinando para melhorar suas habilidades de luta com intensidade ${intensidade}.`);
    }
}

// Criando instâncias de cada classe derivada
const jogador = new JogadorDeFutebol("Lucas", 25, 1.80, 75, "Brasileiro", "Profissional", 5, 100, 30, "Atacante", 80);
const corredor = new Corredor("Maria", 28, 1.65, 55, "Brasileira", "Profissional", 6, 50, 10, 100, "10:05");
const nadador = new Nadador("Pedro", 22, 1.85, 78, "Brasileiro", "Profissional", 7, 20, 5, "Crawl", 10);
const lutador = new Lutador("Ana", 30, 1.70, 65, "Brasileira", "Profissional", 4, 50, 10, "Leve", 30);

// Chamando métodos e mostrando resultados no console
jogador.competir();
jogador.marcarGol();
jogador.treinar();

corredor.competir();
corredor.correr();
corredor.treinar();

nadador.competir();
nadador.nadar();
nadador.treinar();

lutador.competir();
lutador.lutar();
lutador.treinar();

// Modificando atributos com setters e mostrando no console
jogador.nome = "Lucas Silva";
jogador.treinosPorSemana = 6;
console.log(`O jogador agora é ${jogador.nome} e treina ${jogador.treinosPorSemana} vezes por semana.`);
