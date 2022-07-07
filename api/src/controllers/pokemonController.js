const axios = require('axios');
const { Pokemon, Type } = require('../db');


async function getPokemonsApi(){
    try {
        let pokemonFirstReq = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40');
        let pokemonSecondReq = pokemonFirstReq.data.results.map((pokemon)=> axios.get(pokemon.url));
        let allPokemons = await axios.all(pokemonSecondReq);
        let dataPokemons = allPokemons.map((pokemon)=> pokemon.data);
        let pokemonesFinales = dataPokemons.map((pokemon)=>pokemonOfApi(pokemon));
        return(pokemonesFinales);

    } catch (error) {
        return error;
    };
    
};


async function getPokemonsDb(){
    try {
       let resolve = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name']
            }
        })


        return resolve;
    } catch (error) {
        console.log(error);
        return error;
    };
};


async function getPokemonOfApiAndDb(){
    try {
        let api = await getPokemonsApi();
        let db = await getPokemonsDb();
        if(db.length > 0){
            db.forEach((e)=> {
                let array = [];
                e.dataValues.types.map((e)=>{
                    array.push(e.name)
                })
                e.dataValues.types = array;
            });
        };
        let arrayDb = [];
        db.map(e=>arrayDb.push(e.dataValues))
        return [...arrayDb, ...api];
    } catch (error) {
        console.log(error);
        return error;
    };
};


async function getPokemonById(id){
    try {
        console.log(id.length)
        if(id.length > 6){
            let searchPokemonInDb = await Pokemon.findAll({where: {id}, include: Type});
            let array = [];
            searchPokemonInDb[0].types.map(e=> array.push(e.name));
            let pokemonOfDb = {
                id: searchPokemonInDb[0].id,
                name: searchPokemonInDb[0].name,
                hp: searchPokemonInDb[0].hp,
                attack: searchPokemonInDb[0].attack,
                defense: searchPokemonInDb[0].defense,
                speed: searchPokemonInDb[0].speed,
                height: searchPokemonInDb[0].height,
                weight: searchPokemonInDb[0].weight,
                sprite: searchPokemonInDb[0].sprite,
                types: array 
            }

            return pokemonOfDb;
        } else{
            let searchPokemonInApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            let pokemonEncontrado = pokemonOfApi(searchPokemonInApi.data);
            return pokemonEncontrado;
        }
    } catch (error) {
        return "Nothing";
    }
};

async function getPokemonByName(name){
    try {
        let searchPokemonInDb = await Pokemon.findOne({where: {name}, include: {model: Type}});
        if(searchPokemonInDb){
            let pokemonOfDb = {
                id: searchPokemonInDb.id,
                name: searchPokemonInDb.name,
                hp: searchPokemonInDb.hp,
                attack: searchPokemonInDb.stats[1].base_stat,
                defense: searchPokemonInDb.stats[2].base_stat,
                speed: searchPokemonInDb.stats[5].base_stat,
                height: searchPokemonInDb.height,
                weight: searchPokemonInDb.weight,
                sprite: searchPokemonInDb.sprites.other.dream_world.front_default,
                types: searchPokemonInDb.types.map(pokemon=>pokemon.type.name)
            }
            return pokemonOfDb;
        } else{
            let searchPokemonInApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            let pokemonEncontrado = pokemonOfApi(searchPokemonInApi.data);
            return pokemonEncontrado;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};


async function postPokemons(pokemon){
    try {
        
        const { name, hp, attack, defense, speed, height, weight, sprite, types } = pokemon;
        let myPokemon = await Pokemon.findOrCreate({
            where:{
            name: name, 
            hp: hp, 
            attack: attack, 
            defense: defense, 
            speed: speed, 
            height: height, 
            weight: weight, 
            sprite: sprite, 
        }
        });
        const typesDb = await Type.findAll({
            where: {name:types}
        })
        myPokemon[0].addType(typesDb)
        return myPokemon[0];
    } catch (error) {
        console.log(error)
        return error;
    }
}


const pokemonOfApi = (pokemon)=>{
    const filterPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        sprite: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types.map(poke=>poke.type.name)
    };
    return filterPokemon;
};




module.exports = {
    getPokemonsApi,
    getPokemonsDb,
    getPokemonOfApiAndDb,
    getPokemonById,
    getPokemonByName,
    postPokemons
}