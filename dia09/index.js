let nome = prompt('Digite seu nome: ')
let idade = parseInt(prompt('Digite sua idade: ')) 
let altura = prompt('Digite sua altura: ')
let profissao = prompt('Digite sua profissão: ')
let peso = prompt('Digite seu peso: ')

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao} e tem ${altura}m de altura e pesa ${peso}Kg.`)

if(idade > 18){
    console.log('Você pode tomar umas geladas!')
} else {
    console.log('Você NÃO pode tomar umas geladas. :)')
}

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log(`Sua idade em meses é ${meses}`)
console.log(`Sua idade em semanas é ${semanas}`)
console.log(`Sua idade em dias é ${dias}`)

// imc
let imc = peso / (altura * altura)
if(imc < 18.5){
    console.log('Magrelete')
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Normal')
} else if (imc >= 25 && imc <= 30){
    console.log('Sobrepeso')
} else{
    console.log('Obesidade')
}

let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log(`Você nasceu em ${anoNasc}`)

let anoViveu = anoNasc
let idadeAtual = 0
for(let anoViveu = anoNasc; anoViveu <= anoAtual; anoViveu++){
    console.log(`${anoViveu} - ${idadeAtual} anos de idade.`)
}

do {
    let continuar = prompt('Deseja inserir os dados novamente? (s/n)')
}   while (continuar == 's')


// #2 Será feito aqui mesmo.
let confirmar = 'n'
while(confirmar != 's'){
    let nome = prompt('Digite seu nome: ')
    let idade = parseInt(prompt('Digite sua idade: '))
    let salarioAtual = parseFloat(prompt('Digite seu salário atual: '))
    console.log(`Nome: ${nome}; Idade: ${idade}; Salário Atual: ${salarioAtual}`)
    confirmar = prompt('As informações estão corretas? (s/n)')
}
let aumento = 0.015
console.log('Previsão salarial para os próximos 10 anos: ')

for(let ano = 1; ano <= 10; ano++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2
    console.log((2023 + ano) + ` = R$ ${salarioAtual}`)
}