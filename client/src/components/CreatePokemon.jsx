import React from 'react'
import CreatePokemonTypes from './CreatePokemonTypes'

export default function CreatePokemon() {
  
    const [pokemon, setPokemon] = React.useState('');
    const [selectedTypes, setSelectedTypes] = React.useState('');



    let fullStringTemp = ""
    function addType(type){
        let nameOfType = type.selectedOptions[0].text;
        let idOfEpisode = type.value;
        console.log(idOfEpisode)
    
    //Div para el usuario
    if(selectedTypes.length<1){
        setSelectedTypes([nameOfType], 
        console.log(selectedTypes));
  } else{
      selectedTypes.forEach(data=>{
          if(nameOfType===data){
            alert(`Type:  ${data}  ya ingresado`);
            return null;
          }
          else {
              console.log(nameOfType);
              setSelectedTypes([...selectedTypes, nameOfType], console.log(selectedTypes));
              fullStringTemp = `${selectedTypes}, `
          }
      })
  }

  setPokemon((poke) => ({...poke, type: fullStringTemp}));
  console.log(pokemon)
  return selectedTypes;

}

    function handleChange(e){
        e.preventDefault();
        setPokemon((poke) => ({...poke, [e.target.name]: e.target.value}))
        console.log(pokemon);
    }
  
    return (
    <div>
        <form>
        <label htmlFor=""></label>
        <input type="text" name="name" id="" placeholder='Name' onChange={(e)=>handleChange(e)}/>                 <br />   
        <input type="text" name="hp" id="" placeholder='Health' onChange={(e)=>handleChange(e)}/>                 <br />   
        <input type="text" name="attack" id="" placeholder='Attack' onChange={(e)=>handleChange(e)}/>             <br />
        <input type="text" name="defense" id="" placeholder='Defense' onChange={(e)=>handleChange(e)}/>           <br />
        <input type="text" name="speed" id="" placeholder='Speed' onChange={(e)=>handleChange(e)}/>               <br />
        <input type="text" name="height" id="" placeholder='Height' onChange={(e)=>handleChange(e)}/>             <br />
        <input type="text" name="weight" id="" placeholder='Weight' onChange={(e)=>handleChange(e)}/>             <br />
        <input type="text" name="sprite" id="" placeholder='Image(URL)' onChange={(e)=>handleChange(e)}/>         <br />   
        <CreatePokemonTypes />
        <input type='button' value='Add Type' onClick={()=>{addType(document.getElementById('selectBox'))}} />
        <input type='button' value='Create' />
        <div>
            <h2>Types of you Pokemon</h2>
            {selectedTypes}
        </div>

        </form>
    </div>
  )
}
