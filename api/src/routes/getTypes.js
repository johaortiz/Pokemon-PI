const { Router } = require('express');
const { getTypes } = require('../controllers/typeController');

const router = Router();

router.get('/', async(req,res)=>{
    try {
        return getTypes().then(data=>res.status(200).send(data))
    } catch (error) {
        return res.status(400).send('No se encontraron tipos');
    }
})

module.exports = router;
