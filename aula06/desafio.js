//-------------Desafio

//Instruções: Baixe o arquivo da que o professor irá te passar. 

/*
Desafio1 : Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomePets" que exiba no terminal o NOME de todos os pets. 
(utilizar o foreach)

Desafio2: Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomeDonoPets" que exiba no terminal o NOMEDONO de todos os pets.  (Usar for of)

Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá receber um parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)

Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". Essa função deve retornar um array onde será adicionado a data de hoje em todos os objetos. O nome da nova propreie e dade deve ser "DataCadastro". (Usar Object Date e MAP)

Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá receber como parâmetro um objeto. Essa função deve exibir os dados de um pet. (usar Desestruturação de objetos)

Desafio6: Utilizando o Array e a função do desafio 5 , criar uma função "LitarPets" que irá receber como parâmetro o array de pets e um callback. Essa função deve exibir os dados de todos os pets cadastrados.  (aplicar a função ListaDadosPet utilizada como callback)


*/
let pets = [
    {
      nome: 'Yoshi',
      nomeDono: 'Victor',
      idade: 7,
      tipo: 'Cachorro',
      raca: 'Akita Inu',
      peso: 40,
      genero: 'Macho',
      cor: 'ruivo',
      vacinado: true
    },
    {
      nome: 'Pituco',
      nomeDono: 'Victor',
      idade: 2,
      tipo: 'ave',
      raca: 'Calopsita',
      peso: 0.5,
      genero: 'Macho',
      cor: 'cinza',
      vacinado: true
    },
    {
      nome: 'Pitty',
      nomeDono: 'Rose',
      idade: 2,
      tipo: 'ave',
      raca: 'Agapornis',
      peso: 0.5,
      genero: 'Fêmea',
      cor: 'verde',
      vacinado: true
    },
    {
        nome: 'Bixano',
        nomeDono: 'Rose',
        idade: 10,
        tipo: 'Cachorro',
        raca: 'PastorAlemão',
        peso: 0.5,
        genero: 'Fêmea',
        cor: 'Amarelo',
        vacinado: true
      },
  ]
  //const ListarNomePets = () => {
   //pets.forEach(function(elem){
     // console.log(elem.nome);
   // })
  //}
    
   //ListarNomePets()

//const ListarNomeDonoPets = () => {
  //for( var listar of pets){
    //console.log(listar.nomeDono)
 //}
//}
//ListarNomeDonoPets()


//function ListarTipo(param){

//  var mostrar = pets.filter(function(elem){
//  return elem.tipo == param })
  
//    console.log(mostrar) 
//}

//ListarTipo('ave')

// function dataDeCadastro(){

//   var guardar = pets.map(function(elem){

//     var  dataCadastro = new Date()
//     elem["DataCadastro"] = dataCadastro
//     return elem
//   })
// console.log(guardar)
// }

// DataDeCadastro()

//Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá 
//receber como parâmetro um objeto. Essa função deve exibir os dados de um pet. (usar Desestruturação de objetos)
const listarDadosPet = (objPet) => {
  const {nome,nomeDono, idade,tipo, raca, peso, genero, cor} = objPet;
  return console.log(
    // Template string o nome da funcao onde a gente utiliza o ${nomeElemento} na qual quero apresentar na string.

`Nome: ${nome}
NomeDono: ${nomeDono}
Idade: ${idade}
Tipo: ${tipo}
Raça: ${raca}
Peso: ${peso}
Genero: ${genero}
Cor: ${cor}
`)
}
 listarDadosPet({
  nome: 'Bixano',
  nomeDono: 'Rose',
  idade: 10,
  tipo: 'Cachorro',
  raca: 'PastorAlemão',
  peso: 0.5,
  genero: 'Fêmea',
  cor: 'Amarelo',
  vacinado: true
})

//Desafio6: Utilizando o Array e a função do desafio 5 , criar uma função "ListarPets" que irá receber como parâmetro o array de pets e um callback. 
//Essa função deve exibir os dados de todos os pets cadastrados.  (aplicar a função ListaDadosPet utilizada como callback)

 function ListarDadosDoPet(Pets,callback){

 return callback(Pets)
 }

 console.log(ListarDadosDoPet(pets,listarDadosPet))

 array.forEach(element => {
   
 });