const { Router } = require('express');
const { getPokemonOfApiAndDb } = require('../controllers/pokemonController')

const router = Router();

router.get('/',async(req,res)=>{
    try {
        let x = await getPokemonOfApiAndDb();
        console.log(x);
        return res.send(x);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

module.exports = router;