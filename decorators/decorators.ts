function logarClasse(construtor: Function) {
    console.log(construtor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string, b?: number }) {
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b);
    }
}

type Construtor = { new(...args: any[]): {}}

function logarObjeto(construtor: Construtor) {
    console.log("Carregado...");
    return class extends construtor {
        constructor(...args: any[]) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    }
}

// new Eletrodomestico
// new Eletrodomestico
// new Eletrodomestico

interface Eletrodomestico {
    imprimir?(): void
}

// @logarClasse
// @decorator({ a: "teste", b: 123 })
// @decorator({ a: "teste"})
// @logarClasseSe(true)
// @logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function() {
        console.log(this);
    }
}


// (<any>new Eletrodomestico()).imprimir() // Cast para any - Não recomendável
const eletro = new Eletrodomestico
eletro.imprimir && eletro.imprimir()