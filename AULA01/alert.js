// // var nome = "mari"
// // let sNome
// // var nome = 'Elias'
// // console.log(nome);
// let nome = prompt('ola, qual o seu nome?');
// alert('olá, ${nome}!');
let nota1,nota2,nota3,nota4
nota1 = Number(prompt( 'informe a nota 1:'))
nota2 = Number(prompt( 'informe a nota 2:'))
nota3 = Number(prompt( 'informe a nota 3:'))
nota4 = Number(prompt( 'informe a nota 4:'))

soma = (nota1 + nota2 + nota3 + nota4)

media = soma / 4
alert(`média das notas: ${media}`)