// let tabuada = Number(prompt('Escolha a tabuada que deseja: '))

// for(let contador = 0; contador <= 10; contador++){
//     console.log(`${tabuada} x ${contador} = ${tabuada * contador}`)
// }


// for(let contador = 0; contador < 5; contador++){
//     console.log(`O contador é: ${contador}`)
// }

// ATIVIDADES PROPOSTAS NA AULA DO DIA 06
// 1
// ----------------------------------------------------------------------------
let numeroRecebido = Number(prompt('Digite um número inteiro e positivo: '))

for(let contador = 0; numeroRecebido >= contador; contador++){
    console.log(contador)
}
// ----------------------------------------------------------------------------


// 2
// ----------------------------------------------------------------------------
for(let contador = 0; contador <= 50; contador+=5){
    console.log(contador)
}
// ----------------------------------------------------------------------------


// 3
// ----------------------------------------------------------------------------
for(let contador = 0; contador <= 50; contador-=5){
    console.log(contador)
}
// ----------------------------------------------------------------------------


// 4
// ----------------------------------------------------------------------------
let numero = parseInt(prompt('Digite um número inteiro e positivo: '))
for (let i = numero; i <= numero + 2; i++){
    console.log(`Tabuada do número: ${i}`)
    for (let j = 0; j<= 10; j++){
        console.log(`${i} x ${j} = (${i * j})`)
    }
}
// ----------------------------------------------------------------------------
