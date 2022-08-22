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
@logarObjeto
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

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: "Guilhemer Filho",
    email: "guigui@gmail.com",
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");        
    }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Forbidden error, you're not an admin");
            }
        }
    }
}

class ContaCorrente {
    @naoNegativo
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    @congelar
    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    @congelar
    getSaldo() {
        return this.saldo;
    }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5248.57);
console.log(cc.getSaldo());

// cc.getSaldo = function() {
//     return this['saldo'] + 7000;
// }
// console.log(cc.getSaldo());

// Object.freeze()
function congelar(alvo: any, 
        nomeMetodo: string, 
        descriptor: PropertyDescriptor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descriptor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo["_" + nomePropriedade];
        },
        set: function(valor: any): void {
            if (valor < 0) {
                throw new Error("Saldo inválido");
            } else {
                alvo["_" + nomePropriedade] = valor
            }
        }
    });
}