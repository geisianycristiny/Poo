class personagem {
    //atributos
    private String nome;
    private int vida;
    //metodos construtor da classe personagem
    public personagem(String nome, int vida) {
        this.nome = nome;
        this.vida = vida;
    }
    // sobrecarga do metodo atacar
    public void atacar() {
        system.out.println(nome + "realizar um ataque básico!");
    }
    public void atacar(String arma)   {
        system.out.println(nome + "ataca com o" + arma + "!");
    }  
    public void atacar(String tipoFlecha, boolean comArco) {
        if (comArco) {
            system.out.println(nome + "dispara flechas" + tipoFlecha + "com um arco!");
        } else {
            system.out.println(nome + "dispara flechas" + tipoflechas + "sem arco!");
        }
    }
    public void receberDano(int dano) {
        vida -= dano;
        system.out.println(nome + "recebeu" + dano + "de dano. Vida restaurante:" +vida);
    }
    }