// let & const
let seraQuePode = "?"
console.log(seraQuePode)

let estaFrio = true
if (estaFrio) {
    let acao = "Colocar o casaco!"
    console.log(acao);
}

const cpf: string = "123.456.000-99"
// cpf = "789.101.132-78"
console.log(cpf);

var segredo = "externo"
function revelar() {
    const segredo = "interno"
    console.log(segredo)  
}
revelar()
console.log(segredo);

// arrow functions

// normal function
const somar = function(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(3,5));

const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(5,3));

const saudacao = () => console.log("Olá!");
saudacao()

const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
falarCom("Otavio")

// this

// function normalComThis() {
//     console.log(this);
// }
// const normalComThisEspecial = normalComThis.bind({nome: "Otavio"})

// normalComThisEspecial()

// // this??? - em uma arrow function, o this é sempre o valor de quando a função foi definida
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis()

// // nao muda o this
// const arrowComThisEspecial = arrowComThis.bind({nome: "Otavio"})
// arrowComThisEspecial()

// parâmetro padrão
function contagemRegressiva(inicio: number = 3, fim: number = inicio -5): void {
    console.log(inicio);
    while(inicio > fim) {
        inicio--
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva()
contagemRegressiva(5)

// rest & spread
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['Joao', 'Maria', 'Fernanda']
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]
console.log(turmaB)

function retornarArray(...args: number[]): number[] {
    return args
}
const numeros = retornarArray(1,2,3,4,5,6)
console.log(numeros)

// rest & spread (tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}
tuplaParam(...tupla)

// destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor, ano)

// destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
}
// const nomeItem = item.nome
// const precoItem = item.preco

const { nome: n, preco, caracteristicas: { w }} = item
console.log(n, preco, w)

// template string
const usuarioID: string = 'Otavio'
const notificacoes: string = '9'
// const boasVindas = 'Boas vindas ' + usuarioID + ' Notificacoes: ' + notificacoes
// console.log(boasVindas)
const boasVindas = `
    Boas vindas ${usuarioID},
    Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`
console.log(boasVindas)

// desafios

// exercicio 1
/*
Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!

var dobro = function(valor) {
return valor * 2
}
console.log(dobro(10))
*/

const dobro = (valor: number): number => {
    return valor * 2
}
console.log(dobro(2))

// exercicio 2
/*
Verifique se há espaço para melhorias nesse trecho de código!

var dizerOla = function (nome) {
if (nome === undefined) { nome = "Pessoa" }
console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Anna")
*/
const dizerOla = (nome: string = 'Pessoa'): void => {
    console.log(`Olá, ${nome}`)
}
dizerOla()
dizerOla('Anna')

// exercicio 3
/*
Dado esse array, imprima o menor valor!
var nums = [-3, 33, 38, 5]
console.log('???')
*/

const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// exercicio 4 
/*
Adicione os elementos de nums em array !
var nums = [-3, 33, 38, 5]
var array = [55, 20]
console.log(array)
*/
const nums2 = [-3, 33, 38, 5]
const array = [55, 20]
array.push(...nums2)
console.log(array)

// exercicio 5
/*
Simplifique os trechos de código abaixo utilizando o operador
Destructuring!
var notas = [8.5, 6.3, 9.4]
var notas1 = notas[0]
var notas2 = notas[1]
var notas3 = notas[2]
console.log(nota1, nota2, nota3)
var cientista = {primeiroNome: "Will", experiencia: 12}
var primeiroNome = cientista.primeiroNome
var experiencia = cientista.experiencia
console.log(primeiroNome, experiencia)
*/
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

const cientista = { primeiroNome: "Will", experiencia: 12 }
const { primeiroNome, experiencia  } = cientista
console.log(primeiroNome, experiencia)

// callback

function esperar3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s depois')
    }, 3000)
}
// esperar3s(function( resultado : string) {
//     console.log(resultado);
// })

function esperar3sPromise() {
    return new Promise( (resolve: any) => {
        setTimeout(() => {
            resolve('4s depois...')
        }, 4000)
    })
}

// esperar3sPromise()
//     .then(dado => console.log(dado))

fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => {})