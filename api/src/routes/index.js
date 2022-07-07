const { Router } = require('express');
const getTypes = require('./getTypes');
const getPokemons = require('./getPokemons');
const getPokemonsById = require('./getPokemonsById');
const getPokemonsByName = require('./getPokemonsByName');
const postPokemon = require('./postPokemon');
const data = require('../controllers/pokemonController');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/allPokemons', getPokemons);
router.use('/id/', getPokemonsById);
router.use('/name/', getPokemonsByName);
router.use('/types', getTypes);
router.use('/post', postPokemon);

module.exports = router;

