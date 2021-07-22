const petsjson = require ('../database/pets.json');

const tipoPetController = {

    show : (req,res) => {
    

        return res.json(petsjson.pets)
    },

    show:(req,res) => {
        const {tipo} = req.params
        let resultado = petsjson.pets.filter(function(element){
            return element.tipo == tipo

        })
        return res.send(resultado)
    }
}

module.exports = tipoPetController