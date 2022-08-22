function echo(objeto: any) {
    return objeto;
}

console.log(echo("João").length);
console.log(echo(27).length);

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto;
}

console.log(echoMelhorado("João").length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: "João", idade: 27 }).nome);

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4)
// avaliacoes.push("5.5");
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]): void {
    args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([3, 2, 1]);
imprimir<string>(["Ana", "Bia", "Carlos"]);
imprimir<{ nome: string, idade: number }>([
    { nome: "Fulano", idade: 25 },
    { nome: "Ciclano", idade: 23 },
    { nome: "Beltrano", idade: 22 }
]);

type Aluno = { nome: string, idade: number };
imprimir<Aluno>([
    { nome: "Fulano", idade: 25 },
    { nome: "Ciclano", idade: 23 },
    { nome: "Beltrano", idade: 22 }
]);

// Tipo Genérico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("Alguma coisa"));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {}

    abstract executar(): R;
}

// console.log(new OperacaoBinaria("Bom", "dia").executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, "Opa").executar());
// console.log(new OperacaoBinaria({}, {}).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
   executar(): number {
       return this.operando1 + this.operando2;
   } 
}

console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(32, 44).executar());
console.log(new SomaBinaria(321, 2).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }

    getTime(data: Data): number {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
}
const d1 = new Data(10, 9, 1956);
const d2 = new Data(2, 10, 2019);

console.log(new DiferencaEntreDatas(d1, d2).executar());

console.log(" ============= Desafio - Fila de strings ============= ");

// Desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir

class Fila<T> {
    private fila: Array<T>;
    constructor() {
        this.fila = [];
    }

    public entrar(item: T): void {
        console.log(`Entrando na fila: ${item}`);
        this.fila.push(item);
    }

    public proximo(): T {
        const itemRemovido = this.fila.splice(0, 1)[0];
        console.log(`Próximo: ${itemRemovido}`);
        return itemRemovido;
    }

    public imprimir(): void {
        console.log(this.fila);
    }
}

const filaStrings = new Fila<string>;
filaStrings.entrar("Otavio");
filaStrings.entrar("Kaique");
filaStrings.entrar("Ataide");
filaStrings.entrar("Maria");

filaStrings.proximo();
filaStrings.proximo();
filaStrings.proximo();
filaStrings.proximo();

filaStrings.imprimir();

console.log(" =============  Desafio - Fila de pessoas ============= ");

Pessoa.prototype.toString = function() { 
    return `Pessoa com ${this.idade} ano(s)`;
}

const filaPessoas = new Fila<Pessoa>
const p1 = new Pessoa;
p1.idade = 12;
const p2 = new Pessoa;
p2.idade = 13;
const p3 = new Pessoa;
p3.idade = 14;

filaPessoas.entrar(p1);
filaPessoas.entrar(p2);
filaPessoas.entrar(p3);

filaPessoas.proximo();
filaPessoas.proximo();
filaPessoas.proximo();

filaPessoas.imprimir();

console.log(" =============  Desafio - Mapa ============= ");


// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V})
// limpar(), imprimir()

// ...

type Item<K, V> = { chave: K, valor: V };

class Mapa<K, V> {
    private items: Array<Item<K, V>>;
    constructor() {
        this.items = new Array<Item<K, V>>();
    }

    public colocar(item: Item<K, V>): void {
        const indexFound = this.items.findIndex( i => i.chave === item.chave);
        if (indexFound === -1) {
            console.log(`Novo item para o mapa com a chave ${item.chave}`);
            this.items.push(item);
        } else {
            console.log(`Chave ${item.chave} já existente no mapa, atualizando item...`);
            this.items[indexFound] = item;
        }
    }

    public obter(key: K): Item<K, V> | null {
        const item = this.items.find(i => i.chave === key);
        if (item) {
            return item;
        } else {
            return null;
        }
    }

    public limpar(): void {
        this.items = new Array<Item<K, V>>();
    }

    public imprimir(): void {
        console.log(this.items);
    }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });

console.log(mapa.obter(2));;
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
