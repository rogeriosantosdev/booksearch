const livros = require('./database') //Importação dos livros exportados na database

//Pegar o input

const readline = require('readline-sync') //Você irá obter tudo que a biblioteca readline disponibiza

const entradaInicial = readline.question('Deseja buscar um livro?(S/N)') //Primeira pergunta para pegar o input do usuário

//Se for sim, mostra as categorias disponíveis e pergunta qual categoria a pessoa escolhe.
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas.

if(entradaInicial.toLocaleUpperCase()==='S'){ //Caso a entrada do usuário seja s, irá ser convertido para S
    //Demonstrações das categorias
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', '/Psicologia Cognitiva', '/Autoajuda', '/Finanças Pessoais', '/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria desejada:') //Pega o input do usuário sobre a categoria desejada por ele

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)//O retorno irá receber um fitro de livros por livro.categoria sendo igual a categoria escolhida pelo usuário
    console.table(retorno) //Passa o retorno da categoria escolhida pelo usuário
} else { //Caso o usuário informe N se e ele deseja buscar por um livro, irá entrar nesta condição
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas) //LivrosOrdenados irá receber os livros.sort que vai passar os parâmetros a e b em uma arrow function que vai retornar a.paginas - b.paginas que ordena os livros por ordem crescente de páginas

    //Imprime os livros
    console.log('Essas são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}

