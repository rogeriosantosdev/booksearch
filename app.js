const livros = require('./database')

//Pegar o input

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

//Se for sim, mostra as categorias disponíveis e pergunta qual categoria a pessoa escolhe.
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas.

if(entradaInicial.toLocaleUpperCase()==='S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', '|Psicologia Cognitiva', '|Autoajuda', '|Finanças Pessoais', '|Tecnologia')

    const entradaCategoria = readline.question('Qual categoria desejada:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}

