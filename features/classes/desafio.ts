// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0

    constructor(public nome: string) {}
 
    public buzinar(): void {
        console.log('Toooooooooot!')
    }
 
    public acelerar(delta: number): void {
        this.velocidade = this.velocidade + delta
    }
}
 
const moto = new Moto('Ducati')
moto.buzinar()
console.log(`Velocidade da moto: ${moto.velocidade}`)
moto.acelerar(30)
console.log(`Velocidade da moto: ${moto.velocidade}`)

// Exercício 2 - Herança
abstract class Objeto2D {
    constructor(public base: number = 0,
        public altura: number = 0) {}

    public abstract area(): number
}

class Retangulo extends Objeto2D {
    constructor(base: number, altura: number) {
        super(base, altura)
    }

    public area(): number {
        return this.base * this.altura
    }
}
 
const retangulo = new Retangulo(5, 7)
console.log(`Área do retângulo: ${retangulo.area()}`)
 
// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(nome: string) {
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } else {
            this._primeiroNome = ''        
        }
    }
}

const estagiario = new Estagiario
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)