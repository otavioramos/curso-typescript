interface Humano {
    nome: string,
    idade?: number,
    [prop: string]: any,
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá, '+ pessoa.nome);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana';
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string): void {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 27, xyz: true, altura: 1.75 });
pessoa.saudar('Skywalker');

// Usando Classes...
class Cliente implements Humano {
    nome: string = '';
    ultimaCompra: Date = new Date
    saudar(sobrenome: string): void {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}

const meuCliente = new Cliente;
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra.toLocaleString("pt-br"));

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo = function(base: number, exp: number): number {
    return base ** exp;
}

console.log(potencia(3, 3));

// Herança
interface A {
    a(): void;
}

interface B {
    b(): void;
}

interface ABC extends A,B {
    c(): void;
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {} 
    abstract d(): void
}

interface Object {
    log(): void;
}

Object.prototype.log = function() {
    console.log(this.toString());
}
const x = 2;
const y = 3;
const z = 4;

console.log(x);
console.log(y);
console.log(z);

x.log();
y.log();
z.log();

const cli = { 
    nome: 'Pedro', 
    toString() { 
        return this.nome;
    }
}
cli.log();