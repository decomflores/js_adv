function Pet(nome) {
    this.nome = nome;

    this.dizOi = function() {
        console.log(this.nome + " te dá bom dia.");
    }
}

function Gato(nome, nascimento, tipo) {
    Pet.call(this, nome);

    this.nascimento = nascimento;
    this.tipo = tipo;
    this.idade = null;

    this.Mia = function() {
        console.log(this.nome + " Mia");
    }

    this.calcIdade = function() {
        this.idade = 2024 - this.nascimento;
        console.log(this.nome + " tem " + this.idade + " anos.");
    }
}

function Racao(nome, nascimento, tipo, peso) {
    Gato.call(this, nome, nascimento, tipo, peso);
    this.peso = peso;

    this.qtdRacao = function () {
        if (this.peso >= 15) {
            console.log(`${this.nome} deve comer 300g de ração`);
        }
        else if (this.peso < 15) {
            console.log(`${this.nome} deve comer 500g de ração`);
        }
    }
}

const pet1 = new Pet('Rolha');
const gato1 = new Gato(pet1.nome, 2017, 'Gato');
const peso1 = new Racao(gato1.nome, gato1.nascimento, gato1.tipo, 10);
const pet2 = new Pet('Flor');
const gato2 = new Gato(pet2.nome, 2016, 'Gato');
const peso2 = new Racao(gato2.nome, gato2.nascimento, gato2.tipo, 15);

gato1.dizOi();
gato1.Mia();
gato1.calcIdade();
peso1.qtdRacao();

gato2.dizOi();
gato2.Mia();
gato2.calcIdade();
peso2.qtdRacao();