const User = require('../DB_connection')


async function login (req, res) {
     const {email, password} = req.query
     if(!email || !password){
        res.status(400).send('Faltan datos')
     }

     try {
         const encontrar = await User.findOne({
            where: {email: email}
         })

         if(encontrar){
            if(encontrar.password === password){
                res.status(200).json({access: true})
            }res.status(403).send('Contraseña incorrecta')
         } res.status(404).send('Usuario no encontrado')

        
     } catch (error) {
        res.status(500).send(error.message)
     }

}



module.exports = {
    login,
}