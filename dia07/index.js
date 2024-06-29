// let idade = 18;

// while(idade >= 18){
//     idade = Number(prompt('Insira sua idade: '))
//     console.log(idade);
// }

// console.log('Acabou o while.')

// ATIVIDADE 1

let mediaGeral = 0
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

while(contador <= 10){
    nota = parseInt(prompt(`Digite a nota do ${contador}º aluno.`))
    sexo = prompt('Digite o sexo do aluno: (m/f)')

    if(sexo == 'm'){
        if (nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

    if(sexo == 'f' && nota >7){
        qtdMulheresAcimaDe7++
    }

    mediaGeral += nota
    contador++
}
mediaGeral = mediaGeral / 10

console.log(`A média geral dos alunos foi: ${mediaGeral}`)
console.log(`A quantidade de homens cadastrador foi: ${qtdHomens}`)
console.log(`A quantidade de mulheres que tiveram nota acima de 7 foi: ${qtdMulheresAcimaDe7}`)
console.log(`A maior nota entre os homens foi: ${maiorNotaHomens}`)

// ATIVIDADE 2

let saldo = 1000
let maiorValorInserido = 0
let somaValoresInseridos = 0
let totalTransacoes = 0
let continuar = false

do{
    const nome = prompt('Digite seu nome: ')
    const cpf = prompt('Digite seu CPF: apenas números')
    const valor = Number(prompt('Digite o valor da transação: '))
    const operacao = prompt('Qual operação deseja fazer? (S / D)')

    if(valor < 0){
        console.log('Valor inválido. A transação não foi realizada.')
    } else if(operacao =='S' && valor > saldo){
        console.log('Saldo Insuficiente. A transação não foi realizada.')
    } else if(operacao == 'S'){
        console.log(`Olá ${nome}, ${cpf}, seu saldo atual é de R$${saldo}.`)
        saldo -= valor
        totalTransacoes++
        somaValoresInseridos += valor
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`)
    } else{
        console.log(`Olá, ${nome} (${cpf}), seu saldo é R$${saldo}.`)
        saldo += valor
        totalTransacoes++
        somaValoresInseridos += valor
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é de R$${saldo}.`)
    }
    const opcao = prompt('Deseja continuar? (1 para continuar, 2 para parar) ')
    if(opcao === '1'){
        continuar = true
    } else if(opcao === '2'){
        continuar = false
    } else{
        console.log('Opção inválida. Programa encerrado.')
        continuar = false
    }
} while(continuar)


console.log(`Saldo final: R$${saldo}`)  
console.log(`Maior valor inserido R$${maiorValorInserido}`)  
console.log(`Média dos valores inseridos: R$${somaValoresInseridos / totalTransacoes}`)  