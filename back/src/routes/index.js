
const {Router} = require('express')
const {getCharByID} = require('../controllers/getCharById')
const {getCharDetail} = require('../controllers/getCharDetail')
const {login} = require('../controllers/login')
const {postFav} = require('../controllers/postFav')
const {postUser} = require('../controllers/postUser')
const {deleteFav} = require('../controllers/deleteFav')
const {getFavs} = require('../controllers/getFavs')





const router = Router()


router.get("/onsearch/:id", getCharByID)
router.get("/detail/:detailID", getCharDetail)


router.get("/fav", getFavs);
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

router.post('/login',postUser )
router.get('/login',login )


module.exports = router;