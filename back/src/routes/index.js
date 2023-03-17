
const {Router} = require('express')
const {getCharByID} = require('../controllers/getCharById')
const {getCharDetail} = require('../controllers/getCharDetail')


const router = Router()
let favs = require('../utils/favs')

router.get("/onsearch/:id", getCharByID)
router.get("/detail/:detailID", getCharDetail)

router.post('/create', (req,res)=>{
    favs.push({...req.body})
    console.log(favs, 'favs line 15')
    res.status(200).json(favs)
} )


router.get('/get',(req,res)=>{
    return res.json(favs)
} )


router.delete('/delete/:id',(req,res)=>{
    const { id } = req.params
    favs = favs.filter(item => item.id !== Number(id))
    return res.status(200).json(favs)
} )

module.exports = router