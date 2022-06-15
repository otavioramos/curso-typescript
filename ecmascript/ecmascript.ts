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