const { Router } = require('express');
const { getPokemonById } = require('../controllers/pokemonController');

let router = Router();

router.get('/:id', (req,res)=>{
    const { id } = req.params;
    try {
        return getPokemonById(id).then(data=>res.send(data));
    } catch (error) {
        return res.status(404).send("No se encontró el pokemón con dicho ID");
    }
})

module.exports = router;