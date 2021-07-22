const petsjson = require ('../database/pets.json');
const petsController = {

    index:(req,res) => {
    

        return res.json(petsjson.pets)
    },
    show:(req,res) => {
        const {id} = req.params
        let resultado = petsjson.pets.filter(function(element){
            return element.id == id

        })
        return res.send(resultado)
    }
}

module.exports = petsController