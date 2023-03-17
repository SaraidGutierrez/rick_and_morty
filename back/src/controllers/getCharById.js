const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios")



async function getCharByID (req, res){
    const { id } = req.params

    try {
       const response = await axios.get(URL + id)
    const personaje = {
        id : response.data.id,
        name : response.data.name,
        species: response.data.species,
        image : response.data.image,
        gender : response.data.gender
        };
    res.status(200).json(personaje);  
    } catch (error) {
        res.status(500).json(error.message)
    }
   

}



module.exports = {
    getCharByID,
}


