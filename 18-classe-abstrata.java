// Classe abstrata "Personagem"
abstract class Personagem {
    protected String nome;

    // Construtor da classe Personagem
    public Personagem(String nome) {
        this.nome = nome;
    }

    // Métodos abstratos
    public abstract void atacar();
    public abstract void defender();
}

// Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    private String arma;

    // Construtor da classe Guerreiro
    public Guerreiro(String nome, String arma) {
        super(nome);
        this.arma = arma;
    }

    // Subrescrita do método atacr da classe Abstrata Personagem
    @Override
    public void atacar() {
        System.out.println(nome + " ataca com a " + arma);
    }
    
    // Subrescrita do método defender da classe Abstrata Personagem
    @Override
    public void defender() {
        System.out.println(nome + " levanta o escudo para se defender! " );
    }
}

// Classe derivada "Mago"
class Mago extends Personagem {
    private String magia;

    // Construtor da classe Guerreiro
    public Mago(String nome, String magia) {
        super(nome);
        this.magia = magia;
    }

    // Subrescrita do método atacr da classe Abstrata Personagem
    @Override
    public void atacar() {
        System.out.println(nome + " lança a magia " + magia);
    }
    
    // Subrescrita do método defender da classe Abstrata Personagem
    @Override
    public void defender() {
        System.out.println(nome + " usa um escudo para se defender! " );
    }
}

//Classe principal
public class Main {
    public static void main(String[] args) {
        Guerreiro guerreiro = new Guerreiro("Thorin", "Espada");
        guerreiro.atacar();
        guerreiro.defender();

        Mago mago = new Mago("Gandalf", "Bola de Fogo");
        mago.atacar();
        mago.defender();
    }
}