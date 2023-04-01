const Favorite = require('../DB_connection')


async function deleteFav (req, res){
     const { id } = req.params
     const {idUser} = req.query
     try {
      
        if(!id){
            res.status(400).send('id no existe')
        }
        const favo = await Favorite.findOne(
            {where: { id: id }}
        )
      await favo.removeUser(idUser)

     

     } catch (error) {
        res.status(500).send(error.message)
     }
}




module.exports = {
    deleteFav
}