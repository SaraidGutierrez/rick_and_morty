const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

async function getCharDetail (req, res){
    const {detailID} = req.params
    try {
         const { data } = await axios.get(URL + detailID)

        const personaje = {
        name : data.name,
        species: data.species,
        image : data.image,
        gener : data.gender,
        origin : data.origin,
        status : data.status
        };
        return res.status(200).json(personaje);
    
    } catch (error) {
        res.status(500).send(error.message)
    }
   


};



module.exports = {
    getCharDetail,
}