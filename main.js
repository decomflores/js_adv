// carro 1 e 2 são exemplos de criação de variáveis com seus atributos embutidos.

const carro1 = {
    modelo: "Fiesta",
    fabricante: "Ford",
    anoModelo: 2020,
    anoFabricação: 2019,
    acelerar: function() {
        console.log('vruum');
    }
}

const carro2 = {
    modelo: "Ka",
    fabricante: "Ford",
    anoModelo: 2021,
    anoFabricação: 2020,
    acelerar: function() {
        console.log('vruum');
    }
}

// Agora abaixo, uma forma de criar uma função construtora que vai encapsular atributos e métodos para carros genéricos, e abaixo os exemplos de como criar instâncias (objetos específicos) dessa função carro.

function Carro(modelo, fabricante, anoModelo, anoFabricaçao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricaçao = anoFabricaçao;
    this.acelerar = function() {
        console.log('acelerar');
    }
}

// nota-se que precisamos do new antes da função e especificações dos atributos.
const carro3 = new Carro("Fiesta", "Ford", 2020, 2019);
const carro4 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carro3);
console.log(carro4);

const nome = "André"
const idade = 30
const maiorIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    maiorIdade: maiorIdade,
    conhecimentos: conhecimentos,
}

function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome')

pessoa['sobrenome'] = undefined;

Object.freeze(pessoa);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

// if (pessoa['sobrenome']) {
//     console.log('A pessoa tem um sobrenome')
// }

// if ('sobrenome' in pessoa) {
//     console.log('tem sobrenome')
// }