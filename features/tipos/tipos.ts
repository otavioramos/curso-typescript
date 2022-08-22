// string 
let nome: string = 'João'
console.log(nome)
//nome = 28

// numbers
let idade: number = 27
//idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = 'idade é 27'
console.log(minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
//hobbies = [100]

// tuplas
let endereco: [string, number] = ["Av Principal", 99]
console.log(endereco)

endereco = ["Rua Importante", 123]
console.log(endereco);

// enum
enum Cor {
    Cinza = 101,
    Verde = 12,
    Azul = 23
}
let minhaCor = Cor.Cinza
console.log(minhaCor)
minhaCor = Cor.Verde
console.log(minhaCor)

// any
let carro: any = "BMW"
console.log(carro)
carro = { modelo: "325i", marca: "BMW" }
console.log(carro)

// funções
function retornaMeuNome(): string {
    //return minhaIdade
    return nome;
}
console.log(retornaMeuNome())

function retornaNada(): void {
    console.log("Nada")
}
retornaNada()

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

console.log(multiplicar(2,3))

// tipo função
let calculo: (numeroA: number, numeroB: number) => number
// calculo = retornaNada
// calculo()

calculo = multiplicar
console.log(calculo(3,4))

// objetos

let usuario: {nome: string, idade: number} = {
    nome: "João",
    idade: 27
}

console.log(usuario)

// desafio 1

// tipos personalizados (alias)
type Funcionario = {
    nomesSupervisores: string[],
    baterPonto: (hora: number) => string
}

let funcionario: Funcionario = {
    nomesSupervisores: ["Otavio", "Kaique"],
    baterPonto: function (hora: number): string {
        return hora <= 8 ? "Ponto normal" : "Fora do horário"
    }
}

console.log(funcionario.baterPonto(8))

// union types
let nota: number|string = 10
console.log(`Minha nota é ${nota}!`)
nota = "10"
console.log(`Minha nota é ${nota}!`)
//nota = true

// checkando tipos
let valor = 10
if (typeof valor === "number") {
    console.log("Number")
} else {
    console.log("NaN")
}

// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: "Sabão",
    preco: 3,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter nome")
        }
        if (this.preco <= 0) {
            falha("Preço invalido")
        }
    }
}

produto.validarProduto()

// null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string|null // telefone opcional
}

let contato = {
    nome: "Otavio",
    tel1: "1123123312"
}
console.log(contato);

// desafio 2
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}
type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)