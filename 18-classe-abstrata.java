// classe abstrata "personagem"
abstrata class personagem {
    protected String nome;

    // construtor da classe personagem
    public personagem(String nome) {
        this.nome = nome;
    }

    // método abstratos
    public abstract void atacar();
    public abstract void defender();
}

// classe derivada "Guerreiro"
class Guerreiro extends personagem {
    privata String arma;

    // construtor da classe Guerreiro
    public Guerreiro(String, String arma) {
        super(nome);
        this.arma = arma;
    }

    // sobrescrita do metodo atacar da classe abstrata personagem
    @Override
    public void atacar() {
        system.out.println(nome + "ataca com a " + arma + "!");
    }

    // sobrescrita do metodo defender da classe abstrata personagem
    @Override
    public void defender() {
        system.out.println(nome + "levanta o escudo para se defender!");

    
    }
}