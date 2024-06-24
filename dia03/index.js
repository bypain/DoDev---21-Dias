// let nome = 'Nome Sobrenome'
// console.log(nome)

// let numUm = 1;
// let numDois = 2;

// let soma = numUm + numDois;
// console.log(soma)

let entradaDoUserSobreNome = prompt('Insira seu Nome: ');
let entradaDoUserSobreIdade = prompt('Insira sua Idade: ');
let entradaDoUserSobreAltura = prompt('Insira sua Altura: ');
let entradaDoUserSobrePeso = prompt('Insira seu Peso: ');

let anoDeNascimento = (2024 - entradaDoUserSobreIdade);
let IMC = (entradaDoUserSobrePeso / entradaDoUserSobreAltura * entradaDoUserSobreAltura);
console.log(`Olá ${entradaDoUserSobreNome}, você tem ${entradaDoUserSobreIdade} anos, nasceu em ${anoDeNascimento}, tem ${entradaDoUserSobreAltura}, pesa ${entradaDoUserSobrePeso} e seu IMC é ${IMC} Kg/m2`)

// operadores aritméticos e tals.
