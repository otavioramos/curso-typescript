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