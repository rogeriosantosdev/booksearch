const livros = [ //Cria um array de objetos contendo livros, páginas, id e etc...
    {
        id: 1,
        nome: "Digital Minimalize",
        autor: "Cal Newport",
        categoria: "Produtividade",
        paginas: 254,
        recomenda: false,
        leu: false
    },
    {
        id: 2,
        nome: "Inteligência Emocional",
        autor: "Daniel Goleman",
        categoria: "Psicologia Cognitiva",
        paginas: 384,
        recomenda: true,
        leu: true
    },
    {
        id: 3,
        nome: "Mindset",
        autor: "Carol Dweck",
        categoria: "Autoajuda",
        paginas: 349,
        recomenda: true,
        leu: true
    },
    {
        id: 4,
        nome: "Padrões Javascript",
        autor: "Stoyan Stefanov",
        categoria: "Tecnologia",
        paginas: 240,
        recomenda: true,
        leu: false
    },
    {
        id: 5,
        nome: "1984",
        autor: "George Orwell",
        categoria: "Ficção",
        paginas: 336,
        recomenda: false,
        leu: false
    },
    {
        id: 6,
        nome: "Investidor Inteligente",
        autor: "Benjamin Graham",
        categoria: "Finanças",
        paginas: 672,
        recomenda: true,
        leu: true
    }
]

//Exporta esse database de livros para o que seja utilizado no app.js
module.exports = livros