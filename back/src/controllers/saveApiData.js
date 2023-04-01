// const axios = require("axios")
// const URL = "https://rickandmortyapi.com/api/character/"
// const { Character } = require('../DB_connection')

// async function getApiData (req, res) {
//     let array100 = []
//     for (let i=1; i < 101; i++){
//         array100.push(i)
//     }
    
//     try {
//          const { data } = await axios.get(URL + array100)
//          return data.map((personaje)=>{
//             let { name, status, species, gender, origin, image } = personaje
            
//             return { name, status, species, gender, origin: origin.name, image }
//          })
         
        

//         const personaje = {
        
//         name : data.name,
//         status: data.status,
//         species: data.species,
//         gender : data.gender,
//         origin : data.origin.name,
//         image : data.image,
//         };
       
//         return res.status(200).json(array100)
            
    
//     } catch (error) {
//         res.status(500).send(error.message)
//     }


// };

// const saveApiData = async () => {
//     try {
//         const array100 = await getApiData();
//         console.log(array100)
//         console.log('termine')
     
//         await Character.bulkCreate(array100);
        
//     } catch (error) {
//         console.log({error: error.message})
//         return {error: error.message}
//     }
// }

// module.exports = {
//     saveApiData
// }