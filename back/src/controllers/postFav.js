const Favorite = require('../DB_connection')




async function postFav(req, res){
    const { name, origin, status, image, species, gender } = req.body
    try {
        
        if(!name || !origin || !status || !image || !species || !gender){
            console.log('linea 11 postfav')
            res.status(401).send('Faltan datos')

        }else{
            const [fav, created ] = await Favorite.findOrcreate({
            name, origin: origin.name, status, image, species, gender
            })

        
        if(fav){
            
            return res.status(200).send(fav)

        } res.status(500).send('No trae personajes liena 20 postFAvs')

        }
        

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    postFav
}