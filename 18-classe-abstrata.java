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