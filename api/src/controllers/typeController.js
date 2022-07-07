const axios = require('axios');
const { Type } = require('../db');

async function getTypes(){
    try {
        let foundDb = await Type.findAll({
            attributes: ['name']
        });
        if(foundDb.length < 1){
            let typesApi = await axios.get('https://pokeapi.co/api/v2/type');
            let typesOnDb = typesApi.data.results.map((type)=>Type.create({name:type.name}));
            typesOnDb = await axios.all(typesOnDb);
            let finalTypesPokemons = typesDb(typesOnDb);
            return finalTypesPokemons;
        }
        else {
            let getTypesPokemonsDB = typesDb(foundDb);
            return getTypesPokemonsDB;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};

async function typesDb(array){
    let types = array.map((type)=> type.name);
    return types;
}

module.exports = {
    getTypes,
}