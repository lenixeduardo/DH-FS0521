let pets = [

    {
        nome: 'Yoshi',
        nomeDono: 'Lenix',
        idade: 7,
        tipo: 'cachorro',
        raca: 'Akita inu',
        peso: 40,
        genero: 'Macho',
        cor: 'ruivo',
        vacinado: true
    },
    {
        nome: 'Mario',
        nomeDono: 'Pedro',
        idade: 3,
        tipo: 'Gato',
        raca: 'Persa',
        peso: 15,
        genero: 'Macho',
        cor: 'Ruivo',
        vacinado: true
    },
    {
        nome: 'Luigi',
        nomeDono: 'Jefferson',
        idade: 7,
        tipo: 'Macaco',
        raca: 'Prego',
        peso: 25,
        genero: 'Macho',
        cor: 'Preto',
        vacinado: true
    },
    {
        nome: 'Peach',
        nomeDono: 'Lenix',
        idade: 7,
        tipo: 'Ave',
        raca: 'Calopsita',
        peso: 25,
        genero: 'Femea',
        cor: 'Branca',
        vacinado: true
    }
]
const listarPets = () => {
    for (i = 0; i < pets.length; i++) {
        console.log('Nome: ' + pets[i].nome)
    }
}
//listarPets();

// Toda vez que utilizar chaves no arrow function
// e necessario usar o return
// sempre usar chaves quando precisa tratar mais de uma coisa.
// USAR SHIFT ALT F PARA AUTO IDENTAR O CODIGO.
const validaDados = (objetoPet) => {
    if (typeof objetoPet == "object") {
        return (
            objetoPet.nome && typeof objetoPet.nome == "string" &&
            objetoPet.nomeDono && typeof objetoPet.nome == "string" &&
            objetoPet.idade && typeof objetoPet.nome == "number" &&
            objetoPet.tipo && typeof objetoPet.nome == "string" &&
            objetoPet.raca && typeof objetoPet.nome == "string" &&
            objetoPet.peso && typeof objetoPet.nome == "number" &&
            objetoPet.genero && typeof objetoPet.nome == "string" &&
            objetoPet.cor && typeof objetoPet.nome == "string" &&
            objetoPet.vacinado && typeof objetoPet.nome == "boolean" 
        )
    }
}
// TYPE OF é usado para verificar se parametro é um objeto
// numero, string, boolean etc.

const cadastrarPet = (arrayPets, objetoPet) => {
        if (validaDados(objetoPet)) {
            arrayPets.push(objetoPet)
        } else {
            console.log('O objeto não tem todas as propriedades necessárias informadas')
        }
}


//cadastrarPet(pets, 1)
let novoPet = {
    nome: '25',
    nomeDono: 'sergio',
    idade: 26,
    tipo: 'anta',
    raca: 'rato',
    peso: 25,
    genero: 'Femea',
    cor: 'Branca',
    vacinado: true
}

// Assim que criar a funcao, ela deve ser chamada. 
//da forma que está abaixo, com os parametros para executar entao o que configuramos

// cadastrarPet(pets, novoPet)

//listarPets()

cadastrarPet(pets, novoPet)

listarPets()


