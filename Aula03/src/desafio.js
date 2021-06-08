//Desafio: Obter a quantidade de dias que tem dentre as datas
// '15/05/2020 - 15/05/2021' utilizando moment e date fns

 const moment = require('moment')
const { differenceInDays } = require('date-fns')
let differenceInMonths = require('date-fns/differenceInMonths')
 // passo 1 - criar variavel para data inicial e colocar o ano
 
let dataInicial = moment('2020-05-15')
let dataFinal = moment('2021-05-15')
// passo 3 - criar uma variavel que irá receber
// ja retornada da comparação entre as duas datas , lembre-se de usar 
// o metodo diff do moment
let result = dataFinal.diff(dataInicial, 'days')
let mesesDeDiferenca = dataFinal.diff(dataInicial, 'months')

console.log('A diferença de dias entre 15/05/2020 e 15/05/2021  é ' + result)


console.log('A diferença de dias entre 15/05/2020 e 15/05/2021  é ' + mesesDeDiferenca)

let dataInicialFNS = new Date(2020, 05, 15)

let dataFinalFNS = new Date(2021, 05, 15)

let diasDeDiferencaFNS = differenceInDays(dataFinalFNS, dataInicialFNS)

console.log('A diferença de dias entre 15/05/2020 e 15/05/2021  é ' + diasDeDiferencaFNS)

// metodo para encontrar a diferença de meses usando date -fns

let DiferencaDeMeses = differenceInMonths(dataFinalFNS, dataInicialFNS)



console.log('A diferença de dias entre 15/05/2020 e 15/05/2021  é ' + DiferencaDeMeses)
