const { Router } = require('express');
const { getPokemonByName } = require('../controllers/pokemonController');

let router = Router();

router.get('/:name', (req,res)=>{
    const { name } = req.params;
    try {
        return getPokemonByName(name).then(data=>res.send(data));
    } catch (error) {
        return res.status(404).send("No se encontró el pokemón con dicho ID");
    }
})

module.exports = router;