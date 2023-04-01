const User = require('../DB_connection')


async function postUser (req, res){
     const {email, password } = req.body
     try {
        if(!email || !password){
            res.status(400).send('Faltan datos')
        }
        const [user, created] = await User.findOrCreate({
            email, password
        })
        res.status(400).json(user)
     } catch (error) {
        res.status(500).send(error.message)
     }
}


module.exports={
    postUser,
}