const { Router } = require('express');
const { postPokemons } = require('../controllers/pokemonController');

const router = Router();

router.post('/', async (req,res)=>{
    try {
        const data = req.body;
        let postPokemon = await postPokemons(data);
        return res.send(postPokemon.dataValues.id); 
    } catch (error) {
        return res.status(404).send(error);
    };
});

module.exports = router;