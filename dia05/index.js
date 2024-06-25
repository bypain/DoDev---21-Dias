// let idade = Number(prompt('Insira sua idade: '))

// switch(true){
//     case idade < 10:
//         console.log('Você tem 10 anos.')
//         console.log('Segunda linha. ')
//         break;
//     case idade > 15:
//         console.log('Você tem 15 anos.')
//         console.log('Segunda linha. ')
//         break;
//     default:
//         console.log('default')
//         break;
// }

// ATIVIDADE PROPOSTA NA AULA 
// --------------------------------------------------------------------------------------------------------------------------------

// let Pergunta1 = parseInt(prompt('Digite um número: '))
// let Pergunta2 = parseInt(prompt('Digite outro número: '))
// let opcao = parseInt(prompt('Escolha a operação que deseja realizar: ' + "\n1 = + \n2 = - \n3 = * \n4 = /"))

// switch (opcao){
//     case 1:
//         console.log(Pergunta1 + '+' + Pergunta2 + '=' + (Pergunta1 + Pergunta2))
//         break;
//     case 2:
//         console.log(Pergunta1 + '-' + Pergunta2 + '=' + (Pergunta1 - Pergunta2))
//         break;
//     case 3:
//         console.log(Pergunta1 + '*' + Pergunta2 + '=' + (Pergunta1 * Pergunta2))
//         break;
//     case 4:
//         console.log(`${Pergunta1} '/' ${Pergunta2} = (${Pergunta2} / ${Pergunta2}`)
//         break;
// }

// --------------------------------------------------------------------------------------------------------------------------------
// OUTRA ATIVIDADE PROPOSTA NA AULA 

const opcao = (prompt('Escolha uma entre essas 3 Opções para abastecer o seu carro: \n1 - Gasolina \n2 - Álcool \n3 - Calibrar os Pneus'))

switch(opcao){
    case '1':
        ask1 = parseInt(prompt('Digite o valor que você quer abastecer: '))
        calculo = ask1 / 5
        console.log(`Foram abastecidos: ${calculo} Litros de Gasolina`)
        break;
    case '2':
        ask2 = parseInt(prompt('Digite o valor que você quer abastecer: '))
        calculo = ask2 / 2
        console.log(`Foram abastecidos: ${calculo} Litros de Álcool`)
        break;
    case '3':
        console.log('Pneus calibrados com sucesso!')
        break;
}