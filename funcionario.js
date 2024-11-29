function Pessoa(nome) {
    this.nome = nome;

    this.dizOi = function() {
        console.log(this.nome + " é o seu nome.");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    // Existe uma convenção de Getters para quando vamos retornar valores e de Setters para quando atribuímos valores
    this.getSalario = function() {
        return _salario;
    }
    
    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.dizCargo = function() {
        console.log("Seu cargo é " + this.cargo);
    }

    this.dizSalario = function() {
        console.log("Seu salário é de " + _salario + " reais");
    }
    
    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);

        _salario = novoSalario;
    }
}

function Gerente(nome){
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);

        _salario = novoSalario;
    }
}

const pessoa1 = new Pessoa('André');
const pessoa2 = new Pessoa('Pedro');
const pessoa3 = new Pessoa('Claudia');
const funcionario1 = new Funcionario(pessoa1.nome, 'dev front-end', 5000);
const funcionario2 = new Estagiario(pessoa2.nome);
const funcionario3 = new Gerente(pessoa3.nome);

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());

// funcionario1.aumento();

// funcionario1.dizOi();
// funcionario1.dizCargo();
// funcionario1.dizSalario();