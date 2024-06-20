import './App.css'
import { useEffect, useState } from "react"
import Tarjeta from './Tarjeta';
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";



const App = () => {
  
  let [pokemonId, setPokemonId] = useState(1);
  let [pokemonName, setPokemonName] = useState("");
  let [imagen, setImagen] = useState("");
  let [tipo, setTipo] = useState("");
  let [tipo2, setTipo2] = useState("");
  const count = 1025;

  function aumentarId(){
    setPokemonId(pokemonId+1);
    if(pokemonId==1025){
        setPokemonId(1);
    }
  }

  function disminuirId(){
    setPokemonId(pokemonId-1);
    if(pokemonId==1){
        setPokemonId(count);
    }
  }

  useEffect(()=>{
    //fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    //.then(result=>result.json())
    //.then(data=>setPokemonName(data.name));
    buscarPokemon(pokemonId);
  }, [pokemonId]);

  let buscarPokemon = async (pokemonId) =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    const data = await response.json();
    setPokemonName(data.name);
    setImagen(data.sprites.front_default);


    for(let i=0; i<data.types.length; i++){
      if(data.types.length==1){
        setTipo("No Type");
        if(data.types[i].slot==1){
          setTipo2(data.types[i].type.name);
        }
      }else{
        if(data.types[i].slot==1){
          setTipo2(data.types[i].type.name);
        }
  
        if(data.types[i].slot==2){
          setTipo(data.types[i].type.name);
        }
      }
    }
    
  }

  return (
    <div className='tarjeta'>
      <BsArrowLeftSquareFill onClick={disminuirId} className='icono'/>
      <Tarjeta 
        id={pokemonId}
        imagen={imagen}
        nombre={pokemonName}
        tipo={tipo}
        tipo2={tipo2}
        />
        <BsArrowRightSquareFill onClick={aumentarId} className='icono'/>
    </div>
  )
}

export default App