class Produto {
    constructor(nome, categoria, preco, estoque, marca, fornecedor, peso, dimensao, validade, codigo) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.estoque = estoque;
        this.marca = marca;
        this.fornecedor = fornecedor;
        this.peso = peso;
        this.dimensao = dimensao;
        this.validade = validade;
        this.codigo = codigo;
    }

    // Método para exibir informações do produto
    exibirInfo() {
        return (`Produto: ${this.nome}, Categoria: ${this.categoria}, Preço: R$${this.preco.toFixed(2)}`);
    }

    // Sobrecarga: calcular o total a partir da quantidade
    calcularTotal(quantidade) {
        return this.preco * quantidade;
    }

    // Sobrecarga: calcular o total a partir da quantidade e aplicar desconto
    calcularTotal(quantidade, desconto) {
        const total = this.preco * quantidade;
        return total - (total * desconto / 100);
    }

    // Método para verificar validade
    verificarValidade() {
        const hoje = new Date();
        return new Date(this.validade) > hoje ? 'Produto válido.' : 'Produto vencido.';
    }

    // Método para atualizar o estoque
    atualizarEstoque(novoEstoque) {
        this.estoque = novoEstoque;
    }
}


class Alimento extends Produto {
    constructor(nome, categoria, preco, estoque, marca, fornecedor, peso, dimensao, validade, codigo, tipo) {
        super(nome, categoria, preco, estoque, marca, fornecedor, peso, dimensao, validade, codigo);
        this.tipo = tipo;
    }

    // Método para exibir informações específicas do alimento
    exibirInfoAlimento() {
        return `${this.exibirInfo()}, Tipo: ${this.tipo}`;
    }
}

class Eletronico extends Produto {
    constructor(nome, categoria, preco, estoque, marca, fornecedor, peso, dimensao, validade, codigo, garantia) {
        super(nome, categoria, preco, estoque, marca, fornecedor, peso, dimensao, validade, codigo);
        this.garantia = garantia;
    }

    // Método para exibir informações específicas do eletrônico
    exibirInfoEletronico() {
        return `${this.exibirInfo()}, Garantia: ${this.garantia} meses`;
    }
}

class Vestuario extends Produto {
    constructor(nome, categoria, preco, estoque, marca, fornecedor, peso, dimensao, validade, codigo, tamanho) {
        super(nome, categoria, preco, estoque, marca, fornecedor, peso, dimensao, validade, codigo);
        this.tamanho = tamanho;
    }

    // Método para exibir informações específicas do vestuário
    exibirInfoVestuario() {
        return `${this.exibirInfo()}, Tamanho: ${this.tamanho}`;
    }
}



// Instanciando um Alimento
const arroz = new Alimento('Arroz', 'Grão', 5.00, 100, 'Tio João', 'Supermercado', '1kg', '30x20x10cm', '2025-12-31', '001', 'Integral');
console.log(arroz.exibirInfoAlimento());
console.log(arroz.calcularTotal(3)); // Sem desconto
console.log(arroz.calcularTotal(3, 10)); // Com desconto de 10%
console.log(arroz.verificarValidade());

// Instanciando um Eletrônico
const celular = new Eletronico('Celular', 'Smartphone', 1500.00, 50, 'Samsung', 'Loja X', '200g', '15x7x0.8cm', '2024-01-01', '002', 12);
console.log(celular.exibirInfoEletronico());

// Instanciando um Vestuário
const camiseta = new Vestuario('Camiseta', 'Roupas', 30.00, 200, 'Nike', 'Loja Y', '200g', '30x20x5cm', '2026-05-01', '003', 'M');
console.log(camiseta.exibirInfoVestuario());